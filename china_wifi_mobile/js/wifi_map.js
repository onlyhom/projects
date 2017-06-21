$(window).load(function(){
    
    var cluster, markers = [];
    var map = new AMap.Map("map", {
        resizeEnable: true
    });

    var clusterStyle = [
        {
            url: "images/icon_level1.png",
            size: new AMap.Size(52, 52),
            offset: new AMap.Pixel(-26, -26),
            textColor: '#ffffff'
        }, 
        {
            url: "images/icon_level2.png",
            size: new AMap.Size(56, 56),
            offset: new AMap.Pixel(-28, -28),
            textColor: '#ffffff'
        }, 
        {
            url: "images/icon_level3.png",
            size: new AMap.Size(66, 66),
            offset: new AMap.Pixel(-33, -33),
            textColor: '#ffffff'
        }
    ];


    // 随机向地图添加500个标注点
    var mapBounds = map.getBounds();
    var sw = mapBounds.getSouthWest();
    var ne = mapBounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 100; i++) {
        var markerPosition = [sw.lng + lngSpan * (Math.random() * 2), ne.lat - latSpan * (Math.random() * 2)];
        //console.log(markerPosition);
        //console.log(Math.random() * 2);
        var marker = new AMap.Marker({
            position: markerPosition,
            icon: "images/icon_wifi.png",
            offset: {x: -16,y: -32}
        });
        marker.wifi = {
            name : "武林广场"+i,
            score : 3,
            operator: '中国移动',
            address: '杭州市朝阳区阜通东大街6号院3号楼东北8.3公里',
            link: 'wifi_detail.html'
        };
        marker.on('click', markerClick); //绑定事件
        markers.push(marker);
        renderCluster(markers);
    }


    function renderMarkers(data){
        markers = [];
        for (var i = 0; i < data.length; i++) {
            var marker = new AMap.Marker({
                position: data[i].position,
                icon: "images/icon_wifi.png",
                offset: {x: -16,y: -32}
            });
            marker.wifi = {
                name : data[i].name,
                score : data[i].score,
                operator: data[i].operator,
                address: data[i].address,
                link: data[i].link
            };
            marker.on('click', markerClick); //绑定事件
            markers.push(marker);
        }
        renderCluster(markers);
    }
    function renderCluster(markerArr){  // 渲染点聚合组件
        if (cluster) { //如果已经有 则清除
            cluster.setMap(null);
        }
        map.plugin(["AMap.MarkerClusterer"], function() {
            cluster = new AMap.MarkerClusterer(map, markerArr, {
                styles: clusterStyle,
                averageCenter: true,
                minClusterSize:20
            });
        });
    }



    //*******************WiFi详情窗体&点击marker ***********************

    var infoDom = document.getElementById('pop-window');

    //修改窗体信息  
    function updateInfoWindow(wifi){  
        infoDom.getElementsByClassName('wifi-name')[0].innerHTML= wifi.name;
        infoDom.getElementsByClassName('wifi-link')[0].href= wifi.link;
        var tempHTML = '';
        for(var i=0; i<parseInt(wifi.score); i++){
            tempHTML +='<div class="icon-love"></div> ';
        }
        infoDom.getElementsByClassName('wifi-score')[0].innerHTML= tempHTML;
        infoDom.getElementsByClassName('wifi-operator')[0].innerHTML= wifi.operator;
        infoDom.getElementsByClassName('wifi-addr')[0].innerHTML= wifi.address;
    }

    function markerClick(e){
        updateInfoWindow(e.target.wifi);
        $('#pop-window').addClass('pop-show');
        $('#icon-feedback').addClass('btn-show');//2017-05-24 新增上报按钮
    }

    //******************* 工具条&搜索补全&地区搜索&城市搜索组件引入 ***********************

    AMap.plugin(['AMap.ToolBar','AMap.Autocomplete','AMap.DistrictSearch','AMap.CitySearch'],function(){
        
        //缩放工具条
        var toolBar = new AMap.ToolBar({
            liteStyle:true,
            position: 'LT',
            locate:true
        });
        map.addControl(toolBar);
        if(location.href.indexOf('&guide=1')!==-1){
            map.setStatus({scrollWheel:false})
        }

        //自动补全
        var autocomplete = new AMap.Autocomplete({
            city: "北京", //城市，默认全国
            input: "tip_input"//input标签的id
        });
        //行政区搜索
        var districtSearch = new AMap.DistrictSearch({
            level : 'country',  
            subdistrict : 1,
            extensions: 'all'
        });

        var polygon;
        var poi_marker;
        function locatedCity() {  //首次打开 定位到所在城市
            var citysearch = new AMap.CitySearch(); //城市查询组件
            citysearch.getLocalCity(function(status, result) { //自动获取用户IP，返回当前城市
                if (status === 'complete' && result.info === 'OK') {
                    if (result.city) {
                        $('.title-bar i').text(result.city);

                        //================ 获取所在城市的WIFI数据 生成点聚合组件 =====================
                        $.ajax({ 
                            type:"GET", 
                            url:"testData/test_data.js", 
                            dataType:"json",
                            data:{'cityName':result.city},
                            timeout:15000, 
                            success:function(data){ 
                                renderMarkers(data);
                            },
                            error:function(XMLHttpRequest,textStatus,errorThrown){ 
                                //console.log('加载失败');
                            } 
                        });

                    }
                }else {
                    $('.title-bar').html('<span>获取定位城市失败</span>');
                }
            });
        }
        locatedCity();

        function showDistrictWiFi(name){ // 获取数据 生成新的点聚合组件
            $.ajax({ 
                type:"GET", 
                url:"testData/test_data.js", 
                dataType:"json",
                data:{'cityName':name}, 
                timeout:15000, 
                success:function(data){ 
                    renderMarkers(data);
                },
                error:function(XMLHttpRequest,textStatus,errorThrown){ 
                    //console.log('加载失败');
                } 
            });
        }

        function searchDistrict(name){ //搜索行政区
            $('#pop-window').removeClass('pop-show');//操作之前 确保先把弹窗关闭
            $('#icon-feedback').removeClass('btn-show');//2017-05-24 新增上报按钮


            districtSearch.search(name,function(status, result){
                if(status=='complete'){
                    //================ 清除 =====================
                    map.clearMap(); //清除地图上覆盖物
                    cluster.setMap(null); //清除原先的点聚合组件

                    // 获取新数据 显示新的点聚合组件
                    showDistrictWiFi(name); // name代表的是搜索返回的行政区名(省/市)

                    //================ 显示轮廓 =====================
                    polygon = new AMap.Polygon({  //行政区边界渲染，使用多边形覆盖物实现
                        map: map,
                        strokeWeight: 1,
                        path: result.districtList[0].boundaries,
                        fillOpacity: 0.2,
                        fillColor: '#78c0fe',
                        strokeColor: '#0e6cf9'
                    });
                    map.setFitView();

                }else{
                    layer.msg('暂无该地区的边界数据');
                }
            });
        }

        AMap.event.addListener(autocomplete, "select", function(e){ //搜素自动补全组件
            if (e.poi.location){ //搜索结果是详细地址 返回有精确的坐标
                $('#pop-window').removeClass('pop-show');//操作之前 确保先把弹窗关闭
                $('#icon-feedback').removeClass('btn-show');//2017-05-24 新增上报按钮
                map.clearMap(); //清除地图上覆盖物

                // 获取新数据 显示新的点聚合组件
                showDistrictWiFi(e.poi.name); // e.poi.name代表的是搜索返回的详细地址 如杭州市第一人名医院

                var poi_arry = [];
                poi_arry.push(e.poi.location.lng);
                poi_arry.push(e.poi.location.lat);
                map.setCenter(poi_arry);
                map.setZoom(15);
                if(poi_marker){
                    poi_marker.setMap(null);
                }
                poi_marker = new AMap.Marker({ //详细地址需要加个marker 标明搜索的位置
                        icon : 'images/icon_poi.png',//20px*34px
                        position : poi_arry,
                        offset : new AMap.Pixel(-10,-17),
                        map : map,
                        animation: 'AMAP_ANIMATION_DROP'
                });


            }else{ //省市级-接口不返回坐标位置 需要依赖districtSearch行政区搜索接口
                searchDistrict(e.poi.name);
            }
        });


        //******************* 移动端城市选择器 ***********************
        AMapUI.setDomLibrary(Zepto); //设置DomLibrary
        AMapUI.loadUI(['misc/MobiCityPicker'], function(MobiCityPicker) {
            var cityPicker = new MobiCityPicker({
                theme:'green'
                //topGroups: ..., // 顶部城市列表
            });
            //监听城市选中事件
            cityPicker.on('citySelected', function(cityInfo) { //返回选中的城市信息
                cityPicker.hide(); //隐藏城市列表
                if(cityInfo.name == '全国'){
                    searchDistrict('中国');
                }else{
                    searchDistrict(cityInfo.name);
                }
            });

            $('#city-picker-trigger').on('click', function(){
                cityPicker.show();
            });
        });

    });


});



