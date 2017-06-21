window.CountTimer = (function() {

	//构造器
	function CountTimer(config) {
		this.CountTimer;
		this.timer;
		this.container = document.querySelector(config.container);
	    this.callback = config.callback ? config.callback : function(){};
	    this.timeEnd = config.timeEnd ? config.timeEnd : function(){};
	    this.init(config.endTime);
	}
	
	CountTimer.prototype = {
		constructor: CountTimer,
		init: function(string){
			var _this = this; 

			var date = string.split(' ')[0],
				time = string.split(' ')[1],
				year = date.split('-')[0],
				month = date.split('-')[1],
				day = date.split('-')[2],
				hour = time.split(':')[0],
				minute = time.split(':')[1],
				second = time.split(':')[2];

		 	_this.timer = setInterval(function(){
		 		_this.computeTime(year,month,day,hour,minute,second); 
		 	},1000);
		},
		computeTime: function(year, month, day, hour, minute, second){
			var _this = this; 
			var differTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数
			if(differTime <= 0){
				_this.container.innerHTML = '拍卖已结束';
				clearInterval(_this.timer);
				_this.timeEnd();
			}else{
				var days = parseInt(differTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
				var hours = parseInt(differTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
				var minutes = parseInt(differTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
				var seconds = parseInt(differTime / 1000 % 60, 10);//计算剩余的秒数 
				days 	= days<10 ? '0'+days : days;
				hours 	= hours<10 ? '0'+hours : hours;
				minutes = minutes<10 ? '0'+minutes : minutes;
				seconds = seconds<10 ? '0'+seconds : seconds;
				_this.container.innerHTML = days+'天'+hours+'时'+minutes+'分'+seconds+'秒';
				_this.callback(days, hours, minutes, seconds);
			}
		}

	};

	return CountTimer;
})();