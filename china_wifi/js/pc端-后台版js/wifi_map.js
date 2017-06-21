$(window).load(function(){
    
    var cluster, markers = [];
    var map = new AMap.Map("map", {
        resizeEnable: true
    });

    var clusterStyle = [
        {
            url: "http://www.wf.com/Public/Home/images/icon_level1.png",
            size: new AMap.Size(52, 52),
            offset: new AMap.Pixel(-26, -26),
            textColor: '#ffffff'
        }, 
        {
            url: "http://www.wf.com/Public/Home/images/icon_level2.png",
            size: new AMap.Size(56, 56),
            offset: new AMap.Pixel(-28, -28),
            textColor: '#ffffff'
        }, 
        {
            url: "http://www.wf.com/Public/Home/images/icon_level3.png",
            size: new AMap.Size(66, 66),
            offset: new AMap.Pixel(-33, -33),
            textColor: '#ffffff'
        }
    ];


    function renderMarkers(data){
        markers = [];
        for (var i = 0; i < data.length; i++) {
            var marker = new AMap.Marker({
                position: data[i].position,
                icon: "http://www.wf.com/Public/Home/images/icon_wifi.png",
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
                averageCenter: true
            });
        });
    }


    //******************* WIFI详情窗体&点击marker ***********************

    //关闭信息窗体  
    function closeInfoWindow(){  
        map.clearInfoWindow();  
    } 

    //构建自定义信息窗体   
    function createInfoWindow(){  
        var info = document.createElement("div");  
        info.className = "info";  
        info.innerHTML = 
            '<div class="info-top">'+
                '<div class="title">'+
                    '<i class="wifi-name"></i>'+
                    '<a class="link" href="" target="_blank">查看详情> </a>'+
                '</div>'+
                '<img class="close-window" src="http://www.wf.com/Public/Home/images/close2.gif">'+
            '</div>'+
            '<div class="info-middle">'+
                '<table>'+
                    '<tr>'+
                        '<th>评价等级：</th>'+
                        '<td class="score">'+
                            '<div class="icon-love"></div>'+
                        '</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<th>运&nbsp;营&nbsp;商&nbsp;：</th>'+
                        '<td class="operator"></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<th>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</th>'+
                        '<td class="address"></td>'+
                    '</tr>'+
                '</table>'+
            '</div>'+
            '<div class="info-bottom">'+
                '<img src="http://www.wf.com/Public/Home/images/sharp.png">'+
            '</div>';

            info.getElementsByClassName('close-window')[0].onclick=closeInfoWindow;
        return info;  
    } 
    var infoDom = createInfoWindow();

    //修改信息窗体   
    function updateInfoWindow(wifi){  
        infoDom.getElementsByClassName('wifi-name')[0].innerHTML= wifi.name;
        infoDom.getElementsByClassName('link')[0].href= wifi.link;
        var tempHTML = '';
        for(var i=0; i<parseInt(wifi.score); i++){
            tempHTML +='<div class="icon-love"></div>';
        }
        infoDom.getElementsByClassName('score')[0].innerHTML= tempHTML;
        infoDom.getElementsByClassName('operator')[0].innerHTML= wifi.operator;
        infoDom.getElementsByClassName('address')[0].innerHTML= wifi.address;
        return infoDom;  
    } 

    //实例化信息窗体  
    var infoWindow = new AMap.InfoWindow({  
        isCustom:true,  //使用自定义窗体  
        content:infoDom,  
        size:new AMap.Size(300, 0),  
        offset:new AMap.Pixel(0, -50)//-113, -140  
    }); 

    function markerClick(e){
        infoWindow.setContent(updateInfoWindow(e.target.wifi));
        infoWindow.open(map, e.target.getPosition());
    }

    //******************* 信息窗体 END***********************

    //搜索功能
    AMap.plugin(['AMap.ToolBar','AMap.Autocomplete','AMap.DistrictSearch','AMap.CitySearch'],function(){
        //缩放工具条
        map.addControl(new AMap.ToolBar({
            liteStyle:true,
            position: 'LT'
        }));
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
                    }
					$.ajax({ //获取所在城市的WIFI数据 生成点聚合组件
						type:"POST",
						url:"http://www.wf.com/Index/getCityWifi",
						data:{"city":result.city},
						dataType:"JSON",
						success:function(data){
							switch(data.statue){
								case "success":
									renderMarkers(data.msg);
									break;
								default:
									layer.msg(data.msg);
									break;	
							}
						},
						error:function(){
							layer.msg("发生未知错误");	
						}
					});
                }else {
                    $('.title-bar').html('<span>获取定位城市失败</span>');
                    //console.log(result.info);
                }
            });
        }
        locatedCity();

        function showDistrictWiFi(name){ // 获取数据 生成新的点聚合组件
            $.ajax({ 
                type:"POST", 
                url:"http://www.wf.com/Index/searchGetWifi",
                dataType:"json",
                data:{'cityName':name}, 
                timeout:15000, 
                success:function(data){ 
                    switch(data.statue){
                        case "success":
                            renderMarkers(data.msg);
                            break;
                        case "fail":
                            swal({
                                type: "warning",
                                title: "您搜索的地区暂无WIFI",
                                text: "fifa",
                                confirmButtonText: "关闭",
                                confirmButtonColor: "#ddd"
                            });
                            break;
                        default:
                            swal({
                                type: "warning",
                                title: "非法操作",
                                text: "fifa",
                                confirmButtonText: "关闭",
                                confirmButtonColor: "#ddd"
                            });
                            break;  
                    }
                },
                error:function(XMLHttpRequest,textStatus,errorThrown){ 
                    //console.log('加载失败');
                    swal({
                        type: "warning",
                        title: "服务器响应失败",
                        text: "fifa",
                        confirmButtonText: "关闭",
                        confirmButtonColor: "#ddd"
                    });
                } 
            }); 
        }

        function searchDistrict(name){
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
                    swal({
                        type: "warning",
                        title: "暂无该地区的边界数据",
                        text: "可在左侧搜索框输入该地区的详细地址 查看周边wifi",
                        confirmButtonText: "关闭",
                        confirmButtonColor: "#ddd"
                    });
                }
            });
        }

        AMap.event.addListener(autocomplete, "select", function(e){ //搜素自动补全组件
            if (e.poi.location){ //搜索结果是详细地址 返回有精确的坐标
                map.clearMap(); //清除地图上覆盖物

                // 获取新数据 显示新的点聚合组件
                showDistrictWiFi(e.poi.name); // e.poi.name代表的是搜索返回的详细地址 如杭州市第一人名医院

                var poi_arry = [];
                poi_arry.push(e.poi.location.lng);
                poi_arry.push(e.poi.location.lat);
                map.setCenter(poi_arry);
                map.setZoom(10);
                if(poi_marker){
                    poi_marker.setMap(null);
                }
                poi_marker = new AMap.Marker({ //详细地址需要加个marker 标明搜索的位置
                        icon : 'http://www.wf.com/Public/Home/images/icon_poi.png',//20px*34px
                        position : poi_arry,
                        offset : new AMap.Pixel(-10,-17),
                        map : map,
                        animation: 'AMAP_ANIMATION_DROP'
                });

            }else{ //省市级-接口不返回坐标位置 需要依赖districtSearch行政区搜索接口
                searchDistrict(e.poi.name);
            }
        });

        $('.map-popup i').on('click',function(){ //监听城市列表的点击 搜索地区
            if($(this).text() == '全国'){
                searchDistrict('中国');
            }else if($(this).attr('name')){
                searchDistrict($(this).attr('name'));
            }else{
                searchDistrict($(this).text());
            }
        });

    });

});



