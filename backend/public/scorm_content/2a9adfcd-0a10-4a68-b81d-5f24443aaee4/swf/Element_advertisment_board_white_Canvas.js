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


(lib.roadad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#808184","#9A9B9E","#BBBCBE","#D3D4D5","#E1E2E3","#E6E7E8","#E3E4E5","#D8D9DA","#C6C7C8","#ACADB0","#8C8D90","#808184"],[0,0.078,0.196,0.306,0.412,0.498,0.612,0.706,0.8,0.886,0.973,1],-267,0,267.1,0).s().p("EgpuAAwIAAhfMBTdAAAIAABfg");
	this.shape.setTransform(287.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgqBAA/IAAh9MBUDAAAIAAB9g");
	this.shape_1.setTransform(287.1,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D0D2D3","#DCDDDE","#F1F1F2","#FFFFFF"],[0,0.196,0.592,1],0,130.8,0,-130.7).s().p("Egr4AUcMAAAgo3MBXwAAAMAAAAo3g");
	this.shape_2.setTransform(287.2,169.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#404041"],[0,1],0,133.6,0,-133.5).s().p("EgsSAU3MAAAgptMBYlAAAMAAAAptg");
	this.shape_3.setTransform(287.1,169.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#808184","#9A9B9E","#BBBCBE","#D3D4D5","#E1E2E3","#E6E7E8","#E3E4E5","#D8D9DA","#C6C7C8","#ACADB0","#8C8D90","#808184"],[0,0.078,0.196,0.306,0.412,0.498,0.612,0.706,0.8,0.886,0.973,1],-286.1,0.1,286.2,0.1).s().p("EgsSAVuQgLAAgHgHQgJgIABgKMAAAgqpQgBgKAJgHQAHgIALAAMBYnAAAQAKAAAIAIQAGAHAAAKMAAAAqpQAAAKgGAIQgIAHgKAAg");
	this.shape_4.setTransform(287.1,172.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#808184","#808184","#808184","#808184"],[0,0.498,0.969,1],-287.1,0.1,287.1,0.1).s().p("EgscAV5QgLAAgHgHQgJgIAAgLMAAAgq9QAAgLAJgHQAHgIALAAMBY5AAAQALAAAIAIQAIAHAAALMAAAAq9QAAALgIAIQgIAHgLAAg");
	this.shape_5.setTransform(287.2,172.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 13
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#808184","#919295","#A8AAAC","#B6B8BA","#BBBDBF","#B8BABC","#ADAFB1","#9B9D9F","#838487","#808184","#808184"],[0,0.09,0.239,0.38,0.498,0.631,0.745,0.855,0.961,0.969,1],-11.5,0,11.5,0).s().p("ABVCuQgogUgtAAQgrAAgpAUIgeAUIAAmEIDlAAIAAGEQgKgJgUgLg");
	this.shape_6.setTransform(49.9,319.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#808184","#919295","#A8AAAC","#B6B8BA","#BBBDBF","#B8BABC","#ADAFB1","#9B9D9F","#838487","#808184","#808184"],[0,0.09,0.239,0.38,0.498,0.631,0.745,0.855,0.961,0.969,1],-11.5,0,11.5,0).s().p("ABUCuQgogUgsAAQgsAAgnAUIgfAUIAAmEIDlAAIAAGEQgLgJgUgLg");
	this.shape_7.setTransform(523.9,319.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#808184","#9A9B9E","#BBBCBE","#D3D4D5","#E1E2E3","#E6E7E8","#E3E4E5","#D8D9DA","#C6C7C8","#ACADB0","#8C8D90","#808184"],[0,0.078,0.196,0.306,0.412,0.498,0.612,0.706,0.8,0.886,0.973,1],-11.5,0.1,11.5,0.1).s().p("AhAOqQgugCgEgKIAA9IIDlAAIAAdIQgIAOhrAAQgzAAgNgCg");
	this.shape_8.setTransform(49.9,380);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 10
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#808184","#9A9B9E","#BBBCBE","#D3D4D5","#E1E2E3","#E6E7E8","#E3E4E5","#D8D9DA","#C6C7C8","#ACADB0","#8C8D90","#808184"],[0,0.078,0.196,0.306,0.412,0.498,0.612,0.706,0.8,0.886,0.973,1],-11.5,0.1,11.5,0.1).s().p("Ag/OqQgvgCgEgKIAA9IIDlAAIAAdIQgIAOhrAAQgyAAgNgCg");
	this.shape_9.setTransform(523.9,380);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 11
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#808184","#9A9B9E","#BBBCBE","#D3D4D5","#E1E2E3","#E6E7E8","#E3E4E5","#D8D9DA","#C6C7C8","#ACADB0","#8C8D90","#808184"],[0,0.078,0.196,0.306,0.412,0.498,0.612,0.706,0.8,0.886,0.973,1],-5.6,-2.5,2.5,1.3).s().p("AheCJIAFhdIB7i0IA9AAIh7C0IgGBdg");
	this.shape_10.setTransform(491.4,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 12
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#808184","#9A9B9E","#BBBCBE","#D3D4D5","#E1E2E3","#E6E7E8","#E3E4E5","#D8D9DA","#C6C7C8","#ACADB0","#8C8D90","#808184"],[0,0.078,0.196,0.306,0.412,0.498,0.612,0.706,0.8,0.886,0.973,1],-2.5,1.3,5.6,-2.5).s().p("AAiCJIgEhdIh8i0IA8AAIB7C0IAGBdg");
	this.shape_11.setTransform(82.9,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.roadad, new cjs.Rectangle(0,0,574.4,473.9), null);


(lib.jdjdgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.roadad();
	this.instance.parent = this;
	this.instance.setTransform(181,279.6,0.63,0.63,0,0,0,287.2,316.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:199.6,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,80,361.9,298.6);


// stage content:
(lib.Element_advertisment_board_white_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CITY 1
	this.instance = new lib.jdjdgg();
	this.instance.parent = this;
	this.instance.setTransform(201,250.6,1,1,0,0,0,180.9,149.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(555.1,506.3,361.8,298.6);
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