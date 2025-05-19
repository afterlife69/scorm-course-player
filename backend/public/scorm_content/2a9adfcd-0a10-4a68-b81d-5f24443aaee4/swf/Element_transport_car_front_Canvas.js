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


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 24
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#373535"],[0,1],0,0,0,0,0,14.2).s().p("AgcAfQgUAAgIgFQgKgGgBgNIgBgHQAAgSAPgHQAJgFAMAAQAdAABIAfIAAAGQgCAKgFAFQgJAJgQAAg");
	this.shape.setTransform(-20.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#373535"],[0,1],0,0,0,0,0,15.6).s().p("AgkAfQgRAAgIgJQgFgFgBgKIgBgGQBIgfAdAAQAMAAAJAFQAPAHAAASIgBAHQgBANgJAGQgKAFgTAAg");
	this.shape_1.setTransform(21.4,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#672A35","#373535"],[0.302,1],-6.6,-5.2,0,-6.6,-5.2,16.6).s().p("AAtAgIAAgTIAPAAIAEAUgAAQAgIAAgTIAcAAIAAATgAgOAfIAAgSIAdAAIAAATgAgrAZIAAgMIAcAAIAAARQgWgBgGgEgAgyANIAGAAIAAAKIgGgKgAAtAEIAAgRIAGAAQACAFAEAMgAAQAEIAAgRIAcAAIAAARgAgOAEIAAgRIAdAAIAAARgAgrAEIAAgRIAcAAIAAARgAg2AEIgHgRIARAAIAAARgAAQgTIAAgLQATADAJAGIAAACgAgOgTIAAgNIAdACIAAALgAgrgTIAAgNIAcAAIAAANgAg/gTQgCgKAJgCQAEgBAFAAIADAAIAAANg");
	this.shape_2.setTransform(-22.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#373535"],[0,1],-0.2,-3.5,0,-0.2,-3.5,10.6).s().p("AhRAXQgQAAgJgFIgFgFIAAgBIDfAAIAAABQgBADgEACQgIAFgRAAgAhxAHIgFgLIDtAAIgFALgAh3gJQgCgKAJgCQAFgCAFABIDXABQAJACgCAKg");
	this.shape_3.setTransform(0.3,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFD","#838469"],[0,1],-0.6,-1.8,6.1,19.4).s().p("Ah5AdIAAg5IDyAAIAAA5IAAAAg");
	this.shape_4.setTransform(0,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#373535"],[0,1],-3.7,-11.5,0,-3.7,-11.5,23.8).s().p("Ah4AiQgFAAAAgFIAAgGIAAggIAAgJIAAgKQAAgFAFAAIDyAAQAEAAAAAFIAAAKIAAAJIAAAgIAAAGQAAAFgEAAgAh4AeIDxAAIABgBIAAg5IjyAAg");
	this.shape_5.setTransform(-0.1,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#672A35","#373535"],[0.302,1],3.4,-4,0,3.4,-4,8.8).s().p("Ag7ANIAPAAIAAATIgTABgAgqANIAbAAIAAATIgbAAgAgOANIAdAAIAAASIgdABgAAQANIAcAAIAAAMQgGAEgWABgAAtANIAGAAIgGAKgAAtAEIAAgRIARAAIgHARgAAQAEIAAgRIAcAAIAAARgAgOAEIAAgRIAdAAIAAARgAgqAEIAAgRIAbAAIAAARgAg4AEQAEgMACgFIAGAAIAAARgAAtgTIAAgNIANABQAIACgCAKgAAQgTIAAgNIAcAAIAAANgAgOgTIAAgLIAdgCIAAANgAgqgTIAAgCQAIgGATgDIAAALg");
	this.shape_6.setTransform(23.3,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],0,-8.9,0,28.5).s().p("AB1AOIAAgKQAAgEgEAAIjyAAQgEAAAAAEIAAAKIhPAAQgFAAgEgFQgEgEAAgFQAAgFAEgEQAEgDAFAAIGpAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAFgFAAg");
	this.shape_7.setTransform(0.8,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-10.3,6.5,8.3,-3.9).s().p("AgtAlQgKgOAggGQAagGAGgdIABgdQAvAugLAaQgIAVgnACIgKAAQgZAAgJgLg");
	this.shape_8.setTransform(29,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],8.1,1.6,-9.4,-1.7).s().p("AATg9IAUgCQAAAPgCAOIgGBTQgRAIgVAEQgPACgQABg");
	this.shape_9.setTransform(33.2,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-9.3,-3.4,14.1,5.9).s().p("AALA5QgVgDgRgIIgHhpIAiAIIAjBvIgYgDg");
	this.shape_10.setTransform(-33,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],10.4,-3.9,-8.2,6.5).s().p("AACAwQgngCgIgVQgLgaAvguIABAdQAGAdAaAGQAgAGgKAOQgJALgZAAIgKAAg");
	this.shape_11.setTransform(-28.2,4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFFF","#373535"],[0,1],-14.4,-7.7,0,-14.4,-7.7,15).s().p("AhRAfQgeAAgHgPIAAgBIgCgFIgFgLIAAgBIgCgJQAAgHADgEQAGgIALABIAFAAIDNAAIAEAAQAMgBAGAIQAEAFgBAGIgJAbQgCAFgGAEQgKAFgUABgAhvAOIAFAEQAJAFAQAAICiAAQASAAAIgFQAEgCABgCIAAgBIjfAAgAhxAHIDjAAIAFgLIjtAAgAhwgVQgJACACAKIDvAAQACgKgJgCIjXAAIgFgBIgFABg");
	this.shape_12.setTransform(0.3,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F9B399","#EE3338","#7C2A2D"],[0.122,0.549,0.976],-0.1,-13.3,-0.1,-9.8).s().p("AhqASQgJAAgGgDIAAgdQAGgDAJAAIDZAAIALACIAAAfIgLACg");
	this.shape_13.setTransform(0.3,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#F9B399","#EE3338","#7C2A2D"],[0.122,0.549,0.976],-9.8,0.7,-3.1,0.3).s().p("AADBOQgNgNAAgUQAAgUAPgPQgPgQAAghQAAgRADgQIABgDIACgEIAAAFQgCANAAAWQAAAhAQAPIABACIgBABQgQAPAAASQAAAMAGALIAAADIAEAJg");
	this.shape_14.setTransform(-27.5,-3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-0.1,0.8,0.3,23.2).s().p("AgQBDQgCgzAKgoQAIglAMgMIABgCIgLBTIAAAGQAAAHACAFIABACIgBACIAAgBIgCARIgBAIQABAHAEAGIAJAHIAAAAIABABIACABg");
	this.shape_15.setTransform(-34.8,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-0.1,-5.6,0.3,16.8).s().p("ACYCDIlTAAIh/AAIgkhwIAFACIADABQAJADANABQAsADCCABIAAAGQAAAFAFAAIDyAAQAEAAAAgFIAAgGQCIgBAugDQAjgDAJgTQAEgJgDgJIgCgNIAAABIgBgBIABgCQAEgKgCgJIgLhSIAAAAQAMAMAIAjQAKAngBAvIgUACIg6B+gAiNA9QgDAFAAAGIACAKIABAAIAEANIACAFIAAAAQAHAPAeAAICjAAQATAAAKgGQAGgEACgFIAJgcQABgFgEgGQgGgHgMAAIgEABIjNAAIgEgBQgMAAgGAHgACUBvIAUAAIAAgTIgPAAgAjGBvIATAAIgEgTIgPAAgACpBvIAbgBIAAgSIgbAAgAjjBuIAcABIAAgTIgcAAgADFBuIAfgBIAAgRIgfAAgAkCBtIAeABIAAgSIgeAAgADlBtQAWgCAFgEIAAgLIgbAAgAkfBnQAGAEAWACIAAgRIgcAAgAECBmIAGgKIgGAAgAkgBmIAAgKIgGAAIAGAKgAECBSIAKAAIAHgRIgRAAgADlBSIAbAAIAAgRIgbAAgADFBSIAfAAIAAgRIgfAAgACpBSIAbAAIAAgRIgbAAgACbBSIANAAIAAgRIgGAAQgDAEgEANgAjGBSIAMAAQgEgNgCgEIgGAAgAjjBSIAcAAIAAgRIgcAAgAkCBSIAeAAIAAgRIgeAAgAkfBSIAcAAIAAgRIgcAAgAkqBSIAKAAIAAgRIgRAAgAECA6IATAAQACgJgJgDIgMAAgADlA6IAbAAIAAgMIgbAAgADFAwIAAAKIAfAAIAAgMgACpA4IAAACIAbAAIAAgKQgSACgJAGgAjjA6IAcAAIAAgCQgJgGgTgCgAkCA6IAeAAIAAgKIgegCgAkfA6IAcAAIAAgMIgcAAgAksAuQgJADACAJIATAAIAAgMIgDAAIgDAAIgGAAg");
	this.shape_16.setTransform(2,10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","#373535"],[0,1],2.9,12.4,0,2.9,12.4,7.9).s().p("AgfAkQgLABgLgEQgWgHACgaQBNgjAeAAQAPAAALAHQAPAIAAAUQAAAGgCAGIAAABIgDAIIgBABIgGAGQgKAIgXAAgAg/AAIAAAGQABAKAGAFQAIAJAQAAIBBAAQAUAAAJgFQAJgGACgNIAAgHQAAgSgPgHQgIgFgNAAQgcAAhIAfg");
	this.shape_17.setTransform(21,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F9B399","#EE3338","#7C2A2D"],[0.122,0.549,0.976],18,-1.5,4.1,-0.2).s().p("AgBBNIACgIIAAgBQAGgLAAgMQAAgSgQgPIgBgBIABgBQAPgQAAghQAAgQgCgTIAAgDIAAgBIAEAJIAAAAIAAAAQADATAAALQAAAhgPARQAQAPAAATQgBAUgNANIABgBg");
	this.shape_18.setTransform(28.2,-3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],0,11,0,-21.5).s().p("AhlA4QgegDgkgWQg2gbgjAHQgRgNgBgcIABgZQAQADA2ADQAuAuASALQApAbAxgEQAegCARg/QgFAPgJAPQgUAcgWAAQgvAAgrgkIghglICVADIDWgDQgMATgVASQgrAkgvAAQgWAAgUgcIgOgeQAGAYAJAQQAOAYASABQAxAEAogbQATgMAtgtQA3gDAQgDIABAZQgBAcgRANQgjgHg2AbQgkAWgeADg");
	this.shape_19.setTransform(0.5,-4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","#373535"],[0,1],-2.9,12.4,0,-2.9,12.4,7.9).s().p("Ag+AcIgEgEQgEgFgCgHQgBgGAAgGQAAgUAPgIQALgHAPAAQAdAABNAjQACAagWAHIgVADIg9AAQgYAAgKgIgAg5gaQgPAHAAASIABAHQABANAJAGQAJAFAUAAIBBAAQAQAAAIgJQAGgFABgKIAAgGQhHgfgdAAQgMAAgJAFg");
	this.shape_20.setTransform(-20.3,1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],0,6.2,0,-16).s().p("AB5gDQCDAAAzgEQAigCAJgSIABgBIACANQADAJgFAJQgIATgkADQgtAEiJAAgAkwAZQgNgBgJgDIgDgBIgEgCIgCgBIAAAAIgBAAIgIgIIgEgGIgBgOIACgRIAAABQAKASAhACQAyADB9ABIAAAgQiCAAgtgEg");
	this.shape_21.setTransform(0.4,10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F9B399","#EE3338","#7C2A2D"],[0.122,0.549,0.976],-4.8,-2.2,-1.4,-0.6).s().p("AgIAqIAAgGIALhTIAGgHIgOBtQgDgGAAgHg");
	this.shape_22.setTransform(-33.8,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-1.9,18.3,0,-1.9,18.3,43.5).s().p("AB6BkIBfAAQAGAAAEgFQAEgEAAgFQAAgGgEgEQgEgDgGAAImoAAQgFAAgEADQgFAEAAAGQAAAFAFAEQAEAFAFAAIBOAAIAAAJQh8gBgygEQgigCgJgSIAAgBIAAgCIAPhsQAJgNANgWIAKgRIAMgWIADgGIgBACQgDARABARQgBAhARARQgRAPAAASQAAAVAOANIABABIAFAFQAKAIAYgBIA+AAIAVgDQAWgHgCgbQhOgigeAAQgPAAgLAHQgOAIAAATQAAAIABAGQgGgLAAgNQAAgQARgPIABgCIgBgBQgRgQAAghQABgXABgMIACABIAHACIAFAAIAIgBID+AJIELgJIAHABIACAAIACAAIAFgBIAEgCIABAAQADASAAARQAAAhgQAQIgCABIACACQAQAPABAQQAAAMgGAMQACgGgBgIQABgTgQgIQgKgHgPAAQgfAAhNAiQgCAbAWAHQAKAEALgBIA+AAQAYABAKgIIAFgGQAPgOAAgUQAAgRgRgQQARgRAAghQAAgLgDgTIAMAWIAJAPQAPAaAKANIAOBrIgBABIABABQgJASgiACQgzAEiDABgAEoAfQgGAegcAFQgfAHAKANQAKAOAhgCQApgCAIgWQALgagvgvgAlLBKQAJAWAoACQAhACAKgOQAKgNgfgHQgbgFgHgeIgBgeQguAvAKAagAh6AbIAAAdQAHADAJAAIDYAAIALgCIAAgfIgLgCIjYAAQgJAAgHADgAimgHQAkAWAfADIDKAAQAfgDAkgWQA1gbAkAIQARgPABgcIgCgZQgPADg3ADQgtAugTAMQgoAbgygEQgSgBgOgYQgJgRgGgXIAPAdQAUAeAWgBQAuABArgmQAWgSALgTIjWADIiUgDIAhAlQArAmAugBQAWABAUgeQAJgPAGgOQgRA/geACQgyAEgogbQgSgMgvguQg2gDgPgDIgCAZQABAcARAPQAIgCAIAAQAfAAAqAVgAkRAvgAkVAmIgBgCQACAHADAEIgEgJg");
	this.shape_23.setTransform(0.3,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-0.1,-7.5,0.1,7.5).s().p("ADRALQhWgLh7AAQhYAAg6AEQglADgaAEIAAAAIAJgLQBkgKBiAAIAEAAQBaAABuALIAIAKIgBAAg");
	this.shape_24.setTransform(0.3,-25.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-0.2,-4.8,1,20).s().p("AhVAEQAMgGA4gEQAtgDA+AAIACAAQATAAhUAIIh5ALg");
	this.shape_25.setTransform(-9.3,-27.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-0.1,-8,0.3,20.1).s().p("AABAEIgDAAQhjAAhkAKQAIgIAMgGQAQgKBRgDQApgCArAAIAAAAIBSACQBQAEASAJQAMAFAJALQhtgMhbAAgAhxgKQg4AEgMAHIgJAGIB6gLQBUgJgTAAIgCAAQg9AAgvADg");
	this.shape_26.setTransform(0.3,-27);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F9B399","#EE3338","#7C2A2D"],[0.122,0.549,0.976],-1.2,-9.6,0,0.3).s().p("AkEAIIgIABIgEAAIgIgCIgCgBIABgFIAKgQIAAgBQAAAQAMAEQAHABAGgBIGRAAIBoAAQAMgEAAgQIABACIAKARIABADIgCAAIgEACIgFABIgCAAIgCAAIgHgBIkLAJg");
	this.shape_27.setTransform(0.3,-11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","#475243","#2B2B2B"],[0.024,0.518,1],-14.3,-3.7,0,-14.3,-3.7,130.8).s().p("AhVAWQgIgHAAgNQAAgLAJgIQAIgJAMAAIAsAAQA5ASA5AbQhPgDhPALIgFAAQgJAAgHgFg");
	this.shape_28.setTransform(-6,-20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F9EC83","#475243","#2B2B2B"],[0,0.4,1],0.1,-8.7,-0.2,33.1).s().p("ABfAbQgygHg1gBQg5gbg6gSIDaAAQAMAAAIAJQAJAIAAALQAAANgJAHQgGAFgJAAIgFAAg");
	this.shape_29.setTransform(4.3,-20.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#F9EC83","#475243","#2B2B2B"],[0,0.4,1],-10.6,-12.7,0,-10.6,-12.7,42).s().p("ABdBGQg7gqg/geQA0ACAyAFQAMACAJgHQAIgGAAgMQAAgMgIgJQgJgJgMABIjZAAQgjgLgegGQA7gFBYAAQB7AABVALIApA7QARAeAGAUIgBgCQAAARgMAEg");
	this.shape_30.setTransform(6.5,-18.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","#475243","#2B2B2B"],[0.024,0.518,1],-10.9,-7.7,0,-10.9,-7.7,52.2).s().p("AjIBDQgMgEAAgRQAFgTARgcQASgfAWgdQAZgEAlgCQAeAHAjAKIgsAAQgMAAgJAIQgJAJAAAMQAAAMAIAHQAJAGAMgCQBPgJBPACQBBAeA7AqImSAAIgFABIgHgBg");
	this.shape_31.setTransform(-5.6,-18.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#672A35","#373535"],[0.302,1],-7.7,-11.4,0,-7.7,-11.4,22.2).s().p("AgtAaQgMAAgJgJQgJgJAAgLIAAgTIB4AAQAQAAAPgDIAAAWQAAALgJAJQgIAJgMAAg");
	this.shape_32.setTransform(24.8,26);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#672A35","#373535"],[0.302,1],-7.7,-11.4,0,-7.7,-11.4,22.2).s().p("AgtAaQgMAAgJgJQgJgJAAgLIAAgWIAYADIB/AAIAAATQAAALgJAJQgIAJgMAAg");
	this.shape_33.setTransform(-24.3,26);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#672A35","#373535"],[0.302,1],1.8,-7.9,0,1.8,-7.9,12.9).s().p("AgDAaIgNgWIAAAAIAPgBIgBgKQAAgNACgFQgCAIAJAWIAKAVg");
	this.shape_34.setTransform(30.7,-11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],1.7,-2.6,0,1.7,-2.6,7).s().p("AgiAVIAVAAIgKgVQgKgXADgHIAAgBIABgCQACgCADAAQAXAAAKADQAaAGAAATQAAAWgIAJQgKAKgZAAIgNAAIgEACIgJgPg");
	this.shape_35.setTransform(33.7,-10.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#672A35","#373535"],[0.302,1],-2,-7.9,0,-2,-7.9,12.9).s().p("AgSAaQAVgmgEgNQAEAJgDATIATACIgMAVg");
	this.shape_36.setTransform(-30.4,-11.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],-2,-2.7,0,-2,-2.7,7).s().p("AATAgIgNAAQgYAAgKgJQgJgJABgWQAAgTAYgGQAMgDAWAAQADAAACACIABACIAAAAQAFANgWAnIAaAAIgJARg");
	this.shape_37.setTransform(-33.4,-10.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#F9B399","#EE3338","#AD3139"],[0.122,0.549,0.976],0.6,-17.1,0.3,-7.2).s().p("AgIg1IAGAHIAKBRQACAJgEAKg");
	this.shape_38.setTransform(34.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(-37.2,-28.5,74.4,57.1), null);


(lib.awjoawfjofw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(180,138.2,4.839,4.839);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,276.3);


// stage content:
(lib.Element_transport_car_front_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.awjoawfjofw();
	this.instance.parent = this;
	this.instance.setTransform(198,211.8,1,1,0,0,0,180,138.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(553,398.6,360,276.3);
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