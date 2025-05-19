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


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0F0F").s().p("AoqOaQiKiPhyi8Qgkg6haisQg6hwhhiVIhWh/QAAi0AvkWIAujyQCqgPCriGQBEg1BuhnIDcjQQA/g7BMgxQgiCJgWDRQgsGjBAFsQBaH8EkFHQFuGZKYBjQlLDhmfAAQo8AAmamrg");
	this.shape.setTransform(117.4,134.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,234.8,269.8), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEE8EF").s().p("Al6CbQlohBjtiAQgggSgGggQgGgdAQgcQARgcAcgKQAggMAgASICPA/QDIBMDKAkQE/A4E8gsQFBgsEfiPQAhgRAgANQAcAKARAdQAQAcgGAcQgGAfghARQk7CclaAxQiZAWiaAAQjAAAjBgig");
	this.shape.setTransform(130.1,152.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEE8EF").s().p("An+CvQnFhVkpijQgggSgGggQgGgdARgdQAQgcAcgKQAggLAgASQAVALAgAPIA9AcIBGAdQECBkEOAxQGnBNGjg7QGog6F7jAQAhgRAgAMQAdALAQAcQARAcgGAdQgGAfghARIhMAlQmMC5mzA2QirAVisAAQkDAAkFgxg");
	this.shape_1.setTransform(130.1,101.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CEE8EF").s().p("An+CvQnFhVkpijQgggSgGggQgGgdARgcQAQgcAcgLQAggLAgASQAVALAgAPIA9AcQAjAQAjANQEDBlENAwQGnBNGjg6QGog7F7jAQAhgRAgAMQAdALAQAcQARAcgGAdQgGAfghARQgjASgpATQmMC5mzA2QirAVisAAQkDAAkFgxg");
	this.shape_2.setTransform(130.1,53.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CEE8EF").s().p("ApPAEQgggQgGghQgGgdARgcQAQgcAcgKQAggLAgARIBNAjQBwArBzAWQC4AiC1gZQC5gaCmhTQAhgQAgAMQAcALARAcQAQAcgGAcQgGAgghAPQkUCKk7AEIgPAAQk/AAkBiOg");
	this.shape_3.setTransform(130.1,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0.1,260.2,171.5), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.CompoundPath, null, null);


(lib.fer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AE0k0QCACAAAC0QAAC0iACAQhuBuiWAQQhQAKhRgWQhtgdhVhVQiAiAAAi0QAAi0CAiAQB/iAC0AAQC1AAB/CAg");
	this.shape.setTransform(43.6,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AhxGmQhtgdhVhVQiAiAAAi0QAAi0CAiAQB/iAC0AAQC1AAB/CAQCACAAAC0QAAC0iACAQhuBuiWAQQgZADgZAAQg3AAg4gPg");
	this.shape_1.setTransform(43.6,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fer2, new cjs.Rectangle(-1,-1,89.3,89.4), null);


(lib.pointercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fer2();
	this.instance.parent = this;
	this.instance.setTransform(43.6,64.5,1,1,0,0,0,43.6,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pointercopy, new cjs.Rectangle(-0.5,-0.5,88.3,88.4), null);


(lib.keyboard_pointercopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkeEfQh2h3gBioQABinB2h3QB3h2CnAAQCoAAB3B2QB3B3gBCnQABCoh3B3Qh3B2ioABQingBh3h2g");
	mask.setTransform(43.7,63.3);

	// OBJECTS
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(35.9,66.4,0.165,0.165,0,0,0,117.8,135);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,67.1,0.165,0.165,0,0,0,130.4,86.3);
	this.instance_1.alpha = 0.531;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AFB2BF").s().p("AM7DrQhHgmhghHIigh2Qj+ivj2gHQj1AHj+CvIigB2QhgBHhHAmQgbAOgQgbQgRgcAcgPQBJgnBthSQCFhiAtgdQD0icDqgNQAEgBAFAAIAXAAQAFAAAEABQDqAND0CcQAtAdCFBiQBtBSBJAnQAcAPgRAcQgKASgQAAQgIAAgJgFg");
	this.shape.setTransform(43,48,0.165,0.165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AvXPtQiJiPhzi8Qgkg6hZirQg7hwhhiWIhVh/QAAizAukWIAvjyQCpgQCriFQBEg1BuhoIDdjQQDRjCEtg7QCXgdBsAKIBJgBQBdACBeASQEtA7DRDCIDcDQQBuBoBFA1QCqCFCqAQIAvDyQAuEWAACzQglA0gwBLQhhCWg7BwQhZCrgkA6QhzC8iJCPQmaGro+AAQo9AAmamrg");
	this.shape_1.setTransform(43,65,0.165,0.165);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCFF").s().p("AkAFsQgHgZAZgHQCFgjCEhFQEWiPgJi5QgJi6jpgjQipgajKA1QgZAGgHgZQgHgaAZgHQDZg5CwAdQDrAmAuC9QAwDEjaCdQiZBujvBCIgEACIgKABQgRAAgGgVg");
	this.shape_2.setTransform(72.1,60,0.165,0.165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CCFF").s().p("ADhGAIgFgCQjvhCiZhuQjaidAwjEQAvi9DrgmQCvgdDZA5QAZAHgHAaQgHAagZgHQjKg1ipAaQjpAjgJC6QgJC5EXCPQCEBFCEAjQAZAHgHAZQgGAVgRAAIgJgBg");
	this.shape_3.setTransform(13.8,60,0.165,0.165);

	this.instance_2 = new lib.CompoundPath();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44,66,0.165,0.165,0,0,0,247.9,179.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.shape,this.shape_1,this.shape_2,this.shape_3,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkeEfQh2h3gBioQABinB2h3QB3h2CnAAQCoAAB3B2QB3B3gBCnQABCoh3B3Qh3B2ioABQingBh3h2g");
	this.shape_4.setTransform(43.7,63.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 1
	this.instance_3 = new lib.pointercopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.6,84,1,1,0,0,0,57.6,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.keyboard_pointercopy3, new cjs.Rectangle(-0.5,19,88.3,88.4), null);


(lib.ju3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.keyboard_pointercopy3();
	this.instance.parent = this;
	this.instance.setTransform(84.3,87.3,0.356,0.356,0,0,0,43.1,64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.96,scaleY:1.96,y:87.4},14).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.7,71.1,31.5,31.5);


// stage content:
(lib.Element_icon_mask_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CITY 1
	this.instance = new lib.ju3();
	this.instance.parent = this;
	this.instance.setTransform(222.4,200.1,0.976,0.977,0,0,0,108.2,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(383.9,363.1,30.7,30.7);
// library properties:
lib.properties = {
	id: '0F5430942E7A614D9A7AFDC8241289BD',
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
an.compositions['0F5430942E7A614D9A7AFDC8241289BD'] = {
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