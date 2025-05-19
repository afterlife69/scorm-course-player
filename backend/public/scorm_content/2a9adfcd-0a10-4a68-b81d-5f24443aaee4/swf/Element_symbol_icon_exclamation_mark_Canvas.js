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


(lib.jdhdra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwqcHQorlXkipjQiPktgQmyIgFAAQgFhyAAhzIAKAAIAAgKIAAhkQB3sHG/nBQDgjhEkikQGcjpKFgEQA3AAA2AFIABAFQMaBkHFG7QDkDeCrEdQD6GiAEKfIAAAKQAHA/gRAlQguH0jIFTQipEejkDeQnFG7saBkIgBAFQg2AFg3AAQq7gKm0kPgAgSMwQjsAahCDQQgDDpCIBcQAxAgA7AHQGoArgkm1QgphehKg+Qg+gzhlAAQgYAAgZADgAhQ2UQiyAgg+CTIAAAyIAAAKIAAWBIAAAKQA2EoFjg2QDOgfAYjTIAAgKIAA2BIgBgKQgjjMjWgaIgKAAIiBAAIgKABg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(225,86,75,0.996)").s().p("Ak/LBIAAgKIAA2BIAAgKIAAgyQA/iUCxgfIAKgBICBAAIAKAAQDXAZAiDNIABAKIAAWBIAAAKQgYDTjNAfQg3AIgvAAQkGAAguj6g");
	this.shape_1.setTransform(0,-47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(224,86,75,0.992)").s().p("EAA8AoAIiBAAIAAgFQgygFgyAAQrng/nelBQmTkQkjl/QmAn7hRsuIAAgKQAIhEgSgqIAAgKIAAjlQBXspF6oAQDAkGD0jQQHimbLjiXQB9gZCPgCQAyAAAygFIAAgFICBAAIAKAAQAqASBEgIIAKAAQMuBRH7GBQF/EhEQGUQFBHeA/LnQAAAyAFAyIAFAAIAACBIAAAKIgKAAIAAB4IAAAKQhGLQk7HWQkOGVmAEhQn7GBsuBRIgKAAIhuAAIAAAKIgKAAgEggaABuIAFAAQARGyCOEtQEiJjIrFXQG0EPK7AKQA3AAA2gFIABgFQMahkHFm7QDkjeCpkeQDJlTAtn0QARglgGg/IgBgKQgEqfj6miQirkdjkjeQnFm7sahkIgBgFQg2gFg3AAQqFAEmcDpQkjCkjhDhQm+HBh4MHIAABkIAAAKIgKAAQAABzAFBygAhNWGQg8gHgwggQiJhcADjpQBDjQDrgaQCIgPBMA/QBKA+ApBeQAhGNlbAAQgjAAgmgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jdhdra, new cjs.Rectangle(-256,-256,512,512), null);


(lib.shfsieg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.jdhdra();
	this.instance.parent = this;
	this.instance.setTransform(79.8,79.8,0.312,0.312);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.3,scaleY:0.3},4).to({scaleX:0.31,scaleY:0.31},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.6,159.6);


// stage content:
(lib.Element_symbol_icon_exclamation_mark_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shfsieg();
	this.instance.parent = this;
	this.instance.setTransform(200.3,200.4,1.251,1.251,0.1,0,0,80,80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300.1,300.1,199.9,199.9);
// library properties:
lib.properties = {
	id: '1E0D7598831EEA44836662F8BE479893',
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
an.compositions['1E0D7598831EEA44836662F8BE479893'] = {
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