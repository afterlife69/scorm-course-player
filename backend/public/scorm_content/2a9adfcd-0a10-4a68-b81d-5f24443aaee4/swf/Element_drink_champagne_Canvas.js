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


(lib.table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2B2B2B","#CCCCCC"],[0,1],0,-68.7,0,9.8).s().p("At3CYQlvg/AAhZQAAhYFvg/QFwg/IHAAQIIAAFwA/QFvA/AABYQAABZlvA/QlwA/oIAAQoHAAlwg/g");
	this.shape.setTransform(0.2,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#515151","#CCCCCC","#DCEAF8"],[0,0.745,1],0,22.5,0,-4.2).s().p("AtvB3Qlsg+AAhYIgKg6QgHgwANgKQAtggB6AFQBVAEDIAdQEFAmBuANQDqAaDBAAQDMAADvgcQB6gOD+goQDIgfBPgEQB0gFAiAiQAIAIgEA0IgFA9QAABYlsA+QlsA/oHAAQoGAAlsg/g");
	this.shape_1.setTransform(-0.1,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.table, new cjs.Rectangle(-125.7,-27,251.5,54), null);


(lib.shad1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AlaBOQiQggAAguQAAgtCQghQCQggDKgBQDLABCQAgQCQAhAAAtQAAAuiQAgQiQAijLAAQjKAAiQgig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shad1, new cjs.Rectangle(-49.1,-11.1,98.2,22.3), null);


(lib.leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(51,51,51,0.424)","rgba(51,51,51,0)"],[0,1],-83,-5,-72.1,149.1).s().p("AjqmUIHVAAIAAMGQjbAcj6AGg");
	this.shape.setTransform(0,-79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#666666"],[0,1],-15.2,3.9,6.4,3.9).s().p("AjqSrMAAAglVIHVAAMAAAAlVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.leg, new cjs.Rectangle(-23.5,-119.5,47,239), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AjfO+QBigBBKgMQBagPBDggQAvgWAEhGQgFhUAAgjIAAnJQAAhGAOkUQAKjYgKiDQgIixgHhXQgLiDgYhkQAmCIAWBiQAgCQAJB7QAKCIgEDQIgGFXIAAHJQAAAjAFBUQgEBGgwAWQhPAmhtAOQhJAJhfAAIglgBg");
	this.shape.setTransform(22.4,98.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,2.8,44.8,191.8), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUO1QhugPhPglQgvgXgEhGQAFhTAAgjIAAnJIgHlYQgDjPAKiJQAJh6AfiQQAVhiAniHQgaBmgOCDQgDAcgSDwQgKCGAGDRQAJEqAAAtQAABMAKCYQAKCYAABNQAAAjgFBTQAEBGAwAXQB7A6DNAEIghAAQhhAAhKgKg");
	this.shape.setTransform(22.4,98.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,2.9,44.8,191.9), null);


(lib.LiquidTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Liquid
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(247,235,185,0.953)","rgba(215,199,176,0.941)"],[0.322,0.98],0.3,-4.9,0,0.3,-4.9,3.3).s().p("Aj5BQIAAh5QDYhMEbBMIAAB5g");
	this.shape.setTransform(0,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LiquidTop, new cjs.Rectangle(-25,-3.6,50,16.1), null);


(lib.LiquidShade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Gradient1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(253,185,28,0.102)","rgba(243,186,131,0.114)","rgba(119,119,119,0)"],[0,0.698,1],0,0,0,0,0,8.2).s().p("AhXBPQgkghAAguQAAgtAkgiQAlggAyAAQAzAAAlAgQAkAiAAAtQAAAugkAhQglAhgzAAQgyAAglghg");
	this.shape.setTransform(0,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Gradient 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(253,185,28,0.082)","rgba(236,175,87,0.18)","rgba(119,119,119,0)"],[0,0.698,1],0,0,0,0,0,9.8).s().p("AhPBeQghgnAAg3QAAg2AhgoQAhgnAuAAQAvAAAhAnQAhAoAAA2QAAA3ghAnQghAogvAAQguAAghgog");
	this.shape_1.setTransform(0,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.LiquidShade, new cjs.Rectangle(-12.3,-17,24.8,34.3), null);


(lib.Liquid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Liquid Gradient 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(247,235,185,0.031)","rgba(153,135,73,0.902)"],[0.475,1],-3.5,-12.1,0,-3.5,-12.1,65.3).s().p("Aj5IHIAAwMQEWAzDdgzIAAQMg");
	this.shape.setTransform(0,-51.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Liquid Gradient 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#998749","#D8CA94","#F7EBB9","#E0D29D","#998749"],[0.008,0.141,0.322,0.725,0.98],-25,0,25,0).s().p("Aj5IHIAAwMQCAAUB8AAIAEAAQB7AAB4gUIAAQMg");
	this.shape_1.setTransform(0,-51.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Liquid, new cjs.Rectangle(-25,-103.7,50,103.7), null);


(lib.GlassFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(115,133,140,0.333)","rgba(160,173,177,0.29)","rgba(199,207,209,0.412)"],[0,0.49,1],-25.1,0,25.2,0).s().p("AiZSRQg/gLgFgOIgBAAIABgDQBdgWAkghQA8g1ABh7IAAoHQAAjagih5QgHgdhFihQhgjmgLkcQgKkJA/kGQAAAJA5AFQA9AHBNAAQBQAAA7gHQA5gFAAgJQA/EGgKEJQgLEchiDmQhECmgGAYQgiB5AADaIAAIHQABB7A8A1QAkAhBdAWIAAADQgFAOg/ALQhCALhYAAQhXAAhCgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.GlassFront, new cjs.Rectangle(-25.1,-117.9,50.2,235.9), null);


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,217,68,0.012)","rgba(252,248,207,0.592)"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgEgGAAgGQAAgFAEgGQAGgEAFAAQAGAAAGAEQAEAGAAAFQAAAGgEAGQgGAEgGAAQgFAAgGgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bubble, new cjs.Rectangle(-1.6,-1.6,3.2,3.2), null);


(lib.table2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.table();
	this.instance.parent = this;
	this.instance.setTransform(0,-98.7,1.883,1.883);

	this.instance_1 = new lib.leg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.table2, new cjs.Rectangle(-236.7,-149.5,473.4,299.1), null);


(lib.pudele = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(-19.2,67.6,0.832,0.832,0,0,0,22.4,98.8);
	this.instance.alpha = 0.539;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#300C0C","#611616","#300C0C"],[0,0.49,1],-48.3,0,48.3,0).s().p("AkOE5IhTgHIhXgKIgVgDIAAlpQAAhUgEinIAZAEIACAAIDsAUQAQACAQgBIDiADID+gLQAtgEArgFIABAAIBDgJQAABlgEDJQgEDHAABjIAAAMQjGAdkHAAg");
	this.shape.setTransform(0.1,92.3,0.832,0.832);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EBC27D","#EDD089","#F4E8D9","#BF8329","#EBBF81"],[0.004,0.184,0.412,0.729,0.949],-48.3,0,48.3,0).s().p("AlhATIgDgBIgmgDIgGgBIg8gIIAAgnQBJAKBHAGIBaAGIDfAGQEHAADHgcIACAmQjJAdkHAAQi+AAiggPg");
	this.shape_1.setTransform(0.1,119.4,0.832,0.832);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EBC27D","#EDD089","#F4E8D9","#BF8329","#EBBF81"],[0.004,0.184,0.412,0.729,0.949],-48.4,0.1,48.4,0.1).s().p("AipA6QgQAAgQgBIhpgHQg5gEgegEIgsgFIgCAAIgZgDIgChdIBnANQCnAQDAAAQEJAADNgeIABBcIgYAEIgBAAIgqAFIgBAAQgrAGgtADIgEAAIhcAGIhoAFg");
	this.shape_2.setTransform(0,62.9,0.832,0.832);

	this.instance_1 = new lib.Group_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,67.4,0.832,0.832,0,0,0,22.4,98.6);
	this.instance_1.alpha = 0.539;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D1515").s().p("AhvBwQgvgvABhBQgBhBAvguQAugvBBAAQBBAAAvAvQAuAuAABBQAABBguAvQgvAuhBAAQhBAAgugug");
	this.shape_3.setTransform(-0.4,-12.1,0.832,0.832);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FBC926","#FFFBCC","#F8F0BB","#E7D28E","#CCA246","#C3922E","#EED688","#FFFBCC"],[0.004,0.251,0.306,0.408,0.549,0.596,0.871,1],-26.6,0.6,39.2,-0.9).s().p("AkSJ4IAWhMQBOkSAkidQA3jrATjLQANiEABgSQAChXgXg9IgHgVQAMgEAWACQAYADAJgCQANgDAegOQAagNAQgBQAHAAAOAGQAOAFAGAAQAIAAAQgFQAPgFAIABQAPABAQALQARAMAKACQAIACAVgEQAVgEAFABQgCAJgEAIIgQA2QgKAgAAAXQABBiAPCKQgThagTg7QgkhwgzgXQg3gZgeAYQgOALgEARQgqBthKHhQgrEagqFJQg1gOgzgTg");
	this.shape_4.setTransform(-8.4,-60.9,0.832,0.832);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FBC926","#FFFBCC","#F8F0BB","#E7D28E","#CCA246","#C3922E","#EED688","#FFFBCC"],[0.004,0.251,0.306,0.408,0.549,0.596,0.871,1],0,-71,0,73.4).s().p("AgWBaIgCgLQgKhUARAjQAIARAHAXQgJgjg4kHQg9kfACgOIAEgYIADgJQDqQVAFARQACAIAFAKQAAAAAAABQAAAAAAAAQAAAAgBAAQgBgBgBgBQgGgGgchAQgehEgGgcQgFgSgWh7QgUhrAAALIAGDiQAEDWgHAKQgQlJgQiRg");
	this.shape_5.setTransform(16.3,-53.5,0.832,0.832);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FBC926","#FFFBCC","#F8F0BB","#E7D28E","#CCA246","#C3922E","#EED688","#FFFBCC"],[0.004,0.251,0.306,0.408,0.549,0.596,0.871,1],0.8,-76.6,0.8,69.9).s().p("Ag7DnQAPhFAPhTIBGloIAwj0IhZIoQgDAXAEAOQAGANACgNQABgJgJDRIgIDTQgKhpAAgRQAAgXgDgoQgEgygFAAQgFAAgTCEIgUCRIgPAKg");
	this.shape_6.setTransform(-13,-50.8,0.832,0.832);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EBC27D","#DFB87C","#BF8329","#EBBF81","#EEDCC3"],[0.004,0.184,0.596,0.871,1],0,-11.1,0,11.5).s().p("AgHABQAEhWADgCQAIgCACAMIAABKIgTBbIAChXg");
	this.shape_7.setTransform(-2.3,-132.8,0.832,0.832);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EBC27D","#DFB87C","#BF8329","#EBBF81","#EEDCC3"],[0.004,0.184,0.596,0.871,1],0,-12.3,0,12.8).s().p("AgSBYQgEgDAAgHIACgHIACgHQACgGAIg5QAHg4AAgHQAAgGAMgPIAMgOIgEAZQgDAaAAAIQAAAMgPBNIgBAIQAAAKADAJQAFAPAPAFQghgFgIgFg");
	this.shape_8.setTransform(-10.5,-133.3,0.832,0.832);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EBC27D","#DFB87C","#BF8329","#EBBF81","#EEDCC3"],[0.004,0.184,0.596,0.871,1],0,-10.5,0,10.7).s().p("AgBAjQAVhiACgSIgHBrIAAAPQAAAHgDAFIgNATIgUAKQAPgYAFgXg");
	this.shape_9.setTransform(5.3,-134,0.832,0.832);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#EBC27D","#DFB87C","#BF8329","#EBBF81","#EEDCC3"],[0.004,0.184,0.596,0.871,1],-30.6,-35.4,29.8,35.7).s().p("Ah/DIQgegZgCgPIgIgpQgFgeAHAFQAJAHAngCIACgCQADgBAJADIAXAHQANADAIgFQAJgFAaABQAXAAAKAEQAMAFAdgHIAdAPQAcAMAAgKQAAgKgigTQglgXgFgHQgJgMAFgDQADgDALAGQAQAKAUgFIAPgDQAIgCAEgFQAIgJAEgZIAEgmIABggIAFgSQAEgQgBgKIgEgaQgDgOgIgLQgKgSgFgFQgJgKgSADQgYAFgXABQgbACgDgFQgCgEAHgCQAKgDABgGQADgPgmAAQgjAAgMADQgGABgEgFQgEgGADgGQAegJAzgBQBAgBAmAXQAtAbAHBRQAEAtgCBRQADAZAKA2QAGAxgPAdQgCANgGASIgKAeg");
	this.shape_10.setTransform(0.7,-127.5,0.832,0.832);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FBC926","#FFFBCC","#F8F0BB","#E7D28E","#CCA246","#C3922E","#EED688","#FFFBCC"],[0.004,0.251,0.306,0.408,0.549,0.596,0.871,1],0,-45.6,0,170.6).s().p("AiEDIQgdgZgCgPQgDgNAEgbQAEgcAHAFQAKAHATgFIACgCQAEgBAJADIAXAHQANADAIgFQAJgFAZABQAYAAAJAEQAMAFAegHIAcAPQAcAMAAgKQAAgKghgTQgmgXgFgHQgIgMAEgDQAEgDAKAGQAQAKAVgFIAOgDQAIgCAFgFQAIgJAEgZIADgmIACggIAEgSQAEgQgBgKIgDgaQgEgOgIgLQgJgSgGgFQgJgKgRADQgZAFgXABQgaACgDgFQgDgEAIgCQAJgDACgGQADgPgnAAQgiAAgMADQgGABgEgFQgFgGADgGQAfgJAzgBQA/gBAnAXQAsAbAHBRQAEAtgBBRQACAZAKA2QAHAxgPAdQgDANgGASIgJAeg");
	this.shape_11.setTransform(1.1,-127.5,0.832,0.832);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FBC926","#FFFBCC","#F8F0BB","#E7D28E","#CCA246","#C3922E","#EED688","#FFFBCC"],[0.004,0.251,0.306,0.408,0.549,0.596,0.871,1],-37.3,0,37.4,0).s().p("AhPNxQglgTgYghQh2gPhygrIAVhNQBOkRAlidQA2jtAUjJQANiEAAgTQAChXgXg9QgMgfgBgtQAAghAGgyQAVgtAEhGQAFhYAkghQAigfBWgBQBBgBAmAYQAsAbAHBRQAEAtgBBRQACAaALA2QAGAwgPAeIgQA1QgKAgAAAXQACCQAdDSQAVCgBBDoQAlCCBLEEQhrAzh8ASQgZAigkATQgmAUgrAAQgqAAglgUg");
	this.shape_12.setTransform(0,-72.4,0.832,0.832);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(56,99,25,0)","#386319","#527C2E","#94BB64","#B0D57B"],[0,0.804,0.804,0.839,0.925,0.957],0,-221.6,0,218.5).s().p("AigboQiagLhlgwQgwgXgEhGQAFhTAAgjIAAnJIgGlZQgEjPAKiJQAJh6AgiQQAXhrAsiaQBPkTAkibQA3jtATjKQANiMAAgLQADhXgYg9QgMgfAAgtQgBghAGgyQAVgtAEhGQAFhYAkghQAigfBXgBQBAgBAmAYQAtAbAHBRQAEAtgCBRQADAaAKA2QAGAwgPAeQgBAIgOAtQgLAgABAXQABCLAdDXQATCQAzC+IBgFMQA6DIAaCEQAjC2gDCZQAOC+gEEdIgHHbQAAAkAMB1QAGBsgbAgQguA1h3ASQgbADiaAJQhcAFhGAAQg4AAgsgDg");
	this.shape_13.setTransform(0,0,0.832,0.832);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#7CB23D","#7EB440","#86B949","#94C259","#A6CE6F","#B0D57B","#90B761","#759D4B","#5E8838","#4D772A","#416C20","#3A651B","#386319","rgba(56,99,25,0)","rgba(0,0,0,0)"],[0,0.129,0.224,0.306,0.38,0.412,0.439,0.467,0.498,0.537,0.58,0.643,0.804,0.804,1],0,-221.6,0,218.5).s().p("AigboQiagLhlgwQgwgXgEhGQAFhTAAgjIAAnJIgGlZQgEjPAKiJQAJh6AgiQQAXhrAsiaQBPkTAkibQA3jtATjKQANiMAAgLQADhXgYg9QgMgfAAgtQgBghAGgyQAVgtAEhGQAFhYAkghQAigfBXgBQBAgBAmAYQAtAbAHBRQAEAtgCBRQADAaAKA2QAGAwgPAeQgBAIgOAtQgLAgABAXQABCLAdDXQATCQAzC+IBgFMQA6DIAaCEQAjC2gDCZQAOC+gEEdIgHHbQAAAkAMB1QAGBsgbAgQguA1h3ASQgbADiaAJQhcAFhGAAQg4AAgsgDg");
	this.shape_14.setTransform(0,0,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.shad1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-14.7,138.4);
	this.instance_2.alpha = 0.488;
	this.instance_2.filters = [new cjs.BlurFilter(55, 6, 1)];
	this.instance_2.cache(-51,-13,102,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.pudele, new cjs.Rectangle(-91.8,-147.3,157,303.5), null);


(lib.ChampagneGlass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Top Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(115,115,115,0.192)").s().p("Ag8AAIABgEQAAADASABQASABAXAAQAZAAARgBQASgBAAgDIABAEQgUAFgpAAQgoAAgUgFg");
	this.shape.setTransform(0,-112.8,3.264,3.267);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Reflection
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.18)").s().p("AhfIVIguhlQhgjmgLkcQgKkIA/kGQAAAHAuAFQg7GVA8FEQA5E9BygPQB9gQAwlrQAtlmhQkoQAjgFAAgFQA/EGgKEIQgLEchiDmIgqBkQgwBNgxAAQgwAAgwhMg");
	this.shape_1.setTransform(0,-53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.18)").s().p("AgKAIQgBgxAHhFIAPABQgNBaACCCQgKgyAAg1g");
	this.shape_2.setTransform(-9.9,-72.3,3.264,3.267);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Glass Front
	this.instance = new lib.GlassFront();
	this.instance.parent = this;
	this.instance.setTransform(0,3.6);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhhHcQgpghgTg0QhIjPgKjzQgIjlAvjkIANg0QApAOCSAAQCTAAApgOIALA0QAxDkgIDlQgKDxhJDRQgSA0gpAhQgsAig2AAQg1AAgsgig");
	mask.setTransform(0,-56.9);

	// Liquid
	this.Liquid = new lib.Liquid();
	this.Liquid.parent = this;
	this.Liquid.setTransform(0,-98.6,1,1,0,0,0,0,-95);

	var maskedShapeInstanceList = [this.Liquid];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Liquid).wait(1));

	// LiquidTop
	this.LiquidTop = new lib.LiquidTop();
	this.LiquidTop.parent = this;
	this.LiquidTop.setTransform(0,-103.4,1,1,0,0,0,0,4.4);

	var maskedShapeInstanceList = [this.LiquidTop];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.LiquidTop).wait(1));

	// LiquidShadow
	this.LiquidShade = new lib.LiquidShade();
	this.LiquidShade.parent = this;
	this.LiquidShade.setTransform(-0.1,7.6,1.111,0.675,0,0,0,0,13.5);

	this.timeline.addTween(cjs.Tween.get(this.LiquidShade).wait(1));

	// Middle
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(186,194,197,0.6)","rgba(208,216,217,0.322)","rgba(181,191,193,0.6)"],[0.38,0.475,0.569],-17.2,4.1,17.4,4.1).s().p("AABJZQg4AAgyAEIAOgLQA8g1AAh7IAAoGQAAjaghh4QgHgbg7iLIABAAIAiBMQBhCYBhiaIAehHIABgDIABAAQg7CPgGAXQghB4AADaIAAIGQAAB7A9A1IANALQgygEg4AAg");
	this.shape_3.setTransform(-0.1,52.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(135,153,154,0)","rgba(187,187,187,0.6)"],[0,1],0,-58.8,0,0,-58.8,58.7).s().p("AhfIVIgjhMIgLgZQhgjmgLkcQgKkIA/kGQAAADAIADIgNA0QgvDkAIDlQAKDyBIDQQATA0ApAhQAsAiA1AAQA2AAAsgiQApghASg0QBJjRAKjxQAIjlgxjkIgMg1QAJgCAAgDQA/EGgKEIQgLEchiDmIgLAcIgfBIQgwBNgxAAQgwAAgwhMgAizpZQALADATACIAAABQgSgCgMgEgAChpWQASgCAIgDQgJAEgQACIgBgBg");
	this.shape_4.setTransform(0,-53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Bottom3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(181,191,193,0.4)","rgba(191,200,198,0.541)","rgba(187,196,192,0.6)","rgba(196,204,204,0.89)","rgba(185,197,198,0.953)","rgba(181,191,193,0.522)","rgba(196,196,196,0.843)","rgba(177,181,188,0)","rgba(169,180,170,0.322)","rgba(157,157,157,0.4)"],[0,0.133,0.255,0.365,0.486,0.627,0.757,0.824,0.918,1],0,0,0,0,0,2.2).s().p("AhDAQQgcgHgBgJQABgIAcgGQAcgHAnAAQAoAAAcAHQAcAGAAAIQAAAJgcAHQgcAGgoAAQgnAAgcgGg");
	this.shape_5.setTransform(0,119.3,3.067,2.973);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Glass Back
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(115,133,140,0.6)","rgba(160,173,177,0.224)","rgba(138,155,159,0.6)"],[0,0.49,1],-7.7,0,7.7,0).s().p("AgrFqQgTgDgEgEIgBgCIAAAAQAdgHALgKQASgRAAglIAAifQAAhDgKglQgDgJgUgwQgehHgEhXQgDhRAUhQQAAgCASgCQARgCAYAAQA7AAABAGQATBQgDBRQgDBXgeBHQgVAygCAHQgKAlAABDIAACfQAAAlATARQALAKAcAHIAAAAQgBAFgUADQgUADgbAAQgYAAgTgCg");
	this.shape_6.setTransform(0,2.5,3.264,3.267);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Bottom1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(223,227,227,0.592)","rgba(191,200,198,0.812)","rgba(187,196,192,0.824)","rgba(196,204,204,0.851)","rgba(208,216,217,0.882)","rgba(173,184,182,0.863)","rgba(179,179,179,0.871)","rgba(197,199,203,0.902)","rgba(215,219,215,0.761)","rgba(179,179,179,0.8)"],[0,0.133,0.251,0.365,0.475,0.616,0.706,0.824,0.918,1],0,0,0,0,0,2.2).s().p("AhDAQQgcgHgBgJQABgIAcgGQAcgHAnAAQAoAAAcAHQAcAGAAAIQAAAJgcAHQgcAGgoAAQgnAAgcgGg");
	this.shape_7.setTransform(0,119.2,3.067,2.973);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Bottom2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(139,156,167,0.78)").s().p("AhEAGQgcgGAAgIIAAgEQABAJAbAFQAdAGAnAAQAoAAAcgGQAcgFAAgJIAAAEQAAAIgcAGQgcAHgoAAQgnAAgdgHg");
	this.shape_8.setTransform(0,123.2,3.067,2.973);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Shadow
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(0,0,0,0.243)","rgba(119,119,119,0)"],[0.847,1],0,0,0,0,0,8.5).s().p("Aj2BCQhmgcAAgmQAAglBmgcQBmgcCQAAQCRAABmAcQBmAcAAAlQAAAmhmAcQhmAciRAAQiQAAhmgcg");
	this.shape_9.setTransform(0,120.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ChampagneGlass, new cjs.Rectangle(-34.9,-116.5,69.8,246.3), null);


(lib.table_bottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// ChampagneGlass
	this.instance = new lib.ChampagneGlass();
	this.instance.parent = this;
	this.instance.setTransform(21.6,-53.8,0.903,0.903,0,0,0,0,6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({x:29.6,y:-77.8,alpha:1},11).to({regY:5.9},35).wait(1).to({regX:-3.5,regY:57},0).wait(1).to({regX:-4.8,regY:76.3},0).wait(1).to({regX:-5.8,regY:90.8},0).wait(1).to({regX:-6.6,regY:101.7},0).wait(1).to({regX:-7.2,regY:110.2,x:29.5},0).wait(1).to({regX:-7.6,regY:116.7,x:29.6},0).wait(1).to({regX:-8,regY:122.3},0).wait(1).to({regX:-8.3,regY:126.8},0).wait(1).to({regX:-8.5,regY:130.1},0).wait(1).to({regX:-8.7,regY:132.4},0).wait(1).to({regX:-8.8,regY:133.8},0).wait(1).to({regX:0,regY:6,x:37.6,y:-193.8},0).to({regX:0.1,rotation:8.8,x:71.6,y:-157.4},7).to({x:73.6,y:-179.4},12).to({regX:0,rotation:0.2,x:81.6,y:-117.3},3).to({rotation:0,x:29.6,y:-77.8},4).wait(8));

	// ChampagneGlass
	this.instance_1 = new lib.ChampagneGlass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(233.1,-62.9,0.829,0.829,0,0,0,0,6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:118.9,y:-77.8,alpha:1},11).wait(32).to({regX:10,regY:69.7,y:-77.7},0).wait(1).to({regX:13.8,regY:93.9},0).wait(1).to({regX:16.6,regY:111.9,y:-77.8},0).wait(1).to({regX:18.8,regY:125.6,y:-77.7},0).wait(1).to({regX:20.4,regY:136.1,y:-77.8},0).wait(1).to({regX:21.7,regY:144.2},0).wait(1).to({regX:22.8,regY:151.3},0).wait(1).to({regX:23.7,regY:156.8},0).wait(1).to({regX:24.3,regY:161},0).wait(1).to({regX:24.8,regY:163.8},0).wait(1).to({regX:25.1,regY:165.6},0).wait(1).to({regX:0,regY:6,x:98.1,y:-210.7},0).to({regY:6.1,rotation:-11,x:122.9,y:-179.8},7).to({x:118.9,y:-177.8},12).to({regX:-0.1,scaleX:0.83,scaleY:0.83,rotation:-2,x:122.9,y:-145.5},3).to({regX:0,regY:6,scaleX:0.83,scaleY:0.83,rotation:0,x:118.9,y:-77.8},4).wait(8));

	// pudele
	this.instance_2 = new lib.pudele();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-183.3,-147.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:-75.3,y:-141.7,alpha:1},11).wait(85));

	// table2
	this.instance_3 = new lib.table2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,123.5,1.107,1.107);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-42.1,524.1,331.2);


// stage content:
(lib.Element_drink_champagne_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Glass
	this.instance = new lib.table_bottle();
	this.instance.parent = this;
	this.instance.setTransform(198.4,243,0.654,0.654);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(561.9,540.5,343,216.6);
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