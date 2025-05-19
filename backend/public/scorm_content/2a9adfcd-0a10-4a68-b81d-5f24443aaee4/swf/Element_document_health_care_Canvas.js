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


(lib.page2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AhlF4IAAkUIkSAAIAAjHIERAAIAAkUIDKAAIAAESIEUAAIAADJIkTAAIAAEUg");
	this.shape.setTransform(124.2,320);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhcG6QgEgDgCgGQgDgFAAgGIAAjYIETAAIAAkpIkTAAIAAkTIkqAAIAAESIhegBQgFgBgGgDQgGgFgBgEQgXg/AIhIQAJhIAkg9QAmhAA6glQA/goBMgCQCNgCBbCHIARAcQAhg6AogkQAtgnA5gRQBdgbBZAqQBYApAwBfQAgA+ABBHQAAA9gYBJQgaBPgwBPQgpBDg9BMQiYC7iwB2Qg+gygfgag");
	this.shape_1.setTransform(149.2,314.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Ay1K2IAAhJIVcAAIAABJgAy1HpMAlrAAAIAABJMglrAABgAy1GvIAAhJMAlrAAAIAABJgAy1EsIAAhKMAlrAAAIAABKgAy1BfMAlrgABIAABKMglrAAAgAy1gkMAlrAAAIAABIMglrAABgAy1heIAAhJMAlqAAAIAABJgAy2krMAlrAAAIAABJMglrAABgAy2llIAAhJMAlrAAAIAABJgAy2oyMAlrAAAIAABJMglrAABgAy2psIAAhJMAlrAAAIAABJg");
	this.shape_2.setTransform(141.6,168.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("Ap1EaIADjYIT7AQIgDDZgAuEhOIADjcIcGAYIgCDcg");
	this.shape_3.setTransform(142.8,38.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgXEggoMAuJAAAMAAABBRMguJAAAg");
	this.shape_4.setTransform(142.1,186.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.4)").s().p("EgXEggoIAeAAMAAABA5MAtrAAAIAAAXMguJAABg");
	this.shape_5.setTransform(139.1,188.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.page2, new cjs.Rectangle(-8.6,-22.4,298.5,420.3), null);


(lib.form1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.page2();
	this.instance.parent = this;
	this.instance.setTransform(139.8,189.7,0.857,0.857,-2.3,0,0,148.1,209.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:209.1,scaleX:0.77,scaleY:0.77,rotation:-2.6,y:189.6,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-13.4,269.6,369.8);


// stage content:
(lib.Element_document_health_care_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.form1();
	this.instance.parent = this;
	this.instance.setTransform(200.5,199.8,1,1,6.5,0,0,132.2,173.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.5,208.8,281.3,377.4);
// library properties:
lib.properties = {
	id: '8BFDEFDC1BA0204687CFA7CE131768B1',
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
an.compositions['8BFDEFDC1BA0204687CFA7CE131768B1'] = {
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