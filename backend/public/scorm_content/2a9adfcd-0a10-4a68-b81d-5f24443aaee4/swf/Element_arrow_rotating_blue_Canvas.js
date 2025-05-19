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


(lib.aug8ewg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B79C2").s().p("AmNGzQiripAFjsQAAgMAIgIQAJgJAMABQANgBAIAJQAJAIAAAMQACCvCPB8QCMB4C8AAQBlAABdgoQBcgoBEhKIg1gyQgKgKAFgMQAFgLAPAAID/AAIAAD2QAAAOgLAEQgNAFgKgJIg3g1QhSBYhxAvQhxAxh8AAQj0AAisiogAICgJQgJgIAAgMQgCiviPh8QiMh4i8AAQhlAAhdAoQhcAohEBKIA1AyQAKAKgFAMQgFALgPAAIj/AAIAAj2QAAgOALgEQANgFAKAJIA3A1QBThYBwgvQBxgxB8AAQD0AACsCoQCsCpgGDsQAAAMgIAIQgJAIgMAAQgNAAgIgIg");
	this.shape.setTransform(56.4,60.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.aug8ewg, new cjs.Rectangle(0,0,112.9,120.6), null);


(lib.hafaiwf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.aug8ewg();
	this.instance.parent = this;
	this.instance.setTransform(47.8,51.1,0.845,0.845,0,0,0,56.6,60.5);
	this.instance.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90},9).to({rotation:-180,y:51.2},10).to({rotation:-270,y:51.3},10).to({regY:60.4,scaleX:0.84,scaleY:0.84,rotation:-351,x:47.9},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.4,101.9);


// stage content:
(lib.Element_arrow_rotating_blue_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hafaiwf();
	this.instance.parent = this;
	this.instance.setTransform(202.6,202.3,2.335,2.335,0,0,180,47.6,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(291.2,283.2,222.6,237.9);
// library properties:
lib.properties = {
	id: '050F72350CBF104287E00BD6B5D801CE',
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
an.compositions['050F72350CBF104287E00BD6B5D801CE'] = {
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