(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.hh2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(1,1,0,0.996)").s().p("AAcD0QiphoheiiQgkg9gFhIIAAgBQAQgjBVhUIAAgBQAyA4AlBSQg7AuACAPIABAJQABAIADAJQBVDGCOACIA3gxQBKAiA9A3IAAABQg6A2hCAkQg/gBg+gjgAgJhzIAGgsQCgACAECfIgwAGQACh6h8gBgAAFjjIAHg0QD2AbASDuIgsAGQgOjPjVgMg");
	this.shape.setTransform(27.7,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hh2, new cjs.Rectangle(0,0,55.5,56), null);


(lib.fer2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.898)").s().p("AhxEtQhtgchVhWQiAiAAAi0QAAi0CAiAQB/iAC0AAQC1AAB/CAQCACAAAC0QAAC0iACAQhuBuiWAQIhhD1g");
	this.shape.setTransform(43.6,55.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fer2copy, new cjs.Rectangle(0,0,87.3,111.5), null);


(lib.fer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(34,34,34,0.263)").s().p("Aj+BBQhPgngmgvQg6hJBEgzQBEgzCbAAQCYAACWAzQCWAzA7BJQA6BHhFAzQhEAziaAAQiGAAiBgmIkIBTg");
	this.shape.setTransform(39.9,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fer1, new cjs.Rectangle(0,0,79.8,39.4), null);


(lib.pointercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fer2copy();
	this.instance.parent = this;
	this.instance.setTransform(43.6,64.5,1,1,0,0,0,43.6,64.5);

	this.instance_1 = new lib.fer1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.2,91.4,1,1,0,0,0,39.9,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pointercopy, new cjs.Rectangle(0,0,116.1,111.5), null);


(lib.ii2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hh2();
	this.instance.parent = this;
	this.instance.setTransform(44.7,51.3,1,1,0,0,0,27.7,27.9);

	this.instance_1 = new lib.pointercopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.5,72.2,1.119,1.119,0,0,0,57.6,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ii2, new cjs.Rectangle(0,0,129.8,124.7), null);


(lib.iawhiwhf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.ii2();
	this.instance.parent = this;
	this.instance.setTransform(83.3,237.4,0.249,0.249,0,0,0,43,122.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:42.9,regY:122.4,scaleX:1.94,scaleY:1.94,y:237.6},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.6,207,32.3,31.1);


// stage content:
(lib.Element_icon_yellow_phone_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ii2
	this.instance = new lib.iawhiwhf();
	this.instance.parent = this;
	this.instance.setTransform(222.8,198,1,1,0,0,0,126,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(369.3,483.9,32.3,31.1);
// library properties:
lib.properties = {
	id: 'B75850F12495A84C808D260B83B683F8',
	width: 400,
	height: 400,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
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
an.compositions['B75850F12495A84C808D260B83B683F8'] = {
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