$(function(){
	$("#nav-toggle").on("click",function(){
		$("#header").hasClass("nav-menu-show")?$("#header").removeClass("nav-menu-show"):$("#header").addClass("nav-menu-show")
	});
	var n=function(){
		var n=navigator.userAgent;
		return{
			isIos:!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			isWx:!!n.match(/MicroMessenger/i),
			isAndroid:n.indexOf("Android")>-1||n.indexOf("Linux")>-1
		}
	}(),
	a=n.isWx?"/download.html":n.isIos?"https://itunes.apple.com/app/id1022738655?mt=8":"http://www.huizhaofang.com/download/hfq/hfq_1.0.apk";
	$(".download-link").attr("href",a)});

;!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=h.call(arguments,1),r=0,f=0,d=0,c=0,m=0,g=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(f=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(f=-1*d,d=0),r=0===d?f:d,"deltaY"in s&&(d=-1*s.deltaY,r=d),"deltaX"in s&&(f=s.deltaX,0===d&&(r=-1*f)),0!==d||0!==f){if(1===s.deltaMode){var w=e.data(this,"mousewheel-line-height");r*=w,d*=w,f*=w}else if(2===s.deltaMode){var v=e.data(this,"mousewheel-page-height");r*=v,d*=v,f*=v}if(c=Math.max(Math.abs(d),Math.abs(f)),(!l||l>c)&&(l=c,i(s,c)&&(l/=40)),i(s,c)&&(r/=40,f/=40,d/=40),r=Math[r>=1?"floor":"ceil"](r/l),f=Math[f>=1?"floor":"ceil"](f/l),d=Math[d>=1?"floor":"ceil"](d/l),u.settings.normalizeOffset&&this.getBoundingClientRect){var p=this.getBoundingClientRect();m=t.clientX-p.left,g=t.clientY-p.top}return t.deltaX=f,t.deltaY=d,t.deltaFactor=l,t.offsetX=m,t.offsetY=g,t.deltaMode=0,a.unshift(t,r,f,d),o&&clearTimeout(o),o=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function n(){l=null}function i(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var o,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(e.event.fixHooks)for(var r=s.length;r;)e.event.fixHooks[s[--r]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var n=a.length;n;)this.addEventListener(a[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var n=a.length;n;)this.removeEventListener(a[--n],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var n=e(t),i=n["offsetParent"in e.fn?"offsetParent":"parent"]();return i.length||(i=e("body")),parseInt(i.css("fontSize"),10)||parseInt(n.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
;!function(){function t(t){
	this.touchStartY=0,
	this.touchStartX=0,
	this.touchEndY=0,
	this.touchEndX=0,
	this.callback=t,
	"function"==typeof this.callback&&this.init()
}

function i(t){
	this.$wrap=t.$wrap,
	this.$page=t.$page,
	this.$pages=t.$pages,
	this.$index=t.$index,
	this.$prev=t.$prev,
	this.$next=t.$next,
	this.$gotop=t.$gotop,
	this.direction=t.direction||"y",
	this.childW=[],
	this.childH=[],
	this.index=0,
	this.distance=0,
	this.total=0,
	this.speed=1e3,
	this.status=!0,
	this.resizeId=null,
	this.willScroll=t.willScroll,
	this.didScroll=t.didScroll
}

var e = {
	isTouchDevice: navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
	isTouch: "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
	isSupport3D: function() {
		var t, i = document.createElement("p"),
			e = {
				webkitTransform: "-webkit-transform",
				OTransform: "-o-transform",
				msTransform: "-ms-transform",
				MozTransform: "-moz-transform",
				transform: "transform"
			};

		document.body.insertBefore(i, null);
		for (var o in e) void 0 !== i.style[o] && (i.style[o] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(i).getPropertyValue(e[o]));
		return document.body.removeChild(i), void 0 !== t && t.length > 0 && "none" !== t
	}(),
	getMSPointer: function() {
		var t;
		return t = window.PointerEvent ? {
			down: "pointerdown",
			move: "pointermove"
		} : {
			down: "MSPointerDown",
			move: "MSPointerMove"
		}
	},
	isReallyTouch: function(t) {
		return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
	},
	getEventsPage: function(t) {
		var i = [];
		return i.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, i.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, e.isTouch && e.isReallyTouch(t) && (i.y = t.touches[0].pageY, i.x = t.touches[0].pageX), i
	},
	addAnimation: function(t, i) {
		var e = "all " + i + "ms ease";
		return t.css({
			"-webkit-transition": e,
			transition: e
		})
	},
	getTransforms: function(t) {
		return {
			"-webkit-transform": t,
			"-moz-transform": t,
			"-ms-transform": t,
			transform: t
		}
	}
};
t.prototype.init = function() {
	var t = this,
		i = e.getMSPointer();
	$("body").off("touchstart " + i.down).on("touchstart " + i.down, function(i) {
		t.touchStartHandler(i)
	}), $("body").off("touchmove " + i.move).on("touchmove " + i.move, function(i) {
		t.touchMoveHandler(i)
	}), $("body").off("touchend " + i.move).on("touchend " + i.move, function() {
		t.touchEndHandler()
	})
}, t.prototype.touchStartHandler = function(t) {
	var i = t.originalEvent;
	if (e.isReallyTouch(t)) {
		var o = e.getEventsPage(i);
		this.touchEndY = this.touchStartY = o.y, this.touchEndX = this.touchStartX = o.x
	}
}, t.prototype.touchMoveHandler = function(t) {
	var i = t.originalEvent;
	t.preventDefault();
	var o = e.getEventsPage(i);
	this.touchEndY = o.y, this.touchEndX = o.x
}, t.prototype.touchEndHandler = function() {
	var t = this.touchEndX - this.touchStartX,
		i = this.touchEndY - this.touchStartY;
	this.callback({
		deltaX: t,
		deltaY: i
	})
}, i.prototype.init = function() {
	if ("undefined" == typeof this.$pages || "undefined" == typeof this.$page) return this;
	var t = this;
	return this.total = this.$pages.length - 1, this.$pages.each(function(i) {
		t.childW[i] = $(this).width(), t.childH[i] = $(this).height()
	}), this.bind(), this.update(), this
}, i.prototype.bind = function() {
	var i = this;
	if ($(window).on("resize", function() {
		i.resize()
	}), $(document).on("keyup", function(t) {
		var e = t.target.tagName.toLocaleUpperCase(),
			o = /^(INPUT|TEXTAREA|SELECT)$/;
		if (!o.test(e)) {
			var n = "x" === i.direction ? 39 : 40,
				s = "x" === i.direction ? 37 : 38;
			t.keyCode === s ? i.scroll(-1) : t.keyCode === n && i.scroll(1)
		}
	}), $(document).mousewheel(function(t) {
		var e = "x" === i.direction ? t.deltaX : t.deltaY;
		e > 0 ? i.scroll(-1) : 0 > e && i.scroll(1)
	}), "undefined" != typeof this.$index && this.$index.on("click", "li", function() {
		var t = $(this).index() - i.index;
		0 !== t && i.scroll(t)
	}), "undefined" != typeof this.$prev && this.$prev.on("click", function() {
		i.scroll(-1)
	}), "undefined" != typeof this.$next && this.$next.on("click", function() {
		i.scroll(1)
	}), "undefined" != typeof this.$gotop && this.$gotop.on("click", function() {
		0 !== this.index && i.scroll(-this.index)
	}), e.isTouchDevice || e.isTouch) {
		new t(function(t) {
			var e = "x" === i.direction ? t.deltaX : t.deltaY;
			e > 4 ? i.scroll(-1) : -4 > e && i.scroll(1)
		})
	}
}, i.prototype.getDistance = function(t) {
	for (var i = 0, e = "x" === this.direction ? this.childW : this.childH, o = 1; t >= o; o++) i += e[o];
	return i
}, i.prototype.scroll = function(t) {
	var i = this.index + t;
	if (this.status && !(0 > i || i > this.total)) {
		this.status = !1, "function" == typeof this.willScroll && this.index !== i && this.willScroll.apply(this, [i]);
		var o = this,
			n = this.speed;
		if (this.index = i, this.distance = this.getDistance(i), this.update(n), e.isSupport3D) {
			var s = "x" === this.direction ? "translate3d(-" + this.distance + "px, 0px, 0px)" : "translate3d(0px, -" + this.distance + "px, 0px)";
			e.addAnimation(this.$page, n), this.$page.css(e.getTransforms(s))
		} else {
			var t = "x" === this.direction ? "left" : "top",
				r = {};
			r[t] = -this.distance, this.$page.animate(r, n)
		}
		setTimeout(function() {
			o.status = !0, "function" == typeof o.didScroll && this.index !== i && o.didScroll.apply(o, [])
		}, n)
	}
}, i.prototype.resize = function() {
	var t = this;
	clearTimeout(this.resizeId), this.resizeId = setTimeout(function() {
		t.$pages.each(function(i) {
			t.childW[i] = $(this).width(), t.childH[i] = $(this).height()
		}), t.scroll(0)
	}, 300)
}, i.prototype.update = function() {
	"undefined" != typeof this.$index && this.$index.children().eq(this.index).addClass("on").siblings().removeClass("on"), 0 === this.index ? ("undefined" != typeof this.$prev && this.$prev.hide(), "undefined" != typeof this.$next && this.$next.show()) : this.total === this.index ? ("undefined" != typeof this.$prev && this.$prev.show(), "undefined" != typeof this.$next && this.$next.hide()) : ("undefined" != typeof this.$prev && this.$prev.show(), "undefined" != typeof this.$next && this.$next.show()), 0 < this.index ? "undefined" != typeof this.$gotop && this.$gotop.show() : "undefined" != typeof this.$gotop && this.$gotop.hide()
}, "function" != typeof window.Fullpage && (window.Fullpage = i)
}();;




$(function(){
	function a(n,e,g){
		var p=n+1;
		if("init"===e.attr("data-lazyload"))return void("function"==typeof g&&g(n,e));
		// if(e.attr("data-lazyload","init"),n>0||6>n){
		// 	switch(p){
		// 		case 2:e.find(".bg").html('<img src="'+i[p]+'" />');console.log('111');break;
		// 		case 3:e.find(".bg").css({"background-image":"url("+i[p]+")"});console.log('222');break;
		// 		case 4:e.find(".bg").html('<img src="'+i[p]+'" />');console.log('333');break;
		// 		case 5:e.find(".bg").html('<img src="'+i[p]+'" />');console.log('444');break;
		// 		case 6:e.find(".bg").html('<img src="'+i[p]+'" />');break;
		// 	}

		// 	e.find(".title img").attr("src",t[p]);
		// }
		var s=new Image;
		s.src=i[p],
		s.onload=function(){
			"function"==typeof g&&g(n,e),6>p&&a(p,$("#page"+(p+1)))
		}
	}


	{	
		var i={1:"",2:"",3:"",4:"",5:""},
			t={2:"",3:"",4:"",5:""};

		new Fullpage({
				direction:"x",
				$wrap:$(".wrap"),
				$page:$(".wrap-page"),
				$pages:$(".wrap-page .page"),
				$index:$(".wrap-index"),

			willScroll:function(i){
				var t=$(".wrap-page .page").eq(i);
				t.addClass("page-animate");
				a(i,t,function(a,i){  //i是第几个 t是当前page对象
					if(2===a||4===a){  //判断如果是1和3 做放大动画
						var t=i.find(".bg img").width(), //t=图片宽度
						n=i.find(".bg").width(); //n=窗口宽度
						i.find(".bg img").css({left:n-t});//把bg图片的位置设为n-t  窗口宽度-图片宽度 放到屏幕最左侧
					}
				});
			},  

			didScroll:function(){
				$(".wrap-page .page").eq(this.index).siblings().removeClass("page-animate"),
				$(".wrap-page .page").eq(this.index).siblings().find(".bg img").css({left:0});
				// console.log(this.index);
			}
		}).init();
	}


	$("#page1").addClass("page-animate");
	var n=new Image;
	n.src=i[1],n.onload=function(){
		a(1,$("#page2"));
	}
});