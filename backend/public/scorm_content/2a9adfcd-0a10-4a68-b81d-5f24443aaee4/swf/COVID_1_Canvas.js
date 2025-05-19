(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"COVID_1_Canvas_atlas_", frames: [[0,0,641,370],[643,0,309,385],[0,431,441,51],[0,387,570,42],[443,431,117,112]]}
];


// symbols:



(lib.laptop = function() {
	this.spriteSheet = ss["COVID_1_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.paper = function() {
	this.spriteSheet = ss["COVID_1_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pen2 = function() {
	this.spriteSheet = ss["COVID_1_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pencil2 = function() {
	this.spriteSheet = ss["COVID_1_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.small_paper = function() {
	this.spriteSheet = ss["COVID_1_Canvas_atlas_"];
	this.gotoAndStop(4);
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


(lib.kk6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.small_paper();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kk6, new cjs.Rectangle(0,0,117,112), null);


(lib.kk5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.paper();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kk5, new cjs.Rectangle(0,0,309,385), null);


(lib.kk4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pen2();
	this.instance.parent = this;
	this.instance.setTransform(20.9,0,0.436,0.436,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kk4, new cjs.Rectangle(0,0,87.7,188.1), null);


(lib.kk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pencil2();
	this.instance.parent = this;
	this.instance.setTransform(10.1,0,0.458,0.458,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kk3, new cjs.Rectangle(0,0,232.2,153.3), null);


(lib.kk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.laptop();
	this.instance.parent = this;
	this.instance.setTransform(0,-12,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kk2, new cjs.Rectangle(0,-12,525.4,303.3), null);


(lib.allthingscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.kk3();
	this.instance.parent = this;
	this.instance.setTransform(1038.7,296.3,1,1,0,0,0,116.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:891,y:342.3},9).wait(1));

	// Layer 1
	this.instance_1 = new lib.kk4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(926.7,478.6,1,1,0,0,0,43.8,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:878.7,y:426.6},9).wait(1));

	// laptop.png
	this.instance_2 = new lib.kk2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(947.3,36,1,1,0,0,0,262.6,151.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:865.3,y:164},9).wait(1));

	// small_paper.png
	this.instance_3 = new lib.kk6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(847.7,344,1,1,0,0,0,58.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:713.7,y:265},9).wait(1));

	// paper.png
	this.instance_4 = new lib.kk5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(903.6,592.6,1,1,0,0,0,154.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:823.6,y:424.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(684.7,-127.6,525.3,912.7);


// stage content:
(lib.COVID_1_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:6,step1:8,step2:10,step3:12,step4:14,step5:16,step6:18,step7:20,step8:22,step9:24,step10:26});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(2).call(this.frame_8).wait(2).call(this.frame_10).wait(2).call(this.frame_12).wait(2).call(this.frame_14).wait(2).call(this.frame_16).wait(2).call(this.frame_18).wait(2).call(this.frame_20).wait(2).call(this.frame_22).wait(2).call(this.frame_24).wait(2).call(this.frame_26).wait(10));

	// Layer 8
	this.instance = new lib.allthingscopy();
	this.instance.parent = this;
	this.instance.setTransform(489.4,116.1,1,1,0,0,0,574.8,276.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1134.3,36.9,525.3,912.7);
// library properties:
lib.properties = {
	id: '496A90DBE896444A948B86EDB6ADF5CD',
	width: 1070,
	height: 650,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/COVID_1_Canvas_atlas_.png", id:"COVID_1_Canvas_atlas_"}
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
an.compositions['496A90DBE896444A948B86EDB6ADF5CD'] = {
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