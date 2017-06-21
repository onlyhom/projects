$(window).load(function(){

	// 图表命名目录： 
	// 1 中国公共WIFI布局一览图 china_wifi_layout 
	// 2 前15的城市公共WiFi数量以及其在该省占比 city_wifi_rank 
	// 3 前10的省份的前10的公共场景WiFi占比情况 province_scene_occupy 
	// 4 前15的场景公共WiFi数量在整体公共WiFi数量占比 scene_wifi_occupy 
	// 5 前15的运营商公共WiFi数量以及其在整体公共WiFi数量的占比 operator_wifi_occupy 
	// 6 前10的运营商在前10的场景公共WiFi布局占比情况 operator_scene_occupy 
	// 7 收集到反馈前15的城市 占反馈总数的比例 city_feedback_occupy 

	var mainColor = '#5b9bd5'; 
	var current_day = new Date(); //获取今天的日期
	$('.date').text(current_day.getFullYear()+'年'+(current_day.getMonth()+1)+'月'+current_day.getDate()+'日');

	//格式化数据 处理成绘图需要的数组格式
	function formatData(type, data_source){
		if(type == 'stack'){
			var temp = {
				partNameArr:[],
				scenceArr:[],
				seriesArr:[]
			};
			for(var i=0; i<data_source.length; i++){
				temp.partNameArr.push(data_source[i].partNameArr);
			}
			for(var j=0; j<data_source[0].sence.length; j++){ //循环场景个数
				temp.scenceArr.push(data_source[0].sence[j].name); //存入场景名

				var tempSenceArr = [];
				for(var k=0; k<data_source.length; k++){ //循环省份/运营商个数
					var occupy = parseFloat(data_source[k].sence[j].occupy);
					tempSenceArr.push((occupy*100).toFixed(1));
				}
				temp.seriesArr.push({
		            name: data_source[0].sence[j].name, //存入场景名
		            type: 'bar',
		            stack: '总量',
		            // label: {
		            //     normal: {
		            //         show: true
		            //     }
		            // },
		            data: tempSenceArr
				});
			}
			return temp;

		}else if(type == "barAndLine"){ 
			var temp = {
				nameArr : [],
				valueArr : [],
				occupyArr : []
			};
			for( var i=0; i<data_source.length; i++){
		    	temp.nameArr.push(data_source[i].name);
		    	temp.valueArr.push(data_source[i].value);
		    	temp.occupyArr.push((parseFloat(data_source[i].occupy)*100).toFixed(1));
			}
			return temp;

		}else{
			console.log('没有对应的格式化类型');
		}
	}

	//获取pie中的每一项名字
	function getNameArr(data_source){
		var nameArr = [];
		for( var i=0; i<data_source.length; i++){
		    nameArr.push(data_source[i].name);
		}
		return nameArr;
	}

    function calculateSum(){
    	var sum = 0;
    	for(var i=0; i<data_china_wifi_layout.length; i++){
    		if(data_china_wifi_layout[i].value){
    			sum += parseInt(data_china_wifi_layout[i].value);
    		}
    	}
    	$('.sum').text('当前全国公共WiFi总数：'+sum);
    }
    calculateSum(data_china_wifi_layout); //图1中的计算wifi总数量


	// ================= 1 中国公共WIFI布局一览图 ====================

	var china_wifi_layout = echarts.init(document.getElementById('china_wifi_layout'), 'shine');
	china_wifi_layout.setOption({
	    tooltip: {},
	    visualMap: {
	        min: 0, 
	        max: 1500,  //wifi数量最大值
	        left: 'left', //组件位置
	        top: 'bottom',
	        text: ['最大值','最小值'],
	        seriesIndex: [1],
	        inRange: {
	            color: ['#e0ffff', '#006edd'] //颜色区间
	        },
	        calculable : true,
	        show:false
	    },
	    geo: { 
	        map: 'china',
	        zoom: 1.25,
	        //roam: true, //是否开启鼠标缩放和平移
	        label: {
	            normal: {
	                show: true,
	                textStyle: { //省份文字的颜色
	                    color: 'rgba(0,0,0,0.4)'
	                }
	            }
	        },
	        itemStyle: {
	            normal:{ //边框颜色
	                borderColor: '#ffffff'
	            },
	            emphasis:{ //省份多边形样式
	                areaColor: null,
	                shadowOffsetX: 0,
	                shadowOffsetY: 0,
	                shadowBlur: 20,
	                borderWidth: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.5)'
	            }
	        }
	    },
	    series : [
	       	{
	           type: 'scatter',
	           coordinateSystem: 'geo'
	        },
	        {
	            name: 'WiFi总数',
	            type: 'map',
	            geoIndex: 0,
	            // tooltip: {show: false},
	            data: data_china_wifi_layout
	        }
	    ]
	});

	// ================= 2 公共WiFi排名前15的城市情况 ====================

	var format_city_wifi_rank = formatData('barAndLine', data_city_wifi_rank);
	var city_wifi_rank = echarts.init(document.getElementById('city_wifi_rank'), 'shine');
	city_wifi_rank.setOption({
	    tooltip: {
	        trigger: 'axis',
	        formatter: function(params) { 
				var res = params[0].name+'<br/>'; 
				for(var i=0; i<params.length; i++){
					res += '<i class="color_point" style="background-color:'+params[i].color+';"></i>' + params[i].seriesName +'：' + params[i].value;
					i==1? res+='%' : res+='<br/>';
				}
				return res;  
	        }
	    },
	    legend: {
	        data:['城市WiFi数量','占所在省比例']
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: format_city_wifi_rank.nameArr,
	            axisPointer: {
	                type: 'shadow'
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: 'WiFi数量',
	            min: 0,
	            axisLabel: {
	               
	            }
	        },
	        {
	            type: 'value',
	            name: '占比',
	            axisLabel: {
	                formatter: '{value}%'
	            }
	        }
	    ],
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },
	    series: [
	        {
	            name:'城市WiFi数量',
	            type:'bar',
	            itemStyle:{
	                normal:{
	                    color: '#5b9bd5'
	                }
	            },
	            data:format_city_wifi_rank.valueArr
	        },
	        {
	            name:'占所在省比例',
	            type:'line',
	            yAxisIndex: 1,
	            itemStyle:{
	                normal:{
	                    color: '#ed7d31'
	                }
	            },
	            data:format_city_wifi_rank.occupyArr
	        }
	    ]
	});

	// ================= 3 WiFi数量排名前10的场景以及WiFi数量前10的省份占比 ====================

	var format_province_scene_occupy = formatData('stack', data_province_scene_occupy); //格式化数据
	var province_scene_occupy = echarts.init(document.getElementById('province_scene_occupy'), 'shine');
	province_scene_occupy.setOption({
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {      
	            type : 'shadow'  
	        },
	        formatter: function(params) { 
				var res = params[0].name+'<br/>';
				var index = params[0].dataIndex;
				for(var i=0; i<params.length; i++){
					res += '<i class="color_point" style="background-color:'+params[i].color+';"></i>' + params[i].seriesName +'：' + params[i].value+'%';
					res += ' ('+ data_province_scene_occupy[index].sence[i].value +')';
					i==(params.length-1) ? '' : res+='<br/>';
				}
				return res;  
	        }
	    },
	    legend: {
	        orient: 'horizontal',
	        left: 'left',
			itemHeight: 10,
			itemWidth:20,
			padding:[2,10,2,10],
	        data: format_province_scene_occupy.scenceArr
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    yAxis:  {
	        type: 'value',
	        max: 100,
	        interval: 10,
            axisLabel: {
                formatter: '{value}%'
            }
	    },
	    xAxis: {
	        type: 'category',
	        data: format_province_scene_occupy.partNameArr
	    },
	    series: format_province_scene_occupy.seriesArr
	});

	// ================= 4 前15的场景公共WiFi数量在整体公共WiFi数量占比 ====================

	var scene_wifi_occupy = echarts.init(document.getElementById('scene_wifi_occupy'), 'shine');
	scene_wifi_occupy.setOption({
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'horizontal',
	        left: 'left',
			itemHeight: 10,
			itemWidth:20,
			padding:[2,10,2,10],
	        data: getNameArr(data_scene_wifi_occupy)
	    },
	    series : [
	        {
	            name: 'WiFi数量',
	            type: 'pie',
	            radius : '58%',
	            center: ['50%', '60%'],
	            data: data_scene_wifi_occupy,
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	});

	// ================= 5 前15的运营商公共WiFi数量以及其在整体公共WiFi数量的占比 ====================

	var operator_wifi_occupy = echarts.init(document.getElementById('operator_wifi_occupy'), 'shine');
	operator_wifi_occupy.setOption({
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'horizontal',
	        left: 'left',
			itemHeight: 10,
			itemWidth:20,
			padding:[2,10,2,10],
	        data: getNameArr(data_operator_wifi_occupy)
	    },
	    series : [
	        {
	            name: 'WiFi数量',
	            type: 'pie',
	            radius : '58%',
	            center: ['50%', '60%'],
	            data: data_operator_wifi_occupy,
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	});

	// ================= 6 前10的运营商在前10的场景公共WiFi布局占比情况 ====================

	var format_operator_scene_occupy = formatData('stack', data_operator_scene_occupy); //格式化数据
	var operator_scene_occupy = echarts.init(document.getElementById('operator_scene_occupy'), 'shine');
	operator_scene_occupy.setOption({
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {   
	            type : 'shadow'   
	        },
	        formatter: function(params) { 
				var res = params[0].name+'<br/>';
				var index = params[0].dataIndex;
				for(var i=0; i<params.length; i++){
					res += '<i class="color_point" style="background-color:'+params[i].color+';"></i>' + params[i].seriesName +'：' + params[i].value+'%';
					res += ' ('+ data_operator_scene_occupy[index].sence[i].value +')';
					i==(params.length-1) ? '' : res+='<br/>';
				}
				return res;  
	        }
	    },
	    legend: {
	        orient: 'horizontal',
	        left: 'left',
			itemHeight: 10,
			itemWidth:20,
			padding:[2,10,2,10],
	        data: format_operator_scene_occupy.scenceArr
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    yAxis:  {
	        type: 'value',
	        max: 100,
	        interval: 10,
            axisLabel: {
                formatter: '{value}%'
            }
	    },
	    xAxis: {
	        type: 'category',
	        data: format_operator_scene_occupy.partNameArr
	    },
	    series: format_operator_scene_occupy.seriesArr
	});

	// ================= 7 前15的运营商公共WiFi数量以及其在整体公共WiFi数量的占比 ====================


	var city_feedback_occupy = echarts.init(document.getElementById('city_feedback_occupy'), 'shine');
	city_feedback_occupy.setOption({
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'horizontal',
	        left: 'left',
			itemHeight: 10,
			itemWidth:20,
			padding:[2,10,2,10],
	        data: getNameArr(data_city_feedback_occupy)
	    },
	    series : [
	        {
	            name: 'WiFi数量',
	            type: 'pie',
	            radius : '58%',
	            center: ['50%', '60%'],
	            data: data_city_feedback_occupy,
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	});


});