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


(lib.juy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah0eNQgXgEgwgWQgwgWgXgEQgIAAgQAEQgTAFgJgBQgUgCgYgLQhcgRAWhEQAAgDgMgNQgOgNADgNQAFgoAAgYQAAgRAWg+QADgLAKgHQAMgJAFgKQA6h5gojCQgEgqgEgWQgJgpgcgCIhJgFIgkgNQgVAAgCgNQAAgSADgPIAZkBIAZj5QARiVARhnQAUhsgKh9QgBgfgUguQgYg0gGgUQgYheAGhjQADg6gMheQgPhygBgmQgGhaAahyQAHgjgEg7QgEhAAEgdQAEgaAdgwQAagsADgdQAIhEAbhzQAUhRBzg3QAQgIgVgbQgXghAMgUQAPgYgPgGIgIgEQgiiNAbgrQAbgsAFgnQAEgnAfgbQAegbAHgOQAGgOBLgRQBLgSApANQClADAuBwQAuBwgOBvQgQAIgDANQgIAlgKALQgcAcgCAFQgNAsgWAfQgDAGgWASQgTARARAHQAHAEAWAFQAUAEAJAHQAYARANAFQASAJgDATQgGAdACAEQAEAUAhAzIAWA2QAkBvACAYQACAfAhBRQALAnAEA6QAAArAJAqQAEAPAKAbQAMAcADAOQAEARACAWQAGASAMARQAuA3AFAJQAKAPAuASQAiAPAAAfIAABAQgFAygYgRQgBgCgBAUQAAAVgFAAIglAkQgdAcAAAzIgffEIACA+QgCAygOACQgdACgFgNQgEgGAAghIAFmHQgBlPANnwQAFoDAEkAQgjAFgCgxQACg7gCgSQgShLgHgGQgKgHgYgCQgYgCAAANQgBAjANBCQANBEgBAfQAAAHAgBEQAbA6gNAFQgUAJgyAIQgGADABAcQAAAPAEAWQACAxgCBhQAFBgABDBQAJEwgCBYIAABPQgBAPgGAFQgKAEAAAFQgCALgPATQgMAOAAANIgHA9QgCAQhsgLQggANAAgCQgEANgYACIgigCQh0gNgLAhIgiBYQhcDgA/BCQALALAdARQAEACAIgCQAFgCAEAEQAZAhANgJQAIgEAOANQANALABAHQADAEATADIAZAEQA0ALAaAHQAtALAUAeQAVAZg+ARQggAJguAGIBEAjQAqAWAPAbQALAYAAAEQAAAJgTALQgbAOg1AEIggABQhaAAhIgRgAEFgPQgHANAPAGQAPAIAHgMQABgNgMgGQgFgCgEAAQgGAAgEAGg");
	this.shape.setTransform(45.9,159.3,0.833,0.833,0,0,0,0.1,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.juy1, new cjs.Rectangle(0,0,91.6,324.9), null);


(lib.efuweit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.juy1();
	this.instance.parent = this;
	this.instance.setTransform(45.8,162.5,1,1,0,0,180,45.8,162.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.6,324.9);


// stage content:
(lib.People_woman_old_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.efuweit();
	this.instance.parent = this;
	this.instance.setTransform(198,205,1,1,0,0,0,45.8,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(687.2,367.5,91.6,324.9);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;