(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FOFOSKY_atlas_", frames: [[0,537,684,215],[0,0,529,535]]}
];


// symbols:



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["FOFOSKY_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(img.CachedTexturedBitmap_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3847,508);


(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(img.CachedTexturedBitmap_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6797,610);


(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(img.CachedTexturedBitmap_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3849,510);


(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(img.CachedTexturedBitmap_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3827,1658);


(lib.资源4 = function() {
	this.initialize(ss["FOFOSKY_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,1913.5,829);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1759,0.1759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1195.3,107.3);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.资源4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3259,0.3259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,172.4,174.4), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1923.5,254);


(lib.元件10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,956.2,414.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-956.7,-414.6,1913.5,829), null);


(lib.元件4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 图层_1
	this.instance = new lib.元件5();
	this.instance.parent = this;
	this.instance.setTransform(597.6,53.5,2.8432,2.8432,0,0,0,597.6,53.6);
	this.instance.alpha = 0.1914;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:597.7,scaleX:2.2464,scaleY:2.2464,x:597.85,y:53.55,alpha:0.4532},0).wait(1).to({scaleX:2.0316,scaleY:2.0316,alpha:0.5474},0).wait(1).to({scaleX:1.8798,scaleY:1.8798,x:597.8,alpha:0.614},0).wait(1).to({scaleX:1.7607,scaleY:1.7607,alpha:0.6663},0).wait(1).to({scaleX:1.6626,scaleY:1.6626,x:597.75,alpha:0.7093},0).wait(1).to({scaleX:1.5794,scaleY:1.5794,x:597.8,y:53.6,alpha:0.7458},0).wait(1).to({scaleX:1.5075,scaleY:1.5075,alpha:0.7774},0).wait(1).to({scaleX:1.4447,scaleY:1.4447,alpha:0.8049},0).wait(1).to({scaleX:1.3893,scaleY:1.3893,x:597.75,alpha:0.8292},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:53.65,alpha:0.8508},0).wait(1).to({scaleX:1.2961,scaleY:1.2961,y:53.6,alpha:0.8701},0).wait(1).to({scaleX:1.2569,scaleY:1.2569,alpha:0.8873},0).wait(1).to({scaleX:1.2217,scaleY:1.2217,y:53.65,alpha:0.9027},0).wait(1).to({scaleX:1.1902,scaleY:1.1902,y:53.6,alpha:0.9166},0).wait(1).to({scaleX:1.162,scaleY:1.162,y:53.65,alpha:0.9289},0).wait(1).to({scaleX:1.1367,scaleY:1.1367,x:597.7,alpha:0.94},0).wait(1).to({scaleX:1.1142,scaleY:1.1142,x:597.75,y:53.6,alpha:0.9499},0).wait(1).to({scaleX:1.0942,scaleY:1.0942,alpha:0.9587},0).wait(1).to({scaleX:1.0765,scaleY:1.0765,alpha:0.9665},0).wait(1).to({scaleX:1.0609,scaleY:1.0609,x:597.7,alpha:0.9733},0).wait(1).to({scaleX:1.0474,scaleY:1.0474,y:53.65,alpha:0.9792},0).wait(1).to({scaleX:1.0357,scaleY:1.0357,y:53.6,alpha:0.9843},0).wait(1).to({scaleX:1.0259,scaleY:1.0259,x:597.75,y:53.65,alpha:0.9886},0).wait(1).to({scaleX:1.0178,scaleY:1.0178,x:597.7,y:53.6,alpha:0.9922},0).wait(1).to({scaleX:1.0112,scaleY:1.0112,alpha:0.9951},0).wait(1).to({scaleX:1.0062,scaleY:1.0062,x:597.75,y:53.65,alpha:0.9973},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,alpha:0.9988},0).wait(1).to({scaleX:1.0007,scaleY:1.0007,x:597.7,alpha:0.9997},0).wait(1).to({regX:597.6,scaleX:1,scaleY:1,x:597.6,y:53.6,alpha:1,mode:"synched",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1101.5,-98.9,3398.5,305);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(86.2,87.2,1,1,0,0,0,86.2,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.9493},0).wait(1).to({alpha:0.8986},0).wait(1).to({alpha:0.8479},0).wait(1).to({alpha:0.7971},0).wait(1).to({alpha:0.7464},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.5943},0).wait(1).to({alpha:0.5436},0).wait(1).to({alpha:0.4929},0).wait(1).to({alpha:0.4421},0).wait(1).to({alpha:0.3914},0).wait(1).to({alpha:0.3407},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.3373},0).wait(1).to({alpha:0.3847},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.4793},0).wait(1).to({alpha:0.5267},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.6213},0).wait(1).to({alpha:0.6687},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.7633},0).wait(1).to({alpha:0.8107},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.9053},0).wait(1).to({alpha:0.9527},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.4,174.4);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(83.85,84.8,0.9747,0.9747,0,0,0,86,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,168.1,170), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(84,85,1,1,0,0,0,84,85);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.bf = new lib.元件6();
	this.bf.name = "bf";
	this.bf.parent = this;
	this.bf.setTransform(84,85,1,1,0,0,0,84,85);
	this.bf.filters = [new cjs.BlurFilter(10, 10, 3)];
	this.bf.cache(-2,-2,172,174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.bf}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-14,200,202);


