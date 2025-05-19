(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.imgqw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C74433").s().p("AAADcIhTi1IgujGIAWguIALgOQgLAWgDAgQgEA5AbBBIAGANIAbBMIA2CbIAAABIABgBIA3ibIAbhMIAFgMQAbhBgEg6QgDgggKgWIAJALIAXAxIguDGIhTC1g");
	this.shape.setTransform(50,77.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1543F").s().p("AgQDXIgLAAIiagiIgHgDIgGgCIgCgBIgWgLIgKgFQhigzhChYQAag8ArgdQAOgIAOgFIAMgCQBEghA8gyQAggcARgUIgCAFIgVAuIAuDGIBTC1IAAAAgAAADXIAAAAIBTi1IAvjGIgXgyQAQATAgAcQA8AyBFAhQABgBAKADQAOAFAOAIQAsAdAaA8QhEBbhmAzQgWAMgWAIIhxAeIgDAAIgCAAQgeADgfAAg");
	this.shape_1.setTransform(50,78.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AgtAsQgYgKgQgUQgGgIgEgGIgCgGIgBABIAEgJIACgLIACgdIADADQApAuAuAAQAvAAAqgtIACgEIACAcIADAMIACAGIAAACIgBAGQgEAGgGAIQgRAUgXAKQgWALgZAAQgXAAgWgLg");
	this.shape_2.setTransform(50,57.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AgoD1QgTgDgQgIIgMgHQgchBAFg5QACggALgWIADAAIgEAJIABgBIACAGQAEAIAGAHQAQAUAXALQAWAKAYAAQAZAAAWgKQAXgLAQgUQAHgHADgIIACgGIAAgBIgCgHIABAAQALAWACAgQAFA6gbBCIAAgCQgwAWgsAAQgSAAgSgEgAhXAPIgDgDQgcgfgTgtIACgJIACgGQABAGALASIAMARQgihVAog5QAMgSASgNIAQgJQgEAYgXAaQgMAOgKAIQAkgKAfgXQAQgMAJgLQgBAMgVAcQgKAOgKAMQA4gQAvgwQAYgZAMgVQAEAQgGAmQgDATgEAQQAMgTAJgWIAGgSIAAACQAXBEgUA5QgKAdgPAPQAUgMAMgaIAGgRIADgHQABAfgbAvQgNAYgOAQQALgJAYgfIAWgeQAAAKgJAWIgKAVIAGgFQgJANgLAMIgDADQgqAuguAAQguAAgpgugACXhsQAGgaAEgdIAEgXQADACAFAWIAEAWQABgbgBgYIAFACQAKAFACASQABATgIAUQgHAQgLAKQgKAKgKAAIgLAbQAHgTAGgZgAi6iAQgJgUABgSQACgOAGgHQACAmAKApQgHgJgFgLg");
	this.shape_3.setTransform(50,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("ADfHPQBmgzBEhbQgag9gsgdQgOgIgOgFQgKgDgBABQhFghg8gyQgggcgQgTIgJgLIgCAAIgDgLIgCgcQAMgNAIgNQAPgOAMgkIALgbQAKAAALgKQAKgKAIgQQAHgUAAgSQgCgSgLgGIgFgCQgGiDg/g5QgXgUgdgJQgJgCgIAAIgGgBQhWgeg/A6QgTASgPAXIgLAVQgbA+ACBJQgGAGgCAPQAAARAIAUQAGALAHAJIACAMQALAnASAkIAQAeQgOghADgfIABgJQASAsAcAgIgCAdIgCAKIgDAAIgLAPIACgFQgRAUggAcQg8AyhEAhIgMACQgOAFgOAIQgrAdgaA9QBCBYBiAzIAKAFQhLgkg7g7QhFhFgnhaQgnhdAAhlQAAhmAnhcQAnhaBFhFQBFhFBZgnQBdgnBlAAQBlAABeAnQBZAnBFBFQBFBFAnBaQAnBcAABmQAABlgnBdQgnBahFBFQhFBFhZAmIgQAGQAWgIAWgMg");
	this.shape_4.setTransform(50,48.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2gfIgbhOIgGgMIAMAGQAQAIAUAEQA8AMBDgfIAAACIgFALIgcBOIg3CaIAAAAIg2iag");
	this.shape_5.setTransform(50,85.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD05B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(50,98.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3B4E").s().p("ABjCvQAbgvgBgfIgDAHIgGARQgMAagUAMQAPgPAKgdQAUg5gXhDIAAgCIgGARQgJAWgMATQAEgQADgTQAGglgEgQQgMAVgYAYQgvAwg4AQQAKgMAKgOQAVgcABgMQgJALgQAMQgfAXgkAKQAKgIAMgOQAXgaAEgXIgQAJQgSAMgMASQgoA5AiBVIgMgRQgLgSgBgGIgCAGIgCAJIgBAJQgCAgANAhIgPgeQgSglgLgoIgDgLQgKgpgCgmQgDhHAcg+IALgVQAPgYATgSQA/g5BVAdIAHABQAIABAJACQAcAIAYAVQA/A5AGCCQABAYgBAbIgEgWQgFgWgDgCIgEAXQgEAdgGAaQgGAZgHATQgMAkgPAPIgGAFIAKgVQAJgWAAgKIgWAeQgYAfgLAKQAOgRANgYg");
	this.shape_7.setTransform(49.5,30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#90DFAA").s().p("AAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(50,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.imgqw1, new cjs.Rectangle(0,0,100,100), null);


(lib.awfjiwwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.imgqw1();
	this.instance.parent = this;
	this.instance.setTransform(125,125,0.4,0.4,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.5,scaleY:2.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105,105,40,40);


// stage content:
(lib.People_icon_customer_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.awfjiwwe();
	this.instance.parent = this;
	this.instance.setTransform(200,200,1,1,0,0,0,125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(715,505,40,40);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;