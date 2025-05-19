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



(lib.plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Page #1":0});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2E9EE").s().p("AgCAAQgBgOADAAQADAAAAAOQAAAPgDAAQgDAAABgPg");
	this.shape.setTransform(44.6,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2E9EE").s().p("AgDAAQAAgQADAAQAEAAAAAQQAAARgEAAQgDAAAAgRg");
	this.shape_1.setTransform(45.2,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#919191"],[0.545,1],-0.4,0,0.5,0).s().p("AgDAAQAAgSADAAQAEAAAAASQAAATgEAAQgDAAAAgTg");
	this.shape_2.setTransform(44.9,-17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#BBBBBB"],[0,1],-0.6,0,0.7,0).s().p("AgGAAQAAgcAGAAQAHAAAAAcQAAAdgHAAQgGAAAAgdg");
	this.shape_3.setTransform(44.2,-22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F9DA8").s().p("AgMAHQgFAAABgFIAAgCQgBgFAFAAIAZgCQAFAAgBAEIAAAGQABAFgFAAg");
	this.shape_4.setTransform(42.8,-7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F9DA8").s().p("AgPAIQgGAAAAgGIAAgDQAAgFAGgBIAfgCQAGAAAAAGIAAAHQAAAGgGAAg");
	this.shape_5.setTransform(42.9,-9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#848484","#D0D0D0","#6A6A6A"],[0.02,0.667,1],0,1.1,0,-1).s().p("AgUAKQgHAAAAgHIAAgFQAAgHAHgBIAogBQAIgBAAAIIAAAKQAAAGgIABg");
	this.shape_6.setTransform(42,-17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#848484","#D0D0D0","#6A6A6A"],[0.02,0.667,1],0,-1.6,0,1.7).s().p("AgZAMQgJAAAAgIIAAgHQAAgJAJAAIAzgDQAJAAAAAJIAAANQAAAJgJAAg");
	this.shape_7.setTransform(40.6,-22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8A8791").s().p("AgNABQgBAAAAAAQAAAAAAAAQAAAAABgBQABAAACAAQAHgBAIAAIAKADg");
	this.shape_8.setTransform(55.6,-16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B0BC").s().p("AghBeIgHi7IASAAIA/C7g");
	this.shape_9.setTransform(39.4,-23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7C4A3F").s().p("AglBjIgHjFIAYAAIBBDFg");
	this.shape_10.setTransform(39.8,-24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3B0BC").s().p("AgUgNIAXgFIASAfIgeAFg");
	this.shape_11.setTransform(13.3,-18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7C4A3F").s().p("AgYgQIAcgFIAVAkIgkAHg");
	this.shape_12.setTransform(13.5,-18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E17459").s().p("AgVgcIAWgCIAHAYQAIAYAFACQAHADgxAJg");
	this.shape_13.setTransform(15.2,-19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#E17459","#E3C3A7","#E9D8C0","#E17459"],[0,0.647,0.784,0.98],-25.7,0,25.8,0).s().p("AAQgCQhhAChkgBIgqgCQgWAAgMACQAJgNAjgBQAFAAAVAFIAZgBICsgBQB+AAAlACQAEABAHADIAKADIAWACQAXADAIADQALAEAAAHQiAgVhyADg");
	this.shape_14.setTransform(38,-15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#9A9A9A","#767676","#FFFFFF"],[0.271,0.408,0.561,0.6],-21.1,-8.9,21.2,8.9).s().p("AjlgRIADgBID5ABQByAABdAQIAAABQAAALg7AFQgvADhsAAQj1gBAAgjg");
	this.shape_15.setTransform(39.5,-14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#848484","#595959","#AEAEAE","#6A6A6A"],[0.02,0.039,0.831,1],-25.8,0,25.8,0).s().p("Ai+AJQhDgNAAgQIAAgBQAogFBQABICYADQCHAABrATIABACQAAAMhFAIQhEAHhxAAQh3AAhPgRg");
	this.shape_16.setTransform(38.1,-13.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3B0BC").s().p("AgHAmIgehLIBLAAIgYBLg");
	this.shape_17.setTransform(40,-8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C4A3F").s().p("AgIApIgghRIBRAAIgaBRg");
	this.shape_18.setTransform(40.4,-8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3B0BC").s().p("AgOgKIAagJIADAiIgRAFg");
	this.shape_19.setTransform(14.4,-13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C4A3F").s().p("AgSgOIAigLIADAuIgWAFg");
	this.shape_20.setTransform(14.5,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,-33.9,52.9,29.9);


(lib.planemovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plane("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(172,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.98,scaleY:1.98,rotation:-2.8,x:466,y:208.8},197).to({_off:true},1).wait(440));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183,1.1,52.9,29.9);


// stage content:
(lib.Element_sky_plane_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plane
	this.instance = new lib.planemovie();
	this.instance.parent = this;
	this.instance.setTransform(881.3,-22.1,1.813,1.813,0,0,180,-9,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(972.3,319.2,95.9,54.2);
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