(lib.元件8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.my_btn.addEventListener("click", function () {
			window.open("http://www.adobe.com", '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.my_btn = new lib.元件7();
	this.my_btn.name = "my_btn";
	this.my_btn.parent = this;
	this.my_btn.setTransform(-17.7,26.8,1,1,0,0,0,84,85);
	new cjs.ButtonHelper(this.my_btn, 0, 1, 2, false, new lib.元件7(), 3);

	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,241.35,1,1,0,0,0,597.6,53.6);

	this.instance_1 = new lib.CachedTexturedBitmap_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-192.95,-320.7,0.5,0.5);

	this.instance_2 = new lib.元件2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.05,-267,1,1,0,0,0,961.6,127);
	this.instance_2.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 107, 0, 107, 0)];
	this.instance_2.cache(-2,-2,1928,258);

	this.instance_3 = new lib.CachedTexturedBitmap_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-958.05,-394.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.my_btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-1699.1,-394.5,3398.5,788.3), null);


// stage content:
(lib.MYWEB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 	Load a Video
			Change the URL below.
		*/
		var videoURL = "https://images-tv.adobe.com/avp/vr/15a99ccf-0e7c-4601-b270-87dd82624086/5078a43c-81f9-4a93-836c-815278b83a8e/e9cf12a0-7c4b-414f-a5c9-97ef49340aa9_20160203035417.960x540at1200_h264.mp4";
		
		this.movieClip_3.on("added", function() {
		    $("#movieClip_3")[0].src = videoURL;
		}, this, true);
		
		/* 播放视频
		使用此代码片段可播放选定视频。
		*/
		this.movieClip_3.on("added", function() {
		    $("#movieClip_3")[0].play();
		}, this, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.instance = new lib.元件8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(953.55,389.7,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.movieClip_3 = new lib.元件10();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(960.25,666.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214.4,535.5,2438.4,545.0999999999999);
// library properties:
lib.properties = {
	id: 'D7BD4A6FB1047F44863CD44F77FED017',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"CachedTexturedBitmap_5.png", id:"CachedTexturedBitmap_5"},
		{src:"CachedTexturedBitmap_6.png", id:"CachedTexturedBitmap_6"},
		{src:"CachedTexturedBitmap_7.png", id:"CachedTexturedBitmap_7"},
		{src:"CachedTexturedBitmap_8.png", id:"CachedTexturedBitmap_8"},
		{src:"FOFOSKY_atlas_.png", id:"FOFOSKY_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D7BD4A6FB1047F44863CD44F77FED017'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;