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


(lib.gdusirgdrh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkkA8QgCgTAIgQQAJgRARgFQAHgDAKAAICAAAIAJAAIADgMIAFgMQAGgRANgIQANgJASAAIAwAAIAvAAQAWgBAPAOQAOANAFAUQADAKACACQACAAAKAAIB9AAQAXAAAOASQAPASgFAYg");
	this.shape.setTransform(29.3,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gdusirgdrh, new cjs.Rectangle(0,0,58.7,11.9), null);


(lib.ahfgisegwse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.gdusirgdrh();
	this.instance.parent = this;
	this.instance.setTransform(29.3,6,1,1,0,0,0,29.3,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({regX:29.4,rotation:14.7,x:33.5,y:-0.9},9).wait(15).to({regX:29.3,rotation:0,x:29.3,y:6},10).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiDD5QgGgEgBgHIgCgTIgBgTIgVmoQgBgSAOgHQAKgGAKAHQAKAHABANIADA5IAFCWIABAcIAAAAIAIDiQAAAIgEAFQgFAFgGABIgDABQgHAAgFgEgAgMD4QgGgGAAgKIgBhfIAAiGIgCAAIAAjjIABgIQACgJAGgGQAHgFAGAAQAJABAGAHQAGAGAAAKIAABZIgCEzIgBA+QAAAKgEAGQgEAFgIABIgDABQgGAAgGgFgAB3D8QgIAAgEgGQgFgGAAgJIAGiUIAChPIABAAIAHjQIABgXQABgIAEgGQAEgGAGgDQAGgDAGACQAHABAEAGQAFAFABAHIAAAaIgMDqIgICuIgCAeQgBAKgGAFQgFAFgIAAIgCAAg");
	this.shape.setTransform(29.3,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AB6E6Ij1AAQgjAAgbgZQgcgZgCgiIgHhIIgFhIIgMiYIgKiGIgIhsIAAgFIIDAAIgBAVIgbFbIgGBNIgGBMQgBAVgDANQgFASgJANQgeApgvAAIgBAAgAiWjuQgNAHABASIAUGoIABATIADATQAAAHAHAFQAGADAIgBQAHAAAEgGQAFgFAAgIIgIjiIAAAAIgBgcIgGiWIgCg5QgCgNgJgHQgGgEgFAAQgFAAgFADgAgMjsQgGAHgCAIIgBAIIAADjIACAAIAACGIABBfQAAAKAGAGQAHAFAIgBQAHgBAFgFQAEgGAAgKIABg+IABkzIAAhZQAAgKgFgGQgHgGgIgCIgBAAQgGAAgGAFgABrBeIgFCUQAAAKAFAFQAEAGAIAAQAJABAGgGQAGgFABgKIACgeIAIiuIALjqIAAgaQAAgHgFgFQgFgGgGgBQgGgCgGADQgGADgEAGQgEAGgBAIIgCAXIgHDQIAAAAg");
	this.shape_1.setTransform(29.3,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.7,77.4);


// stage content:
(lib.Element_bin_delete_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.instance = new lib.ahfgisegwse();
	this.instance.parent = this;
	this.instance.setTransform(200.9,205.8,3.043,3.043,0,0,0,29.4,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(311.5,287.4,178.5,235.5);
// library properties:
lib.properties = {
	id: '861A051FBD697E4E889980D08DABCF1C',
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
an.compositions['861A051FBD697E4E889980D08DABCF1C'] = {
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