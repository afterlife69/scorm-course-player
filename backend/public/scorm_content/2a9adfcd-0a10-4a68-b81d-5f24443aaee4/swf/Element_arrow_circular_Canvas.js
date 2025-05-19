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


(lib.spinningtime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,51,0,0.2)").s().p("AAhAdIgJAAIgfgDQgPgCgLgFIAOguIAAgBQAWAHAeAAIABAAIAAAPIAAAAIAAAWIAAABIAAALIAAABIgBAAg");
	this.shape.setTransform(23.1,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,51,0,0.4)").s().p("AATAlQgfgNgagUIAAgBIAegnIAAAAQAUAQAaALIABAAIgTAug");
	this.shape_1.setTransform(14.8,47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,51,0,0.6)").s().p("AAEAoQgYgXgRgbIgBgBIApgbIABAAQAPAXAUASIAAAAIgiAlIgBAAg");
	this.shape_2.setTransform(8.1,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,51,0,0.8)").s().p("AgLAlQgPgbgHgkIAAgBIAwgJIABAAQAGAcAMAWIAAABIgsAWIgBAAg");
	this.shape_3.setTransform(3.9,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC00").s().p("AhSgEIA2AAIAAgCIgBgDIgFgTQgHgYgKgUIAsgaQAHANAGAPQAIAUAFAWIACAKIABAIIAAAGIA8AAIhSBnIAAAAgABSgEIABAAIAAAAg");
	this.shape_4.setTransform(50.8,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99CC00").s().p("AAJAwQgbgqgtgYIAaguIAEACQAZAQAUATQAfAcAVAmIgtAaIgKgRg");
	this.shape_5.setTransform(43.7,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCC00").s().p("AAbAgQgbgNgigEQgQgCgPAAIABg0IAJAAIABAAQBHAFAxAdIgaAtIgNgIg");
	this.shape_6.setTransform(33.3,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AhDgEIANgHQApgVA3gHIAJAAIAAgBIADAAIABAAIANAAIgBA0QgsgBghAOQgRAHgPAJg");
	this.shape_7.setTransform(20,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgKAwQgVgPgSgQQAfgnArgaIAZAuQgjAUgZAfIAAgBg");
	this.shape_8.setTransform(10.7,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC6600").s().p("AgiAXIgBgCQALgfAQgaIAAgBIAqAaIABAAQgMAWgJAaIAAABQgZgGgXgJg");
	this.shape_9.setTransform(4.8,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC3300").s().p("AgaAdIAAgBQABgGgCgEIAAgBIAAgRIAEghIAAgBIAyAJIAAAAQgCANAAANIAAABIgBAAIAAALIAAABIABAJIAAAAIAAABQABAIgJgCIgBAAIgIAAIAAABIgLABIgMACIgEABQgFAAgCgGg");
	this.shape_10.setTransform(2.8,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spinningtime, new cjs.Rectangle(0,0,59.1,53.3), null);


(lib.spinningtime2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spinningtime();
	this.instance.parent = this;
	this.instance.setTransform(26.9,26.5,1,1,0,0,0,26.9,26.5);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,y:26.6},19).to({rotation:180,x:26.8,y:26.5},20).to({rotation:270,x:26.9},20).to({regX:26.8,rotation:355.5},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,53.3);


// stage content:
(lib.Element_arrow_circular_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spinningtime2();
	this.instance.parent = this;
	this.instance.setTransform(194.4,206.1,4.004,4.004,0,0,0,26.9,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286.7,300,236.6,213.2);
// library properties:
lib.properties = {
	id: 'D688DB1E8B29734D9A710C59F602D21F',
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
an.compositions['D688DB1E8B29734D9A710C59F602D21F'] = {
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