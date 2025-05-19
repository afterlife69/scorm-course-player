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



(lib.hdqaiwhf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.365)").s().p("AAjAZIgKAAIhtAAIAAgKQB6AXAog8QACgCAFAAIAAAKQgCAngqAAIgGAAg");
	this.shape.setTransform(-95.5,102.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.451)").s().p("AAUBUQgZhSgThWQAjBFANBaIABAKQgFAAAAgBg");
	this.shape_1.setTransform(-57.5,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.165)").s().p("ACWAFIkrAAIgKAAIAAgJIE1AAIAKAAIAAAJIgKAAg");
	this.shape_2.setTransform(-120,104.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.42)").s().p("EggSAGzQA9giBGgZQAEgBAFAAQAAAFgCABQhEAihGAeIAAgKgEAgFgG8IALABIADAFIgOgGg");
	this.shape_3.setTransform(-52.3,84.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.922)").s().p("AhogEIDHAAIAKAAIAAAEQhpAFhoAAIAAgJg");
	this.shape_4.setTransform(306.5,-30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.173)").s().p("AC0AFIlxAAIAAgJIFxAAIAKAAIAAAJIgKAAg");
	this.shape_5.setTransform(215,-30.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.533)").s().p("AAiBEIhJiJQA1AzAYBPQACAEAAAFQgFAAgBgCg");
	this.shape_6.setTransform(112,-21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.714)").s().p("AACBkIAAgKQgIhagBhjIAJAAIAGDHg");
	this.shape_7.setTransform(73.8,-123);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.522)").s().p("AgdDDIAAhGQAhibAViuIAFAAIgBAKQgUDQgmC/IAAgKg");
	this.shape_8.setTransform(319,51.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.718)").s().p("AFoAFIrZAAIAAgJILPAAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_9.setTransform(-172,105.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.843)").s().p("AjWgEIErAAIAKAAIBuAAIAKAAIAAAEQjXAFjWAAIAAgJg");
	this.shape_10.setTransform(-113.5,105.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.604)").s().p("AAjAyQAJhohZgFIAUAAIAKAAQBQAJgZBtQgBABgFAAIABgKg");
	this.shape_11.setTransform(325.6,-25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.584)").s().p("AgwAAQASgqAHg5IAFgBIAAAKQgCA6gSApQgGBcBfgHIAAAFIgKABIgRABQhXAAAPhlg");
	this.shape_12.setTransform(95.9,65.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.82)").s().p("AkXgEICqAAIAKAAIFxAAIAKAAIAAAEQkYAFkXAAIAAgJg");
	this.shape_13.setTransform(206,-29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.529)").s().p("APoCHIAAhGQAYheALhzIAFAAIgBAKQgJCVgeCCIAAgKgAvQCOQgug2gRhTIBECDQACAEAAAFQgFAAgCgDg");
	this.shape_14.setTransform(225,-4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.494)").s().p("AgOBfIAAhGQATg2AFhKIAFgBIAAAKQgFBtgYBaIAAgKg");
	this.shape_15.setTransform(323.5,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.631)").s().p("AKjKPIleAAIAAgKIFeAAIAKAAIAAAKIgKAAgAhKqEIpiAAIAAgKIJiAAIAKAAIAAAKIgKAAg");
	this.shape_16.setTransform(302.5,34.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.569)").s().p("Aa9EmQhOgWg+glQBQAUBEAiQACABAAAFQgFAAgFgBgA7GkIQBcAuAbhCQABgFAAgFIAFAAQgOA+goAAQgdAAgqggg");
	this.shape_17.setTransform(274.5,101.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.29)").s().p("ACCAFIgUAAIgKAAIgeAAIgKAAIjHAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_18.setTransform(310,-31.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.549)").s().p("ABBAdQhOgUg9gmQBNAVBGAgQACABAAAFIgKgBg");
	this.shape_19.setTransform(414.5,117);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.518)").s().p("ABBAcQhHgWhEgZIAAgKQBMAXBHAeQACABAAAFQgFAAgFgCg");
	this.shape_20.setTransform(378.5,102);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.682)").s().p("AgYBkIAAgUIAri8QABgBAFAAIAAAKQgPBxgiBgIAAgKg");
	this.shape_21.setTransform(71.5,-102);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.573)").s().p("ASrK3IAAgoQAYguABhKIAFAAIAAAKQACBhggA/IAAgKgAweqZQhigGhIghQBaAPBZAUQABAAAAAFIgKgBg");
	this.shape_22.setTransform(193.5,18.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.588)").s().p("ABIAhQg7gyhcgRQBtAAAwA9QACADAAAFQgFAAgDgCg");
	this.shape_23.setTransform(50,-177.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.553)").s().p("ABaAMQhbgZhiAQIAAgJQBmgTBgAhQABAAAAAFQgFAAgFgBg");
	this.shape_24.setTransform(31,-182.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.608)").s().p("AAABpQgEhpAAhoIAJAAIAADHIAAAKg");
	this.shape_25.setTransform(-79.5,-9.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgtI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC0hKCrhUQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQCQhgC4hJQATgIgEgQQgGgdgRgIIgBgKQgNhbgkhFQAAgFgCgDQiUjigolPIAAgKIAAjIIAAgKIAAgoQAthLA1hDQACgDAAgFQGwiAD1k6QADgDAAgFQhzj1AQlXQAPlBEwg9QBigRBcAaQAFABAFAAIAKAAQBdARA7AzQADACAFAAQA2BMBEA+QADACAFAAQAnBqgICaIgBAKIgKAAQAABkAKBaIAAAKQgFAAgBABIgsC9IAAAUIAAAKQAAAFgCAFQgtCFg/B1QASBsBmAVIAKABQBJAhBgAHIAKAAQCUAqAoCVQACAEAAAFIBKCKQABACAFAAQAeAoATAzQABAEAAAFQARBTAuA3QACACAFAAQBdCwCVB5QADACAFAAIAOAHIA7BbIBcrvQAdgaAugJIAKgBQEYAAEYgFIAAgFIJiAAIAKAAQBpAABpgFIAAgFIAeAAIAKAAQBaAFgKBpIAAAKIgFABQgLBygYBfIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFABQgVCtgiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFClDYg2IAJgBIFeAAIAKAAQBEAbBIAWQAFABAFAAQBoApBoAsQACAAAAAFQA9AnBPAUIAKABQA3AUA1AYQACABAAAFQA+AmBOAVQAFABAFAAIAKAAIAAAKIAAQQIz2AAgAEJHFIgFAAQAAgFgCgEQhMiShwgPIgFABQgHA5gSAqQgQBvBqgKIAKgBQBlBNAYhrg");
	this.shape_26.setTransform(87,26.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.486)").s().p("AAUBTQgXhTgVhUQAmBDAKBcIABAKQgFAAAAgCg");
	this.shape_27.setTransform(-56.5,70.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.537)").s().p("AAXBOQgvg6gFhjQAXBRAiBFQACAEAAAFQgFAAgCgCg");
	this.shape_28.setTransform(-68,41);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.545)").s().p("AASBTQgvg6AFhtQANBcAiBEQACAEAAAFQgFAAgCgCg");
	this.shape_29.setTransform(-73.5,24.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.42)").s().p("AhFAZQA9ghBEgZQAFgBAFAAQAAAFgCABQhEAhhFAeIAAgKg");
	this.shape_30.setTransform(-252,125.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.592)").s().p("AAPCuQgoiZAGjDIAKAAQgFC9AhCWIABAKQgFAAAAgBg");
	this.shape_31.setTransform(-78,-2.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.561)").s().p("AAIBkQAAhygYhVQAqBDgMB6IgBAKg");
	this.shape_32.setTransform(-12.3,-123);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.514)").s().p("AhZADQBQgTBjAFIAAAFIgKAAQhZAFhQAOIAAgKg");
	this.shape_33.setTransform(24,-182.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.573)").s().p("AgOBLIAAgoQAXgtABhKIAFAAIAAAKQACBggfA/IAAgKg");
	this.shape_34.setTransform(314.5,80.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.62)").s().p("AgOBZQgFgdAAgeQAPg6ASg7QABgCAFAAIgBAKQgOA8gOA7IAAAoIAAAKQgFAAAAgBg");
	this.shape_35.setTransform(93,62);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.502)").s().p("AipFqQBYASBSAVIAJACIAAAEQhpgDhKgqgACjkNQgsg4gThRQAlA/AfBDQACAEAAAFQgFABgCgDg");
	this.shape_36.setTransform(111,36.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.498)").s().p("AAqA+Qg/gtgchRQAuBAAyA5QADADAAAFQgFAAgDgDg");
	this.shape_37.setTransform(141,28.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.714)").s().p("AACBfIAAgKQgIhVgBheIAJAAIAAAKIAAAKQAGBTgBBWg");
	this.shape_38.setTransform(73.8,-122.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.365)").s().p("AsGT7IgKAAIhuAAIAAgKQB7AXAog9QACgCAFAAIAAAKQgCAogqAAIgGAAgAN1w8IAAgKIAAgKIAAiqQARBXgMBwIgFABIAAgKg");
	this.shape_39.setTransform(-14.5,-22.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.529)").s().p("AgTCHIAAhGQAXheALhzIAFAAIgBAKQgJCVgdCCIAAgKg");
	this.shape_40.setTransform(327,-4.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.569)").s().p("AdTOSQhOgWg+glQBQAUBEAiQACABAAAFQgFAAgFgBgA6ytrQhhgGhJghQBaAPBZAUQABAAAAAFIgKgBg");
	this.shape_41.setTransform(259.5,39.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC0hLCrhTQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQCFhmDDhAQATgGgRgSIgBgKQgKhdgnhDQAAgFgBgFQgWhDglg1QAAgFgCgEQgjhFgXhSQAAgFgCgEQgkhDgMhdIAAgKIgBgKQgiiWAFi+IAAgKIAAgoQAphEAuhAQADgDAAgFQGxiID+k8QADgDAAgFQgdichFhzQgCgEAAgFIAAgKQANh7grhDIAAgKIAAiCQA+j5DahZQAFgCAFAAQBQgPBagFIAKAAQBjAaBlAXIAKABQCDBoA/CvQABABAFAAIAACqIAAAKIgKAAQABBeAJBWIAAAKIAAAKQgpERh3DFQASBsBmAVIAKABQBJAhBgAGIAKABQDlCRBaEdQABAFAAAFQATBRAsA4QACADAFAAQArA0AfBCQABACAFAAQAcBRBAAtQADADAFAAQAmAbAfAGQA7AkAWAaIARiNQAQg1AChaIAAgFIAymZQAdgbAugIIAKgBQEYAAEYgFIAAgFIJiAAIAKAAQBpAABpgFIAAgFIAeAAIAKAAQBaAFgKBpIAAAKIgFAAQgLBzgYBfIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFAAQgVCugiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFCkDYg1IAJgBIFeAAIAKAAQBEAaBIAWQAFACAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvAOApAUQACABAAAFQA+AlBOAWQAFABAFAAIAKAAIAAAKIAAQQIz2AAgABKELQgTA7gPA7QAAAeAFAdQAAABAFAAQAFAKAHAHQADADAFAAQBKApBqAEIAAgFIAFAAQggisiPhEQgFAAgBACg");
	this.shape_42.setTransform(87,26.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.612)").s().p("ABCAdQhPgUg9gmQBOAVBFAgQACABAAAFIgJgBg");
	this.shape_43.setTransform(416.5,118);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.333)").s().p("AAjAZIh3AAIAAgKQB6AXAog7QACgDAFAAIAAAKQgCAlgmACIgKAAg");
	this.shape_44.setTransform(-95.5,102.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.49)").s().p("AAJBaQgChmgWhNQAnA7gKBuIAAAKg");
	this.shape_45.setTransform(-76.4,17);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.596)").s().p("AAZBUQgJhogthAQA+AugDBxIAAAKIgFgBg");
	this.shape_46.setTransform(-72,34.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.839)").s().p("AjbgEIErAAIAKAAIB4AAIAKAAIAAAEQjcAFjbAAIAAgJg");
	this.shape_47.setTransform(-113,105.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.502)").s().p("AACBQQAShZgmhQQA6BGghBrQgBACgFAAIABgKg");
	this.shape_48.setTransform(-2.1,-91);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.616)").s().p("AAFCBQgQh5ACiJIAJAAQgBCEALB1IAAAKIgFgBg");
	this.shape_49.setTransform(-79,-7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.439)").s().p("AAJBkQgEhugUhZQAmBHgJB2IAAAKg");
	this.shape_50.setTransform(-12.4,-124);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.525)").s().p("AhZgWQBYASBSAUIAJACIAAAEQhpgDhKgpg");
	this.shape_51.setTransform(103,75.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.565)").s().p("AgRBlQgcgRAHg0QgChuBRgYIAAAGQgFgBgDADQg4ArgFBdQgDAlAUAQQADACAAAFQgFAAgEgBg");
	this.shape_52.setTransform(94.9,62.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.443)").s().p("Av9DBQgYhUgVhUQAnBDAKBdIABAKQgFAAAAgCgAQdjCIALABIADAFIgOgGg");
	this.shape_53.setTransform(47.7,59.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.494)").s().p("AtZB6Qg+gmgUhPQAmA+AxAzQADACAAAFQgFAAgDgDgAOOBLIAAhGQAUg2AFhKIAFgBIAAAKQgFBugZBZIAAgKg");
	this.shape_54.setTransform(231,22.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.576)").s().p("AAmA/Qgsg9gmhCQA2AyAhBGQACAEAAAFQgFAAgCgCg");
	this.shape_55.setTransform(131.5,15.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.506)").s().p("AAhBJQgphFgfhOQAvA9AfBPQABAEAAAFQgFAAgCgCg");
	this.shape_56.setTransform(107,-31.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.58)").s().p("ABWAYQhcgWhYgaQBoAJBTAjQACAAAAAFIgJgBg");
	this.shape_57.setTransform(84.5,-48.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.482)").s().p("AAAClQgFilAAikQAQCTgHCsIAAAKg");
	this.shape_58.setTransform(74.6,-133.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.549)").s().p("AAxBJQgthRg6hCQBMAxAfBaQACAFAAAFQgFAAgBgCg");
	this.shape_59.setTransform(67.5,-161.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.471)").s().p("ABLATIifgmQBhABBGAgQACABAAAFIgKgBg");
	this.shape_60.setTransform(45.5,-180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.8)").s().p("AkmgEIDIAAIAKAAIFxAAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_61.setTransform(204.5,-29.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.569)").s().p("ABBAdQhNgWg+gkQBPAUBEAhQACABAAAFQgFAAgFgBg");
	this.shape_62.setTransform(440.5,128);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgtI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC0hLCrhTQAEgCAFAAILaAAIAKAAQDcAADcgFIAAgFQAmgCACgmIAAgKIAAgKIAAgKQCFhmDDhAQATgHgRgRIgBgKQgKhegnhCQAAgFgCgEQgvhcgzhZIAAgKQADhyg/gtIAAgKQAKhvgog7IAAgKIAAgKIAAgKQgMh2ACiEIAAgKIAAgoQArhNA3hBQACgDAAgFQGbiCEAkbQADgCAAgFQAFAAABgCQAhhsg7hGQgFAAgCgDQgug2gRhTIAAgKQAJh3gnhHIAAgKIAAiMQBqlXGUAIIAAAFICgAnIAKABQA4AYATBAQAAACAFAAQA7BBAtBTQABACAFAAQAKAKAAAUIAAAKQAAClAFClIAFAAIAAAKQgrEph/DVQAVCBCVAGIAAAFQBYAbBcAWIAJABQA4AUAgAqQACADAAAFQAfBPAqBFQACACAFAAQBaCWBECqQACAFAAAFQAmBDAtA8QACADAFAAQAAAFADACQACADAFAAQAUBOA+AmQADADAFAAQAuAJASAnQABACAFAAIAOAGQAtAiASAWIBWq7QALgTANgPQADgDAAgFQAKgFALgEQAEgBAFAAQEnAAEngFIAAgFIJiAAIAKAAQBpAABpgFIAAgFIAeAAIAKAAQBaAFgKBpIAAAKIgFAAQgLBzgYBfIAABGIAAAKIgFAAQgFBLgUA3IAABFIAAAKIgFAAQgVCugiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFCkDYg1IAJgBIFeAAIAKAAQBEAaBIAWQAFACAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvANApAVQACABAAAFQA+AlBOAVQAFACAFAAIAKAAIAAAKIAAQQIz2AAgAAoGJQgGAzAcARQADACAFAAQBKApBqAEIAAgFIAFAAQgpiQhehgIAAgFQhRAXABBwg");
	this.shape_63.setTransform(87,26.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.553)").s().p("AAUBTQgXhTgVhUQAmBDAKBcIABAKQgFAAAAgCg");
	this.shape_64.setTransform(-56.5,69.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.592)").s().p("AAiBEQgghKgpg/QA7AuATBTIABAKQgFAAgBgCg");
	this.shape_65.setTransform(-63,54);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.467)").s().p("AAJBfQgBhsgXhRQAoA/gLB0IAAAKg");
	this.shape_66.setTransform(-76.4,16.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.525)").s().p("AAFCBQgPh6ABiIIAJAAQAACCAKB3IAAAKIgFgBg");
	this.shape_67.setTransform(-79,-8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.522)").s().p("A/UEiQBYgLBcgJIAKAAQAAAFgBAAQhdARhgAIIAAgKgAeZBkIAAhGQAiibAViuIAFAAIgBAKQgUDRgnC+IAAgKg");
	this.shape_68.setTransform(121.5,61);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.494)").s().p("AaGNrIAAhGQAUg3AFhKIAFgBIAAAKQgFBugZBaIAAgKgA6KrBQgVhSgEhhIAKAAQAFBaAOBQIABAKQgFAAAAgBg");
	this.shape_69.setTransform(155,-57.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.584)").s().p("AAYBJQglhAgQhTQAgBDAZBIQACAFAAAFQgFAAgBgCg");
	this.shape_70.setTransform(123,-0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.471)").s().p("AgJgGIAOgKQADgDAFAAQAAAFgCACQgNAOgKASg");
	this.shape_71.setTransform(170.7,-26);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.49)").s().p("AAhBIQgshAgchSQAsBBAhBLQACAEAAAFQgFAAgCgDg");
	this.shape_72.setTransform(116,-15.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.557)").s().p("ABLAYQhVgShKgeQBaAOBOAeQABAAAAAFIgKgBg");
	this.shape_73.setTransform(85.5,-48.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.643)").s().p("AAACqQgFiqAAipQAQCYgHCxIAAAKg");
	this.shape_74.setTransform(74.6,-135);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.545)").s().p("AApA1Qg+gkgchHQAtA2A0AwQACACAAAFQgFAAgEgCg");
	this.shape_75.setTransform(64,-167.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.576)").s().p("ABuATQh4gIhtgUIAAgKQB1ATB6APIAAAFIgKgBg");
	this.shape_76.setTransform(38,-182);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC0hLCrhTQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQAWgwAxgUQAEgCAFAAQBggIBdgRQABAAAAgFQBkABgmhcQgCgEAAgFIgBgKQgKhdgnhDIgBgKQgThUg8guQAAgFgBgEIhPjIIAAgKQALh1gpg/IAAgKIAAgKIAAgKQgLh3ABiDIAAgKQAfhKAlhDQACgEAAgFQG1ieEYk6QADgDAAgFQgLiGhIhKQgCgCgFAAQgXhhgHhxIAAgKIgBgKQgOhQgFhaIAAgKIAAgKQBTkgEzg9IAKgBQBtAVB5AIIAKABQA+ANAaAwQACAEAAAFQAcBIA/AkQAEACAFAAQAjAjAOA4IABAJQAACqAFCqIAFAAIAAAKQgmEph6DVQAQCQCaAGIAKAAQBKAfBVASIAKABQCCBGAsCfQABABAFAAQAcBTAtBAQACADAFAAQAQBUAmBAQABACAFAAQBcDFCwByQA7AxAVAdIBWq7QAKgSANgPQADgCAAgFQAKgFALgEQAEgBAFAAQEnAAEngFIAAgFIJiAAIAKAAQBpAABpgFIAAgFIAeAAIAKAAQBaAFgKBpIAAAKIgFAAQgLBzgYBfIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFAAQgVCugiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFCkDYg1IAJgBIFeAAIAKAAQBEAaBIAWQAFACAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvAOApAUQACABAAAFQA+AlBOAWQAFABAFAAIAKAAIAAAKIAAQQIz2AAgAAyFZIAAAoIAAAKQBxCwBViAQACgDAAgFQhBhQg+hSQgDgDAAgFIAAgFQhHAEABBRg");
	this.shape_77.setTransform(87,26.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.612)").s().p("AZzFVQhQgTg9gnQBPAVBFAhQACABAAAEIgJgBgA57jZIAAgnQgBhSBHgEIAAAGQgFgBgDADQg0AqgKBVIAAgKg");
	this.shape_78.setTransform(258,86.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.49)").s().p("AAPBeQgehTgEhpQAUBZASBaIABAKQgFAAAAgBg");
	this.shape_79.setTransform(-75,19.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.702)").s().p("AAFB3QgShtAEiBQAMBwAHB1IAAAKQgFAAAAgBg");
	this.shape_80.setTransform(-78,-3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.553)").s().p("AATBPQgbhLgQhTQAgBCAQBTIABAKQgFAAgBgBg");
	this.shape_81.setTransform(-69.5,39);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.588)").s().p("AAJBpQgCh1gWhcQAoBKgLB9IAAAKg");
	this.shape_82.setTransform(-11.4,-123.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.486)").s().p("Am3UcQgWhSgXhNQApA7AIBbIABAKQgFAAAAgBgAHb0LQhSgOhYAPIAAgKQBcgRBXAVQABABAAAFIgKgBg");
	this.shape_83.setTransform(-10.5,-52.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.529)").s().p("AAdBEQgihDgdhGQAuA1AVBMQACAFAAAFQgFAAgBgCg");
	this.shape_84.setTransform(119.5,-8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.62)").s().p("AgOBQIAAgeQAMhEAMhGQAAgBAFAAIAAAKQgEBegZBLIAAgKg");
	this.shape_85.setTransform(72.5,-103);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.604)").s().p("AADBfIgBgKQgJhVABheIAJAAIAAAKIAAAKQAEBVABBUg");
	this.shape_86.setTransform(74.7,-122.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.267)").s().p("AgEBaIAAgKIAAgKIAAipQAQBYgMBuIgEABIAAgKg");
	this.shape_87.setTransform(75.5,-140);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.533)").s().p("ABRAYIiqgwQBnAGBKAlQACABAAAFQgFAAgEgBg");
	this.shape_88.setTransform(48,-179.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.522)").s().p("ARwJdIAAhGQAiicAViuIAFAAIgBAKQgVDRgmC/IAAgKgATKgOIAAhGQApiUgLiYIAAgKIAFAAQAODIgxC+IAAgKgAxFo1QhagThQgeQBiAMBQAhQACAAAAAFIgKgBg");
	this.shape_89.setTransform(202.4,10.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.29)").s().p("ACCAFIg8AAIgKAAIjHAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_90.setTransform(310,-31.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.796)").s().p("AkmgEIDIAAIAKAAIFxAAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_91.setTransform(204.5,-29.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAguI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC0hLCrhTQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQCFhnDChAQAOgFgLgcIgBgKQgIhbgpg7QAAgFgCgEQgrhCgjhLIgBgKQgQhUghhCQAAgFgCgEQgDgGgFgFIgBgKQgShbgVhYIAAgKIAAgKQgHh2gNhwIAAgKIAAgyQAhhnA2hPQADgDAAgFQG8h+D9k8QADgDAAgFQgdichFh0QgCgDAAgFIAAgKQAMh/gqhJIAAgKIAAh4QAghyA4hYQACgDAAgFQBnhSCAg4QAEgCAFAAQBYgPBSAOIAKABIAKAAICrAwQAEACAFAAQBrBxBHCUQACAEAAAFIAACqIAAAKIgKAAQgBBfALBVIAAAKQAAAFgCACQgDADgFAAQgFAAAAABQgNBGgMBFIAAAeIAAAKQAAAFgCAEQgzCUhDCFQAWB/CKAMIAKABQBRAdBYAUIAKABQCcBoA+DEQACAFAAAFQAdBGAjBEQABACAFAAQBfEIDWCQIANAIIACACQAnAZAPATIBXq8QATgYAbgQQAEgCAFAAQEnAAEngFIAAgFIJiAAIAKAAQBpAABpgFIAAgFIA8AAIAKAAQAUAFASAJQACABAAAFIAAAKQAMCYgqCUIAABGIAAAKIgFAAQgFBLgUA3IAABFIAAAKIgFAAQgVCugiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFCkDYg1IAJgBIFeAAIAKAAQBEAaBIAWQAFACAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvANApAVQACABAAAFQA+AlBOAVQAFACAFAAIAKAAIAAAKIAAQQIz2AAgAA8FiIAAAKQADCTCdgHQA2gggnhHQg+hwgwAAQgkAAgdBBg");
	this.shape_92.setTransform(87,26.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.451)").s().p("AAUBPQgVhRgXhNQAoA7AIBaIABAKQgFAAAAgBg");
	this.shape_93.setTransform(-56.5,70);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.549)").s().p("AAJBZQgVhQgChiQASBRAKBYIABAKQgFAAgBgBg");
	this.shape_94.setTransform(-77.5,3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.545)").s().p("AhcgMQCCBBAvhMQACgEAAgFIAGAAQgbBBg1AAQgqAAg/gtg");
	this.shape_95.setTransform(103.3,74.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.533)").s().p("AAYBJQgfhGgWhNQAmA9AUBOIABAKQgFAAgBgCg");
	this.shape_96.setTransform(123,-0.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.525)").s().p("AAiBDQgqg/gfhJQAwA4AdBKQACAEAAAFQgFAAgBgDg");
	this.shape_97.setTransform(112,-23);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.49)").s().p("ABBAjQhdgLgug6QA/ApBVAWQABABAAAFIgKAAg");
	this.shape_98.setTransform(67.5,-54.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.576)").s().p("AAABuQgEhuAAhtIAJAAIAADRIAAAKg");
	this.shape_99.setTransform(75.5,-128);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.584)").s().p("AB9SkQgQgIgFgUQARg/AIhMIAFgBIABAKQAGAlgRANQgIA/AQAmQACAEAAAFQgFAAgEgCgAg9wlQgghGgqg6QA8AoATBRIABAJQgFAAgBgCg");
	this.shape_100.setTransform(80.6,-46);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.58)").s().p("ABpATQhzgIhogUIAAgKQBuATB2APIABAFIgKgBg");
	this.shape_101.setTransform(39.5,-182);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.569)").s().p("EAjKASMQhOgWg+glQBQAUBEAiQACABAAAFQgFAAgFgBgEgirgPiQgEhmgkhEQA6A5gNB6IgFABIAAgKg");
	this.shape_102.setTransform(222,14.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC1hKCqhUQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQCFhnDChAQAOgEgLgdIgBgKQgIhbgpg7QAAgFgCgEQiHjDghknIgBgKQgKhZgThRIAAgKIAAigQAnhWAwhMQADgDAAgFQG4h+EBkyQADgDAAgFIAFgBQANh6g6g5QgFAAgBgCQhUi3AAkJQAhh0BBhWQACgDAAgFQBqh3DCgeIAKgBQBoAVB0AIIAKABQBhA1A9BYQACAEAAAFQArA6AfBGQABACAFAAQANA0gDBEIAAAKIgKAAQAABuAFBuIAFAAIAAAKQgvEqh7DeQACAcAGAWQACAFAAAFQAuA7BeALIAKAAIAKAAQBRAeBYATIAKABQBrAmAfBwQACAFAAAFQAfBKArA/QABADAFAAQAMArAaAeQACACAAAFQAWBOAgBGQABACAFAAQBiDOC1B7IANAIQADACAEAAQAhASASAPIBVqyQATgYAbgQQAEgCAFAAQEnAAEngFIAAgFIJiAAIAKAAQBpAABpgFIAAgFIA8AAIAKAAQAUAFASAJQACABAAAFIAAAKQAMCYgqCUIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFAAQgVCugiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFCkDYg1IAJgBIFeAAIAKAAQBEAaBIAWQAFACAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvAOApAUQACABAAAFQA+AlBOAWQAFABAFAAIAKAAIAAAKIAAQQIz2AAgABGEnIgFABQgIBMgRA/QAGAUAPAIQAEACAFAAQCJBlAwh5IgFAAQAAgFgCgEQhLiJhngOIAAAKg");
	this.shape_103.setTransform(87,26.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.58)").s().p("AASBOQglg/gFheQAXBNAYBJQACAEAAAFQgFAAgCgCg");
	this.shape_104.setTransform(-68.5,40);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.604)").s().p("AAEB3QgShbAEhrQAQgIgCggIAFAAIABAKQAGAggQAIQgDBgALBTIABAKQgFAAAAgBg");
	this.shape_105.setTransform(-11.9,-141);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.545)").s().p("AgogsQARgNgCglIAFAAIABAKQAGAlgRANQgcB+BrgCIAAAFIgKAAIgEAAQhrAAAgiLg");
	this.shape_106.setTransform(96.1,65.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.616)").s().p("AAdBEQgjhCgchHQAsA3AXBLQACAEAAAFQgFAAgBgCg");
	this.shape_107.setTransform(120.5,-6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.471)").s().p("AAmA/QgmhDgsg8QA9ArAbBNQABAEAAAFQgFAAgCgCg");
	this.shape_108.setTransform(135.5,21.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.525)").s().p("AskFTQgYhfgLhoQAcBWALBoIABAKQgFAAAAgBgAM+ksQhegEhCgjICpAjQABAAAAAFIgKgBg");
	this.shape_109.setTransform(5,-18);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.565)").s().p("AgTBaIAAgeQAXhGALhZIAFAAIAAAKQgEBugjBPIAAgKg");
	this.shape_110.setTransform(73,-102);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.694)").s().p("AAABkQgEhkAAhjIAJAAIAAC9IAAAKg");
	this.shape_111.setTransform(75.5,-129);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.475)").s().p("AEICNQgihEgygyQBDAhAWBOQABAEAAAFQgFAAgBgCgAgxh1Qhmgah2ARIAAgKQB6gTBqAiQACAAAAAFIgKgBg");
	this.shape_112.setTransform(47,-169.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.522)").s().p("AULTnIAAhGQAiicAVitIAFgBIgBAKQgVDRgmC/IAAgKgAVlJ7IAAhGQApiUgLiYIAAgKIAFABQAODHgxC+IAAgKgAznyOQgyhRhxgRQCDgBAlBcQACAEAAAFQgFAAgCgCg");
	this.shape_113.setTransform(186.9,-54.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.173)").s().p("AC0AFIgUAAIgKAAIlTAAIAAgJIFxAAIAKAAIAAAJIgKAAg");
	this.shape_114.setTransform(215,-30.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.812)").s().p("AkIgEICqAAIAKAAIFTAAIAKAAIAAAEQkJAFkIAAIAAgJg");
	this.shape_115.setTransform(204.5,-29.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.569)").s().p("EAnYAFOQhOgWg+glQBQAUBEAiQACABAAAFQgFAAgFgBgEgm0gClQgVhZgYhQQAqA/AIBhIAAAKQgFAAAAgBg");
	this.shape_116.setTransform(195,97.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgtI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC0hKCrhUQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQCVhaC6g/QAFgCAAgPIAAgKQgIhhgqg/QAAgFgCgDQgqhJgkhPQAAgFgCgEQgZhJgXhOQgFAAgCgCQgpg2AIhnIgBgKQgLhngchXIAAgKIAAigQAbhdAyhEQADgEAAgFQG3iXEWk3QADgDAAgFQgeiahKhxQgBgDgFAAQAFhagOhGIgBgKIgBgKQgMhSADhiQARgIgGggIgBgKIAAgKQArhDAjhKQACgEAAgFQBrhEByg8QAEgCAFAAQB2gRBmAaIAKABIAKAAIAKAAQBxARAzBRQABACAFAAQAJAWATAMQACABAAAFQAyAyAiBEQABACAFAAQAaA7gGBbIAAAKIgKAAQAABkAFBkIAFAAIAAAKQAHAqgRASIgFABQgLBYgYBHIAAAeIAAAKQAAAFgCAFQgvCNhHB3QAMBxBsARIAKAAQBCAjBdAFIAKAAQDRBlBFDwQACAEAAAFQAcBIAkBCQABACAFAAQAbBKApA6QACADAAAFQAsA9AnBCQACACAFAAQA7BvBJgCQA3AKAbAPIBRqbQAbgcAwgHIAKgBQEJAAEJgFIAAgFIAUAAIAKAAIJiAAIAKAAQBpAABpgFIAAgFIA8AAIAKAAQAUAFASAJQACABAAAFIAAAKQAMCYgqCUIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFABQgVCtgiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFClDYg2IAJgBIFeAAIAKAAQBEAbBIAWQAFABAFAAQDrBfDpBjQACABAAAFQA+AmBOAVQAFABAFAAIAKAAIAAAKIAAQQIz2AAgACMHjQAUABALAGQA3AggFgiQgYi6h/gTIAAAKIgFAAQACAlgRANQggCPBwgDIAKAAg");
	this.shape_117.setTransform(87,26.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.353)").s().p("AAoAZIiBAAIAAgKQCAAXAsg7QACgDAFAAIAAAKQgCAlgmACIgKAAg");
	this.shape_118.setTransform(-96,102.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.541)").s().p("AAUBPQgVhRgXhNQAoA8AIBZIABAKQgFAAAAgBg");
	this.shape_119.setTransform(-56.5,69);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.525)").s().p("AAPBjQgXhfgLhnQAbBWALBnIABAKQgFAAAAgBg");
	this.shape_120.setTransform(-77,6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.851)").s().p("AjbgEIEhAAIAKAAICCAAIAKAAIAAAEQjcAFjbAAIAAgJg");
	this.shape_121.setTransform(-113,105.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.165)").s().p("ACRAFIkhAAIgKAAIAAgJIErAAIAKAAIAAAJIgKAAg");
	this.shape_122.setTransform(-120.5,104.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.584)").s().p("AAEB3QgShbAEhrQAQgIgCggIAFAAIABAKQAGAggQAIQgDBgALBTIABAKQgFAAAAgBg");
	this.shape_123.setTransform(-11.9,-141);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.51)").s().p("ABpAMQhmgZh1AQIAAgJQB5gTBqAhQACAAAAAFIgKgBg");
	this.shape_124.setTransform(31.5,-182.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.506)").s().p("Agpg7IAKAAQgZB2BogEIAAAFIgKAAIgLAAQheAAAah3g");
	this.shape_125.setTransform(96.2,69);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.529)").s().p("ABLATQhdgEhCgiICoAiQABAAAAAFIgKgBg");
	this.shape_126.setTransform(80.5,-50);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.596)").s().p("AgOBLIAAgoIAYh2QAAgBAFAAIAAAKQgFBZgYBGIAAgKg");
	this.shape_127.setTransform(73.5,-103.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.486)").s().p("AB4KFQh0gJAGiDIAKAAQAAB5BtAOIABAFIgKAAgAAioiQgwhThzgPQCEgCAjBdQACAEAAAFQgFAAgBgCg");
	this.shape_128.setTransform(58,-116.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.522)").s().p("Ag/HvIAAhGQAiicAViuIAFAAIgBAKQgVDRgmC/IAAgKgAAah8IAAhGQApiUgLiYIAAgKIAFAAQAODIgxC+IAAgKg");
	this.shape_129.setTransform(322.4,21.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgtI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC0hKCrhUQAEgCAFAAILaAAIAKAAQDcAADcgFIAAgFQAmgCACgmIAAgKIAAgKIAAgKQCVhaCwhRQANgGgIghIgBgKQgIhagpg8QgFAAgBgCQgehDgig9QAAgFgCgEQgZhJgXhOQgFAAgCgCQgpg2AIhnIgBgKQgLhngchXIAAgKIAAigQAbhdAyhEQADgEAAgFQG3iXEWk3QADgDAAgFQgeiahKhxQgBgDgFAAQAFhagOhGIgBgKIgBgKQgMhSADhiQARgIgGggIgBgKIAAgKQArhDAjhKQACgEAAgFQBphFB0g7QAEgCAFAAQB2gRBmAaIAKABIAKAAIAKAAQBzAPAxBTQABACAFAAQAyA3A1A1QACACAFAAQAeBVAABzIAAAKIgKAAQAABkAFBkIAFAAIAAAKQAHAqgRASQgFAAAAABIgZB3IAAAoIAAAKQAAAFgCAFQgtCUhJB6IAAAKIgKAAQgGCDB0AJIAKAAIAKAAQBCAjBdAFIAKAAQDRBlBFDwQACAEAAAFQAcBIAkBCQABACAFAAQAbBKApA6QACADAAAFQAsA9AnBCQACACAFAAQA7BvBJgCQA1AGAeALIBQqTQAbgcAwgHIAKgBQEJAAEJgFIAAgFIAUAAIAKAAIJiAAIAKAAQBpAABpgFIAAgFIA8AAIAKAAQAUAFASAJQACABAAAFIAAAKQAMCYgqCUIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFABQgVCtgiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFClDYg2IAJgBIFeAAIAKAAQBEAbBIAWQAFABAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvAOApAUQACABAAAFQA+AmBOAVQAFABAFAAIAKAAIAAAKIAAQQIz2AAgADpGcQhpjPhECUIAAAKIgKAAQgcCABsgHIAKgBQCcA1g/h8g");
	this.shape_130.setTransform(87,26.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.557)").s().p("AAUBUQgUhYgYhQQApA/AIBgIAAAKQgFAAAAgBg");
	this.shape_131.setTransform(-55.5,72.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.553)").s().p("AASBOQgng+gDhfQAVBPAaBHQACAEAAAFQgFAAgCgCg");
	this.shape_132.setTransform(-68.5,40);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.42)").s().p("AwyN6QA9giBFgZQAFgBAFAAQAAAFgCABQhEAihGAeIAAgKgAOTtRQBNgXBKgaQAEgBAFAAQAAAFgCABQhIAjhWATIAAgKg");
	this.shape_133.setTransform(-151.5,39);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.514)").s().p("ABaAMQhcgZhhAQIAAgJQBlgTBgAhQACAAAAAFQgFAAgFgBg");
	this.shape_134.setTransform(33,-182.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.482)").s().p("AAmA/QgmhDgsg8QA9ArAbBNQABAEAAAFQgFAAgCgCg");
	this.shape_135.setTransform(135.5,21.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.529)").s().p("AskFSQgZhYgKhkQAbBSAMBiIABAKQgFAAAAgCgAM+ksQhegEhCgjICpAjQABAAAAAFIgKgBg");
	this.shape_136.setTransform(5,-18);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.475)").s().p("AAyAtQhXgMgWhNQAoA7BNAYQACABAAAFIgKAAg");
	this.shape_137.setTransform(65,-56.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.561)").s().p("AgOBLIAAgoIAYh2QAAgBAFAAIAAAKQgFBZgYBGIAAgKg");
	this.shape_138.setTransform(73.5,-103.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.698)").s().p("AAABkQgEhkAAhjIAJAAIAAC9IAAAKg");
	this.shape_139.setTransform(75.5,-129);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.478)").s().p("ABHAXQhAgihWgNQBogFA1AvQACACAAAFQgFAAgEgCg");
	this.shape_140.setTransform(51,-178.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.914)").s().p("AhogEIAKAAIAKAAICzAAIAKAAIAAAEQhpAFhoAAIAAgJg");
	this.shape_141.setTransform(304.5,-30.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.298)").s().p("ACCAFIhQAAIgKAAIizAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_142.setTransform(310,-31.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.631)").s().p("AKeKPIleAAIAAgKIFeAAIAKAAIAAAKIgKAAgAhjqEIpEAAIAAgKIJEAAIAKAAIAAAKIgKAAg");
	this.shape_143.setTransform(303,34.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.176)").s().p("AC5AFIgeAAIgKAAIlTAAIAAgJIF7AAIAKAAIAAAJIgKAAg");
	this.shape_144.setTransform(215.5,-30.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgtI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC2hJCphVQAEgCAFAAILaAAIAKAAQDcAADcgFIAAgFQAmgCACgmIAAgKIAAgKIAAgKQCVhaC6g/QAFgCAAgPIAAgKQgIhhgqg/QAAgFgCgDQgqhJgkhPQAAgFgCgEQgbhIgVhPQgFAAgCgCQgpg2AIhnIgBgKQgMhhgbhTIAAgKIAAiqQAbhdAyhEQADgEAAgFQAnguBGgSQABgBAAgFQBWgTBIgjQACgBAAgFQEdhpCijiQADgEAAgFQgciXhMhqQgBgDgFAAQgVjQABi2IAAgKQBVjvD/hFQAFgCAFAAQBhgRBdAaQAFABAFAAQBXANBAAjQAEACAFAAQBHBfBIBdQACACAFAAQAbBEgHBmIAAAKIgKAAQAABkAFBkIAFAAIAAAKQAHAqgRASQgFAAAAABIgZB3IAAAoIAAAKQAAAFgCAFQg1CghLCMIAAAUIAAAKQAWBOBYAMIAKAAIAKAAQBCAjBdAFIAKAAQDRBlBFDwQACAEAAAFQAcBIAkBCQABACAFAAQAbBKApA6QACADAAAFQAsA9AnBCQACACAFAAQA7BvBJgCQAyAJAhAHIBQqSQAbgcAwgHIAKgBQEJAAEJgFIAAgFIAeAAIAKAAIJEAAIAKAAQBpAABpgFIAAgFIBQAAIAKAAQAUAFASAJQACABAAAFIAAAKQAMCYgqCUIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFABQgVCtgiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFClDYg2IAJgBIFeAAIAKAAQBEAbBIAWQAFABAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvAOApAUQACABAAAFQA+AmBOAVQAFABAFAAIAKAAIAAAKIAAQQIz2AAgADfGlQhejVhFCRIAAAKIgKAAQgcCABsgHIAKgBQCQBNg9iLg");
	this.shape_145.setTransform(87,26.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.537)").s().p("AAUBPQgVhRgXhNQAoA8AIBZIABAKQgFAAAAgBg");
	this.shape_146.setTransform(-56.5,69);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.475)").s().p("AGaGkQhYgMgWhOQAoA8BOAYQACABAAAFIgKAAgAmKjRQgEh0gVheQAnBMgJB8IAAAKg");
	this.shape_147.setTransform(29,-94);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.678)").s().p("AAABkQgEhkAAhjIAJAAIAAC9IAAAKg");
	this.shape_148.setTransform(75.5,-128);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.576)").s().p("AAdBKQgXhTgohBQA5AvAMBcIAAAKQgFAAgBgBg");
	this.shape_149.setTransform(72.5,-155.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.557)").s().p("AhZgPQBSASBgAGIABAFIgKABIgbABQhWAAg4gfg");
	this.shape_150.setTransform(43,-181.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.169)").s().p("AC5AFIgUAAIgKAAIldAAIAAgJIF7AAIAKAAIAAAJIgKAAg");
	this.shape_151.setTransform(215.5,-30.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.808)").s().p("AkNgEICqAAIAKAAIFdAAIAKAAIAAAEQkOAFkNAAIAAgJg");
	this.shape_152.setTransform(205,-29.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.569)").s().p("AbwGHQhOgVg/glQBQATBEAjQACAAAAAGQgFAAgEgCgA74jYQgHiKBXgmIAAAGQgFAAgEABQgvAWgEBDQgbB/BrgCIAAAEIgKABIgOABQhAAAgMgzg");
	this.shape_153.setTransform(269.5,91.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC2hJCphVQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQCVhbCwhRQANgFgIghIgBgKQgIhagpg8QgFAAgBgCQgehDgig9QAAgFgCgEQgbhIgVhPQgFAAgBgBQhTjlAJk/QAjhLAqhDQADgDAAgFQAogtBFgUQABAAAAgFQBWgTBIgjQACgBAAgFQEchlCZjnQADgDAAgFQgdinhFh8QgCgEAAgFIAAgKQAJh8gnhMIAAgKIAAhaQAhh6BBhZQACgEAAgFQB2iJDygNIAKAAQBAAkBqgFIAKgBQBiBDBGBeQACAEAAAFQApBBAXBUQABABAFAAIAABaIAAAKIgKAAQAABkAFBkIAFAAIAAAKQgmE4iEDaIAAAUIAAAKQAWBOBYAMIAKAAIAKAAQBCAjBdAEIAKABQEjDlCAGHQABAFAAAFQAsA8AnBDQACACAFAAQA7BuBJgBQA1ABAfAHIBPqLQAbgcAwgHIAKAAQEOAAEOgFIAAgFIAUAAIAKAAIJEAAIAKAAQBpAABpgFIAAgFIBQAAIAKAAQAUAFASAJQACABAAAFIAAAKQAMCYgqCUIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFAAQgVCugiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFCkDYg1IAJgBIFeAAIAKAAQBEAaBIAWQAFACAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvAOApAUQACABAAAFQA+AlBOAWQAFABAFAAIAKAAIAAAKIAAQQIz2AAgACpHoQARAVAIgMQBGhoiQiAIAAgFQhXAmAHCJQANA4BNgFIAKgBQAJgCAGAAQAJAAAFAFg");
	this.shape_154.setTransform(87,26.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.565)").s().p("AATBUQgUhXgXhRQAoBAAJBfIAAAKQgFAAgBgBg");
	this.shape_155.setTransform(-55.5,72.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.561)").s().p("AAPBZQgThZgPhZQAgBJAGBgIABAKQgFAAAAgBg");
	this.shape_156.setTransform(-77,8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.71)").s().p("AFoAFIrZAAIAAgJILPAAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_157.setTransform(-172,105.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.478)").s().p("ABuAMQhqgYh7APIAAgJQCAgTBtAhQACAAAAAFIgKgBg");
	this.shape_158.setTransform(31,-182.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.494)").s().p("AZ8M0IAAhGQAUg3AFhKIAFgBIAAAKQgFBugZBaIAAgKgA6AprQgEh0gVheQAnBMgJB8IAAAKg");
	this.shape_159.setTransform(156,-52);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.459)").s().p("AAcBDQgtg2gRhSIBDCCQACAEAAAFQgFAAgCgDg");
	this.shape_160.setTransform(125.5,4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.541)").s().p("ABCAdQhGgdhGgdQBWANA8AnQADACAAAFQgFAAgEgBg");
	this.shape_161.setTransform(92.5,-46);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.58)").s().p("ABLAUQhhgCg+glQBPAUBZAOQABAAAAAFIgKAAg");
	this.shape_162.setTransform(76.5,-51);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.6)").s().p("AAxD1QgFigAAifQARCNgHCoIAAAKgAAbh/Qgng8grg5QA7AnAcBHQACAFAAAFQgFAAgCgDg");
	this.shape_163.setTransform(70.6,-142.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.522)").s().p("AdeHvIAAhGQAiicAViuIAFAAIgBAKQgVDRgmC/IAAgKgA+wDWQgJhfgkhAQA1AugDBoIAAAKIgFgBgAe4h8IAAhGQApiUgLiYIAAgKIAFAAQAODIgxC+IAAgKg");
	this.shape_164.setTransform(127.4,21.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgtI/GAAI/FAAI/GAAIAAgKIAAvUQBOglBJgpQAEgCAFAAQBGgeBEgiQACgBAAgFQC2hJCphVQAEgCAFAAILaAAIAKAAQDXAADXgFIAAgFQAwADACgrIAAgKIAAgKIAAgKQCQhfDAg6QAEgCAAgPIAAgKQgJhggphAQAAgFgCgEQg3hjg1hmIAAgKQAEhng2gvIgFAAQgFgxAAgyIgBgKQgGhhghhJIAAgKIAAjSQAqhXAzhQQACgDAFAAQHDh8DslRQADgEAAgFQgXiehKhnQgDgEAAgFIAAgKQAJh8gnhMIAAgKIAAh4QBPj1DohdQAEgCAFAAQB8gQBqAZIAKABQClAKA1B5QACAEAAAFQArA5AoA9QACACAFAAQAMANgBAbIgBAKQAACgAFCgIAFAAIAAAKQgrEzh/DfQAEBbBVAOQABAAAAAFQA+AmBiACIAKAAQBFAfBHAcQAEABAFAAQCDCvBTDgQABABAFAAQARBTAuA3QACACAFAAQgCAbAVAIQABAAAAAFQAsA9AnBCQACACAFAAQAxBNBYAnQAQAHASAGQAEABAFAAIABgEQATAGANAGIBSqfQAbgdAwgGIAKgBQEOAAEOgFIAAgFIAUAAIAKAAIJEAAIAKAAQBpAABpgFIAAgFIBQAAIAKAAQAUAFASAJQACABAAAFIAAAKQAMCYgqCUIAABGIAAAKIgFABQgFBKgUA3IAABFIAAAKIgFABQgVCtgiCcIAABGIAAAKIgFAAQgBBKgYAuIAAAoIAAAKQgFClDYg2IAJgBIFeAAIAKAAQBEAbBIAWQAFABAFAAQBzAtBxAxQACABAAAFQA9AnBQAUIAJABQAvAOApAUQACABAAAFQA+AmBOAVQAFABAFAAIAKAAIAAAKIAAQQIz2AAgAAyF/QAAAFACAFQAqB1CcADQAWgjgSglQhEiUg4AAQgsAAgkBag");
	this.shape_165.setTransform(87,26.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.298)").s().p("ABGAFIizAAIAAgJIDRAAIAKAAQAAAEgCABQgNAEgPAAIgKAAg");
	this.shape_166.setTransform(-101,104.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.145)").s().p("ABkAFIjRAAIAAgJIDRAAIAKAAIAAAJIgKAAg");
	this.shape_167.setTransform(-123,104.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.847)").s().p("AjRgEIAKAAIDRAAIAKAAIC0AAIAKAAIAAAEQjSAFjRAAIAAgJg");
	this.shape_168.setTransform(-114,105.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.702)").s().p("AFtAFIrjAAIAAgJILjAAIAKAAIAAAJIgKAAg");
	this.shape_169.setTransform(-172.5,105.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.522)").s().p("AgOBkIAAhQQAVgzADhOIAFAAIAAAKQgFBygYBfIAAgKg");
	this.shape_170.setTransform(314.5,83);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.459)").s().p("AgGgCIAKABIADAEIgNgFg");
	this.shape_171.setTransform(153.7,40.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.467)").s().p("AQ2DQQgtg9gmhDQA4AxAgBIQACAEAAAFQgFAAgCgCgAwZBtQgmiMADiyIAKAAQgCCtAfCIIABAKQgFAAAAgBgAOhgzQgjhIgdhMQAvA6AWBSQABAFAAAFQgFAAgBgCg");
	this.shape_172.setTransform(28.5,2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.529)").s().p("AAACgQgFigAAifQAQCOgHCnIAAAKg");
	this.shape_173.setTransform(75.6,-133);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.545)").s().p("AmZD/QgRiogSihIAKAAQAUCaAJClIABAKIgFAAgAG3hzQgVhSgrg5QA8AoAKBaIAAAKQgFAAgBgBg");
	this.shape_174.setTransform(30.5,-138.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.541)").s().p("AmaUnQgUhTgYhMQAqA6AIBcIAAAKQgFAAgBgBgApENuQgghLgWhTIAKAAQAaBKAXBNQABAEAAAFQgFAAgBgCgAHH0nQBVAPBeAKIABAFIgKAAIgOAAQhdAAg/geg");
	this.shape_175.setTransform(-12.5,-51);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.525)").s().p("AhCHVIAAg8QAZhkAKh3IAFgBIgBAKQgHCYggCAIAAgKgAgaCpIAAgyQAujiAcj8IAQhgIgCALIADgWIACgMIgBAGIgLBlIgDAVQgYEZg2D4IAAgKg");
	this.shape_176.setTransform(322.7,24.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.31)").s().p("ACCAFIkNAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_177.setTransform(310,-31.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.62)").s().p("AkcgEIIvAAIAKAAIAAAEQkdAFkcAAIAAgJg");
	this.shape_178.setTransform(263.5,-30.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.161)").s().p("AC5AFIgKAAIgKAAIlnAAIAAgJIF7AAIAKAAIAAAJIgKAAg");
	this.shape_179.setTransform(215.5,-30.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.808)").s().p("AkSgEICqAAIAKAAIFnAAIAKAAIAAAEQkTAFkSAAIAAgJg");
	this.shape_180.setTransform(205.5,-29.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.639)").s().p("ACqAFIldAAIAAgJQCzAAC0AEIAAAFIgKAAg");
	this.shape_181.setTransform(355,99.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.561)").s().p("Ac6ONQhOgWg+glQBQAUBEAiQACABAAAFQgFAAgFgBgA6ZtcQhZgThRgeQBiAMBRAhQABAAAAAFIgKgBg");
	this.shape_182.setTransform(262,40);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.584)").s().p("ABBAdQhQgTg7gnQBMAXBHAeQACABAAAFIgKgBg");
	this.shape_183.setTransform(421.5,120);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgxI/GAAI/FAAI/GAAIAAgKIAAveQFHiOE6icQAEgBAFAAILkAAIAKAAQDSAADSgGIAAgEQAPAAANgFQACAAAAgFQBriuEEgkQADgBAAgTIAAgKQgIhcgqg7QAAgEgCgFQhFh8gxiTQAAgEgBgFQgXhMgahKIgBgKQgCglgHghIgBgKQgfiJACisIAAgKIAAgUQAkhoA+hPQACgCAAgGQG3h4D4k4QADgDAAgEQgZihhIhvQgDgDAAgGIgBgKQgJikgUibIAAgKQAfhzA5hXQACgDAAgGQCBiHDxgUIAAAGQBEAgBmgDIAKAAQBnA6A8BlQACACAFAAQArA4AVBSQABABAFAAIAAAKQAACgAFCgIAFAAIgBAKQgvEph6DgQAcB1CEAMIAKAAQBRAeBYAUIAKABQCNBjBDCrQACAFAAAEQAdBNAjBHQABADAFAAQAVBGAkAzQADAEAAAEQAmBDAtA9QACADAFAAQA0BqBkA8QADACAFAAIAOAHIAgAEQAVADAQAEIBWq6QAfgJAyABQETAAETgGIAAgEIAKAAIAKAAQEdgBEdgFIAAgEIAeAAIAKAAIEOAAIAKAAQAmASAQAyIABAEIgCAFIABgGIgCAMIgBAMIgQBfQgcD8gvDjIAAAyIAAAKIAAAKIgFAAQgKB4gZBjIAAA9IAAAKIgFAAQgDBNgWA0IAABQIAAAKQAvBjC3gmIAKgBIFeAAIAKAAQDRBNDHBXQACACAAAFQA7AoBRATIAKABQAUAFASAIQACACAAAFQA+AlBOAVQAFACAFAAIAKAAIAAAKIAAQPIz2AAgAAyFmIABAKQATCWCqAAQApgyghg9QhChyg3AAQgpAAgkBBg");
	this.shape_184.setTransform(87,26.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.655)").s().p("AAJBZQgPhDgIhHIAAgKIAAgeQASBRAKBYIABAKQgFAAgBgBg");
	this.shape_185.setTransform(-77.5,4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.71)").s().p("AFtAFIrjAAIAAgJILjAAIAKAAIAAAJIgKAAg");
	this.shape_186.setTransform(-172.5,105.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.471)").s().p("AAeBJQgZhTgnhAQA5AvALBcIABAKQgFAAAAgCg");
	this.shape_187.setTransform(-3.5,-97.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.337)").s().p("AAABkQgEhkAAhjIAJAAIAACVIAAAKIAAAeIAAAKg");
	this.shape_188.setTransform(-79.5,-11);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.573)").s().p("AAACBQgOheAAhoQATgUAFgoIAFAAIAAAKQAAAogTAUQABBdAHBWIABAKQgFAAAAgBg");
	this.shape_189.setTransform(-12.5,-142);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.514)").s().p("AhZgWQBUAWBVAQIAKACIAAAEQhsAAhHgsg");
	this.shape_190.setTransform(103,75.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.459)").s().p("AB2CTIALABIADAFIgOgGgAgwgZQgtg8gmhDQA4AxAgBIQACAEAAAFQgFAAgCgDg");
	this.shape_191.setTransform(141.2,25.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.533)").s().p("AAYBOQgfhLgWhSIAKAAQAZBKAXBMQABAEAAAFQgFAAgBgCg");
	this.shape_192.setTransform(-73,29);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.557)").s().p("ABQAYQhYgThRgdQBhAMBRAgQABAAAAAFIgKgBg");
	this.shape_193.setTransform(85,-48.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.259)").s().p("AgECqIAAiCIAAgKIAAjRQAQCogMC/IgEAAIAAgKg");
	this.shape_194.setTransform(75.5,-131);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.831)").s().p("AAABzQgEhzAAhyQAEAAADACQACADAAAFIAADRIAAAKg");
	this.shape_195.setTransform(74.5,-138.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.576)").s().p("AoMTcQgchWglhJQA2A3APBfIABAKQgFAAAAgBgAJEy1QhRgThPgUQBhADBHAfQACABAAAFIgKgBg");
	this.shape_196.setTransform(-5,-57.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.525)").s().p("Ag7GaIAAg8QAZhkAKh4IAFAAIgBAKQgHCYggCAIAAgKgAgTBuIAAgyQAujiAcj9IAFAAIAAAKQgYEZg3D4IAAgKg");
	this.shape_197.setTransform(322,30);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.627)").s().p("Ak1gEIJhAAIAKAAIAAAEQk2AFk1AAIAAgJg");
	this.shape_198.setTransform(265,-30.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.145)").s().p("A5dKoIjSAAIAAgKIDSAAIAKAAIAAAKIgKAAgAcmqdIl8AAIAAgKIF8AAIAKAAIAAAKIgKAAg");
	this.shape_199.setTransform(50,37);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.788)").s().p("AkmgEIC+AAIAKAAIF7AAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_200.setTransform(204.5,-29.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFHiOE6icQAEgCAFAAILkAAIAKAAQDSAADSgFIAAgFQAPAAANgEQACgBAAgFQBXixERACIAAgFQAJhZglhbQgCgFAAgFIgBgKQgPheg2g4QAAgFgDgBQg4gogBheQAAgFgBgEQgXhNgahJIgBgKQgCglgHghIgBgKQgKhZgThRIAAgKIAAiWIAAgKIAAgKQAlhYAyhJQADgEAAgFQHeh1Dcl2QACgEAAgFIgBgKQgLhdg6gvQAAgFgCgEQgyhZACiOIgBgKQgIhWgBheQAUgUAAgoIAAgKIAAgKQBRifCdhVQACgBAAgFQB7geB1APIAAAFQBPAVBRASIAKABQCMBfA7CwQABAEAAAFQAABzAFBzIAFAAIAACCIAAAKIgBAKQgtEShyDOQAbB2CFAMIAKAAQBRAeBYATIAKABQDbDjB4FEQABAEAAAFQAmBDAtA9QACACAFAAQA/BgBZBHQADACAFAAIAOAGIAIADQAmANAVANIBUqxQATgVAbgMQAEgCAFAAQEnAAEngFIAAgFQE2AAE2gFIAAgFIEOAAIAKAAQBmAwg8CFQgCAEAAAFIgFABQgcD8gvDiIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAvBjC3gmIAKgBIFeAAIAKAAQGCCQFtCkQAEACAFAAIAAAKIAAQQIz2AAgAAyFtQgGA+AUAkQABACAFAAQBHAtBtAAIAAgFQARg4ghg4Qg8hqgxAAQgqAAghBOg");
	this.shape_201.setTransform(87,26.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.478)").s().p("AAUBPQgUhSgYhMQApA6AHBbIABAKQgFAAAAgBg");
	this.shape_202.setTransform(-56.5,70);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.494)").s().p("AAJBfQgBhsgXhRQAoA/gLB0IAAAKg");
	this.shape_203.setTransform(-76.4,16.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.439)").s().p("AAABkQgEhkAAhjIAJAAIAAC9IAAAKg");
	this.shape_204.setTransform(-79.5,-11);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.675)").s().p("Ag1gyIAKAAIAAAKQgEBdBngJIAAAFIgKABIgXABQhZAAANhlg");
	this.shape_205.setTransform(96.4,70.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.62)").s().p("AgiA5IAAgKIAAgnQABhKBEgBIAAAGQgFgBgDADQg1AogIBWIAAgKg");
	this.shape_206.setTransform(95.5,59.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.455)").s().p("AgGgCIAKABIADAEIgNgFg");
	this.shape_207.setTransform(153.7,40.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.459)").s().p("AAmA/Qgsg9gmhCQA3AxAgBHQACAEAAAFQgFAAgCgCg");
	this.shape_208.setTransform(132.5,16.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.545)").s().p("ABCAdQhGgdhGgdQBWANA8AnQADACAAAFQgFAAgEgBg");
	this.shape_209.setTransform(92.5,-46);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(0,0,0,0.576)").s().p("ABLAUQhhgCg+glQBPAUBZAOQABAAAAAFIgKAAg");
	this.shape_210.setTransform(76.5,-51);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.341)").s().p("AgECqIAAhGIAAgKIAAjRIAAgKIAAgyQAQCogMC/IgEAAIAAgKg");
	this.shape_211.setTransform(75.5,-131);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(0,0,0,0.522)").s().p("AS/UAIAAhQQAWg0ADhOIAFAAIAAAKQgFBzgZBfIAAgKgAySx+QgZhTgxg4QBDAmANBcIAAAKQgFAAgBgBg");
	this.shape_212.setTransform(191.5,-35);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.573)").s().p("A+3RpQgLhdgihCQA0AxgCBlIAAAKIgFgBgAfRITQAcheg8gvQBRAmgtBvQgBABgFAAQAAgFACgEgAu2xpQBQAUBkAFIAAAFIgKABIggABQhVAAg1ggg");
	this.shape_213.setTransform(128.1,-70);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(0,0,0,0.918)").s().p("APjIrIAKAAIDIAAIAKAAIAAAFQhuAFhuAAIAAgKgAy5lYQgFhuAAhuIAKAAIAADSIAAAKg");
	this.shape_214.setTransform(195.5,-86.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(0,0,0,0.302)").s().p("ACCAFIg8AAIgKAAIjHAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_215.setTransform(310,-31.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(0,0,0,0.627)").s().p("AEiAFIpNAAIAAgJIJNAAIAKAAIAAAJIgKAAg");
	this.shape_216.setTransform(265,-30.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.149)").s().p("AC+AFIgKAAIl7AAIAAgJIGFAAIAKAAIAAAJIgKAAg");
	this.shape_217.setTransform(215,-30.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgxI/GAAI/FAAI/GAAIAAgKIAAveQFJiME4ieQAEgBAFAAILkAAIAKAAQDSAADSgGIAAgEQAPAAANgFQACAAAAgFQBkivEIgsQAKgBgKgWQgEgJAAgJIgBgKQgHhcgqg6QAAgFgCgEQgyhagwhbIAAgKQABhmgzgwQgFgBgDgCQgCgDAAgDIAAgKQALh1gpg/QAAgGgCgDQgNgaAFgtIAAgKIAAi+IAAgKIAAgLQAkhOAqhIQACgFAAgEQG5iLEKk6QADgDAAgEQjambDEmCQAzhkByguQANgGgGgVQBWgPBegBIAAAGQA+AlBsgHIAKgBQBjA4A7BgQACAEAAAFQAxA3AZBTQABABAFAAIAAAKIAAAyIAAAKIgKAAQAABuAFBvIAFAAIAABFIAAAKIAAALQgqEMh2DAQgHBvBgAOIABAEQA+AmBiADIAKAAQBFAeBHAcQAEACAFgBQCbD2B7ETQACAEAAAFQAmBDAtA9QACADAFAAQA/BfBZBHQADACAFAAIAOAHQAPAFAMAAQAaAFAPAIIBTqmQATgWAbgMQAEgBAFAAQEnAAEngGIAAgEIAKAAIJOAAIAKAAQBugBBugFIAAgEIA8AAIAKAAIAKAAQA8AvgdBdQgBAFAAAEIAAAfIAAAKIgFAAQgcD8gvDjIAAAyIAAAKIAAAKIgFAAQgKB4gZBjIAAA9IAAAKIgFAAQgDBNgWA0IAABQIAAAKQAvBjC3gmIAKgBIFeAAIAKAAQGCCSFtCiQAEACAFABIAAAKIAAQPIz2AAgAC7H4QAJARAIgQQA7h+iPhvIAAgGQhFABgBBLIAAAnIAAAKIgKAAQgOBzBygOIAKgBIAFAAQAXAAAJARg");
	this.shape_218.setTransform(87,26.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.576)").s().p("AAeBPQgchVgkhJQA1A3APBeIABAKQgFAAAAgBg");
	this.shape_219.setTransform(-60.5,59);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(0,0,0,0.569)").s().p("AAYBOQgfhLgWhSIAKAAQAZBKAXBMQABAEAAAFQgFAAgBgCg");
	this.shape_220.setTransform(-73,29);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(0,0,0,0.498)").s().p("AAFCBQgQh5ACiJIAJAAQgBCDALB2IAAAKIgFgBg");
	this.shape_221.setTransform(-79,-8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(0,0,0,0.584)").s().p("AgiA5IAAgKIAAgnQABhKBEgBIAAAGQgFgBgDADQg1AogIBWIAAgKg");
	this.shape_222.setTransform(95.5,59.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.447)").s().p("AAmA/QgmhCgsg9QA9ArAbBMQABAFAAAFQgFAAgCgCg");
	this.shape_223.setTransform(133.5,18.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.533)").s().p("AhZADQBWgOBdgBIAAAGIgKAAIipATIAAgKg");
	this.shape_224.setTransform(24,-182.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(0,0,0,0.565)").s().p("ABLAUQhhgCg+glQBPAUBZAOQABAAAAAFIgKAAg");
	this.shape_225.setTransform(76.5,-51);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.318)").s().p("AgEClIAAhGIAAgKIAAkDQAQCjgMC6IgEAAIAAgKg");
	this.shape_226.setTransform(75.5,-130.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(0,0,0,0.902)").s().p("AAACRQgEiRAAiQQAEAFADAGQACAEAAAFIAAEDIAAAKg");
	this.shape_227.setTransform(74.5,-135.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.49)").s().p("AhZgOQBTAQBfAIIABAFIgKAAIgYAAQhXAAg6gdg");
	this.shape_228.setTransform(42,-181.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(0,0,0,0.573)").s().p("AAGBCQAchdg7gvQBQAmgtBuQgBABgFAAQAAgFACgEg");
	this.shape_229.setTransform(327.6,-23.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(0,0,0,0.918)").s().p("AhtgEIAKAAIDHAAIAKAAIAAAEQhuAFhtAAIAAgJg");
	this.shape_230.setTransform(306,-30.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(0,0,0,0.627)").s().p("Av6GtIAKAAIAAAKQgEBeBogJIAAAFIgKABIgXABQhaAAANhmgAPzoIIpOAAIAAgKIJOAAIAKAAIAAAKIgKAAg");
	this.shape_231.setTransform(192.9,22.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFHiOE6icQAEgCAFAAILkAAIAKAAQDSAADSgFIAAgFQAPAAANgEQACgBAAgFQBXiyERADIAAgFQAJhZglhcQgCgEAAgFIgBgKQgPhfg2g3QAAgFgDgCQgzgrgGhaQAAgFgBgEQgXhNgahJIgBgKIgdiWIAAgKQgMh2ACiEIAAgKIAAgeQAthGArhIQACgDAAgFQG5iCEAk4QADgDAAgFQjamYC+l9QA5hwB5g7ICqgUIAKAAQBCAiBogEIAKAAQClBfBADEQABAEAAAFQAACRAFCRIAFAAIAABGIAAAKIgBAKQgsEOhzDIQgCBmBbANIABAFQA+AmBiACIAKAAQFDDDBzGWQABAEAAAFQAtA9AmBDQACACAFAAQA7BUBTA/QADACAFAAIAOAGIAfAEQAWAEAQAEIBSqgQATgVAbgMQAEgCAFAAQEnAAEngFIAAgFIAKAAIJOAAIAKAAQBuAABugFIAAgFIA8AAIAKAAIAKAAQA8AvgdBeQgBAEAAAFIAAAeIAAAKIgFAAQgcD9gvDiIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAvBjC3gmIAKgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAC7H2QAJAQAHgOQAwh0iDh7IAAgFQhFABgBBKIAAAoIAAAKIgKAAQgOByBygNIAKgBIAFAAQAXAAAJARg");
	this.shape_232.setTransform(87,26.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(0,0,0,0.886)").s().p("AhogEIAKAAIC9AAIAKAAIAAAEQhpAFhoAAIAAgJg");
	this.shape_233.setTransform(-102.5,105.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(0,0,0,0.298)").s().p("ABQAFIi9AAIAAgJIDRAAIAKAAQAAAEgCABQgIAEgKAAIgKAAg");
	this.shape_234.setTransform(-101,104.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(0,0,0,0.145)").s().p("ABkAFIgKAAIjHAAIAAgJIDRAAIAKAAIAAAJIgKAAg");
	this.shape_235.setTransform(-123,104.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(0,0,0,0.804)").s().p("ABuAFIjlAAIAAgJIAUAAIAKAAIDHAAIAKAAIAAAJIgKAAg");
	this.shape_236.setTransform(-125,105.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(0,0,0,0.71)").s().p("AFjAFIjSAAIgKAAInzAAIAAgJIHzAAIAKAAIDSAAIAKAAIAAAJIgKAAg");
	this.shape_237.setTransform(-173.5,105.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(0,0,0,0.584)").s().p("AgnAzIAAgoQAHhbBGAaQACABAAAFIgKAAQg6AGgLBnIAAgKg");
	this.shape_238.setTransform(96,58.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(0,0,0,0.631)").s().p("Ag1gyIAKAAQgJBnBsgJIAAAFIgKABIgXABQhZAAANhlg");
	this.shape_239.setTransform(96.4,70.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(0,0,0,0.439)").s().p("AAmA/QgmhCgsg9QA9ArAbBMQABAFAAAFQgFAAgCgCg");
	this.shape_240.setTransform(133.5,18.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(0,0,0,0.549)").s().p("AAcBEQgkg/gahKQAqA5AaBJQABAEAAAFQgFAAgCgCg");
	this.shape_241.setTransform(117.5,-12);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,0,0,0.545)").s().p("ABQATQhggGhJggQBZAPBZATQABAAAAAFIgKgBg");
	this.shape_242.setTransform(80,-50);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(0,0,0,0.322)").s().p("AgECqIAAhGIAAgKIAAkNQAQCogMC/IgEAAIAAgKg");
	this.shape_243.setTransform(75.5,-131);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(0,0,0,0.875)").s().p("AAFCgQACirgQiUQAVADgCAbIAAAKIAAENIAAAKg");
	this.shape_244.setTransform(74,-137);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(0,0,0,0.576)").s().p("ABLATQhQgThPgTQBgADBHAeQACABAAAFIgKgBg");
	this.shape_245.setTransform(45.5,-180);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(0,0,0,0.573)").s().p("AalKfQAcheg8gvQBRAmgtBvQgBABgFAAQAAgFACgEgA6pnCQgPheAAhpQARgDgCgbIAFAAIABAKQAGAbgRADQABBeAJBWIAAAKQgFAAAAgBg");
	this.shape_246.setTransform(158.1,-84);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(0,0,0,0.149)").s().p("AC5AFIgKAAIlxAAIAAgJIF7AAIAKAAIAAAJIgKAAg");
	this.shape_247.setTransform(215.5,-30.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(0,0,0,0.784)").s().p("AkmgEIDIAAIAKAAIFxAAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_248.setTransform(204.5,-29.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgyI/GAAI/FAAI/GAAIAAgKIAAveQFHiPE6ibQAEgCAFAAIH0AAIAKAAIDSAAIAKAAIDmAAIAKAAQBpAABpgFIAAgFQAKAAAIgEQACgBAAgFQBXiyERADIAAgFQglkDh5jeQgCgEAAgFQAAgFgBgFQgXhMgahJIgBgKIgdiWIAAgKQgMh2ACiEIAAgKIAAgeQAthGArhIQACgDAAgFQGziCEGkuQADgDAAgFQhMjMgrjsIgBgKIgBgKQgIhWgBheQARgDgGgbIgBgKIAAgKIAAgUQBWikCihaQACgBAAgFQBwgpB/AaQABAAAAAFQBPAUBRATIAKABQB+BYA+CYQACAFAAAFQARCUgCCsIAFAAIAABGIAAAKIgBAKQgtENhyDJQAMBsBiAVIAKABQBJAgBgAHIAKABQC2BSBCDGQACAFAAAFQAaBKAlBAQACACAFAAQAiBWAsBLQACAEAAAFQAtA8AmBEQACACAFAAQA2BeBlAwQARAIATAHIAFABQAXALAMANIBUqvQATgWAbgLQAEgCAFAAQEnAAEngFIAAgFIAKAAIJOAAIAKAAQBuAABugFIAAgFIA8AAIAKAAIAKAAQA8AvgdBdQgBAFAAAFIAAAeIAAAKIgFAAQgcD8gvDjIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBNgWA1IAABQIAAAKQAvBiC3glIAKgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAC7H4QAJARAIgPQAuhph4h7QAAgFgCgBQhHgagHBcIAAAoIAAAKIgKAAQgOByBygOIAKAAIAFgBQAXAAAJARg");
	this.shape_249.setTransform(87,26.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(0,0,0,0.612)").s().p("AAZBKQgahMgchIQAsA3AOBUIABAKQgFAAAAgBg");
	this.shape_250.setTransform(-60,59.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(0,0,0,0.541)").s().p("AAFBeQgPhYABhkIAJAAQAABeAKBVIAAAKQgFAAAAgBg");
	this.shape_251.setTransform(-13,-138.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(0,0,0,0.51)").s().p("AN6HbQhmgIAgiOQABhKBFgBIAAAFQgFAAgEACQgtASgGA8QgcCABiAHIAAAFIgKAAgAt0jhQgQh2ABiDIAKAAQgBB+ALByIAAAKIgFgBg");
	this.shape_252.setTransform(10,27.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(0,0,0,0.29)").s().p("AgECqIAAg8IAAgKIAAkXQAQCogMC/IgEAAIAAgKg");
	this.shape_253.setTransform(75.5,-131);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(0,0,0,0.882)").s().p("AAACbQgEibAAiaQAEAFADAGQACAEAAAFIAAEXIAAAKg");
	this.shape_254.setTransform(74.5,-135.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(0,0,0,0.486)").s().p("ABMAYQhNgahTgWQBkAEBDAmQACACAAAFQgFAAgEgBg");
	this.shape_255.setTransform(47.5,-179.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgyI/GAAI/FAAI/GAAIAAgKIAAveQFHiOE6icQAEgCAFAAILkAAIAKAAQDSAADSgFIAAgFQAPAAANgEQACgBAAgFQBXixERACIAAgFQAJhZglhbQgCgFAAgFIgBgKQgOhVgtg3QgFAAgCgCQgvg7gQhZQAAgFgBgEQgXhNgahJIgBgKIgdiWIAAgKQgLhyABh+IAAgKIAAgKQAhhhA2hKQADgEAAgFQG5iAEAk6QADgDAAgFQhOjFgpjpIgBgKIgBgKQgKhUABhgQBDjuDThgQACgBAAgFQB8ghBrAgQAEABAFAAQBTAWBOAbQAEABAFAAQB1BiA+CZQABAEAAAFQAACbAFCbIAFAAIAAA8IAAAKIgBAKQgtENhyDJQAMBsBiAVIAKABQBJAhBgAHIAKAAQEiDhCaF+QAoBkBEBdQA0BJAtAFQAzAJAWAQIBTqlQATgWAbgMQAEgCAFAAQEnAAEngFIAAgFIAKAAIJOAAIAKAAQBuAABugFIAAgFIA8AAIAKAAIAKAAQA8AwgdBdQgBAEAAAFIAAAeIAAAKIgFABQgcD8gvDiIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAvBjC3gmIAKgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAAyFSQggCOBmAIIAKAAQAPAAAJAIQAYAUANgTQBIhjiPiCIAAgFQhFABgBBKg");
	this.shape_256.setTransform(87,26.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(0,0,0,0.537)").s().p("AAeBPQgchVgkhJQA1A3APBeIABAKQgFAAAAgBg");
	this.shape_257.setTransform(-60.5,59);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(0,0,0,0.451)").s().p("AAJBfQgDhqgVhTQAnBBgKByIAAAKg");
	this.shape_258.setTransform(-76.4,15.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(0,0,0,0.675)").s().p("AB4AFIj5AAIAAgJID5AAIAKAAIAAAJIgKAAg");
	this.shape_259.setTransform(-148,105.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(0,0,0,0.706)").s().p("ADrAFInfAAIAAgJIHfAAIAKAAIAAAJIgKAAg");
	this.shape_260.setTransform(-185.5,105.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(0,0,0,0.4)").s().p("AAABkQgEhkAAhjIAJAAIAAC9IAAAKg");
	this.shape_261.setTransform(-79.5,-11);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(0,0,0,0.553)").s().p("AAhBBQAAgFgCgEQgWhIgtgwQBIAfABBig");
	this.shape_262.setTransform(109.8,69.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(0,0,0,0.549)").s().p("AgtglQABhKBEgBIAAAFQgFAAgFACQgsATgFA7QgeCLB3gFIAAAFIgKAAIgIABQhzAAAiiWg");
	this.shape_263.setTransform(96.6,63.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(0,0,0,0.498)").s().p("ABBAjQhfgJgsg8QA9ArBXAUQABABAAAFIgKAAg");
	this.shape_264.setTransform(67.5,-54.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(0,0,0,0.682)").s().p("AACBfIAAgKQgIhVgBheIAJAAQAFBfABBeg");
	this.shape_265.setTransform(74.8,-122.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(0,0,0,0.459)").s().p("AArA6Qgvg6gtg7QA9ArAkBDQACAEAAAFQgFAAgCgCg");
	this.shape_266.setTransform(67,-164);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(0,0,0,0.514)").s().p("ABUAwQg0hUh5gNQCKgEAnBeQACAEAAAFQgFAAgBgCg");
	this.shape_267.setTransform(52,-176);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgxI/GAAI/FAAI/GAAIAAgKIAAveQFIiOE5icQAEgCAFAAIHgAAIAKAAID6AAIAKAAQDSAADSgFIAAgFQAPAAANgFQACAAAAgFQBXiyERADIAAgFQAJhZglhcQgCgEAAgFIgBgKQgPhfg2g3QAAgFgCgEQhDhwgpiKIAAgKQAKhzgohBQAAgFgCgEQgMgWAEgnIAAgKIAAi+IAAgKIAAgUQAnhSAwhGQADgDAAgFQG7h/D+k7QADgDAAgFQhOjFgpjpIgBgKIgBgKQgKhVABhfQA2jiDChYQACgBAAgFQCag+CSAyQAFACAFAAQB6ANA0BVQABACAFAAQAAAFADACQACADAFAAQAtA8AwA5QACADAFAAQAsBggNCaIgBAKIgKAAQABBeAJBWIAAAKIgBAKQgtENhyDJQAAAjAFAiIAFABQAsA9BgAIIAKABIAKAAQBRAdBYAUIAKABQD7E1C2F7QA0BsBsA1IAMAGQAuAXATAUIBVq1QATgVAbgMQAEgCAFAAQEnAAEngFIAAgFIAKAAIJOAAIAKAAQBuAABugFIAAgFIA8AAIAKAAIAKAAQA8AvgdBdQgBAFAAAFIAAAeIAAAKIgFAAQgcD8gvDjIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBNgWA1IAABQIAAAKQAvBiC3glIAKgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgACWHnQAvAqA9gaQACgBAAgFIAFAAQgBhjhKgfQAAgFgCgDQgkgsgggwIAAgFQhFABgBBKQgjCbB9gFIAKAAg");
	this.shape_268.setTransform(87,26.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#CC3300").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_269.setTransform(155.1,41);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(0,0,0,0.431)").s().p("AAYBsQgxhXgEiCQAVBwAlBiQABAEAAAFQgFAAgBgCg");
	this.shape_270.setTransform(-73,26);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(0,0,0,0.478)").s().p("ABuG3QgbhNgchIQAtA3AOBVIABAKQgFAAAAgBgAhPhkQgpiUAGi/IAKAAQgFC5AiCSIABAJQgFAAAAgBg");
	this.shape_271.setTransform(-68.5,23);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(0,0,0,0.522)").s().p("AZUSrIAAhQQAWg0ADhOIAFAAIAAAKQgFBzgZBfIAAgKgA5YuxQgWh6gDiJIAKAAQAECDAPB3IABAKQgFAAAAgBg");
	this.shape_272.setTransform(151,-26.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(0,0,0,0.553)").s().p("AgtglQABhKBEgBIAAAFQgFAAgFACQgsATgFA7QgeCLB3gFIAAAFIgKAAIgIABQhzAAAiiWg");
	this.shape_273.setTransform(96.6,63.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(0,0,0,0.447)").s().p("AAmA/Qgsg9gmhCQA3AxAgBHQACAEAAAFQgFAAgCgCg");
	this.shape_274.setTransform(132.5,16.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(0,0,0,0.51)").s().p("AAAAAIAAAAIAAAAg");
	this.shape_275.setTransform(155,41);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(0,0,0,0.482)").s().p("ABBAjQhegLgtg6QA/ApBVAWQABABAAAFIgKAAg");
	this.shape_276.setTransform(67.5,-54.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(0,0,0,0.749)").s().p("AAACgQgFigAAifQAQCOgHCnIAAAKg");
	this.shape_277.setTransform(74.6,-134);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(0,0,0,0.529)").s().p("AgOBQIAAgeQAMhEAMhGQAAgBAFAAIAAAKQgEBegZBLIAAgKg");
	this.shape_278.setTransform(72.5,-103);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(0,0,0,0.592)").s().p("ABHAXQhFgdhRgSQBiABA7ApQACACAAAFQgFAAgEgCg");
	this.shape_279.setTransform(50,-178.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAveQFHiOE6icQAEgCAFAAILkAAIAKAAQDSAADSgFIAAgFQAPAAANgEQACgBAAgFQBXixERACIAAgFQAJhZglhbQgCgFAAgFIgBgKQgOhVgtg3QgFAAgCgCQgzg3gMhdQAAgFgBgEQgmhggVhyIAAgKIAAgKIgBgJQgiiSAFi5IAAgKQAjhkA/hIQACgDAAgFQG5iBD2lDQADgDAAgFQg/iiguiyIgBgKIgBgKQgPh2gEiEIAAgKQBumOGuBDIAKABQBSASBFAeQAEACAFAAQBmBnA5CUQABAEAAAFQAACgAFCgIAFAAIABAKQAGAlgRANQgFAAAAABQgNBHgMBEIAAAeIAAAKQAAAFgCAFQg0CShCCGQAAAjAFAjIAFAAQAtA8BfAKIAKAAIAKAAQBRAeBYATIAKABQDeDgB1FHQABAEAAAFQAmBDAtA9QACACAFAAQBABvBsBCIAEACIAEAAIABAAQAlADAZAFIBSqfQATgWAbgMQAEgCAFAAQEnAAEngFIAAgFIAKAAIJOAAIAKAAQBuAABugFIAAgFIA8AAIAKAAIAKAAQA8AwgdBdQgBAEAAAFIAAAeIAAAKIgFABQgcD8gvDiIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAvBjC3gmIAKgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgACzHiQAQASAFgNQAvhph/h6IAAgFQhFABgBBKQgjCbB9gFIAKAAQAJgCAHAAQAJAAAEAEg");
	this.shape_280.setTransform(87,27);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(0,0,0,0.443)").s().p("AAJBaQgChngWhMQAnA7gKBuIAAAKg");
	this.shape_281.setTransform(-76.4,16);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(0,0,0,0.51)").s().p("AAFCBQgPh6ABiIIAJAAQAACCAKB3IAAAKIgFgBg");
	this.shape_282.setTransform(-79,-8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(0,0,0,0.475)").s().p("AAFBQQgEhBgKg2QAQgIgCggIAFAAIAACVIAAAKIgFAAg");
	this.shape_283.setTransform(-14,-141);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(0,0,0,0.624)").s().p("AgiA1IAAgyQAEhBBBABIAAAFQgFAAgDACQgzAmgKBPIAAgKg");
	this.shape_284.setTransform(95.5,58.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(0,0,0,0.608)").s().p("Ag1gyIAKAAQgJBnBsgJIAAAFIgKABIgXABQhZAAANhlg");
	this.shape_285.setTransform(96.4,70.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(0,0,0,0.541)").s().p("AgGgCIAKABIADAEIgNgFg");
	this.shape_286.setTransform(153.7,40.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(0,0,0,0.514)").s().p("ABLATQhdgEhCgiICoAiQABAAAAAFIgKgBg");
	this.shape_287.setTransform(80.5,-50);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(0,0,0,0.737)").s().p("AAACgQgFigAAifQAQCOgHCnIAAAKg");
	this.shape_288.setTransform(74.6,-134);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(0,0,0,0.549)").s().p("ApsPNIgsieQAnA9ALBZIAAAKQgFAAgBgCgAJxsaIAAgoQAHhOAbg8QABgCAFAAIgBAKIgnC0IAAgKg");
	this.shape_289.setTransform(8.5,-16.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(0,0,0,0.58)").s().p("ABTArQg4hLh0gMQCGgFArBVQACAEAAAFQgFAAgCgCg");
	this.shape_290.setTransform(51,-176.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(0,0,0,0.643)").s().p("ACqAFIldAAIAAgJQCzAAC0AEIAAAFIgKAAg");
	this.shape_291.setTransform(355,99.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgzI/GAAI/FAAI/GAAIAAgKIAAveQFHiPE6ibQAEgCAFAAILkAAIAKAAQDSAADSgFIAAgFQAPAAANgFQACAAAAgFQBkivELgeQADAAAAgZIAAgKQgLhagng8QAAgFgCgEQhdi6hLjMIAAgKQAKhvgog7IAAgKIAAgKIAAgKQgLh3ABiDIAAgKIAAgUQAphQAuhIQADgDAAgFQG5iBEAk5QADgDAAgFQhZjTgokDIgBgKIAAgKIAAiWQBCjlDKhfQACgBAAgFQCVgoB5AwQAFACAFAAQB1AMA4BLQACADAFAAQBkBLAnCHQABAFAAAFQAACgAFCgIAFAAIAAAeIAAAKQgFAAgBACQgbA8gHBOIAAAoIAAAKQAAAFgCAEQgyCVhECEQAGB7ByAQIAKABQBCAiBdAFIAKABQETDDCBFkQBKDICiCAIAOAGQAOAGAMgBQAbAGAPAJIBTqoQATgVAbgMQAEgCAFAAQEnAAEngFIAAgFIAKAAIJOAAIAKAAQBuAABugFIAAgFIA8AAIAKAAIAKAAQA8AvgdBdQgBAFAAAFIAAAeIAAAKIgFAAQgcD8gvDjIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBNgWA1IAABQIAAAKQAvBiC3glIAKgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgACzHrQAQASAFgNQAxhqiBh5IAAgFQhCgBgEBCIAAAyIAAAKIgKAAQgOByBygOIAKAAQAJgDAHAAQAJAAAEAFg");
	this.shape_292.setTransform(87,26.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(0,0,0,0.451)").s().p("AAiBEQgihIgnhBQA4AwAWBRIABAKQgFAAgBgCg");
	this.shape_293.setTransform(-63,53);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(0,0,0,0.471)").s().p("AAJBfQgDhqgVhTQAnBBgKByIAAAKg");
	this.shape_294.setTransform(-76.4,16.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(0,0,0,0.827)").s().p("AkmgEIGFAAIAKAAIC0AAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_295.setTransform(-122.5,105.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(0,0,0,0.11)").s().p("AC+AFImFAAIAAgJIGFAAIAKAAIAAAJIgKAAg");
	this.shape_296.setTransform(-132,104.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(0,0,0,0.71)").s().p("AETAFIovAAIAAgJIIvAAIAKAAIAAAJIgKAAg");
	this.shape_297.setTransform(-180.5,105.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(0,0,0,0.533)").s().p("AAFCBQgSh4AEiKIAJAAQgCCFAMB0IAAAKQgFAAAAgBg");
	this.shape_298.setTransform(-79,-7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(0,0,0,0.396)").s().p("AAJBkQgEhtgUhaQAlBIgHB1IgBAKg");
	this.shape_299.setTransform(-12.4,-124);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(0,0,0,0.482)").s().p("AhDgJQBbA3AkhCQACgEABgFIAEAAQgTA7gnAAQgfAAgtgng");
	this.shape_300.setTransform(106.8,75);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("rgba(0,0,0,0.522)").s().p("AeFIrIAAhQQAWg0ADhOIAFAAIAAAKQgFBzgZBfIAAgKgA9rAsQgMhggrg+QA8AsAABpIAAAKIgFgBgAgBmqQglg/gahLQArA5AZBKQABAEAAAFQgFAAgBgCg");
	this.shape_301.setTransform(120.5,37.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("rgba(0,0,0,0.518)").s().p("ABQATQhggGhJggQBZAPBZATQABAAAAAFIgKgBg");
	this.shape_302.setTransform(80,-50);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(0,0,0,0.561)").s().p("AgECvIAAlnQAQCsgMDFIgEAAIAAgKg");
	this.shape_303.setTransform(74.5,-131.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("rgba(0,0,0,0.541)").s().p("AGsP+IALABIADAFIgOgGgAlut5QgchQgvg6QBAApAPBZIABAKQgFAAAAgCg");
	this.shape_304.setTransform(110.2,-62.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(0,0,0,0.58)").s().p("ABzATQh7gKh0gSIAAgKID5AiIAAAFIgKgBg");
	this.shape_305.setTransform(37.5,-182);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("rgba(0,0,0,0.573)").s().p("A9sIfQgYhUgVhUQAnBDALBdIAAAKQgFAAAAgCgAeGmTQAcheg8gvQBRAmgtBvQgBABgFAAQAAgFACgEg");
	this.shape_306.setTransform(135.6,23.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("rgba(0,0,0,0.525)").s().p("AT2TiIAAg8QAZhkAKh4IAFAAIgBAKQgHCYggCAIAAgKgAUeO2IAAgyQAvjjAcj9IAFAAIAAAKQgYEZg4D5IAAgKgA0FyJQglhBhDghQBUAQAYBLQACAEAAAFQgFAAgBgCg");
	this.shape_307.setTransform(189,-54);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("rgba(0,0,0,0.624)").s().p("Av2H9QgFgdAAgeQAPg7ATg7QABgCAFAAIgBAKQgOA8gPA8IAAAoIAAAKQgFAAAAgBgAPynzIpYAAIAAgKIJYAAIAKAAIAAAKIgKAAg");
	this.shape_308.setTransform(193,20);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(0,0,0,0.141)").s().p("AC0AFIlxAAIAAgJIFxAAIAKAAIAAAJIgKAAg");
	this.shape_309.setTransform(215,-30.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(0,0,0,0.631)").s().p("ACqAFIldAAIAAgJQCzAAC0AEIAAAFIgKAAg");
	this.shape_310.setTransform(355,99.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFLiQFAiaQAEgCAFAAIIwAAIAKAAQEnAAEngFIAAgFQAPAAANgEQACgBAAgFQBrisEAg1QAOgCgMgQQgFgHAAgKIgBgKQgKhdgnhDIAAgKIgBgKQgWhSg5gwQgFAAgBgCQgJgSgFgUIAAgKQAAhqg8grIAAgKQAKhzgohBIAAgKIAAgKQgNh0ADiGIAAgKIAAgUQAjhfA/hDQACgDAAgFQG/h7DmlSQADgEAAgFQgaiahHhrQgDgEAAgFIAAgKQAIh2gmhIIAAgKIAAh4QAghxA4hYQACgEAAgFQBzhoCvgtIAKgBQB0ATB8AKIAKABQBDAhAlBBQABACAFAAQAUAZAWAXQADACAFAAQAvA7AbBQQABABAFAAIAAAKIAAFoIAAAKIgBAKQgpEQh2DGQAVBpBjAYIAKABQBJAhBgAGIAKABQC0BVBEDDQACAFAAAFQAaBLAlA/QACACAFAAQBmEWDXCkQADACAAAFIAOAGQAVAAAPADQAWADALAIIBSqiQATgVAbgMQAEgCAFAAQEnAAEngFIAAgFIJYAAIAKAAQBuAABugFIAAgFIA8AAIAKAAIAKAAQA8AvgdBeQgBAEAAAFIAAAeIAAAKIgFAAQgcD9gvDiIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAvBjC3gmIAKgBIFeAAIAKAAQGCCQFtCkQAEACAFAAIAAAKIAAQQIz2AAgAEJHHIgFAAQAAgFgCgEQhAhyhyhDQgFAAgBACQgTA7gPA7QAAAeAFAdQAAABAFAAQAMAmA6gHIAKgBQBjBaAkhug");
	this.shape_311.setTransform(87,26.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(0,0,0,0.529)").s().p("ABVDuQgYhUgVhUQAnBDAKBdIABAKQgFAAAAgCgAgkhHQgphGgMhiIA6ChQACAEAAAFQgFAAgCgCg");
	this.shape_312.setTransform(-63,55);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(0,0,0,0.545)").s().p("AALCkQggiTAIi1IAKAAQgHCwAZCPIABAKQgFAAAAgBg");
	this.shape_313.setTransform(-78.6,-5.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(0,0,0,0.18)").s().p("AhtgFIDRAAIAKAAIAAAJIgKAAQgiACgfAAQhOAAhCgLg");
	this.shape_314.setTransform(326,99.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(0,0,0,0.553)").s().p("AgOBaIAAg8QAVgzADhOIAFAAIAAAKQgCBqgbBTIAAgKg");
	this.shape_315.setTransform(314.5,82);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(0,0,0,0.514)").s().p("AgvgKQATgkAGg1IAFgBIAAAKQgBA2gTAkQgPBpBogLIAAAFIgKABIgUABQhaAAAVhvg");
	this.shape_316.setTransform(95.8,65.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(0,0,0,0.541)").s().p("AM8NoIALABIADAFIgOgGgAswqRQgCh7gXhhQAoBQgJCCIgBAKg");
	this.shape_317.setTransform(70.2,-47.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(0,0,0,0.592)").s().p("AAiBEQgmhEgjhFQAzA1AaBMQACAFAAAFQgFAAgBgCg");
	this.shape_318.setTransform(114,-18);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(0,0,0,0.498)").s().p("AAdBEQghhEgehFQAvA1AUBMQACAFAAAFQgFAAgBgCg");
	this.shape_319.setTransform(105.5,-34);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(0,0,0,0.522)").s().p("ABGAXQhKgXhLgYQBcAIBBAjQACABAAAFQgFAAgFgCg");
	this.shape_320.setTransform(88,-47.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(0,0,0,0.443)").s().p("AgEBaIAAi9QAQBYgMBvIgEAAIAAgKg");
	this.shape_321.setTransform(74.5,-141);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(0,0,0,0.494)").s().p("AhZgOQBTAQBfAIIABAFIgKAAIgYAAQhXAAg6gdg");
	this.shape_322.setTransform(42,-181.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(0,0,0,0.322)").s().p("ACCAFIkNAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_323.setTransform(310,-31.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(0,0,0,0.624)").s().p("AkwgEIJXAAIAKAAIAAAEQkxAFkwAAIAAgJg");
	this.shape_324.setTransform(264.5,-30.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(0,0,0,0.133)").s().p("AC0AFIlxAAIAAgJIFxAAIAKAAIAAAJIgKAAg");
	this.shape_325.setTransform(215,-30.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(0,0,0,0.776)").s().p("AkmgEIDIAAIAKAAIFxAAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_326.setTransform(204.5,-29.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(0,0,0,0.635)").s().p("ACqAFIldAAIAAgJQCzAAC0AEIAAAFIgKAAg");
	this.shape_327.setTransform(355,99.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgxI/GAAI/FAAI/GAAIAAgKIAAveQFLiPFAibQAEgBAFAAIIwAAIAKAAQEnAAEngGIAAgEQAPAAANgFQACAAAAgFQBsitD+g5QAPgDgRgRIgBgKQgKhegnhCIgBgKQgQhTg1gwQAAgFgCgEIg6ihQAAgEgDgDQg1hBAGh/IgBgKQgaiOAHixIAAgLQAlhYAyhJQADgDAAgFQG5h9D2k+QADgDAAgEQgXiihKhuQgDgDAAgGIAAgKQAKiBgohRIAAgJIAAiDQAkhjA0hSQACgDAAgGQCIiFD0gWIAAAGQBCAiBogFIAKAAQCTBsBRCtQACAFAAAEIAAC+IAAAKIAAALQgBGPifDxQAcCcC2ADIAKAAQBKAaBLAXQAFABAFAAQAhAMAZAWQACACAAAEQAeBHAiBEQABABAFAAQAFAFADAGQACAFAAAEQAjBHAnBEQABACAFAAQBwE5DrC9QADACAAAEIAOAHQATABAOACQAXAEANAIIBSqgQATgWAbgPQAEgBAFAAQEnAAEngGIAAgEQExgBExgFIAAgEIAKAAIEOAAIAKAAQBmAvg8CGQgCADAAAGIgFAAQgcD8gvDjIAAAyIAAAKIAAAKIgFAAQgKB4gZBjIAAA9IAAAKIgFAAQgDBNgWA0IAAA8IAAAKQgGAuATAWQACACAFABQBdARB1gHIAKgBIFeAAIAKAAQDPBPDJBVQACACAAAFQA7AoBRATIAKABQBnAgBYAtQAEACAFABIAAAKIAAQPIz2AAgADBH4QAeAaAAgUQgLjRiOgOIgFABQgGA1gTAkQgYB7BygMIAKgBQAjABASAQg");
	this.shape_328.setTransform(87,26.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(0,0,0,0.498)").s().p("AAZBJQgXhPgfhEQAwAzAKBYIABAKQgFAAAAgCg");
	this.shape_329.setTransform(-60,61.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(0,0,0,0.878)").s().p("AhogEIAKAAIAKAAICzAAIAKAAIAAAEQhpAFhoAAIAAgJg");
	this.shape_330.setTransform(-103.5,105.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(0,0,0,0.094)").s().p("AC+AFIgKAAIgKAAIlxAAIAAgJIGFAAIAKAAIAAAJIgKAAg");
	this.shape_331.setTransform(-132,104.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(0,0,0,0.78)").s().p("ADDAFImPAAIAAgJIAUAAIAKAAIFxAAIAKAAIAAAJIgKAAg");
	this.shape_332.setTransform(-134.5,105.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(0,0,0,0.706)").s().p("AEJAFIobAAIAAgJIIbAAIAKAAIAAAJIgKAAg");
	this.shape_333.setTransform(-182.5,105.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(0,0,0,0.506)").s().p("AAeBKQgShagug6QBAApAEBiIABAKQgFAAAAgBg");
	this.shape_334.setTransform(-4.5,-97.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(0,0,0,0.455)").s().p("AhKAUQBFgZBHgXQAEgBAFAAQAAAFgCABQhHAfhMAWIAAgKg");
	this.shape_335.setTransform(-59.5,-45);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(0,0,0,0.624)").s().p("AAPC4QgoiiAHjOIAKAAQgHDJAjCeIABAKQgFAAgBgBg");
	this.shape_336.setTransform(-78.1,-2.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(0,0,0,0.561)").s().p("AhPgWQBRANBFAZQAEACAFAAIAAAEQhdgGhCgmg");
	this.shape_337.setTransform(103,75.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(0,0,0,0.565)").s().p("AAMBiQgngUAJhEIAhhrQABgCAFAAIgBAKQgMA5gQA0QgEA2AfAUQACABAAAFQgFAAgEgCg");
	this.shape_338.setTransform(92.9,63);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(0,0,0,0.569)").s().p("AAdBOQgihNgdhQQAtA/AXBXIABAJQgFAAgBgCg");
	this.shape_339.setTransform(120.5,-5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(0,0,0,0.537)").s().p("AM8NtIALABIADAFIgOgGgAswqMQgCiAgXhmQAoBVgJCHIgBAKg");
	this.shape_340.setTransform(70.2,-47.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(0,0,0,0.588)").s().p("AsNHyQgsg5gJhbQAaBJAgBEQACAEAAAFQgFAAgCgCgAM5nDQhNgVhJgbQBbAJBDAjQACABAAAFQgFAAgFgCg");
	this.shape_341.setTransform(12.5,0);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(0,0,0,0.549)").s().p("ABBAeQhZgKgygxQBDAgBRAVQABABAAAFIgKAAg");
	this.shape_342.setTransform(67.5,-54);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(0,0,0,0.49)").s().p("AgECaQgFgxAAgyQAQhWgHhxIAAgKQAUCRgUCaIAAAKIgEgBg");
	this.shape_343.setTransform(74,-135.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(0,0,0,0.533)").s().p("AgTBaIAAgUQAZhJAJhgIAFAAIAAAKQgCBwglBNIAAgKg");
	this.shape_344.setTransform(71,-103);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(0,0,0,0.529)").s().p("AApA1Qg+gkgchHQAtA2A0AwQACACAAAFQgFAAgEgCg");
	this.shape_345.setTransform(64,-167.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(0,0,0,0.525)").s().p("A9nHgQgJhVgUhLQApA/gGBqIgFABIgBgKgAcNFUIAAg8QAZhkAKh4IAFAAIgBAKQgHCYggCAIAAgKgAc1AoIAAgxQAvjjAcj9IAFAAIAAAKQgYEZg4D4IAAgKg");
	this.shape_346.setTransform(135.5,37);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(0,0,0,0.918)").s().p("AhjgEIAKAAICzAAIAKAAIAAAEQhkAFhjAAIAAgJg");
	this.shape_347.setTransform(305,-30.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(0,0,0,0.31)").s().p("ACCAFIhQAAIgKAAIizAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_348.setTransform(310,-31.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(0,0,0,0.718)").s().p("ABaAFIi9AAIAAgJIC9AAIAKAAIAAAJIgKAAg");
	this.shape_349.setTransform(285,-30.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(0,0,0,0.592)").s().p("AC+AFImFAAIAAgJIGFAAIAKAAIAAAJIgKAAg");
	this.shape_350.setTransform(255,-30.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(0,0,0,0.137)").s().p("AC5AFIgKAAIlxAAIAAgJIF7AAIAKAAIAAAJIgKAAg");
	this.shape_351.setTransform(215.5,-30.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFKiME3ieQAEgCAFAAIIcAAIAKAAIGQAAIAKAAQBpAABpgFIAAgFQAPAAANgFQACAAAAgFQBYixEQACIAAgFIAFgBQAGhqgpg/IgBgKQgKhagxgyQAAgFgDgDQgMgMgFgUQAAgFgCgEQgghEgahJQAAgFgDgDQg2g8AHh5IgBgKQgjifAGjJIAAgKIAAgeQAuhfBChJQADgCAFAAQBNgXBHgfQACgBAAgFQFqhiCSk5QACgEAAgFIgBgKQgEhkhBgoQAAgFgCgCQgggTAEg2IAAgKQAKiHgohVIAAgKIAAhaQAih0A2hfQACgEAAgFQEdkLFhDSQACACAAAFQAcBIA/AkQAEACAFAAQAlAlAMA/IABAKIABAKQAGBwgRBYQAAAyAFAxIAFABIABAKQAGAqgRASIgFAAQgJBfgaBLIAAAUIAAAKQAAAFgCAEQgvCShHB9QgIA6AkAQQACABAAAFQAyAyBaAJIAKABQAZAAAYAFQABAAAAAFQBIAaBNAWQAFACAFAAQCECABMC2QACAFAAAFQAdBRAjBNQABACAFAAQBmDfC5CLQADACAAAFIAOAGIAeAEQAXADAQAFIBRqXQATgaAcgQQAEgCAFAAQEnAAEngFIAAgFIAKAAIGGAAIAKAAIC+AAIAKAAQBkAABkgFIAAgFIBQAAIAKAAQBmAwg8CFQgCAEAAAFIgFAAQgcD8gvDjIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIAAAKQAEBegiA4QgFC0Dsg7IAJgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgABKEKIgiBtQgJBEAoAUQAEACAFAAQBCAmBeAHIAAgFIAFAAQgHipiehHQgFAAgBABg");
	this.shape_352.setTransform(87,26.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(0,0,0,0.596)").s().p("AAKBZQgOhKgKhKIAAgKIAAgUQAVBOAHBbIABAKQgFAAAAgBg");
	this.shape_353.setTransform(-77.5,7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(0,0,0,0.498)").s().p("AknMdQgog8gOhXQAfBFAbBHQACAFAAAFQgFAAgBgDgAFZqVQgZhNgog9QA5ArAMBXIABAKQgFAAAAgCg");
	this.shape_354.setTransform(-36,-26);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(0,0,0,0.353)").s().p("AAABzQgEhzAAhyIAJAAIAAC9IAAAKIAAAUIAAAKg");
	this.shape_355.setTransform(-79.5,-10.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(0,0,0,0.463)").s().p("AAKCgQgPifgJigIAKAAIASE1IABAKIgFAAg");
	this.shape_356.setTransform(-12.5,-131);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(0,0,0,0.447)").s().p("AAdBJQgfhKgghJQAxA3ATBUIABAKQgFAAgBgCg");
	this.shape_357.setTransform(119.5,-7.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(0,0,0,0.537)").s().p("ABzAMQhxgXh+AOIAAgJQCCgRB1AfQACAAAAAFIgKgBg");
	this.shape_358.setTransform(30.5,-182.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(0,0,0,0.565)").s().p("ABLAUQhggEg/gjQBRATBXAPQABAAAAAFIgKAAg");
	this.shape_359.setTransform(76.5,-51);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(0,0,0,0.576)").s().p("AgECkQgFg7AAg8QARhWgHhxIgBgKQAUCbgTCkIgBAKIgEgBg");
	this.shape_360.setTransform(74,-134.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(0,0,0,0.561)").s().p("AgYBkIAAgUIAri8QABgBAFAAIAAAKQgPBygiBfIAAgKg");
	this.shape_361.setTransform(71.5,-104);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(0,0,0,0.533)").s().p("AnaU3IgBgKQgNhbgahPQAxBCgEBygAp2NCQgchLgahKIAKAAQAeBBATBMIABAJQgFAAgBgBgAKmzeQgthHhigRQB0gBAgBSQACAEAAAFQgFAAgCgCg");
	this.shape_362.setTransform(-8.5,-47.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(0,0,0,0.322)").s().p("ACCAFIkDAAIgKAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_363.setTransform(310,-31.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(0,0,0,0.729)").s().p("AhtgEIDHAAIAKAAIAKAAIAAAEQhuAFhtAAIAAgJg");
	this.shape_364.setTransform(286,-30.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgtI/GAAI/FAAI/GAAIAAgKIAAveQFKiME3ieQAEgCAFAAIIcAAIAKAAIGQAAIAKAAQBpAABpgFIAAgFQAPAAANgEQACgBAAgFQBPiwEFABIAAgFIAFAAQAEhygxhCQAAgFgBgEQgYhCgZhBQAAgFgCgFQgbhHgfhFIAAgKIAAgUIgBgKQgThLgehAIAAgKIAAgoIgBgKQgHhcgWhOIAAgKIAAi+IAAgKIAAgKQAkhUAzhEQADgDAAgFQHnhwDJmPQACgEAAgFIgBgKQgMhXg5grQgFAAgBgDQgXgggBg3IgBgKIgTk2IAAgKQBEj8DohXQAFgBAFAAQB/gPBxAYIAKABIAKAAIAKAAQBiARAtBHQACACAFAAQBhBJAqCAQABAEAAAFIABAKQAGBxgRBXQAAA8AFA8IAFAAIAAAUIAAAKQgFAAgBABIgsC9IAAAUIAAAKQAAAFgCAFQgxCQhFB+QAKBkBjAPIABAFQA/AlBhADIAKAAQBFAeBHAdQAEABAFAAQBYB/BGCQQACAEAAAFQAgBJAgBLQABACAFAAQBXCjBlCUQACADAAAFQAuAwBEAXQAaAJAeAFIAAgBQAOAGAJAIIBSqZQASgZAcgPQAEgCAFAAQEnAAEngFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQBmAwg8CFQgCAEAAAFIgFABQgcD8gvDiIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgFC0Dsg7IAJgBIFeAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAGkKNIAAAKIgKABQguADgYAaQAkAxBngXQABgBAAgFQAFAAABgCQAfg8hDAAQgNAAgRACgAAyFrIABAKQARB1CEADQBJgMgnhKQg/h1gyAAQgnAAggBJg");
	this.shape_365.setTransform(87,26.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(0,0,0,0.6)").s().p("AALBaQgFhogYhVQAuBKgMB8IgFABIAAgKg");
	this.shape_366.setTransform(-67.1,77);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(0,0,0,0.71)").s().p("AEYAFIo5AAIAAgJII5AAIAKAAIAAAJIgKAAg");
	this.shape_367.setTransform(-181,105.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(0,0,0,0.486)").s().p("AhPAPQBGgYBPgOIAKgBQAAAFgBABQhPAXhPAUIAAgKg");
	this.shape_368.setTransform(-57,-47.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(0,0,0,0.471)").s().p("AAKCkQgYiZAAivIAKAAQAACpATCWIAAAKQgFAAAAgBg");
	this.shape_369.setTransform(-78.5,-4.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(0,0,0,0.631)").s().p("AgFBpQgFhaAAhZQAQgDgCgbIAFAAIABAKQAGAbgQADIAACfIAAAKIgFAAg");
	this.shape_370.setTransform(-9.9,-141.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(0,0,0,0.549)").s().p("ABpANQhjgah4ARIAAgJQB8gUBnAhQACABAAAFIgKgBg");
	this.shape_371.setTransform(32.5,-182.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(0,0,0,0.525)").s().p("AgTCHIAAg8QAYhjAKh4IAFAAIgBAKQgHCXgfCAIAAgKg");
	this.shape_372.setTransform(318,57.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(0,0,0,0.529)").s().p("AgdC5IAAgyQAjiZATivIAFgBIAAAKQgRDLgqCwIAAgKg");
	this.shape_373.setTransform(323,22.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(0,0,0,0.624)").s().p("AhtAAQBlgIBsgBIAKAAIgBAFIjaAOIAAgKg");
	this.shape_374.setTransform(122,100);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(0,0,0,0.588)").s().p("AhKAAQAtgtBeAEIAKABIgBAFQhIAHg4ASQgBA8BQgUIAKgBQAAAFgBAAQgdAIgUAAQgyAAgJgqg");
	this.shape_375.setTransform(100.5,98.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(0,0,0,0.475)").s().p("AAcBOQgphFgVhYQAlBIAfBOQABAEAAAFQgFAAgCgCg");
	this.shape_376.setTransform(124.5,2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(0,0,0,0.51)").s().p("AAcBJQgmhDgYhQQApA/AbBNQABAEAAAFQgFAAgCgCg");
	this.shape_377.setTransform(117.5,-13.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(0,0,0,0.467)").s().p("ABGAYQhQgShFgeQBVANBIAeQACABAAAFIgKgBg");
	this.shape_378.setTransform(89,-47.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(0,0,0,0.573)").s().p("AAdBEQghhEgehFQAvA1AVBMQABAFAAAFQgFAAgBgCg");
	this.shape_379.setTransform(106.5,-34);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(0,0,0,0.561)").s().p("ArPJhQgThzgahoQArBWAHB8IAAAKQgFAAAAgBgALzolQhlgEgxg4QBDAnBcAQQABAAAAAFIgKAAg");
	this.shape_380.setTransform(2.5,5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(0,0,0,0.737)").s().p("AgJBpIAAifQAQgSgCgqIAFAAIAAAKQgGBygNBpIAAgKg");
	this.shape_381.setTransform(76,-122.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(0,0,0,0.533)").s().p("AgOCWIAAhGQAjhwgQh1IAAgKIAFAAQATCjgrCcIAAgKg");
	this.shape_382.setTransform(327.5,-13);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(0,0,0,0.718)").s().p("AhjgEIC9AAIAKAAIAAAEQhkAFhjAAIAAgJg");
	this.shape_383.setTransform(285,-30.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(0,0,0,0.773)").s().p("AkwABQBjgPB5AGIAKAAIFxAAIAKAAIAAAFQk9gCkkAQIAAgKg");
	this.shape_384.setTransform(203.5,-29.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(0,0,0,0.639)").s().p("AClAFIlTAAIAAgJQCuAACvAEIAAAFIgKAAg");
	this.shape_385.setTransform(355.5,99.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(0,0,0,0.584)").s().p("Ac6POQhRgTg7goQBNAXBHAfQACABAAAFIgKgBgA8ttEQgQgTgGgdQASgvAagpQABgCAFAAQAAAFgCAFQgIAdgUAVQgGAuAOAZQACAEAAAFQgFAAgDgCg");
	this.shape_386.setTransform(243,25.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAguI/GAAI/FAAI/GAAIAAgKIAAveQFKiME3ieQAEgCAFAAII6AAIAKAAQEnAAEngFIAAgFQAPAAANgFQACAAAAgFQA3iRC4gUIABgFIAFgBQAMh+gvhJIAAgKIAAgKQgHh8grhWIAAgKQgFiNgjhsQARgNgGglIgBgKIAAgKQgUiWAAiqIAAgKQAdhCAUhLIABgJQAvghAkgtQACgCAFAAQBQgUBPgZQABAAAAgFQFIhhCpj/QADgDAAgFQgQiahNheQgCgCgFAAQAGhrgPhTIgBgKIAAgKIAAigQARgDgGgbIgBgKIAAgKIAAgUQAmg5AehAQACgEAAgFQBnhNB2g9QAEgCAFAAQB5gSBjAbIAKABQDWAzBeCqQACAEAAAFQAeBfgKCHIAAAKIgFAAQACAqgRASIAACgIAAAKIAAAKQgZDlhpCXQgFAAgBACQgaApgSAvQAGAdAQASQADADAFAAQAKAJASAFQACABAAAFQAxA4BlAEIAKAAIAKAAIAKAAQBEAfBRASIAKABQAiAKATAbQACADAFAAQAeBGAiBEQABACAFAAQASAbAQAfQABACAFAAQAYBRAnBDQACACAFAAQAVBZAqBFQACACAFAAQBNBnA9B1QACAEAAAFQAzA0BLAcIAZAIIAGABQAVAIANAJIBUqtQAMgPAPgNQADgCAFAAQEkgSE+ADIAAgFIAKAAIGGAAIAKAAQBkAABkgFIAAgFIAKAAIEOAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB0gkByIAABGIAAAKIgFAAQgTCwgkCZIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIAAAKQAEBegiA4QgBC1Dxg8IAKgBIFUAAIAKAAQDPBODJBWQACABAAAFQA7AoBRATIAKABQBnAgBYAuQAEACAFAAIAAAKIAAQQIz2AAgAA8LKQANA+BggbQABAAAAgFIA8AAIAKAAIDbgPIABgFIAFAAQgXiwjoB+IgKgBIgRAAQhSAAgpApgAA8FOQgHA0AUAZQAjAsAQg0QAjhxggAAQgVAAguAsg");
	this.shape_387.setTransform(87,26.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(0,0,0,0.604)").s().p("AAEBzIgOjlQAbBegHB9IgBAKIgFAAg");
	this.shape_388.setTransform(-75.9,38.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(0,0,0,0.106)").s().p("AC+AFImFAAIAAgJIGFAAIAKAAIAAAJIgKAAg");
	this.shape_389.setTransform(-132,104.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(0,0,0,0.478)").s().p("AAIDNIgBgKQgWi6AEjVIAKAAQgCDYAQDBg");
	this.shape_390.setTransform(-78.8,-3.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(0,0,0,0.58)").s().p("AAPCLQgciCgGiUQAYCCAPCLIAAAKQgFAAAAgBg");
	this.shape_391.setTransform(-73,64);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(0,0,0,0.502)").s().p("AAYBJQgfhGgWhNQAmA9AUBPIABAJQgFAAgBgCg");
	this.shape_392.setTransform(122,-4.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(0,0,0,0.553)").s().p("Ag5gfQAvAhA8ATIAIALQhQgHgjg4g");
	this.shape_393.setTransform(149.8,39.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(0,0,0,0.463)").s().p("AAmA/Qg2gzgchMQAtA7ApA+QADADAAAFQgFAAgCgCg");
	this.shape_394.setTransform(131.5,14.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(0,0,0,0.565)").s().p("AAcBEQgmg/gYhKQApA7AbBHQABAEAAAFQgFAAgCgCg");
	this.shape_395.setTransform(109.5,-30);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(0,0,0,0.573)").s().p("AGpIcQhjgMgzg6QBEAqBbAWQABABAAAFIgKAAgAmtkXQgFhVAAhVQARgqARgvQABgBAFAAIgBAJQgMAwgRArIAACWIAAAKIgFAAg");
	this.shape_396.setTransform(34.5,-104);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(0,0,0,0.624)").s().p("AgJBaIAAiLQAQgNgCglIAFAAIgBAKQgFBigNBbIAAgKg");
	this.shape_397.setTransform(78,-121);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(0,0,0,0.522)").s().p("AAQBLQgDhggkg/QA6AzgOB2IgFAAIAAgKg");
	this.shape_398.setTransform(77.4,-150.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(0,0,0,0.576)").s().p("AhZgTQBNAaBmAIIAAAFIgKAAIgVAAQheAAg2gng");
	this.shape_399.setTransform(48,-181);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFLiLE2ifQAEgCAFAAII6AAIAKAAQEnAAEngFIAAgFQAPAAANgEQACgBAAgFQBIh2BlhbQARgQAAgjIAAgKQgPiMgZiCIAAgKQAHh+gbheQgFAAgDgDQgZgXgHgrQAPgKANgNQACgCAAgFIAFAAQgQjBABjZIAAgKIAAgKQArhgA8hRQACgDAFAAQHBhlD4ktQADgDAAgFQgGifhNhYQgCgDgFAAQAHh1gQhdIgBgKIAAgKIAAiWQARgrAMgwIABgJQBtjnFBgTIAKAAQA8AtBugFIAKAAQBkBVBOBrQACADAAAFQAlA/ADBhIAAAKIAABkIAAAKIgFAAQACAlgRANIAACMIAAAKIgBAKQgqEHh/CxQgLA9AcAWQADACAAAFQAzA6BjAMIAKAAQC7AMBaBuQACADAAAFQAYBLAnA/QACACAFAAQAlArARBCQABABAFAAQAWBOAgBGQABACAFAAQAIAWAGAbQABABAFAAQAcBNA3AzQACACAFAAQAmBHAoBFQACAEAAAFQAiA5BRAHIAVABQAWACAOADIBSqgQAMgTARgPQACgDAFAAQEkgRE+ACIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgTCvgkCZIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgBC2Dxg9IAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgACMLDIgoASQAYAfAvgkIAHgFIADgDQA9gxhjAqIgDAAIAAACgABGFPQgLA9AfATQAoAZAFgfQAUh2geAAQgSAAglAsg");
	this.shape_400.setTransform(87,26.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(0,0,0,0.886)").s().p("AhjgEIC9AAIAKAAIAAAEQhkAFhjAAIAAgJg");
	this.shape_401.setTransform(-102,105.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(0,0,0,0.514)").s().p("AAPB3QgXhygLh8QAbBrALB6IABAKQgFAAAAgBg");
	this.shape_402.setTransform(-74,61);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(0,0,0,0.808)").s().p("ACHAFIkXAAIAAgJIEXAAIAKAAIAAAJIgKAAg");
	this.shape_403.setTransform(-126.5,105.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(0,0,0,0.106)").s().p("AC+AFIkXAAIgKAAIhkAAIAAgJIGFAAIAKAAIAAAJIgKAAg");
	this.shape_404.setTransform(-132,104.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(0,0,0,0.725)").s().p("AFPAFIqnAAIAAgJII5AAIAKAAIBkAAIAKAAIAAAJIgKAAg");
	this.shape_405.setTransform(-175.5,105.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(0,0,0,0.471)").s().p("AhZAPQBSgVBXgRIAKgBQAAAFgCAAQhYAYhZAUIAAgKg");
	this.shape_406.setTransform(-56,-48.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(0,0,0,0.624)").s().p("AAFCqQgSigAEizIAJAAQgDCtANCcIAAAKIgFAAg");
	this.shape_407.setTransform(-79,-7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(0,0,0,0.6)").s().p("AAABkQgFhkAAhjQAQBSgHBrIAAAKg");
	this.shape_408.setTransform(-6.4,-122);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(0,0,0,0.424)").s().p("AhZAIQBNgcBmAEIAAAFIgKAAQhdAGhMAXIAAgKg");
	this.shape_409.setTransform(30,-181.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(0,0,0,0.565)").s().p("AgOBQIAAgyQASgzAGhEIAFAAIAAAKQgEBfgZBKIAAgKg");
	this.shape_410.setTransform(321.5,33);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(0,0,0,0.498)").s().p("AgOBfIAAhGQATg2AFhKIAFgBIAAAKQgFBtgYBaIAAgKg");
	this.shape_411.setTransform(324.5,13.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(0,0,0,0.525)").s().p("APAGQIAAg8QAZhkAKh4IAFAAIgBAKQgHCYggCAIAAgKgAuwkEQgehKgZhLQAqA5ARBTIABAKQgFAAAAgBg");
	this.shape_412.setTransform(220,31);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(0,0,0,0.529)").s().p("AAABkQgFhkAAhjQAQBSgHBrIAAAKg");
	this.shape_413.setTransform(-76.4,38);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(0,0,0,0.486)").s().p("ABLAUQhhgCg+glQBQAUBYAOQABAAAAAFIgKAAg");
	this.shape_414.setTransform(79.5,-50);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(0,0,0,0.537)").s().p("AgNCCIAAgKQAch8gRh9IgBgKQAEAAAAABQAfCXgtB/IAAgKg");
	this.shape_415.setTransform(79.4,-139);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(0,0,0,0.439)").s().p("AAnA6QgghFgzgwQBEAfAUBOIABAKQgFAAgBgCg");
	this.shape_416.setTransform(74.5,-159);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(0,0,0,0.804)").s().p("AkXgEICqAAIAKAAIFxAAIAKAAIAAAEQkYAFkXAAIAAgJg");
	this.shape_417.setTransform(206,-29.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFIiOE5icQAEgCAFAAIKoAAIAKAAIEYAAIAKAAQBkAABkgFIAAgFQAKAAAIgEQACgBAAgFQBSh1BRhwQAWgfgFgyIgBgKQgLh7gchrIAAgKIAAgKQAIhsgShSQgFAAgDgDQgigYACg+QAtgKgOhGIgBgKIAAgKQgOicAEiuIAAgKQAmiEBehLQADgDAFAAQBagUBYgZQACAAAAgFQEyhjC1jfQADgDAAgFQgDishLhkQgCgDAAgFIABgKQAHhsgShSIAAgKIgKiMQBBjwDYhYQAEgCAFAAQBMgXBegHIAKAAQDhAOBTCdQACAEAAAFQA0AwAgBGQABACAFAAIAAAKQATB9gdB9IAAAKIAAAKIAAAKQgLF3ipDXQAIBrBlASQABAAAAAFQA+AmBhACIAKAAQBnAQA7A+QADACAFAAQBNCPBHCUQACAEAAAFQAZBLAeBKQAAABAFAAQBXDuC5BjIAYAMQAiASAVAPIBUqoQAbgfAwgKIAKgBQEYAAEYgFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgFBKgUA3IAABGIAAAKIgFAAQgGBDgTA0IAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgBC2Dxg9IAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAF6LaQACAAAAgFIAFAAQhMhWifA4QgFAAgCACQgLAUgggCQBnBECvg1gABGFZQgCAqAVALQAfARAEgLQAghngaAAQgRAAgrAsg");
	this.shape_418.setTransform(87,26.5);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(0,0,0,0.549)").s().p("AAPBZQgThZgPhZQAfBJAIBgIAAAKQgFAAAAgBg");
	this.shape_419.setTransform(-72,65);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(0,0,0,0.635)").s().p("AADBkQABhugPhZQAhBHgOB2IAAAKg");
	this.shape_420.setTransform(-75.8,38);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(0,0,0,0.663)").s().p("AAIDIIgBgKQgXi0AFjRIAKAAQgDDTARC8g");
	this.shape_421.setTransform(-78.8,-3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(0,0,0,0.675)").s().p("AADB4QgBiAgNhvQAfBdgLCIIgBAKg");
	this.shape_422.setTransform(-6.8,-123);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(0,0,0,0.427)").s().p("AgJBZQgFg7AAg7QATgUAFgoIAFAAIAAAKQAAAogTAUIAABjIAAAKIgFgBg");
	this.shape_423.setTransform(-7.5,-145);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(0,0,0,0.6)").s().p("AhjAHQBkgEBZgOIAKgBQAAAFgCABQhEAThAAAQghAAgggGg");
	this.shape_424.setTransform(122,99.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(0,0,0,0.482)").s().p("AhLgWQAxAoAqgCQAPgBAOgGQAEgCAFAAQAAAFgCACIgEACIAcAAQgeAHgZAAQhBAAgfgtg");
	this.shape_425.setTransform(153.6,40.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(0,0,0,0.573)").s().p("ABGATQhTgKhCgcQBUAKBKAYQABAAAAAFIgKgBg");
	this.shape_426.setTransform(86,-48);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(0,0,0,0.608)").s().p("AgTCCIAAgeQAchpAGiGIAFAAIAAAKQAACagnBzIAAgKg");
	this.shape_427.setTransform(76,-109);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(0,0,0,0.525)").s().p("ASwSNIAAg8QAZhkAKh4IAFAAIgBAKQgHCYggCAIAAgKgAyMwLQgYhUgzg3QBEAlALBdIABAKQgFAAAAgBg");
	this.shape_428.setTransform(196,-45.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(0,0,0,0.545)").s().p("ADgLEQgjhNgdhRQAuBAAXBWIABAKQgFAAgBgCgAjloRIAAgyQASg0gDhOIAFAAIAAAKQAJBtgdBHIAAgKg");
	this.shape_429.setTransform(101,-71);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgpI/GAAI/FAAI/GAAIAAgKIAAveQFIiOE5icQAEgCAFAAIKoAAIAKAAIEYAAIAKAAQBkAABkgFIAAgFQAKAAAIgEQACgBAAgFQBMh8BjhkQAZgaAAgyIAAgKQgIhhgghJIAAgKQAGgtgQgZIAAgKQAOh3gihHQAAgFgCgDQgYgZgEguQAKgKAIgLQACgEAAgFIAFAAQgRi7ACjVIAAgKIAAgUQAmhXAxhKQADgEAAgFQHUhmD5lAQADgDAAgFQgGiahIhYQgCgDAAgFIABgKQALiJgghdIAAgKIAAgKIAAhkQAUgUAAgoIAAgKIAAgKIAAgKQAngzAdg8QACgEAAgFQD7jjFdCRQAFACAFAAQAzA8AuA+QADADAAAFQAzA3AYBUQAAABAFAAIAAA8IAAAKIgFAAQADBOgSA0IAAAyIAAAKIgFAAQgGCGgdBqIAAAeIAAAKQAAAFgBAFQg7CbhQCHQAbCFCPARIAKAAQBCAdBTALIAKAAQCpBcA7DHQACAEAAAFQAdBRAjBNQABACAFAAQBhDGB0CzQACACAFAAQArBABugZIBSqZQAbgfAwgLIAKgBQEYAAEYgFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgFBKgUA3IAABGIAAAKIgFABQgGBDgTAzIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgBC2Dxg9IAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgADwKxQgHAbAPAHQACABAAAFQBfAPBngdQACgBAAgFQAAgFgCgDQgtg0g4AAQgxAAg6AogABaEXQAAAFgCAFQgPAsgNAuQARB3BlhSQACgCAAgFIAFAAQANh/hsgNIAAAKg");
	this.shape_430.setTransform(87,27.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(0,0,0,0.588)").s().p("AAFBoQgTheAGhyQALBiAHBlIABAKQgGAAAAgBg");
	this.shape_431.setTransform(-75,40.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(0,0,0,0.369)").s().p("AAKB8QgVh2gDiCIAKAAQAEB9APByIAAAKQgFAAAAgBg");
	this.shape_432.setTransform(-79.5,-1.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("rgba(0,0,0,0.482)").s().p("AADBpQABhzgPheQAgBNgNB6IAAAKg");
	this.shape_433.setTransform(-7.8,-122.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("rgba(0,0,0,0.557)").s().p("ABLATQhdgFhCghQBUAQBUASQABAAAAAFIgKgBg");
	this.shape_434.setTransform(82.5,-49);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(0,0,0,0.494)").s().p("AqrIXQBcgSBOgeQAFgCAFAAQAAAFgCABQhOAohkAOIAAgKgAKkl2QgBhegThMQAnBCgOBxIgFABIAAgKg");
	this.shape_435.setTransform(11.4,-102.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("rgba(0,0,0,0.624)").s().p("ACzHMIAAgUQAogugFheIAFAAIABAKQAIBsgxA0IAAgKgAgTmvQhZgYhwgEIAAgKQB2ACBbAgQABABAAAFQgFAAgEgCg");
	this.shape_436.setTransform(53.1,-136);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(0,0,0,0.533)").s().p("A+7H4IgjipQAiBCAFBeIABAKQgFAAAAgBgAjMHvIgBgKQgRhTgqg5QBDAqgCBsgAfBjCIAAhGQAkhxgQh1IAAgKIAFAAQATCkgsCcIAAgKg");
	this.shape_437.setTransform(127.5,21.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(0,0,0,0.796)").s().p("AkhgEIC+AAIAKAAIFxAAIAKAAIAAAEQkiAFkhAAIAAgJg");
	this.shape_438.setTransform(205,-29.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(0,0,0,0.627)").s().p("ASNFyIloAAIAAgKQC5AAC5AFIAAAFIgKAAgAxEjxQg9gsgVhUQAmBCAyA4QACADAAAFQgFAAgDgCg");
	this.shape_439.setTransform(255.5,63);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAveQFIiOE5icQAEgCAFAAIKoAAIAKAAIEYAAIAKAAQBkAABkgFIAAgFQAKAAAIgEQACgBAAgFQBNh8B0hZQARgMADgjQAEgrgRgRIAAgKQgGhegihCIAAgKIAAgeIgBgKQgHhmgMhiQgFAAgCgCQgagngRgwQAogVgJhFIgBgKIAAgKQgQhygEh+IAAgKIAAhGQAhhrA2hUQADgEAAgFQA4goBKgTIAKgBQBlgOBNgoQACgBAAgFQENhgCLjhQACgEAAgFQgPiXhJhbQgCgDAAgFIABgKQAMh7ghhNIAAgKIAAh4QAlheAfhhQACgEAAgFQB3h4DJgnIAKgBQBwAEBYAYQAFACAFAAQCnA/BNCbQABACAFAAQATBMABBeIAAAKIAAAKQAJCzgxB5IAAAKIAAAKIgFAAQAEBegnAuIAAAUIAAAKQAAAFgCAFQgqCDhMBjQAaByByAZIAKABQBCAiBdAFIAKABQBUAQAwA0QADACAFAAQB5DbBXD7QACAFAAAFQBEBNAyBeQACAEAAAFQAVBTA9AsQADACAFAAQAlAZAyALQAhALATAKIBWq7QAWgXAigNQAEgBAFAAQEiAAEigFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgFBKgUA3IAABGIAAAKIgFAAQgGBDgTA0IAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgJCyDmg5IAJgBIFoAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAEsKyIAAAUIAAAKQBuAtAZhVIgFAAQAAgFgBAAQgdgFgYAAQgvAAgdAUgAA8F8QAJClB7hmQADgDAFAAIAFAAQADhshEgqIgKgBQgJgCgHAAQg2AAAABdg");
	this.shape_440.setTransform(87,27);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(0,0,0,0.514)").s().p("AAXBLIgCgKQgThKgdhBIAKAAQApA7ADBag");
	this.shape_441.setTransform(-78.2,28.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("rgba(0,0,0,0.529)").s().p("AAKBLQAChggfg/QA0A0gSB0IgFABIAAgKg");
	this.shape_442.setTransform(0,-92.5);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(0,0,0,0.886)").s().p("AikKAIC9AAIAKAAIAAAFQhjAFhkAAIAAgKgACgmuQgFhZAAhaIAAgKIAAgeIAKAAIAADSIAAAKIgFgBg");
	this.shape_443.setTransform(-95.5,41);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("rgba(0,0,0,0.349)").s().p("AAKCfQgaiTACirIAKAAQAABaAEBYIAFABQAHA/ADBDIAAAKQgFAAAAgBg");
	this.shape_444.setTransform(-79.5,-4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(0,0,0,0.471)").s().p("AhUAUQBUgUBLgbQAFgCAFAAQAAAFgCABQhLAjhcASIAAgKg");
	this.shape_445.setTransform(-47.5,-51);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(0,0,0,0.753)").s().p("AAPBxQgwhTAQiQQACB/AjBdQACAEAAAFQgFAAgCgCg");
	this.shape_446.setTransform(-6.2,-115.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("rgba(0,0,0,0.584)").s().p("ABVAJQhRgMhiADIAAgJQBogEBUASQABAAAAAFIgKgBg");
	this.shape_447.setTransform(34.5,-182);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(0,0,0,0.553)").s().p("AAcBEQgug3gQhSIBDCCQACAEAAAFQgFAAgCgCg");
	this.shape_448.setTransform(127.5,8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(0,0,0,0.455)").s().p("ABLAUQhhgCg+glQBQAUBYAOQABAAAAAFIgKAAg");
	this.shape_449.setTransform(79.5,-50);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(0,0,0,0.655)").s().p("AgJCCIAAifQARgqgDhEIAFAAIAAAKQgBCOgSB/IAAgKg");
	this.shape_450.setTransform(77,-125);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("rgba(0,0,0,0.431)").s().p("AALBLQgChcgbhDQAwA4gOBxIgFAAIAAgKg");
	this.shape_451.setTransform(76.9,-149.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("rgba(0,0,0,0.459)").s().p("AAqA1Qg0gvgng8QA3ArAqA5QACAEAAAFQgFAAgDgCg");
	this.shape_452.setTransform(70,-163.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("rgba(0,0,0,0.51)").s().p("AqYS+QgMhhgXhSQAoBBAABpIAAAKIgFgBgAK1xxQg1g5hagUQBrACApBFQACAEAAAFQgFAAgCgDg");
	this.shape_453.setTransform(-6,-58.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("rgba(0,0,0,0.533)").s().p("AgsFZIAAgyQAjiaATiuIAFgBIAAgKIAAhGQAkhxgQh1IAAgKIAFAAQATCkgsCcIgBAKQgPDKgrCxIAAgKg");
	this.shape_454.setTransform(324.5,6.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("rgba(0,0,0,0.592)").s().p("AuXHFQAVgnAEg8IAFgBIAAAKQABA9gVAnQAJBpB5grQAFgCAFAAQAAAFgCABQgsASgfAAQhIAAgBhegAOOoYImGAAIAAgKIGGAAIAKAAIAAAKIgKAAg");
	this.shape_455.setTransform(183,23.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("rgba(0,0,0,0.627)").s().p("ACvAFIlnAAIAAgJQC4AAC5AEIAAAFIgKAAg");
	this.shape_456.setTransform(354.5,99.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAveQFIiOE5icQAEgCAFAAIKoAAIAKAAIEYAAIAKAAQBkAABkgFIAAgFQAKAAAIgEQACgBAAgFQBGh9CKg7QACgBAAgFQADh6gfhYQgCgFAAgFIAAgKQAAhpgohBIAAgKIAAhQIAFAAQgDhagqg7IAAgKQAegPgJg3IgBgKIAAgKQgDhCgHhAIAAgKIAAjSIAAgKIAAgeQAmhNAxhBQADgDAAgFQA3giBLgPIAKgBQBdgRBLglQACgBAAgFQD3hiCWjCQADgDAAgFIAFAAQASh1g1g1QAAgFgCgBQgPgHgDgRQAAgFgBgEQglhdgCiAIgBgKQgOhVgFhfQBEkaEQhMQAFgCAFAAQBjgEBRANIAKABQAcgCANAKQAEACAFAAQBaAUA1A6QACACAFAAQAFAKAEALQABAEAAAFQAnA9A1AvQADACAFAAQAcBDACBdIAAAKIAAAKIAAAKIgFAAQADBEgSAqIAACgIAAAKIgBAKQgrELh+C3QARBnBdAaQAFABAFAAQA+AmBhACIAKAAQBKAVBAAhQACABAAAFQCADABaDlQACAEAAAFQAQBUAvA2QACACAFAAQBRCuCXBnQADACAFAAIAGgFQAgAHAWAHIBUqrQAWgcAjgPQAEgCAFAAQEiAAEigFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgJCzDmg6IAJgBIFoAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgABGE2IAAAKIgFABQgEA8gVAnQACCGCSg6QACgBAAgFQAFAAAAgBQAmiziUAAIgPAAg");
	this.shape_457.setTransform(87,27);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("rgba(0,0,0,0.604)").s().p("AAPBeQgQhggShcQAiBLAFBoIAAAKQgFAAAAgBg");
	this.shape_458.setTransform(-72,66.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("rgba(0,0,0,0.451)").s().p("Ag7A2IAAgKQBxAJABhsIAFAAIAAAKQAEBlhhAAQgMAAgOgCg");
	this.shape_459.setTransform(-76,86.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("rgba(0,0,0,0.486)").s().p("AAKBZQgRhVgHhdIAKAAQAHBXALBSIABAKQgFAAAAgBg");
	this.shape_460.setTransform(-75.5,47);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("rgba(0,0,0,0.11)").s().p("AC5AFIl7AAIAAgJIF7AAIAKAAIAAAJIgKAAg");
	this.shape_461.setTransform(-131.5,104.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("rgba(0,0,0,0.827)").s().p("AkmgEIAKAAIF7AAIAKAAIC0AAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_462.setTransform(-122.5,105.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("rgba(0,0,0,0.702)").s().p("AEYAFIo5AAIAAgJII5AAIAKAAIAAAJIgKAAg");
	this.shape_463.setTransform(-181,105.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("rgba(0,0,0,0.863)").s().p("AAABuQgEhkAAhjIAAgKIAAgKIAJAAIAADRIAAAKg");
	this.shape_464.setTransform(-79.5,-13);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("rgba(0,0,0,0.325)").s().p("AAKCpQgbibADi3IAKAAQAABkAEBjIAFAAQAHA/ADBDIAAAKQgFAAAAgBg");
	this.shape_465.setTransform(-79.5,-5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("rgba(0,0,0,0.549)").s().p("AgJBzQgFhVAAhUQATgUAFgoIAFAAIAAAKQAAAogTAUIAACVIAAAKIgFAAg");
	this.shape_466.setTransform(-9.5,-143.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("rgba(0,0,0,0.576)").s().p("AiLACIENgJIAKAAIAAAFQhXAKhOAAQg7AAg3gGg");
	this.shape_467.setTransform(106,100.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("rgba(0,0,0,0.612)").s().p("AhGAnQgEgTAAgUQBBgXBKgPIAKgBQAAAFgCAAQhIAVhBAXIAAAUIAAAKQgFAAgBgBg");
	this.shape_468.setTransform(97.5,97);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("rgba(0,0,0,0.42)").s().p("Ag3gOQAiAZAVgCIA0ABIAEAAIAAAAIAAAAQgWAFgSAAQgsAAgbgdg");
	this.shape_469.setTransform(155.6,41.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("rgba(0,0,0,0.522)").s().p("AAcBEQgug3gQhSIBDCCQACAEAAAFQgFAAgCgCg");
	this.shape_470.setTransform(127.5,8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("rgba(0,0,0,0.506)").s().p("AAdBJQghhJgehKQAvA6AVBSIABAJQgFAAgBgCg");
	this.shape_471.setTransform(108.5,-31.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("rgba(0,0,0,0.529)").s().p("ABLATQhagIhFgeQBWANBSAVQABAAAAAFIgKgBg");
	this.shape_472.setTransform(82.5,-49);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("rgba(0,0,0,0.494)").s().p("AgEBfIAAjHQAQBcgMB0IgEABIAAgKg");
	this.shape_473.setTransform(77.5,-140.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("rgba(0,0,0,0.596)").s().p("AgTBVIAAgeQALhOAWhGQABgBAFAAIgBAKQgPBcgXBXIAAgKg");
	this.shape_474.setTransform(74,-103.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("rgba(0,0,0,0.482)").s().p("ABLAYQhVgShKgeQBaAOBOAdQABABAAAFIgKgBg");
	this.shape_475.setTransform(49.5,-179.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("rgba(0,0,0,0.533)").s().p("AiLL1IAAgKQBwAWARhIIABgKIAFAAQAABMhQAAQgYAAgfgGgAdECnIAAgyQAjiaAUivIAFAAIAAgKIAAhGQAkhygQh0IAAgKIAFAAQATCkgsCcIgBAKQgQDKgrCxIAAgKgA+drSQBUgQBMgXQAFgBAFAAQAAAFgCAAQhMAghcANIAAgKg");
	this.shape_476.setTransform(134,24.3);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgrI/GAAI/FAAI/GAAIAAgKIAAveQFKiME3ieQAEgCAFAAII6AAIAKAAQEnAAEngFIAAgFQAPAAANgFQACAAAAgFQAmg6Akg8QABgCAFAAQB9AOgFhyIAAgKIAAgKIAAgoIAAgKQgFhqgjhKIAAgKIgBgKQgLhTgIhXIgBgKQgQheghhLQAsgGgNhAIgBgKIAAgKQgDhDgHg/IAAgKIAAjSIAAgKIAAgKQAniXCEg5QAEgCAFAAQBcgNBMggQACAAAAgFQEtheCTj4QACgDAAgFQgMiFhHhLQgCgCgFAAIgUjmIAAgKIAAgKIAAiWQAUgUAAgoIAAgKIAAgKIAAgKQApgxAbg+QACgEAAgFQCXiQEDANIAKABQBKAfBWASIAKABQB0BoBICTQACAEAAAFIAADIIAAAKQAAAFgCAEQgDAGgFAFIAACMIAAAKQgFAAgBABQgXBGgLBPIAAAeIAAAKQAAAFgCAEQgtCZhTB2QAUB9B4AYIAKABQBFAeBaAJIAKABQBcANApBAQACADAFAAQAeBLAiBJQABACAFAAQBHBtAvCDQACAFAAAFQAQBTAvA2QACADAFAAQBKCLBsBrQADADAFAAQAnArBJgSIABAAIgBAAIBSqeQAWgcAjgOQAEgCAFAAQEiAAEigFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB0gkByIAABGIAAAKIgFAAQgUCvgjCaIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIAAAKQAEBegiA4QgBC1Dxg8IAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAC0KVIgKABQhLAOhBAZQAAAUAEATQABABAFAAIAKAAQCCAOCWgTIAAgFQCHAeAAhkIgFAAQgFAAgDgDQg6g6hEAAQhEAAhOA9gABGE3QgTBOAagTQBfhIgqAAQgSAAgqANg");
	this.shape_477.setTransform(87,26.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(0,0,0,0.314)").s().p("ABGAFIizAAIAAgJIDRAAIAKAAQAAAEgCABQgNAEgPAAIgKAAg");
	this.shape_478.setTransform(-101,104.5);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(0,0,0,0.541)").s().p("AAFBkQgJhkgFhjQAVBSgCBrIAAAKIgFAAg");
	this.shape_479.setTransform(-77,65);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(0,0,0,0.831)").s().p("AkmgEIAKAAIF7AAIAKAAIC0AAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_480.setTransform(-122.5,105.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(0,0,0,0.514)").s().p("AALBLQgBhdgchCQAxA3gPBxIgFABIAAgKg");
	this.shape_481.setTransform(-0.1,-92.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(0,0,0,0.694)").s().p("AAFCqQgSigAEizIAJAAQgDCtANCcIAAAKIgFAAg");
	this.shape_482.setTransform(-79,-7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(0,0,0,0.494)").s().p("AhZAPICqgmIAJgBQAAAFgCAAQhVAbhcARIAAgKg");
	this.shape_483.setTransform(-53,-49.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(0,0,0,0.627)").s().p("AADBpQABhzgPheQAgBMgNB7IAAAKg");
	this.shape_484.setTransform(-8.8,-121.5);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(0,0,0,0.506)").s().p("AgFBfQgFhQAAhPQAQgDgCgbIAFAAIABAKQAGAbgQADIAACLIAAAKIgFAAg");
	this.shape_485.setTransform(-9.9,-142.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(0,0,0,0.259)").s().p("AgRgOQgDgDAAgFQAqAtgBAAQgBAAglglg");
	this.shape_486.setTransform(97.1,56.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(0,0,0,0.42)").s().p("Ag3gOQAiAZAVgCIA0ABIAEAAQgWAFgSAAQgrAAgcgdg");
	this.shape_487.setTransform(155.6,41.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(0,0,0,0.573)").s().p("AAcBEQgug3gQhSIBDCCQACAEAAAFQgFAAgCgCg");
	this.shape_488.setTransform(127.5,8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(0,0,0,0.553)").s().p("ABLATQhagIhFgeQBWANBSAVQABAAAAAFIgKgBg");
	this.shape_489.setTransform(82.5,-49);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(0,0,0,0.58)").s().p("AgJCRIAAipQARg0gDhOIAFAAIAAAKQAACegTCNIAAgKg");
	this.shape_490.setTransform(77,-126.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(0,0,0,0.518)").s().p("ABQAUQhoAAhBgnQBTAVBfANIABAFIgKAAg");
	this.shape_491.setTransform(45,-181);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFLiLE2ifQAEgCAFAAII6AAIAKAAQEnAAEngFIAAgFQAPAAANgEQACgBAAgFQB/hrAMitIABgKIAAgKQADhsgXhSIAAgKQAHjEgliZQAogPgJhBIgBgKIAAgKQgOicAEiuIAAgKIAAgKQAliUB8g8QAEgCAFAAQBdgRBVgcQACAAAAgFQEXhlCojTQADgDAAgFIAFgBQAPhygyg3QgFAAgDgDQgpghgLhAIABgKQAMh8ghhMIAAgKIAAgKIAAiMQARgDgGgbIgBgKIAAgKIAAgKQAjhGAqg9QADgEAAgFQB/iADpgWIAKAAQBBAoBpAAIAKAAQDHBlAoEDIABAKIgFAAQADBOgSA0IAACqIAAAKIgBAKQgqELh/C3QAdBvBwAcIAJABQBFAfBaAIIAKABQBUAQAwA0QADACAFAAQBhDGBbDLQACAEAAAFQAQBTAvA3QACACAFAAQBKCLBsBsQADACAFAAQAnArBIgSIgEAAIAFAAIBSqeQAWgcAjgOQAEgCAFAAQEiAAEigFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgBC2Dxg9IAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAAUKtQAAAeAFAdQAAABAFAAQDGANDTgcIABgFQAFAAAAgBQAVhmiIgvIAAgFQioAqiOBJgABSEaQBQBQhShXQAAAFACACg");
	this.shape_492.setTransform(87,26.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(0,0,0,0.294)").s().p("ABQAFIi9AAIAAgJIDRAAIAKAAQAAAEgCABQgIAEgKAAIgKAAg");
	this.shape_493.setTransform(-101,104.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(0,0,0,0.812)").s().p("AgBBxQgEgIAAgKIAAgKIAAjHQAQBhgHB6IAAAKQgEAAgBgCg");
	this.shape_494.setTransform(-81.4,75.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(0,0,0,0.251)").s().p("AAABuQgEhuAAhtIAJAAIAAAKIAADHIAAAKg");
	this.shape_495.setTransform(-82.5,74);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(0,0,0,0.427)").s().p("AgEB9IAAgKIAAjvIAJAAIAADvIAAAKIgJAAg");
	this.shape_496.setTransform(-82.5,50.5);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(0,0,0,0.827)").s().p("AkrgEIAKAAIF7AAIAKAAIC+AAIAKAAIAAAEQksAFkrAAIAAgJg");
	this.shape_497.setTransform(-122,105.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(0,0,0,0.831)").s().p("AAAB4QgEhpAAhoIAAgKIAAgUIAJAAIAADlIAAAKg");
	this.shape_498.setTransform(-79.5,-13);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("rgba(0,0,0,0.286)").s().p("AgBCqQgJiqAAizIAKAAQAABpAEBoIAFAAIAAAKQAHBSgQA6IgBgKg");
	this.shape_499.setTransform(-79.9,-4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(0,0,0,0.49)").s().p("AhUAKQBSgMBNgQIAKgBQAAAFgCAAQhPAXhYALIAAgKg");
	this.shape_500.setTransform(-52.5,-50);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("rgba(0,0,0,0.663)").s().p("AADBpQAAhygOhfQAgBNgMB6IgBAKg");
	this.shape_501.setTransform(-7.8,-121.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(0,0,0,0.62)").s().p("ABRAOQhKgUhgACIAAgKQBngDBLAbQABAAAAAFQgFAAgEgBg");
	this.shape_502.setTransform(38,-181.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("rgba(0,0,0,0.51)").s().p("AAYBJQgehHgXhMQAoA7ASBQIABAKQgFAAgBgCg");
	this.shape_503.setTransform(123,-2.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(0,0,0,0.588)").s().p("AAiBEQgphAgghJQAwA4AdBJQACAFAAAFQgFAAgBgCg");
	this.shape_504.setTransform(139,27);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("rgba(0,0,0,0.451)").s().p("AAiBJQgkhKglhJQA2A3AYBUQABAFAAAFQgFAAgBgCg");
	this.shape_505.setTransform(116,-17.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(0,0,0,0.565)").s().p("ABGAYQhQgShFgeQBVANBIAeQACABAAAFIgKgBg");
	this.shape_506.setTransform(88,-47.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("rgba(0,0,0,0.506)").s().p("ABGAjQhfgOg2g3QBIAlBVAaQACABAAAFIgKAAg");
	this.shape_507.setTransform(70,-53.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(0,0,0,0.549)").s().p("AgEBfIAAjHQAQBcgMB0IgEABIAAgKg");
	this.shape_508.setTransform(78.5,-140.5);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(0,0,0,0.624)").s().p("AgLBVIAAgKQAQhJgChgIAFAAIAAAKQAOBxghBCIAAgKg");
	this.shape_509.setTransform(77.2,-118.5);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(0,0,0,0.537)").s().p("AAjBAQgdhKgtg2QA+AkAQBTIABAKQgFAAAAgBg");
	this.shape_510.setTransform(74,-157.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("rgba(0,0,0,0.592)").s().p("AWHJiImGAAIAAgKIGGAAIAKAAIAAAKIgKAAgA2LmZQgFhVAAhVQARgDgCgbIAFAAIABAKQAGAbgRADIAACWIAAAKIgFAAg");
	this.shape_511.setTransform(132.5,-91);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(0,0,0,0.635)").s().p("AClAFIlTAAIAAgJQCuAACvAEIAAAFIgKAAg");
	this.shape_512.setTransform(355.5,99.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAveQFJiNE4idQAEgCAFAAII6AAIAKAAQEsAAEsgFIAAgFQAKAAAIgEQACgBAAgFQAzhKAlhXQACgEAAgFIABgKQAGh6gRhiIAAgKIAAgKIAAjwIABgKQAThmgohXQAUgPARgRQADgDAAgFQARg5gGhTIgBgKIAAgKIAAjmIAAgKIAAgUQAviKB8g8QAEgCAFAAQBZgLBPgXQACgBAAgFQE3hdCTkCQACgEAAgFQgNiOhLhQQgCgDAAgFIABgKQALh6gghOIAAgKIAAiWQARgDgGgbIgBgKIAAgKQAbgrAMg5IABgKQBziGDNgtIAKgBQBhgCBKAVQAEABAFAAQCnAYA9B/QACAEAAAFQAuA2AdBLQAAABAFAAIAADIIAAAKIAAAKIAAAKIgFAAQADBigSBIIAAAKIAAAKIAAAKQggEHiACnQgKA3AbATQADABAAAFQA2A4BgAOIAKAAIAKAAIAKAAQBFAfBQASIAKABQCAAvAfCPIABAKQAlBJAlBLQABACAFAAQAXBNAfBHQABACAFAAQAdBXA6A4QADACAAAFQAgBJAqBAQABACAFAAQA0BABPAiIAEACIAtAEIAAAAIAAgEIBUqtQAWgcAjgOQAEgCAFAAQEiAAEigFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgBC2Dxg9IAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAAoLGQAsA6CSgbIAKgBQBkgFBjgKIABgFQAFAAACgCQAqg3hFgrQgFAAgEgBQg2gQg0AAQiJAAiABrgABWE9QCHAkiNg/QAAAZAGACg");
	this.shape_513.setTransform(87,27);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(0,0,0,0.275)").s().p("ABQAFIi9AAIAAgJIDRAAIAKAAQAAAEgCABQgIAEgKAAIgKAAg");
	this.shape_514.setTransform(-101,104.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("rgba(0,0,0,0.561)").s().p("AAAB4QgEh4AAh3IAJAAIAADlIAAAKg");
	this.shape_515.setTransform(-83.5,71);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(0,0,0,0.631)").s().p("AgKCRIAAgKIAAjvQAQgIgCggIAFAAIABAKQAGAggQAIIAADlIAAAKIgKAAg");
	this.shape_516.setTransform(-82.9,44.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("rgba(0,0,0,0.82)").s().p("AkrgEIAKAAIF7AAIAKAAIC+AAIAKAAIAAAEQksAFkrAAIAAgJg");
	this.shape_517.setTransform(-122,105.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(0,0,0,0.502)").s().p("AAQBQQAAhognhBQA8A2gQB8IgFABIAAgKg");
	this.shape_518.setTransform(0.4,-93);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("rgba(0,0,0,0.737)").s().p("AgFCvIAAh4IAAgKIAAi9IAAgKIAAgeIAJAAIAAAKQAHDAgQCnIAAgKg");
	this.shape_519.setTransform(-79.4,-6.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(0,0,0,0.216)").s().p("AAABkQgEhkAAhjIAJAAIAAC9IAAAKg");
	this.shape_520.setTransform(-80.5,-11);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("rgba(0,0,0,0.431)").s().p("AAEBfQgChmgMhXQAdBFgKBuIAAAKg");
	this.shape_521.setTransform(-7.9,-122.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(0,0,0,0.612)").s().p("ABfAIQhfgOhoAPIAAgJQBrgSBlAWQABAAAAAFIgKgBg");
	this.shape_522.setTransform(32.5,-181.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("rgba(0,0,0,0.549)").s().p("AAdBOQgihNgdhQQAuA/AWBXIABAJQgFAAgBgCg");
	this.shape_523.setTransform(121.5,-6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(0,0,0,0.443)").s().p("Ag8gPQAoAcAYgEIA4AAIABAAIAAAAIAAAAQgYAHgVAAQgtAAgfgfg");
	this.shape_524.setTransform(155.1,41.6);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("rgba(0,0,0,0.545)").s().p("ABLAeQhrgDg0g4QBGAnBjAPIAAAFIgKAAg");
	this.shape_525.setTransform(74.5,-52);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(0,0,0,0.604)").s().p("AAVBFQhAgNAPhfQAPgKAJgSQABgCAEAAIgBAKQgDAUgPAKQgKBQA6AOQABAAAAAFIgKgBg");
	this.shape_526.setTransform(62.9,-62);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("rgba(0,0,0,0.518)").s().p("AgLBfIAAgKQAQhSgChrIAFAAIAAAKIAAAKQAOB2ghBHIAAgKg");
	this.shape_527.setTransform(78.2,-119.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(0,0,0,0.435)").s().p("AgEBaIAAgKIAAizQAQBYgMBuIgEABIAAgKg");
	this.shape_528.setTransform(79.5,-139);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgpI/GAAI/FAAI/GAAIAAgKIAAveQFHiOE6icQAEgCAFAAII6AAIAKAAQEsAAEsgFIAAgFQAKAAAIgEQACgBAAgFQBfhYgYhwIgBgKIAAgKIAAjmIAAgKIAAjmQARgIgGggIgBgKIgBgKIgTiBQAYgKANgVQADgEAAgFQARingHjBIAAgKIAAgKIAAgUQAmhrBQhCQACgCAAgFQG+hUDxkgQADgDAAgFIAFAAQAQh+g9g2QgFAAgDgCQgkgmgGhGIABgKQAKhugfhGIAAgKIAAiMQBHj5DmhZQAEgCAFAAQBpgQBfAPIAKABQBWAJBBAdQAEACAFAAQB7BwBLCfQACAEAAAFIAAC0IAAAKIgFAAQACBsgRBSIAAAKIAAAKIgBAKQgbDthwCZQgFAAgBACQgJASgPAKQgPBgBBANIAKABQA0A6BsACIAKAAQCJAMBKBMQADACAFAAQBGB5A6CCQACAEAAAFQAdBRAjBNQABACAFAAQBeDTCQCgQACADAAAFQAuAuBMgUIABgBIgBAAIBSqeQAWgbAjgPQAEgCAFAAQEiAAEigFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIAAAKQAEBfgiA3QgBC2Dxg9IAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgACMKxQgFAAgDADQgMAHgKAKQA8BACVgmQABgBAAgFIAeAAIAKAAQCQALg5hYQgCgDgFAAQAAgFgBAAQg8gSg2AAQhmAAhTA/gAA8FTQgSBeBXgTQABAAAAgFQBCglgshAQgCgEAAgFQAAgFgCgCQgagTgSAAQgiAAgKBCg");
	this.shape_529.setTransform(87,27.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(0,0,0,0.761)").s().p("AAAB4QgFg8AAg8IAAgJIAAhuQAQBngHB+IAAAKIgEAAg");
	this.shape_530.setTransform(-81.4,71);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("rgba(0,0,0,0.247)").s().p("AAABpQgEhpAAhoIAJAAIAABQIAAAKIAABtIAAAKg");
	this.shape_531.setTransform(-82.5,60.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(0,0,0,0.502)").s().p("AgKBfIAAgKIAAiBQAQgNgCglIAFAAIABAKQAGAlgQANIAAB3IAAAKIgKAAg");
	this.shape_532.setTransform(-81.9,40.5);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("rgba(0,0,0,0.808)").s().p("AAAB7QgEgIAAgKIAAgKIAAi9IAAgKIAAgUIAJAAIAADvIAAAKQgFAAAAgCg");
	this.shape_533.setTransform(-79.5,-12.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(0,0,0,0.188)").s().p("AAABkQgEhkAAhjIAJAAIAAC9IAAAKg");
	this.shape_534.setTransform(-80.5,-12);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("rgba(0,0,0,0.506)").s().p("AA4FUQAAhpgohBQA9A2gQB9IgFABIAAgKgAgwhaQgPheAAhpQAUgUAFgoIAFAAIAAAKQAAAogUAUQABBeAIBWIABAKQgFAAAAgBg");
	this.shape_535.setTransform(-3.6,-119);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(0,0,0,0.647)").s().p("ABqAMQhlgah3ASIAAgJQB7gVBoAiQACABAAAFQgFAAgEgCg");
	this.shape_536.setTransform(34.5,-181.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("rgba(0,0,0,0.514)").s().p("AAZBKQgdhKgZhKQApA5ARBSIABAKQgFAAAAgBg");
	this.shape_537.setTransform(123,-2.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(0,0,0,0.443)").s().p("Ag8gPQApAcAYgEIA4AAQgYAHgVAAQgtAAgfgfg");
	this.shape_538.setTransform(155.1,41.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("rgba(0,0,0,0.569)").s().p("ABgAiQhigjhmghQB3APBYAwQACABAAAFQgFAAgEgBg");
	this.shape_539.setTransform(89.5,-46.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(0,0,0,0.529)").s().p("AgFBaIAAi9IAJAAIAAAKIAAAKQAHBlgQBOIAAgKg");
	this.shape_540.setTransform(78.6,-120);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("rgba(0,0,0,0.416)").s().p("AgEBaIAAgKIAAizQAQBYgMBuIgEABIAAgKg");
	this.shape_541.setTransform(79.5,-139);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(0,0,0,0.592)").s().p("ApxFDQgqhAgghKQAxA4AdBKQACAFAAAFQgFAAgBgCgAKyk6ImGAAIAAgKIGGAAIAKAAIAAAKIgKAAg");
	this.shape_542.setTransform(205,1.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgpI/GAAI/FAAI/GAAIAAgKIAAveQFHiPE6ibQAEgCAFAAII6AAIAKAAQEsAAEsgFIAAgFQAKAAAIgEQACgBAAgFQBghjgFhlIgBgKIABgKQAGiAgRhmIAAgKIAAhQIAAgKIAAh4QARgNgGglIgBgKIgBgKQgLhDgIhIQA7gkgShyIgBgKIAAgKIAAjwIAAgKQAfh8BXhFQACgCAAgFQHAhTDvkhQADgDAAgFIAFgBQAQh9g9g2QgFAAgBgCQg3hmABicIAAgKQgJhWgBheQAUgUAAgoIAAgKQBYjBDKhMQAFgBAFAAQB4gTBlAbQAEACAFAAQD+A9BKDvQACAFAAAFIAAC0IAAAKIgKAAIAAC+IAAAKIgBAKQgtEDh8C1QAYCJCSAMIAKABQBlAgBjAkQAEACAFAAQCECABDDAQABAFAAAFQAZBLAeBJQAAACAFAAQAdBWA6A4QADADAAAFQAgBIAqBAQABADAFAAQATAjAnATQACABAAAFQAuAuBMgVIBTqgQAbgfAwgKIAKgBQEYAAEYgFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB0gkByIAABGIAAAKIgFAAQgUCvgjCaIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBNgWA1IAABQIAAAKQAzBjC9gmIAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAE2J1IAAAKQgFAAgEABIhvAnQgFAAgEACQgTAKgMASQCHA6Ctg1QACAAAAgFIAFgBQAKhThuAAQgZAAgeAEgAA8FTQgaBpBMAAIAAgFQBvglhFhfQgCgDAAgFQAAgFgCgDQgagYgSAAQggAAgMBIg");
	this.shape_543.setTransform(87,27.1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(0,0,0,0.651)").s().p("AANCWIgBgKQggh+AEijQAQCYASCTg");
	this.shape_544.setTransform(-79.3,74);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("rgba(0,0,0,0.11)").s().p("AC0AFIlxAAIAAgJIFxAAIAKAAIAAAJIgKAAg");
	this.shape_545.setTransform(-131,104.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(0,0,0,0.827)").s().p("AkmgEIAKAAIFxAAIAKAAIC+AAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_546.setTransform(-121.5,105.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("rgba(0,0,0,0.702)").s().p("AEdAFIpDAAIAAgJIJDAAIAKAAIAAAJIgKAAg");
	this.shape_547.setTransform(-180.5,105.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(0,0,0,0.196)").s().p("AAABpQgEhpAAhoIAJAAIAADHIAAAKg");
	this.shape_548.setTransform(-80.5,-11.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("rgba(0,0,0,0.494)").s().p("AAIDXQAAhogOhWQAfBFgLBvIgBAKgAgLAPQgFhUAAhVQATgUAFgoIAFAAIAAAKQAAAogTAUIAACVIAAAKIgFAAg");
	this.shape_549.setTransform(-8.3,-133.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(0,0,0,0.576)").s().p("ABaAIQhagOhjAPIAAgJQBlgTBhAXQABAAAAAFIgKgBg");
	this.shape_550.setTransform(33,-181.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("rgba(0,0,0,0.463)").s().p("ABIAcQgHhEiOATIAAgKQClgbgLBfIgFABIAAgKg");
	this.shape_551.setTransform(125.8,94.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(0,0,0,0.588)").s().p("Ah8gaIAKAAIAKAAQBEBECYgmIAJgBQAAAFgBABQhBASgzAAQhWAAgug1g");
	this.shape_552.setTransform(118.5,98.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("rgba(0,0,0,0.569)").s().p("AAYBJQghhEgUhPQAlA+AUBOQACAEAAAFQgFAAgBgCg");
	this.shape_553.setTransform(122,-4.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(0,0,0,0.584)").s().p("AAhBJQgthBgbhSQAsBBAhBLQACAEAAAFQgFAAgCgCg");
	this.shape_554.setTransform(115,-19.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("rgba(0,0,0,0.525)").s().p("AR0JTIAAg8QAZhkAKh4IAFAAIgBAKQgHCYggCAIAAgKgAvwoXQhXghhUgkQBlATBNAsQACACAAAFQgFAAgEgBg");
	this.shape_555.setTransform(202,11.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(0,0,0,0.298)").s().p("AgFBaIAAi9IAJAAIAAAKQAHBrgQBSIAAgKg");
	this.shape_556.setTransform(78.6,-121);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("rgba(0,0,0,0.533)").s().p("AdEHMIAAgyQAjiaAUivIAFgBIAAgKIAAhGQAkhwgQh1IAAgKIAFAAQATCkgsCbIgBAKQgQDLgrCxIAAgKgA+dm3QBTgLBNgSIAKgBQAAAFgCAAQhOAZhaAKIAAgKg");
	this.shape_557.setTransform(134,-5);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(0,0,0,0.804)").s().p("A4dCfQgEgOAAgPIAAgKIAAjHIAAgKIAAgUIAKAAIAAEDIAAAKQgFAAgBgBgAPyifICqAAIAKAAIFyAAIAKAAIAAAFQkYAFkYAAIAAgKg");
	this.shape_558.setTransform(77,-14);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgpI/GAAI/FAAI/GAAIAAgKIAAveQFJiNE4idQAEgCAFAAIJEAAIAKAAQEnAAEngFIAAgFQAKAAAIgEQACgBAAgFQAlhdBRgyQACgCAAgFIAFAAQgSiTgRiZIAAgKQAFjpgZiwQA6gggRhsIgBgKIAAgKIAAkEIAAgKIAAgKQAeifCVgtQABgBAAgFQBbgJBNgZQACgBAAgFQEqhhCfjqQADgEAAgFQgUiWhEhlQgCgEAAgFIABgKQAKhvgfhFIAAgKIAAgKIAAiWQAUgUAAgoIAAgKQBai4DIhKQAFgCAFAAQBkgQBaAPIAKABQBVAKBCAcQAEACAFAAQBgBfBNBxQACACAFAAQAdBmgJCKIAAAKIgKAAIAAC+IAAAKIgBAKQgxEEh4C+QAkCbC4AFIAKAAQBTAkBXAhQAEABAFAAQBBAyAYBbIABAJQAbBTAuBBQACACAFAAQAUBQAiBEQABACAFAAQBRClBgCSQADADAAAFQA5A1BKAjIAEACIAtgCIABAAIABgJIBTqjQAbggAwgKIAKgBQEYAAEYgFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFABQgKB3gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAzBjC9gmIAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAG3LVQABgBAAgFQAKAAAIgEQACgBAAgFIAFAAQALhgimAaIAAAKQgFAAgEACQgwAQgrAWIgKAAIgKAAQBJBVCwgxgAA8FnQgMBIAlALQA0AOAFgfQAUh+ggAAQgXAAgvA8g");
	this.shape_559.setTransform(87,27.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(0,0,0,0.455)").s().p("AAFCLQgMiJgCiNIAJAAQADCJAHCEIAAAKIgFgBg");
	this.shape_560.setTransform(-80,49);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("rgba(0,0,0,0.396)").s().p("AAMBLQgEhagZhFIAKAAQAfBEgHBkIgFABIAAgKg");
	this.shape_561.setTransform(-81.2,26.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(0,0,0,0.82)").s().p("AkmgEIAKAAIFxAAIAKAAIC+AAIAKAAIAAAEQknAFkmAAIAAgJg");
	this.shape_562.setTransform(-121.5,105.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("rgba(0,0,0,0.694)").s().p("AEdAFIpDAAIAAgJIJDAAIAKAAIAAAJIgKAAg");
	this.shape_563.setTransform(-180.5,105.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(0,0,0,0.514)").s().p("AAAB4QgEh4AAh3IAJAAIAADlIAAAKg");
	this.shape_564.setTransform(-80.5,-12);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("rgba(0,0,0,0.557)").s().p("AheAPQBcgSBYgUIAJgBQAAAFgCAAQhZAchiAQIAAgKg");
	this.shape_565.setTransform(-53.5,-49.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(0,0,0,0.569)").s().p("AAOC0QgChngMhWQAdBFgKBuIAAAKgAgFgJQgEhIgLg6QARgIgCggIAFAAIAACgIAAAKg");
	this.shape_566.setTransform(-9.9,-130);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("rgba(0,0,0,0.522)").s().p("AeZCMIAAhQQAWg0ADhNIAFAAIAAAKQgFBygZBfIAAgKgA+nAoQgDhkgMhZQAdBHgJBsIAAAKg");
	this.shape_567.setTransform(118.5,79);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(0,0,0,0.525)").s().p("AY7N6IAAg8QAZhkAKh4IAFAAIgBAKQgHCYggCAIAAgKgA4YrvQghhPgphFQA7A0AUBYIABAKQgFAAgBgCg");
	this.shape_568.setTransform(156.5,-18);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("rgba(0,0,0,0.682)").s().p("AgWgGQgCgBAAgFQA0AZgDAAQgDAAgsgTg");
	this.shape_569.setTransform(123.5,96.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(0,0,0,0.584)").s().p("Ag1AAQAVgmAEg8IAFgBIAAAKQABA9gVAmQgJBtBiglQAFgCAFAAQAAAFgCABQghAOgXAAQg+AAALhkg");
	this.shape_570.setTransform(96.4,68);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("rgba(0,0,0,0.537)").s().p("AAcBJQgwg4gOhbQAfBKAkBCQACAEAAAFQgFAAgCgCg");
	this.shape_571.setTransform(126.5,5.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(0,0,0,0.439)").s().p("AAmBDQgrhCgnhGQA4A2AfBLQACAFAAAFQgFAAgCgDg");
	this.shape_572.setTransform(134.5,20);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("rgba(0,0,0,0.576)").s().p("ABWAdQhXgghdgaQBvAIBMAsQACACAAAFQgFAAgEgBg");
	this.shape_573.setTransform(90.5,-46);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("rgba(0,0,0,0.329)").s().p("AgFBaIAAi9IAJAAIAAAKQAHBrgQBSIAAgKg");
	this.shape_574.setTransform(77.6,-121);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("rgba(0,0,0,0.655)").s().p("AApA1QhAgjgahIQAsA3A0AvQADACAAAFQgFAAgEgCg");
	this.shape_575.setTransform(68,-165.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("rgba(0,0,0,0.424)").s().p("AhUgTQBLAYBdAKIABAFIgKAAIgNAAQhdAAg1gng");
	this.shape_576.setTransform(44.5,-181);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("rgba(0,0,0,0.592)").s().p("AraCPQgmhFgahOQArA9AZBOQACAFAAAFQgFAAgBgCgAMRiGImGAAIAAgKIGGAAIAKAAIAAAKIgKAAg");
	this.shape_577.setTransform(195.5,-16.5);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgvI/GAAI/FAAI/GAAIAAgKIAAveQFJiNE4idQAEgCAFAAIJEAAIAKAAQEnAAEngFIAAgFQAKAAAIgEQACgBAAgFQBphuAYhaIABgKIAAgKQAJhtgdhHIAAgKIAAgKQgHiFgDiJIAFgBQAHhkgghEQA0hBgehpQgCgFAAgFIAAgKIAAjmIAAgKIAAgKQAriNB2hDQAEgCAFAAQBjgQBZgdQACAAAAgFQFdhWBqlEIgFAAIgBgKQgUhYg7g0QAAgFgCgBQgPgHAHgbIABgKQAJhugehGIAAgKIAAigIAAgKIAAgUQAngpALhFIAAgKQCEioEMggIAKAAQA5ArBngDIAKAAQBIANAaA6QACAEAAAFQAaBJBBAjQAEACAFAAQBBBkgPC0IAAAKIgKAAIAAC+IAAAKIgBAKQgtEHh8C7QAiCSCwAJIAAAFQBcAaBYAhQAEABAFAAQBnBmA3CVQACAEAAAFQAaBPAmBFQABACAFAAQAOBcAxA4QACACAFAAQAnBHAsBBQACADAFAAQAyB4B5AwIAEACIAtgDIABAAIABgHIBTqlQAbgfAwgKIAKgBQEYAAEYgFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAzBjC9gmIAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAFWKzQBhAthjgzQAAAFACABgABGExIAAAKIgFAAQgEA9gVAnQgPCIB7gyQACgBAAgFQAlACADgXQAViqh4AAIgVABg");
	this.shape_578.setTransform(87,26.5);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("rgba(0,0,0,0.482)").s().p("AAFBeQgPhYABhkQAPBUAEBfIAAAKQgFAAAAgBg");
	this.shape_579.setTransform(-78,59.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("rgba(0,0,0,0.655)").s().p("AAMBVIAAgKQgJhVgUhKIAKAAQAbBIgDBhg");
	this.shape_580.setTransform(-80.2,26.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("rgba(0,0,0,0.463)").s().p("AhUAKQBOgQBRgMIAKgBQAAAFgBAAQhUAUhUAOIAAgKg");
	this.shape_581.setTransform(-55.5,-49);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("rgba(0,0,0,0.694)").s().p("AhFKKIpEAAIAAgKIJEAAIAKAAIAAAKIgKAAgAKFmPQgFh9AAh9IAKAAIAADwIAAAKg");
	this.shape_582.setTransform(-145,41);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("rgba(0,0,0,0.494)").s().p("AAEBfQgChmgMhXQAdBFgKBuIAAAKg");
	this.shape_583.setTransform(-9.9,-122.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("rgba(0,0,0,0.608)").s().p("AgsA4IAAgoQALh1BLAzQADACAAAFQgFAAgEgCQhEgUgMCDIAAgKg");
	this.shape_584.setTransform(96.5,60.4);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("rgba(0,0,0,0.42)").s().p("AlcBxIAKAAQAEBtB+gwQAFgBAFAAQAAAFgCAAQguATggAAQhDAAgDhUgADxjEQAiAaAWgCIA0ABIgFAAQgTAFgRAAQgoAAgbgeg");
	this.shape_585.setTransform(125.9,59.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("rgba(0,0,0,0.427)").s().p("AAnA/QgjhHgwg4QBCAmAWBSIABAJQgFAAgBgCg");
	this.shape_586.setTransform(135.5,22.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("rgba(0,0,0,0.486)").s().p("AAcBDQgtg2gRhSIBDCCQACAEAAAFQgFAAgCgDg");
	this.shape_587.setTransform(112.5,-24);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("rgba(0,0,0,0.549)").s().p("ABMAdQhSgbhOgfQBgANBHAoQACABAAAFQgFAAgEgBg");
	this.shape_588.setTransform(91.5,-46);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("rgba(0,0,0,0.537)").s().p("ABGAiQhegOg3g2QBJAkBVAbQABABAAAFIgKgBg");
	this.shape_589.setTransform(69,-53.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("rgba(0,0,0,0.647)").s().p("AgsBVIAAgUQAvhHAlhWQAAgCAFAAQAAAFgCAEQgjBig0BSIAAgKg");
	this.shape_590.setTransform(64.5,-75.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("rgba(0,0,0,0.624)").s().p("AgTBaIAAgeQAXhHALhYIAFAAIAAAKQgEBtgjBQIAAgKg");
	this.shape_591.setTransform(73,-100);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("rgba(0,0,0,0.392)").s().p("AgFBaIAAi9IAJAAIAAAKQAHBrgQBSIAAgKg");
	this.shape_592.setTransform(76.6,-121);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("rgba(0,0,0,0.561)").s().p("ABzAUIjvgdIAAgKQB+ANB6AVQABAAAAAFIgKAAg");
	this.shape_593.setTransform(40.5,-181);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("rgba(0,0,0,0.29)").s().p("AB9AFIj5AAIgKAAIAAgJQCGAACHAEIAAAFIgKAAg");
	this.shape_594.setTransform(309.5,-31.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAveQFJiNE4idQAEgCAFAAIJEAAIAKAAQEnAAEngFIAAgFQAKAAAIgEQACgBAAgFQBQhzBEhNQACgDAAgFIgUiMIAAgKIAAgKQgEhggQhUIgBgKQgQg6AHhSIAKAAIAFAAQADhhgchIIAAgKQAog/gchXQgCgFAAgFIAAgKIAAjwIAAgKIAAgKQAoiLBvhFQAEgCAFAAQBVgOBUgVQABAAAAgFQEyhjCrjpQADgDAAgFQgfiahDh1QgCgEAAgFIABgKQAJhvgehFIgBgKQgGhEgDhIQAmhmAyhZQACgEAAgFQBwhwC8glIAKgBIDwAeIAKAAQBzBUBYByQACACAFAAQAmBxgICdIAAAKIgKAAIAAC+IAAAKQAAAFgCACQgDADgFAAIgFAAQgLBYgYBIIAAAeIAAAKIAAAKQgBAdgTALQgFAAAAACQglBWgwBIIAAAUIAAAKQAAAFgCACQgDADgFAAQgKA3AbASQADACAAAFQA3A3BfAOIAKABQAhgEATAMQADACAFAAQBNAgBTAbQAEABAFAAQBGAeAPBZQAAABAFAAQARBTAuA2QACADAFAAQBECmBQCbQACAEAAAFQAxA4AjBHQABACAFAAQAbBJBAAjQAEACAFAAQAnArBAgSIAFAAIAEAAIBTqgQAbgfAwgKIAKgBQEYAAEYgFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFID6AAIAKAAQAcACAUAMQACABAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAzBjC9gmIAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAC8H6QACgBAAgFQAFAAACgCQA9hfh2hxQAAgFgDgCQhMgzgLB2IAAAoIAAAKIAAAeIAAAKIgKAAQAFB9CPg7g");
	this.shape_595.setTransform(87,27);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("rgba(0,0,0,0.278)").s().p("ABGAFIizAAIAAgJIDRAAIAKAAQAAAEgCABQgNAEgPAAIgKAAg");
	this.shape_596.setTransform(-101,104.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("rgba(0,0,0,0.435)").s().p("AAJBpQgFhygThfQAlBOgHB5IgBAKg");
	this.shape_597.setTransform(-76.4,71.5);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("rgba(0,0,0,0.82)").s().p("AkhgEIAKAAIFxAAIAKAAIC0AAIAKAAIAAAEQkiAFkhAAIAAgJg");
	this.shape_598.setTransform(-122,105.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("rgba(0,0,0,0.553)").s().p("AAACGQgQhcAChqQASgbAGgqQAAgBAFAAIAAAKQgBArgSAbQAABeAJBVIAAAKQgFAAAAgBg");
	this.shape_599.setTransform(-11.5,-141.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("rgba(0,0,0,0.655)").s().p("AheAAQBZgMBkAHIAAAFIgKAAQhdAAhWAJIAAgJg");
	this.shape_600.setTransform(27.5,-181.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("rgba(0,0,0,0.525)").s().p("AeoCqIAAg8QAZhkAKh3IAFAAIgBAKQgHCXggCAIAAgKgA/AAeQgNhmgChrIAKAAQADBmAHBhIAAAKIgFAAg");
	this.shape_601.setTransform(120,54);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("rgba(0,0,0,0.502)").s().p("AhUgDQBOAQBSgZQAEgBAFAAQAAAFgCABQgxAVgrAAQgoAAgjgRg");
	this.shape_602.setTransform(100.5,77.4);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("rgba(0,0,0,0.541)").s().p("AgsA5IAAgyQAPhrBHAzQADACAAAFQgFAAgEgCQhGgVgKCEIAAgKg");
	this.shape_603.setTransform(96.5,60.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("rgba(0,0,0,0.62)").s().p("AAdBOQgihNgdhQQAtA/AXBXIABAJQgFAAgBgCg");
	this.shape_604.setTransform(120.5,-6);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("rgba(0,0,0,0.478)").s().p("AAdBEQgmg/gZhKQAqA5AZBJQACAEAAAFQgFAAgBgCg");
	this.shape_605.setTransform(113.5,-21);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("rgba(0,0,0,0.557)").s().p("ABMAdQhQgdhQgdQBhALBGApQACACAAAFQgFAAgEgBg");
	this.shape_606.setTransform(91.5,-46);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("rgba(0,0,0,0.616)").s().p("AgQDIIAAgUQAiimgOjVIgBgKIAFAAQAaD0gyCvIAAgKg");
	this.shape_607.setTransform(74.7,-128);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("rgba(0,0,0,0.529)").s().p("AClKKQhcgHgwg0QBBAjBUATQABABAAAFIgKgBgAAAowQgzhRh7gHQCMgLAlBbQACAFAAAFQgFAAAAgCg");
	this.shape_608.setTransform(60.5,-115.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("rgba(0,0,0,0.318)").s().p("ACCAFIkDAAIgKAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_609.setTransform(310,-31.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("rgba(0,0,0,0.729)").s().p("A9cClQgFiHAAiGIAKAAIAAEDIAAAKgAaGikIDIAAIAKAAIAKAAIAAAFQhuAFhuAAIAAgKg");
	this.shape_610.setTransform(108,-14.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAveQFJiNE4idQAEgCAFAAIJEAAIAKAAQEiAAEigFIAAgFQAPAAANgEQACgBAAgFQBnh6AthLQADgEgBgTIAAgKQAIh6gmhOIAAgKIAAgeIAAgKQgHhigDhmIAAgKQgHhcgXhNQA3g2ghhgQgCgFAAgFIAAgKIAAkEIAAgKIAAgKQAlhdA8hFQADgDAAgFQHThYDmlDQADgEAAgFQgNiEhGhLQgCgDgFAAQgJhlgLhjIAAgKIgBgKQgKhVABhfQATgbABgrIAAgKIAAgKQBgikCvhUQAEgCAFAAQBWgJBegBIAKAAQAeAFAcAKQACAAAAAFQB7AHAzBRQABACAFAAQBmBJAlCKQABAEAAAFIABAKQAODWgjCmIAAAUIAAAKIAAAKQgZD7hzCfQgGBCAmAWQADACAFAAQAwA0BcAIIAKAAQAggHALAPQACACAFAAQBPAeBRAdQAEABAFAAQBBA2AiBWQABAFAAAFQAZBLAnA/QABACAFAAQAdBRAjBNQABACAFAAQBqD+DOCZIAJABIAAAAIAzAAIBTqkQAbgfAwgKIAKgBQEYAAEYgFIAAgFIAKAAIGGAAIAKAAQBuAABugFIAAgFIEEAAIAKAAQAbgCALAOQACADAAAFIAAAKQAQB1gkBxIAABGIAAAKIgFABQgUCvgjCZIAAAyIAAAKIAAAKIgFAAQgKB4gZBkIAAA8IAAAKIgFAAQgDBOgWA0IAABQIAAAKQAzBjC9gmIAKgBIFUAAIAKAAQGCCRFtCjQAEACAFAAIAAAKIAAQQIz2AAgAAyFUIAAAyIAAAKQAAAFgDADQgCACgFAAQAAAtAFAsIAFABQBLAnBdgrQACgBAAgFIAFAAQgEhvhRhZQAAgFgDgCQgXgQgRAAQglAAgKBJg");
	this.shape_611.setTransform(87,27);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("rgba(0,0,0,0.286)").s().p("ABQAFIi9AAIAAgJIDRAAIAKAAQAAAEgCABQgIAEgKAAIgKAAg");
	this.shape_612.setTransform(-101,104.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("rgba(0,0,0,0.424)").s().p("AAKBaQgNhagLhZQAcBHABBiIAAAKIgFAAg");
	this.shape_613.setTransform(-76.5,65);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("rgba(0,0,0,0.686)").s().p("ACHAFIkXAAIAAgJIEXAAIAKAAIAAAJIgKAAg");
	this.shape_614.setTransform(-167.5,105.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("rgba(0,0,0,0.863)").s().p("AiLgEIBGAAIAKAAIC9AAIAKAAIAAAEQiMAFiLAAIAAgJg");
	this.shape_615.setTransform(-106,105.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("rgba(0,0,0,0.125)").s().p("ABpAFIhGAAIgKAAIiLAAIAAgJIDbAAIAKAAIAAAJIgKAAg");
	this.shape_616.setTransform(-123.5,104.5);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("rgba(0,0,0,0.776)").s().p("ACbAFIk/AAIAAgJICpAAIAKAAICMAAIAKAAIAAAJIgKAAg");
	this.shape_617.setTransform(-136.5,105.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("rgba(0,0,0,0.416)").s().p("AhFAZQA9ghBEgZQAFgBAFAAQAAAFgCABQhEAhhFAeIAAgKg");
	this.shape_618.setTransform(-250,124.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("rgba(0,0,0,0.655)").s().p("ACCAFIkNAAIAAgJIENAAIAKAAIAAAJIgKAAg");
	this.shape_619.setTransform(-196,105.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("rgba(0,0,0,0.545)").s().p("AhUAKQBTgKBMgSIAKgBQAAAFgCAAQhNAYhaAKIAAgKg");
	this.shape_620.setTransform(-55.5,-49);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("rgba(0,0,0,0.557)").s().p("AAFBfQgIhDgGg+IAAgKIAAgyQARBSACBhIAAAKIgFAAg");
	this.shape_621.setTransform(-80,1.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("rgba(0,0,0,0.227)").s().p("AAABpQgEhpAAhoIAJAAIAACLIAAAKIAAAyIAAAKg");
	this.shape_622.setTransform(-81.5,-12.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("rgba(0,0,0,0.592)").s().p("AAJBzQgDh+gVhnQAnBVgKCGIAAAKg");
	this.shape_623.setTransform(-11.4,-123.5);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("rgba(0,0,0,0.608)").s().p("ABQAOQhKgShfAAIAAgKQBlgBBMAZQACAAAAAFIgKgBg");
	this.shape_624.setTransform(35,-181.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("rgba(0,0,0,0.561)").s().p("AgOBVIAAgyQAVgzADhOIAFAAIAAAKQgBBngcBMIAAgKg");
	this.shape_625.setTransform(315.5,74.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("rgba(0,0,0,0.51)").s().p("AgYCgIAAhGQAbh5ARiKIAFAAIgBAKQgQCsggCdIAAgKg");
	this.shape_626.setTransform(319.5,48);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("rgba(0,0,0,0.455)").s().p("ABVAYQhegThVgdQBlAMBXAgQABAAAAAFIgKgBg");
	this.shape_627.setTransform(84.5,-48.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("rgba(0,0,0,0.518)").s().p("AgEBfIAAjHQAQBdgMBzIgEABIAAgKg");
	this.shape_628.setTransform(75.5,-138.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("rgba(0,0,0,0.522)").s().p("AqxSNQgNiTgCiFQAXB2gDCYIAAAKIgFAAgAK7w0QguhMhsgMQB+gGAgBXQACAEAAAFQgFAAgBgCg");
	this.shape_629.setTransform(-9.5,-63.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("rgba(0,0,0,0.529)").s().p("AgOBaIAAg8QATg2AFhLIAFAAIAAAKQgEBpgZBUIAAgKg");
	this.shape_630.setTransform(325.5,6);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("rgba(0,0,0,0.302)").s().p("ACHAFIkXAAIAAgJQCQAACRAEIAAAFIgKAAg");
	this.shape_631.setTransform(308.5,-31.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("rgba(0,0,0,0.514)").s().p("AgMBuIAAhGQAWg+gDhXIAAgKIAFAAQAFCGgdBpIAAgKg");
	this.shape_632.setTransform(328.3,-16);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("rgba(0,0,0,0.584)").s().p("Av2IPQA9AcBZgaQAFgCAFAAQAAAFgCABQgwAUgmAAQgrAAgdgagAGVoeIgUAAIAAgKIJsAAIAKAAIAAAFQksAFksAAIgKAAg");
	this.shape_633.setTransform(192.5,24.3);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("rgba(0,0,0,0.122)").s().p("AClAFIlTAAIAAgJIFTAAIAKAAIAAAJIgKAAg");
	this.shape_634.setTransform(213.5,-30.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("rgba(0,0,0,0.792)").s().p("AkXgEICqAAIAKAAIFTAAIAKAAIAUAAIAKAAIAAAEQkYAFkXAAIAAgJg");
	this.shape_635.setTransform(206,-29.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("rgba(0,0,0,0.624)").s().p("ADYAVQi7guj9ASIAAgKQEBgSC/A0QABAAAAAFIgJgBg");
	this.shape_636.setTransform(358.5,100.8);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCrhACWhUQAEgCAFAAIEOAAIAKAAIEYAAIAKAAIFAAAIAKAAQCMAACMgFIAAgFQAKAAAIgEQACgBAAgFQBKhvBKhSIABglIABhGIAAgKQgBhjgdhHIAAgKIAAgUIAAgKQADiZgXh0QAAgFgCgEQgNgZAFguQAcgHgHgrIgBgKIAAgKQgChigShSIAAgKIAAiMIAAgKQAgijCIg9QACgBAAgFQBbgJBNgZQACgBAAgFQElhmCujcQADgDAAgFQgeibhEh0QgCgEAAgFIAAgKQAKiHgohVIAAgKIAAhkQAah7A+hYQACgEAAgFQBzhjCvgoIAKgBQBgAABKATIAKABIAKAAQBsAMAuBMQABACAFAAQBjBMAoCHQABAEAAAFIAADIIAAAKIAAAKQgBGAifDiQAPCHCHAPIAKAAQBVAeBeATIAKABQEaFhDEG1QACAEAAAFQAzAsBtAqIAAABIAeAKIBYrMQAdgMA1ACQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIAAAKQADBYgXA+IAABGIAAAKIgFABQgFBKgUA3IAAA8IAAAKIAAAKQACBOgWAzIAAAKIgFABQgRCJgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABQFZCDFGCTQAEACAFAAIAAAKIAAQQIz2AAgAAoHCIAAAoIAAAKQA3AxBngrQACgBAAgFQBFgiguhKQg+hmgrAAQg3AAgXCgg");
	this.shape_637.setTransform(87,27);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("rgba(0,0,0,0.125)").s().p("ABfAFIjHAAIAAgJIDHAAIAKAAIAAAJIgKAAg");
	this.shape_638.setTransform(-122.5,104.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("rgba(0,0,0,0.839)").s().p("AjbgEIAUAAIAKAAIDHAAIAKAAIC+AAIAKAAIAAAEQjcAFjbAAIAAgJg");
	this.shape_639.setTransform(-114,105.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("rgba(0,0,0,0.698)").s().p("ADcAFInBAAIAAgJIHBAAIAKAAIAAAJIgKAAg");
	this.shape_640.setTransform(-159,105.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("rgba(0,0,0,0.573)").s().p("AAFBfQgIhDgGg+IAAgKIAAgyQARBSACBhIAAAKIgFAAg");
	this.shape_641.setTransform(-80,1.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("rgba(0,0,0,0.565)").s().p("AheAAQBXgNBlAIIABAFIgKAAQhfAAhUAJIAAgJg");
	this.shape_642.setTransform(26.5,-181.9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("rgba(0,0,0,0.62)").s().p("AgTByQgFgdAAgeQAThWAYhRQABgCAFAAIgBAKQgVBUgRBVIAAAoIAAAKQgFAAAAgBg");
	this.shape_643.setTransform(92.5,65.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("rgba(0,0,0,0.541)").s().p("AAFBeQgNhagBhiIAJAAQABBeAJBVIAAAKQgFAAAAgBg");
	this.shape_644.setTransform(-79,44.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("rgba(0,0,0,0.518)").s().p("Aq7H0QBTgLBNgSIAKgBQAAAFgCAAQhOAZhaAKIAAgKgAKyk1IAAjIQARBdgMB0IgFABIAAgKg");
	this.shape_645.setTransform(6,-98);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("rgba(0,0,0,0.514)").s().p("A/cIDQgKhegPhWQAgBEgCBmIAAAKIgFAAgAfckcIAAhGQAXg/gDhXIAAgKIAFAAQAFCHgeBpIAAgKg");
	this.shape_646.setTransform(125.8,23.5);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("rgba(0,0,0,0.584)").s().p("AkmAFIgUAAIAAgJIJrAAIAKAAIAAAEQksAFkrAAIgKAAg");
	this.shape_647.setTransform(262.5,-30.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCrhACWhUQAEgCAFAAIEOAAIAKAAIHCAAIAKAAQDcAADcgFIAAgFQAKAAAIgEQACgBAAgFQBHhnBHhUIAFgrQADgeAAgeIAAgKQAChmgghEIAAgKIAAgUIAAgKQgJhWgBheIAAgKQgKhUgUhLQAjgKgEgyIgBgKIAAgKQgChigShSIAAgKIAAiMIAAgKQAgijCIg9QACgBAAgFQBbgJBNgZQACgBAAgFQElhmCujcQADgDAAgFQjZmiCvmdQACgEAAgFQBmg+BjhBQAEgDAFAAQBUgKBgAAIAKAAQBZAQBaATQABAAAAAFQCMBpBFCwQABAEAAAFIAADIIAAAKIAAAKQgBGBifDhQAPCHCHAPIAKAAQBVAeBeATIAKABQEaFhDEG1QACAEAAAFQA6AyBMAgIARAHQAEABAkADIABAAIADgeIBRqSQAagbAwgGIAKgBQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIAAAKQADBYgXA+IAABGIAAAKIgFABQgFBKgUA3IAAA8IAAAKIAAAKQACBOgWAzIAAAKIgFABQgRCJgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABQFZCDFGCTQAEACAFAAIAAAKIAAQQIz2AAgABKEQQgZBSgTBWQAAAeAFAdQAAABAFAAQFJgGkZjdQgDgDgFAAQgFAAgBACg");
	this.shape_648.setTransform(87,27);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("rgba(0,0,0,0.486)").s().p("AhUAKQBTgKBMgSIAKgBQAAAFgCAAQhNAYhaAKIAAgKg");
	this.shape_649.setTransform(-55.5,-49);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("rgba(0,0,0,0.565)").s().p("AAFBfQgIhDgGg+IAAgKIAAgyQARBSACBhIAAAKIgFAAg");
	this.shape_650.setTransform(-80,1.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("rgba(0,0,0,0.231)").s().p("AAABkQgEhkAAhjIAJAAIAACBIAAAKIAAAyIAAAKg");
	this.shape_651.setTransform(-81.5,-12);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("rgba(0,0,0,0.627)").s().p("ABQAOQhKgShfAAIAAgKQBlgBBMAZQACAAAAAFIgKgBg");
	this.shape_652.setTransform(35,-181.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("rgba(0,0,0,0.498)").s().p("AhEgSQATgkAGg1IAFgBIAAAKQgBA2gTAkQgRCXCJg8QAEgCAFAAQAAAFgCABQguAWgeAAQhMAAAPh/g");
	this.shape_653.setTransform(97.9,66.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("rgba(0,0,0,0.353)").s().p("AhNgSIAKAAQBEBGBFhIQACgDABgFIAEAAQgiA5gpAAQgkAAgrgvg");
	this.shape_654.setTransform(126.8,96.9);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("rgba(0,0,0,0.482)").s().p("AISIWQhcgRhOggQBgAPBTAeQABAAAAAFIgKgBgAoMk7QgPhKAAhVQAUgUAFgnIAFgBIAAAKQAAAogUAUQADBIAGBEIABAKQgFAAAAgBg");
	this.shape_655.setTransform(40,-99.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("rgba(0,0,0,0.455)").s().p("AgEC0IAAlxQAQCxgMDJIgEABIAAgKg");
	this.shape_656.setTransform(75.5,-131);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("rgba(0,0,0,0.584)").s().p("A8qPxQgLiOgYh/QApBtgBCXIAAAKIgFgBgATsAAIgUAAIAAgJIJsAAIAKAAIAAAFQksAEksAAIgKAAgAyWszQgChngNhXQAeBGgKBuIAAAKg");
	this.shape_657.setTransform(107,-30);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("rgba(0,0,0,0.792)").s().p("Ak/ACIAAgBQBQgBAAgDICqAAIAKAAIFTAAIAKAAIAUAAIAKAAIAAAEQiRADi3AAIk3gCg");
	this.shape_658.setTransform(202,-29.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("rgba(0,0,0,0.533)").s().p("ABBAdQhMgWg/gkQBPAUBEAhQACABAAAFQgFAAgFgBg");
	this.shape_659.setTransform(397.5,110);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCrhACWhUQAEgCAFAAIEOAAIAKAAIHCAAIAKAAQDcAADcgFIAAgFQAKAAAIgEQACgBAAgFQCdhwgRjQIAAgKIAAgKQABiXgphtIABgKQAUiIgphxQAjgKgEgyIgBgKIAAgKQgChigShSIAAgKIAAiCIAAgKIAAgeQAsiNB8g/QACgBAAgFQBbgJBNgZQACgBAAgFQEshkCnjnQADgEAAgFQgbiZhGhsQgDgEAAgFIAAgKQAKhugehGIgBgKQgGhDgDhJQAUgUAAgoIAAgKIAAgKIAAgKQBjjXEFg2IAKgBQBgAABKATIAKABQDwA8BFDnQABAEAAAFIAAFyIAAAKIAAAKQgnEKh5C4QASCJCOANIAKAAQBOAgBbARIAKABQDuDkB+FbQBLDMC0BtQAVAZAhghIBXrKQF9AEEDgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIAAAKQADBYgXA+IAABGIAAAKIgFABQgFBKgUA3IAAA8IAAAKIAAAKQACBOgWAzIAAAKIgFABQgRCJgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABIBZAjQABAAAAAFQA/AmBNAVQAFABAFAAQDhBQDOBiQAEACAFAAIAAAKIAAQQIz2AAgAHbKeIgFAAIgBgFQhWgMg1AbIgKAAQBaBkBBhugABBEjQgGA1gTAkQgVC0CfhKQACgBAAgFQAFAAABgBQAviuijgPIgFABg");
	this.shape_660.setTransform(87,27);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("rgba(0,0,0,0.451)").s().p("AAKBaQgNhagLhZQAcBHABBiIAAAKIgFAAg");
	this.shape_661.setTransform(-76.5,66);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("rgba(0,0,0,0.467)").s().p("AAFBuQgMhRgChXQAKgVABgfQAFBmADBtIAAAKQgFAAAAgBg");
	this.shape_662.setTransform(-79,42.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("rgba(0,0,0,0.588)").s().p("AAFBtQgPhnABhzQAPBjAEBuIAAAKQgFAAAAgBg");
	this.shape_663.setTransform(-80,-1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("rgba(0,0,0,0.475)").s().p("AheAPQBZgUBagSIAKgBQAAAFgCAAQhcAahfASIAAgKg");
	this.shape_664.setTransform(-56.5,-48.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("rgba(0,0,0,0.463)").s().p("AAEBfQgChmgMhXQAdBFgKBuIAAAKg");
	this.shape_665.setTransform(-10.9,-122.5);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("rgba(0,0,0,0.604)").s().p("ABQAOQhKgShfAAIAAgKQBlgBBMAZQACAAAAAFIgKgBg");
	this.shape_666.setTransform(35,-181.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("rgba(0,0,0,0.565)").s().p("Ag7AKQATgjAGg1IAFgBIABAKQAGAggRAIQgUCABuglQAEgCAFAAQAAAFgBABQgjAOgYAAQg2AAgFhGg");
	this.shape_667.setTransform(96,70);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("rgba(0,0,0,0.506)").s().p("AAeBPQgehTgihLQAzA6ARBbIABAKQgFAAAAgBg");
	this.shape_668.setTransform(120.5,-6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("rgba(0,0,0,0.518)").s().p("ABVAYQhegThVgdQBlAMBXAgQABAAAAAFIgKgBg");
	this.shape_669.setTransform(84.5,-48.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("rgba(0,0,0,0.624)").s().p("AX2TwQi7gvj+ASIAAgKQECgSC/A0QABABAAAFIgJgBgA3+tqIAAgKQASisgIjGIAAgKIAFABQATDfgiCwIAAgKg");
	this.shape_670.setTransform(227.5,-23.5);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCrhACWhUQAEgCAFAAIEOAAIAKAAIHCAAIAKAAQDcAADcgFIAAgFQAKAAAIgEQACgBAAgFICBjIQAOgXAHhDIAAgKQgBhjgdhHIAAgKIAAgUIAAgKQgDhugFhmQABgRgCgVIgBgKQgFAAgCgBQgWghgBg3QAsgGgNhAIgBgKIAAgKQgEhvgQhjIAAgKIAAiCQAth9BnhEQACgCAAgFQBggSBcgaQACgBAAgFQE2hfCdj2QADgEAAgFQghiThBhyQgCgEAAgFIAAgKQAKhugehGIgFAAQgFhQAAhQQArhlA3haQACgEAAgFQBuhkCqgnIAKgBQBgAABKATIAKABQDyA7BDDoQABAEAAAFIAAAKQAIDGgSCsIAAAKIAAAKIAAAKQghEHh1CxQAcB2B6AVIAKABQBVAeBeATIAKABQCgBuBEDJQACAEAAAFQAiBMAfBTQAAABAFAAQBoD7DGCcQADACAFAAQAeASAegKIABAAIADgaIBWq+QAtgBAjACQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIAAAKQADBYgXA+IAABGIAAAKIgFABQgFBKgUA3IAAA8IAAAKIAAAKQACBOgWAzIAAAKIgFABQgRCJgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABIBZAjQABAAAAAFQA/AmBNAVQAFABAFAAQDhBQDOBiQAEACAFAAIAAAKIAAQQIz2AAgAF8KUQgFAAgEACQgfANgeAPQANAuBNgPIAKgBQAFAAAFgCQCEg2isgOIAAAKgAA8FUIAAAKIgFABQgGA1gTAkQAHBlBwgtQABgBAAgFQBGAAgPg1QgkiKgyAAQgcAAgfApg");
	this.shape_671.setTransform(87,27);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("rgba(0,0,0,0.549)").s().p("AAKBaQgNhagLhZQAcBHABBiIAAAKIgFAAg");
	this.shape_672.setTransform(-76.5,64);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("rgba(0,0,0,0.459)").s().p("AAFCBQgJiGgFh8QAYBugFCLIAAAKIgFgBg");
	this.shape_673.setTransform(-79,38);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("rgba(0,0,0,0.463)").s().p("AheAPQBZgUBagSIAKgBQAAAFgCAAQhcAahfASIAAgKg");
	this.shape_674.setTransform(-56.5,-48.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("rgba(0,0,0,0.651)").s().p("AAAB9QgEh9AAh8IAJAAIAADvIAAAKg");
	this.shape_675.setTransform(-80.5,-11.5);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("rgba(0,0,0,0.573)").s().p("AgOBjQgFgYAAgZQAVhDANhRQAAgBAFAAIAAAKQgIBSgVBDIAAAeIAAAKQgFAAAAgBg");
	this.shape_676.setTransform(92,67);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("rgba(0,0,0,0.553)").s().p("AAYBOQgghKgVhTQAlBDAVBSIABAKQgFAAgBgCg");
	this.shape_677.setTransform(123,-1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("rgba(0,0,0,0.482)").s().p("AAlA+Qg8grgVhTQAmBCAxA3QACADAAAFQgFAAgDgDg");
	this.shape_678.setTransform(142.5,31.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("rgba(0,0,0,0.522)").s().p("AAdBEQgjhCgchHQAsA2AYBMQABAEAAAFQgFAAgBgCg");
	this.shape_679.setTransform(108.5,-31);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("rgba(0,0,0,0.49)").s().p("ABGAYQhQgShFgeQBVANBIAeQACABAAAFIgKgBg");
	this.shape_680.setTransform(89,-47.5);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("rgba(0,0,0,0.584)").s().p("AOdL9IgUAAIAAgKIJsAAIAKAAIAAAFQksAFksAAIgKAAgA3vjXQgShfADhyQARgDgCgbIAFAAIABAKQAGAbgRADQgDBnANBXIAAAKQgFAAAAgBgAt0rUQh/gSiFgMIAAgKQCLALCCAYQABAAAAAFIgKAAg");
	this.shape_681.setTransform(140.5,-106.5);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("rgba(0,0,0,0.533)").s().p("AZoTDQhNgWg/glQBQAUBEAiQACABAAAFQgFAAgFgBgA5xwFIAAi+IAKAAIAAAKQAIBsgSBSIAAgKg");
	this.shape_682.setTransform(240,-9);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCrhACWhUQAEgCAFAAIEOAAIAKAAIHCAAIAKAAQDcAADcgFIAAgFQAKAAAIgEQACgBAAgFQBZhvAohdQAOgjAHhHIAAgKQgBhjgdhHIAAgKIAAgeIAAgKQAFiMgZhtQAAgFgDgDQgPgUAIgqQAphFgdhbQgCgFAAgFIAAgKIAAjwIAAgKIAAgKQAgiFBqg9QACgBAAgFQBggSBcgbQACAAAAgFQE2hgCdj1QADgEAAgFQgOiDhFhMQgCgDgFAAQgJhlgLhjIAAgKIgBgKQgMhXADhnQARgDgGgbIgBgKIAAgKIAAgKQAtg8AhhHQACgEAAgFQBxhhCngqIAKgBQCEAMCAASIAKAAQBvBoBgB2QADADAAAFQAgBigMCOIAAAKIgKAAIAAC+IAAAKIAAAKQgpEIh3C6QAkCQCuAGIAKAAQBEAfBRASIAKABQAtAZAhAlQACADAAAFQAcBIAkBCQABACAFAAQAiBMAoBIQABACAFAAQAVBUAhBKQABACAFAAQA0BdBCBPQACADAAAFQAVBTA9ArQADADAFAAQAnAUAdgBQAwAGAegKIBUqsIBQAAQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIAAAKQADBXgXA/IAABGIAAAKIgFAAQgFBLgUA3IAAA8IAAAKIAAAKQACBNgWA0IAAAKIgFAAQgRCKgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABIBZAjQABAAAAAFQA/AlBNAWQAFABAFAAQDhBQDOBiQAEACAFAAIAAAKIAAQQIz2AAgABGEsQgFAAAAABQgNBRgWBEQAAAZAFAYQAAABAFAAQEcAliSjbQgdgtgfAAQgXAAgZAbg");
	this.shape_683.setTransform(87,27);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("rgba(0,0,0,0.455)").s().p("AAKBaQgLhcgNhXQAeBFgBBkIAAAKIgFAAg");
	this.shape_684.setTransform(-76.5,66);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("rgba(0,0,0,0.482)").s().p("AAFBqQgMhRgChXQAKgRABgbQAFBhADBqIAAAKQgFAAAAgBg");
	this.shape_685.setTransform(-79,42.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("rgba(0,0,0,0.49)").s().p("AheAPQBZgUBagSIAKgBQAAAFgCAAQhcAahfASIAAgKg");
	this.shape_686.setTransform(-56.5,-48.5);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("rgba(0,0,0,0.58)").s().p("ABkAJQhngRhqASIAAgKQBtgUBtAYQABABAAAFIgKgBg");
	this.shape_687.setTransform(30,-182);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("rgba(0,0,0,0.51)").s().p("AetF3IAAhGQAch6ARiKIAFAAIAAAKQgRCtghCdIAAgKgA/Pi5QgRhcAChrQAQBZAEBlIAAAKQgFAAAAgBg");
	this.shape_688.setTransform(120.5,26.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("rgba(0,0,0,0.537)").s().p("AhPgPQATgkAGg2IAFAAIAAAKQgBA2gTAkQgGCWCShFQAEgCAFAAQAAAFgCABQg1AagjAAQhMAAAHh5g");
	this.shape_689.setTransform(99,67.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("rgba(0,0,0,0.471)").s().p("AAmA/Qgyg2gghJQAwA4AnBAQACAEAAAFQgFAAgCgCg");
	this.shape_690.setTransform(105.5,62.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("rgba(0,0,0,0.525)").s().p("AAYBOQgghKgVhTQAlBDAVBSIABAKQgFAAgBgCg");
	this.shape_691.setTransform(123,-1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("rgba(0,0,0,0.475)").s().p("ABGAYQhQgShFgeQBVANBIAeQACABAAAFIgKgBg");
	this.shape_692.setTransform(89,-47.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("rgba(0,0,0,0.561)").s().p("AScQpIAAgyQAWg0ADhOIAFAAIAAAKQgBBogdBMIAAgKgAy5t0IAAi+IAKAAIAAAKQAIBsgSBSIAAgKg");
	this.shape_693.setTransform(196,-23.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("rgba(0,0,0,0.522)").s().p("ADWK6QgkhCgchIQAtA2AYBNQABAEAAAFQgFAAgBgCgAiRowQgchRgug6QBAApAPBZIABAKQgFAAgBgBg");
	this.shape_694.setTransform(90,-94);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("rgba(0,0,0,0.529)").s().p("AwJHSQCygXhCAmIhmgFIAAAFIBkACQgQAIgdANQgYAKgPAAQgiAAAIgwgAPulDIAAg8QAUg3AFhLIAFAAIAAAKQgEBqgaBUIAAgKg");
	this.shape_695.setTransform(223.4,47.4);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("rgba(0,0,0,0.514)").s().p("AaXLkIAAhGQAXg/gDhXIAAgKIAFAAQAFCHgeBpIAAgKgA6hn0QgShWADhnQAUgUAFgoIAFAAIAAAKQAAAogUAUQgCBcAMBOIAAAKQgFAAAAgBg");
	this.shape_696.setTransform(158.3,-79);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("rgba(0,0,0,0.533)").s().p("AcSW9QhNgWg/glQBQAUBEAiQACABAAAFQgFAAgFgBgA562MQhOgbhTgWQBkAEBEAnQACACAAAFQgFAAgEgBg");
	this.shape_697.setTransform(223,-34);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCrhBCWhTQAEgCAFAAIEOAAIAKAAIHCAAIAKAAQDcAADcgFIAAgFQAKAAAIgEQACgBAAgFQBZh0AshhQAJgUAIg5IAAgKQABhlgfhFIAAgKIAAgeIAAgKQgDhrgFhhQABgQgCgUIgBgKQAAgEgDgDQgZgYAIg6QAfgYgKhCIgBgKIAAgKQgEhlgQhZIAAgKIAAhkQAoiRBmhTQADgCAFAAQBggTBcgaQACAAAAgFQE4heCbj4QADgDAAgFQgOiDhFhNQgCgCgFAAQgLhpgJhpIAAgKIgBgKQgLhOAChcQAUgUAAgoIAAgKIAAgKQArg+AjhFQACgEAAgFIDKh2QADgCAFAAQBqgTBoASIAKABQBTAWBOAaQAEACAFAAQAtA7AwA6QACADAFAAQAuA6AcBQQABACAFAAIAAC0IAAAKIgKAAIAAC+IAAAKIAAAKQgpEIh3C6QAkCQCuAGIAKAAQBEAfBRASIAKABQAtAZAhAlQACADAAAFQAcBIAkBCQABACAFAAQAiBMAoBIQABACAFAAQAVBUAhBKQABACAFAAQBnDYCzCMQADADAFAAQACgEA7AHIABAAIgBAAIBYrQQAigCAvAAQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAUQACADAAAFIAAAKQADBXgXA/IAABGIAAAKIgFAAQgFBLgUA3IAAA8IAAAKIAAAKQACBNgWA0IAAAKIgFAAQgRCKgcB6IAABGIAAAKIgFAAQgDBNgWA1IAAAyIAAAKIAAAKQAIA5gSAhQAqBiCyglIAKgBQD+gTC7AwIAJABIBZAiQABABAAAFQA/AlBNAVQAFACAFAAQDhBQDOBiQAEACAFAAIAAAKIAAQQIz2AAgAFKKeQgKBGBLggQAdgNAQgIQAPgBgNgBQApgYg2AAQggAAhDAJgABGEiIAAAKIgFAAQgGA2gTAkQgMCzCqhTQACgBAAgFQAlgEgGguIgBgKQAAgFgCgEQgnhBgxg4QAAgFgDgCQgQgLgQAAQgTAAgQASg");
	this.shape_698.setTransform(87,27);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("rgba(0,0,0,0.478)").s().p("AAKBfQgKhigOhbQAfBJgCBqIAAAKIgFAAg");
	this.shape_699.setTransform(-76.5,66.5);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("rgba(0,0,0,0.459)").s().p("AAFBuQgNhVgBhdQAKgRABgZIAIDTIAAAKQgFAAAAgBg");
	this.shape_700.setTransform(-79,42.9);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("rgba(0,0,0,0.494)").s().p("AheAPQBZgUBagSIAKgBQAAAFgCAAQhcAahfASIAAgKg");
	this.shape_701.setTransform(-56.5,-48.5);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("rgba(0,0,0,0.698)").s().p("Ag7KPInCAAIAAgKIHCAAIAKAAIAAAKIgKAAgAH5mAQgFiHAAiHIAKAAIAAEEIAAAKg");
	this.shape_702.setTransform(-131,40.5);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("rgba(0,0,0,0.514)").s().p("AAAB8QgRhWADhmQATgUAFgoIAFAAIAAAKQAAAogTAUQgCBbALBOIAAAKQgFAAAAgBg");
	this.shape_703.setTransform(-11.5,-141.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("rgba(0,0,0,0.58)").s().p("AheAAQBXgNBmAIIAAAFIgKAAQhfAAhUAJIAAgJg");
	this.shape_704.setTransform(27.5,-181.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("rgba(0,0,0,0.035)").s().p("AgmAAIAAAAIAAgEIAMABIBBAGIgEACIhJgFg");
	this.shape_705.setTransform(125.9,95.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("rgba(0,0,0,0.541)").s().p("AAeBPQgehSgihMQAyA7ASBaIABAKQgFAAAAgBg");
	this.shape_706.setTransform(120.5,-6);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("rgba(0,0,0,0.482)").s().p("ACbJhQhRgShFgfQBWANBIAfQACABAAAFIgKgBgAg8nXQgnhThBg3QBSAmAbBcQABAFAAAFQgFAAgBgCg");
	this.shape_707.setTransform(80.5,-106);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("rgba(0,0,0,0.431)").s().p("ABMAYQhNgahTgWQBjAEBEAmQACACAAAFQgFAAgEgBg");
	this.shape_708.setTransform(49.5,-178.5);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("rgba(0,0,0,0.522)").s().p("AgbDSIAAg8QAlimAMjBIABgKIAEAAQgHDsgvDLIAAgKg");
	this.shape_709.setTransform(326.8,-6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgrI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCrhACWhUQAEgCAFAAIEOAAIAKAAIHCAAIAKAAQDcAADcgFIAAgFQAKAAAIgEQACgBAAgFQBlhnAmhuQALggAAgjIAAgKQAChrgghJIAAgKIAAgUIAAgKIgIjTQABgRgCgWIAAgBIgBgJQgFAAgCgBQgWghgBg3QA5g0gjhiQgCgFAAgFIAAgKIAAkEIAAgKQAnh+BdhHQADgDAFAAQBggSBcgaQACgBAAgFQE2hfCdj2QADgEAAgFQgXiJhGhaQgCgDgFAAQAFhpgOhVIgBgKIgBgKQgLhOAChcQAUgUAAgoIAAgKIAAgKQAqg/AkhEQACgEAAgFQBkg3Bcg+QADgDAFAAQBUgKBgAAIAKAAQAbgHAHAPQABACAFAAQBTAWBOAbQAEABAFAAQAjAjAXAuQACAEAAAFQBBA3AnBTQABACAFAAQARBegHB0IAAAKIgKAAIAAC+IAAAKIAAAKQgpEIh3C6QAkCQCuAGIAKAAQBEAfBRASIAKABQCAB6BGCzQACAEAAAFQAiBMAfBTQAAABAFAAQBmEBDSCWQADACA2ARIBareQAhgBAwgBQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIgBAKQgLDBgmCnIAAA8IAAAKIAAAKQACBOgWAzIAAAKIgFABQgRCJgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABIBZAjQABAAAAAFQA/AmBNAVQAFABAFAAQDhBQDOBiQAEACAFAAIAAAKIAAQQIz2AAgAFeKuIgUAFQAKAtA9ggIAXgNIAEgCQBHgriJAlIgMgCIAAAFgABBEkQgHA5gSAqQgYClCZg7QABgBAAgFQAlACAAgWQACixiLgDIgFABg");
	this.shape_710.setTransform(87,26.9);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("rgba(0,0,0,0.463)").s().p("AAFBuQgNhVgBhdQAKgRABgZIAIDTIAAAKQgFAAAAgBg");
	this.shape_711.setTransform(-79,42.9);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("rgba(0,0,0,0.839)").s().p("AjWgEIAKAAIAKAAIDHAAIAKAAIC+AAIAKAAIAAAEQjXAFjWAAIAAgJg");
	this.shape_712.setTransform(-113.5,105.5);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("rgba(0,0,0,0.749)").s().p("AClAFIlTAAIAAgJIFTAAIAKAAIAAAJIgKAAg");
	this.shape_713.setTransform(-152.5,105.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("rgba(0,0,0,0.682)").s().p("AC+AFImFAAIAAgJIGFAAIAKAAIAAAJIgKAAg");
	this.shape_714.setTransform(-190,105.5);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("rgba(0,0,0,0.706)").s().p("AAACHQgEiHAAiGIAJAAIAAEDIAAAKg");
	this.shape_715.setTransform(-80.5,-11.5);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("rgba(0,0,0,0.404)").s().p("AADBfQAAhngOhWQAfBEgLBvIgBAKg");
	this.shape_716.setTransform(-10.8,-122.5);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("rgba(0,0,0,0.529)").s().p("AgJBpQgFhLAAhKQATgUAFgoIAFAAIAAAKQAAAogTAUIAACBIAAAKIgFAAg");
	this.shape_717.setTransform(-11.5,-143.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("rgba(0,0,0,0.6)").s().p("AheAAQBXgNBmAIIAAAFIgKAAQhfAAhUAJIAAgJg");
	this.shape_718.setTransform(27.5,-181.9);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("rgba(0,0,0,0.588)").s().p("AgJACIAAgDIATAAIAAADIgTAAg");
	this.shape_719.setTransform(123,96.3);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("rgba(0,0,0,0.482)").s().p("ABGAYQhQgShFgeQBVANBIAeQACABAAAFIgKgBg");
	this.shape_720.setTransform(89,-47.5);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("rgba(0,0,0,0.514)").s().p("AgQBuIAAgUQAghRgIiAIAFAAIAAAKQARCSguBTIAAgKg");
	this.shape_721.setTransform(74.7,-119);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("rgba(0,0,0,0.435)").s().p("ABMAYQhNgahTgWQBjAEBEAmQACACAAAFQgFAAgEgBg");
	this.shape_722.setTransform(49.5,-178.5);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgrI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCphBCYhTQAEgCAFAAIGGAAIAKAAIFUAAIAKAAQDXAADXgFIAAgFQAKAAAIgEQACgBAAgFQBlhoAmhuQALgfAAgjIAAgKQAChrgghJIAAgKIAAgUIAAgKIgIjTQABgRgCgWIAAgBIgBgJQgFAAgCgBQgTgfgEgvQA3g7ghhlQgCgFAAgFIAAgKIAAkEIAAgKIAAgUQAwhrBUhGQADgDAFAAQBggSBcgaQACgBAAgFQE2hfCdj2QADgEAAgFQggiThChyQgCgEAAgFIAAgKQALhvgfhFIAAgKIAAgKIAAiCQAUgUAAgoIAAgKIAAgKQAqg/AkhEQACgEAAgFQBgg7Bmg3QACgBAAgFQBUgKBgAAIAKAAQAbgHAHAPQABACAFAAQBTAWBOAbQAEABAFAAQBLBgBOBcQACACAFAAQAdBqgJCQIAAAKIgFAAQAJCBgiBRIAAAUIAAAKIAAAKQgYD3h0CZQAcCdC2ADIAKAAQBEAfBRASIAKABQCAB6BGCzQACAEAAAFQAiBMAfBTQAAABAFAAQBYEADWB/QAMAHA6APIBYrLQApgCAnACQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIgBAKQgLDBgmCnIAAA8IAAAKIAAAKQACBOgWAzIAAAKIgFABQgRCJgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABIBZAjQABAAAAAFQA/AmBNAVQAFABAFAAQDhBQDOBiQAEACAFAAIAAAKIAAQQIz2AAgAFeK4IAUAAQBmAAgcgBQAKgChUgCIAAABIgUgBgAA8FLIAAAKIgFABQgEA8gVAnQgGA0AcAQQADACAFAAQBdASBKgzQADgCAAgFIgBgJQgqighCAAQgcAAghAdg");
	this.shape_723.setTransform(87,26.9);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("rgba(0,0,0,0.478)").s().p("AAUD/QgLhjgNhbQAfBJgCBrIAAAKIgFAAgAgJAiQgLiWgEiKQAYB7gECcIAAAKIgFgBg");
	this.shape_724.setTransform(-77.5,50.5);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("rgba(0,0,0,0.69)").s().p("AFtAFIrjAAIAAgJILjAAIAKAAIAAAJIgKAAg");
	this.shape_725.setTransform(-172.5,105.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("rgba(0,0,0,0.698)").s().p("AAACHQgEiHAAiGIAJAAIAAEDIAAAKg");
	this.shape_726.setTransform(-80.5,-11.5);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("rgba(0,0,0,0.576)").s().p("ABQAOQhGgXhjAFIAAgKQBpgGBIAeQACAAAAAFQgFAAgFgBg");
	this.shape_727.setTransform(34,-181.5);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("rgba(0,0,0,0.263)").s().p("AgggBQCFACiFABg");
	this.shape_728.setTransform(127.4,96.3);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("rgba(0,0,0,0.569)").s().p("Ag7AKQAVgmAEg9IAFAAIAAAKQABA9gVAmQAFBXBfgkQAEgBAFAAQAAAFgCAAQgkAPgZAAQg5AAABhQg");
	this.shape_729.setTransform(96,70);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("rgba(0,0,0,0.514)").s().p("ABVAYQhegThVgdQBlAMBXAgQABAAAAAFIgKgBg");
	this.shape_730.setTransform(84.5,-48.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("rgba(0,0,0,0.553)").s().p("AgLBpIAAgUQAQhWgChxIAFAAIAAAKQANCEggBXIAAgKg");
	this.shape_731.setTransform(75.2,-121.5);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAvUQBagoBRgwQAEgCAFAAQBGgeBEgiQACgBAAgFQCphBCYhTQAEgCAFAAILkAAIAKAAQDXAADXgFIAAgFQAKAAAIgEQACgBAAgFQBlhoAmhuQALgfAAgjIAAgKQAChrgghJIAAgKIAAgUIAAgKQAEidgYh6QgFAAgBgCQgOgXAAgjQA3g7ghhlQgCgFAAgFIAAgKIAAkEIAAgKQAghnBBhFQADgDAAgFQHLhbDuk3QADgDAAgFQgViQhIhdQgCgDgFAAQAHiEgahiQgBgFAAgFIAAgKIAAiCQAUgUAAgoIAAgKIAAgKQAqg/AkhEQACgEAAgFQBwhSCUguQAFgCAFAAQBkgFBGAYQAFABAFAAQBMAJA+AaQACAAAAAFQBXBZBMBjQACACAFAAQAbBigHCEIAAAKIgFAAQADBxgSBXIAAAUIAAAKIAAAKQgdEFh5CpQATCDCDATIAKAAQBVAeBeATIAKABQCgBuBEDJQACAEAAAFQAiBMAfBTQAAABAFAAQBWCfBcCYQACADAAAFQBDArBBAtQADACAEAAQAfANAXgbIBWq8QAhgGAwABQEYAAEYgFIAAgFQEsAAEsgFIAAgFIEYAAIAKAAQAmACAUAVQACACAAAFIgBAKQgLDBgmCnIAAA8IAAAKIAAAKQACBOgWAzIAAAKIgFABQgRCJgcB6IAABGIAAAKIgFAAQgDBOgWA0IAAAyIAAAKIAAAKQAIA6gSAgQAqBiCyglIAKgBQD+gSC7AvIAJABIBZAjQABAAAAAFQA/AmBNAVQAFABAFAAQDhBQDOBiQAEACAFAAIAAAKIAAQQIz2AAgAFyK3QCGgBiGgEgAA8FUIgFABQgEA8gVAnQgCB0B4gyQACgBAAgFQBZAOgZhPQgriHgzAAQgdAAgfAog");
	this.shape_732.setTransform(87,27);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("rgba(0,0,0,0.435)").s().p("AhUAgIAAgKQCHAaAchUQABgBAFAAQAAAFgBAEQgUBChXAAQgbAAgigGg");
	this.shape_733.setTransform(-95.5,102.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("rgba(0,0,0,0.455)").s().p("AAKBZQgQhXgIhbQAYBKAFBfIAAAKQgFAAAAgBg");
	this.shape_734.setTransform(-75.5,77);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("rgba(0,0,0,0.525)").s().p("ACMAFIkhAAIAAgJIEhAAIAKAAIAAAJIgKAAg");
	this.shape_735.setTransform(-119,105.5);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("rgba(0,0,0,0.451)").s().p("ACbAFIk/AAIAAgJIE/AAIAKAAIAAAJIgKAAg");
	this.shape_736.setTransform(-150.5,105.5);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("rgba(0,0,0,0.482)").s().p("ADIAFImZAAIAAgJIGZAAIAKAAIAAAJIgKAAg");
	this.shape_737.setTransform(-188,105.5);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("rgba(0,0,0,0.424)").s().p("AADBfQAAhngOhWQAfBFgLBuIgBAKg");
	this.shape_738.setTransform(-10.8,-121.5);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("rgba(0,0,0,0.569)").s().p("AgsFOQgFgdAAgeQAfh8AOiRIAEgBIAAAKQgJCRgeB9IAAAoIAAAKQgFAAAAgBgAAAgEIAAhGQAah9ATiHIAFAAIgBAKQgRCsggCdIAAgJg");
	this.shape_739.setTransform(317,64.5);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("rgba(0,0,0,0.51)").s().p("AgTCHIAAhGQAYhfAKhxIAFgBIAAAKQgKCVgdCCIAAgKg");
	this.shape_740.setTransform(324,16.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("rgba(0,0,0,0.698)").s().p("AghAHQCHgmiHArg");
	this.shape_741.setTransform(126.4,97.3);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("rgba(0,0,0,0.459)").s().p("AhUAGIAAgJQBRATBOgcQAFgBAFAAQAAAFgCABQgyAVg0AAQggAAghgIg");
	this.shape_742.setTransform(99.5,77.4);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("rgba(0,0,0,0.573)").s().p("ALuKEQgFgnAAgoQATguAGhAIAFAAIAAAKQAABAgUAuIAAAyIAAAKIAAAKIgFgBgAsGpmQBQgKBGgTQAFgBAFAAQAAAFgCABQhEAchaAGIAAgKg");
	this.shape_743.setTransform(15.5,13.5);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("rgba(0,0,0,0.49)").s().p("Av2FAQgOhlgBhtIAKAAQABBoAJBgIAAAKIgFAAgAQAirQgghGgWhOQAnA9AUBPIABAKQgFAAgBgCg");
	this.shape_744.setTransform(23,25);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("rgba(0,0,0,0.612)").s().p("AAmBEQgxg9ghhMQAxA7AmBHQACAEAAAFQgFAAgCgCg");
	this.shape_745.setTransform(132.5,18);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("rgba(0,0,0,0.431)").s().p("AAKCuQgbihADi7IAKAAQgCC2AVCdIAAAKQgFAAAAgBg");
	this.shape_746.setTransform(-80.5,-5.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("rgba(0,0,0,0.624)").s().p("ABaAFIi9AAIAAgJIC9AAIAKAAIAAAJIgKAAg");
	this.shape_747.setTransform(187,-29.5);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("rgba(0,0,0,0.537)").s().p("ACMBaQhigCg9gmQBPAVBZAOQABAAAAAFIgKAAgAhFAdQg9gNgTg3QARgNgCglIAFAAQgLBkBQAOQABAAAAAFIgKgBg");
	this.shape_748.setTransform(72,-57);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("rgba(0,0,0,0.592)").s().p("AArA5Qgwg4gsg8QA9ArAkBDQACAEAAAFQgFAAgCgDg");
	this.shape_749.setTransform(69,-161);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("rgba(0,0,0,0.588)").s().p("AA+AhQgvg0hUgPQBlgCAkA+QACAEAAAFQgFAAgDgCg");
	this.shape_750.setTransform(54,-175.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("rgba(0,0,0,0.275)").s().p("ABzAFIjvAAIAAgJQB8AAB9AEIAAAFIgKAAg");
	this.shape_751.setTransform(308.5,-31.5);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("rgba(0,0,0,0.522)").s().p("AgRCHIAAg8QAZhdAFh0IAAgKIAEAAQABCggjCBIAAgKg");
	this.shape_752.setTransform(327.8,-12.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("rgba(0,0,0,0.827)").s().p("ADXAFIm3AAIAAgJICWAAIAKAAIDvAAIAKAAQAUAAATAEQABAAAAAFIgKAAg");
	this.shape_753.setTransform(302.5,-30.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("rgba(0,0,0,0.502)").s().p("ADhAFInLAAIAAgJIHLAAIAKAAIAAAJIgKAAg");
	this.shape_754.setTransform(256.5,-30.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("rgba(0,0,0,0.114)").s().p("AClAFIlTAAIAAgJIFTAAIAKAAIAAAJIgKAAg");
	this.shape_755.setTransform(215.5,-30.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("rgba(0,0,0,0.816)").s().p("AizgEIAKAAIFTAAIAKAAIAAAEQi0AFizAAIAAgJg");
	this.shape_756.setTransform(215,-29.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("rgba(0,0,0,0.643)").s().p("AC5AFIl7AAIAAgJQDCAADDAEIAAAFIgKAAg");
	this.shape_757.setTransform(353.5,99.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("rgba(0,0,0,0.596)").s().p("ABGAiQhSgahDgqQBTAaBKAlQACABAAAFQgFAAgFgBg");
	this.shape_758.setTransform(439,127.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgqI/GAAI/FAAI/GAAIAAgKIAAveQFJiSFCiYQAEgCAFAAIGaAAIAKAAIFAAAIAKAAIEiAAIAKAAQCPAcAahYQABgFAAgFIAAgKQBCg2A9g6QADgDAAgFIAAgKQgFhfgZhLIAAgKQACg4gMgsIAAgKQgJhggBhoIAAgKQgJhagVhPQAoAAgJgyIgBgKIAAgKQgWidACi3IAAgKIAAgKQAuiZCHhBQAEgCAFAAQBagFBEgdQACgBAAgFQEphhCgjqQADgEAAgFQggiUhChxQgCgEAAgFIAAgKQALhvgfhFIgBgJQgRhEAIhdQAxhgAxhfQACgEAAgFQBog8BihDQADgDAFAAQBUgKBgAAIAKAAQAzAKAoASQAEACAFAAQBVAPAvA1QADACAFAAQACAgAaAMQACABAAAFQAsA9AxA5QACACAFAAIABAKQBEIRjbFVIAAAKIgFAAQACAlgRANQATA5A9AMIAKABQAUAFAMANQADACAFAAQA+AmBiACIAJAAQBYAMA2AuQADACAFAAQBeCnBUCuQACAEAAAFQAWBOAgBGQABACAFAAQADARAPAHQACABAAAFQAhBNAyA9QACACAFAAQA8BuBmBDIAgAUQAeASASgrIBXrGQAigCAlAAIC+AAIAKAAQC0AAC0gFIAAgFIHMAAIAKAAIG4AAIAKAAQAaAFAMARQACADAAAFIAAAKQgEB0gaBeIAAA8IAAAKIgFABQgKBygZBfIAABFIAAAKIgFABQgTCHgaB8IAABGIAAAKIgFABQgOCRgfB8QAAAeAFAdQAAABAFAAQBMAiB8gNIAKgBIF8AAIAKAAQBWAeBSAiQACABAAAFQA/AmBNAVQAFABAFAAQCDAxB/A3QACABAAAFQBDAsBTAZQAFABAFAAIAKAAIAKAAIAAAKIAAQQIz2AAgAFoLGIAAAFQBIgXgEAAQgEAAhAASgAA8EsIAAAKIAAAKIgFABQgGBAgTAtQAAAoAFAoIAFAAQBXAWBRgkQACgBAAgFIAFAAQgJi/h9AAIgVABg");
	this.shape_759.setTransform(87,27);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("rgba(0,0,0,0.482)").s().p("AgxAoQBigLgIhEIgBgKQAFAAABABQAYBdh3AFIAAgKg");
	this.shape_760.setTransform(-79,88);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("rgba(0,0,0,0.859)").s().p("AjggEIAeAAIAKAAIDRAAIAKAAIC0AAIAKAAIAAAEQjhAFjgAAIAAgJg");
	this.shape_761.setTransform(-115.5,105.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("rgba(0,0,0,0.153)").s().p("ABkAFIgeAAIgKAAIipAAIAAgJIDRAAIAKAAIAAAJIgKAAg");
	this.shape_762.setTransform(-145,104.5);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("rgba(0,0,0,0.773)").s().p("ACCAFIkNAAIAAgJIBaAAIAKAAICpAAIAKAAIAAAJIgKAAg");
	this.shape_763.setTransform(-152,105.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("rgba(0,0,0,0.212)").s().p("AHRAFIjSAAIAAgJIDSAAIAKAAIAAAJIgKAAgAhKAFImQAAIAAgJQDNAADNAEIAAAFIgKAAg");
	this.shape_764.setTransform(-159.5,104.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("rgba(0,0,0,0.827)").s().p("ADSAFImtAAIAAgJIAUAAIAKAAIGPAAIAKAAIAAAJIgKAAg");
	this.shape_765.setTransform(-188,105.5);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("rgba(0,0,0,0.302)").s().p("AAjJ7IgKAAIizAAIAAgKQB6AHBhgQIAKgBQAAAFgDADQgIAMgVAAIgIAAgACWmyQgFhkAAhkIAKAAIAAC+IAAAKg");
	this.shape_766.setTransform(-96.5,41.5);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("rgba(0,0,0,0.384)").s().p("AAEBfQgEhkgKhZQAcBHgJBsIAAAKg");
	this.shape_767.setTransform(-10.9,-123.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("rgba(0,0,0,0.545)").s().p("AgFBfQgFhQAAhPQAQgDgCgbIAFAAIABAKQAGAbgQADIAACLIAAAKIgFAAg");
	this.shape_768.setTransform(-11.9,-142.5);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("rgba(0,0,0,0.529)").s().p("AhoADQBmgbBqAXQABAAAAAEIgKgBQhhgLhmAWIAAgKg");
	this.shape_769.setTransform(27.5,-182.3);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("rgba(0,0,0,0.561)").s().p("AALBoQgngJAKg8QASg8AGhPIAFAAIAAAKQgBBPgSA8QgFAtAgAJQACABAAAFIgKgBg");
	this.shape_770.setTransform(313.9,89.5);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("rgba(0,0,0,0.506)").s().p("AgdDNIAAg8QAiiqAUi8IAFgBIgBAKQgRDdgpDGIAAgKg");
	this.shape_771.setTransform(318,57.5);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("rgba(0,0,0,0.514)").s().p("AhZgtIAKAAQANB6CSg9QAFgCAFAAQAAAFgCABQg5AagmAAQhJAAgJhbg");
	this.shape_772.setTransform(99,74.6);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("rgba(0,0,0,0.549)").s().p("AAYBJQgghFgVhOQAlA+AVBNIABAKQgFAAgBgCg");
	this.shape_773.setTransform(123,-0.5);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("rgba(0,0,0,0.588)").s().p("AAmBEQgohFgqhEQA7AyAcBQQACAEAAAFQgFAAgCgCg");
	this.shape_774.setTransform(136.5,24);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("rgba(0,0,0,0.553)").s().p("AAcBEQgtg3gRhSIBDCCQACAEAAAFQgFAAgCgCg");
	this.shape_775.setTransform(109.5,-29);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("rgba(0,0,0,0.525)").s().p("Ar3APQBZgPBRgWQAFgCAFAAQAAAFgCAAQhSAfhgANIAAgKgALuAOQhegEhCgiICpAiQABAAAAAFIgKgBg");
	this.shape_776.setTransform(13,-49.5);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("rgba(0,0,0,0.576)").s().p("ArpLQIAAgKQgHhdgXhNIAKAAQAeBLgFBpgALoovIAAgeQAXg0AChOIAFAAIABAKQAGBmglA6IAAgKg");
	this.shape_777.setTransform(-4.4,-36);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("rgba(0,0,0,0.427)").s().p("AgFBaIAAi9IAJAAIAAAKQAHBqgQBTIAAgKg");
	this.shape_778.setTransform(75.6,-122);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("rgba(0,0,0,0.522)").s().p("AIhRZQhPgdgfhPQAwA9BGAqQACACAAAFQgFAAgFgCgAmTwpQhNgXhKgaQBbAJBDAjQACABAAAFQgFAAgEgBg");
	this.shape_779.setTransform(97.5,-69.5);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("rgba(0,0,0,0.557)").s().p("AgiDhIAAgyQAojBAYjYIAFAAIAAAKQgVDzgwDYIAAgKg");
	this.shape_780.setTransform(324.5,11.5);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("rgba(0,0,0,0.651)").s().p("ACCAFIkNAAIAAgJQCLAACMAEIAAAFIgKAAg");
	this.shape_781.setTransform(311,-31.5);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("rgba(0,0,0,0.663)").s().p("Ak6gEIJrAAIAKAAIAAAEQk7AFk6AAIAAgJg");
	this.shape_782.setTransform(248.5,-30.5);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("rgba(0,0,0,0.392)").s().p("AC5AFIl7AAIAAgJIF7AAIAKAAIAAAJIgKAAg");
	this.shape_783.setTransform(197.5,-30.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("rgba(0,0,0,0.533)").s().p("EAlvAF7QhNgWg/glQBQAUBEAiQACABAAAFQgFAAgFgBgEglVgAyQgXihgMioIAKAAQAOChAPCfIABAKIgFgBg");
	this.shape_784.setTransform(162.5,75);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("rgba(0,0,0,0.612)").s().p("ABBAdQhPgSg8goQBMAXBHAeQACABAAAFIgKgBg");
	this.shape_785.setTransform(440.5,128);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("rgba(0,0,0,0.996)").s().p("EAkuAgsI/GAAI/FAAI/GAAIAAgKIAAveQFHiPE6ibQAEgCAFAAIGuAAIAKAAIEOAAIAKAAQDhAADhgFIAAgFQAbADAKgPQADgDAAgFQAagsAWgvQACgEAAgFQB4gFgYheQgBgBgFAAIAAgKQADhEgNg0IgBgKQgPiegOiiIAAgKIAFAAQAFhogehLQAAgFACgEQAmhYgohnIAAgKIAAi+IAAgKIAAgUQApiZCChBQAEgCAFAAQBggNBSgfQACgBAAgFQEjhjCcjoQADgEAAgFQgjiWg/h5QgCgEAAgFIAAgKQAJhtgdhHIAAgKIAAiMQARgDgGgbIgBgKIAAgKIAAgKQAqg/AkhEQACgEAAgFIC/h/QAEgDAFAAQBmgWBiAMIAKAAQAbgHAHAPQABACAFAAQBKAaBNAXQAEABAFAAQBJBhBQBbQACACAFAAQAcBmgICKIAAAKIgKAAIAAC+IAAAKIgBAKQgEAUgPAKIgFAAQgDBOgWA0IAAAeIAAAKQAAAFgCAFQgzCKhDB6QAhBdBhAaQAFABAFAAQBCAjBdAFIAKAAQB1AYAzBYQACADAAAFQARBTAuA3QACACAFAAQAlA/AfBEQACAEAAAFQAVBPAhBFQABACAFAAQAaAxAgArQACADAAAFQAqBEApBFQACACAFAAQAfBPBPAeQAFABAFAAQAKAKBIgCIBZrYQA7gBAUACIF8AAIAKAAQE7AAE7gFIAAgFICgAAIAKAAIEOAAIAKAAQBVA9g1B4QgCAEAAAFIgFABQgYDXgpDBIAAAyIAAAKIAAAKIgFABQgUC9gjCqIAAA8IAAAKIgFABQgGBOgTA9QgKA9AoAIIAKABICqAAIAKAAIF8AAIAKAAQBWAeBSAiQACABAAAFQA/AmBNAVQAFABAFAAQCPA0CHA+QACABAAAFQA8ApBQASIAKABIAKAAIAAAKIAAQQIz2AAgADQHyQACgBAAgFQAkgKgVgrQh4kMhBD7IAAAKIgKAAQAOCNCkhLg");
	this.shape_786.setTransform(87,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_20},{t:this.shape_13},{t:this.shape_5},{t:this.shape_16},{t:this.shape_18},{t:this.shape_11},{t:this.shape_4},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_15},{t:this.shape_8},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_9},{t:this.shape_30},{t:this.shape_2},{t:this.shape_10},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},2).to({state:[{t:this.shape_43},{t:this.shape_63},{t:this.shape_62},{t:this.shape_20},{t:this.shape_61},{t:this.shape_5},{t:this.shape_16},{t:this.shape_18},{t:this.shape_11},{t:this.shape_4},{t:this.shape_40},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_34},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_8},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_9},{t:this.shape_30},{t:this.shape_2},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_62},{t:this.shape_20},{t:this.shape_61},{t:this.shape_5},{t:this.shape_16},{t:this.shape_18},{t:this.shape_11},{t:this.shape_4},{t:this.shape_40},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_34},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_9},{t:this.shape_30},{t:this.shape_2},{t:this.shape_10},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape}]},2).to({state:[{t:this.shape_43},{t:this.shape_92},{t:this.shape_62},{t:this.shape_20},{t:this.shape_91},{t:this.shape_5},{t:this.shape_16},{t:this.shape_4},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_15},{t:this.shape_34},{t:this.shape_83},{t:this.shape_82},{t:this.shape_9},{t:this.shape_30},{t:this.shape_2},{t:this.shape_10},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape}]},2).to({state:[{t:this.shape_43},{t:this.shape_103},{t:this.shape_102},{t:this.shape_20},{t:this.shape_91},{t:this.shape_5},{t:this.shape_16},{t:this.shape_4},{t:this.shape_90},{t:this.shape_89},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_15},{t:this.shape_34},{t:this.shape_9},{t:this.shape_30},{t:this.shape_2},{t:this.shape_10},{t:this.shape_94},{t:this.shape_93},{t:this.shape}]},2).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_20},{t:this.shape_115},{t:this.shape_114},{t:this.shape_16},{t:this.shape_4},{t:this.shape_90},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_15},{t:this.shape_34},{t:this.shape_105},{t:this.shape_9},{t:this.shape_30},{t:this.shape_2},{t:this.shape_10},{t:this.shape_104},{t:this.shape}]},2).to({state:[{t:this.shape_43},{t:this.shape_130},{t:this.shape_62},{t:this.shape_20},{t:this.shape_115},{t:this.shape_114},{t:this.shape_16},{t:this.shape_4},{t:this.shape_90},{t:this.shape_129},{t:this.shape_128},{t:this.shape_111},{t:this.shape_127},{t:this.shape_126},{t:this.shape_108},{t:this.shape_107},{t:this.shape_125},{t:this.shape_15},{t:this.shape_34},{t:this.shape_124},{t:this.shape_123},{t:this.shape_9},{t:this.shape_30},{t:this.shape_122},{t:this.shape_121},{t:this.shape_104},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},2).to({state:[{t:this.shape_43},{t:this.shape_145},{t:this.shape_62},{t:this.shape_20},{t:this.shape_115},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_129},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_107},{t:this.shape_125},{t:this.shape_15},{t:this.shape_34},{t:this.shape_134},{t:this.shape_133},{t:this.shape_9},{t:this.shape_122},{t:this.shape_121},{t:this.shape_132},{t:this.shape_131},{t:this.shape_118}]},2).to({state:[{t:this.shape_43},{t:this.shape_154},{t:this.shape_153},{t:this.shape_20},{t:this.shape_152},{t:this.shape_151},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_129},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_126},{t:this.shape_146},{t:this.shape_135},{t:this.shape_15},{t:this.shape_34},{t:this.shape_133},{t:this.shape_9},{t:this.shape_2},{t:this.shape_10},{t:this.shape_132},{t:this.shape}]},2).to({state:[{t:this.shape_43},{t:this.shape_165},{t:this.shape_62},{t:this.shape_20},{t:this.shape_152},{t:this.shape_151},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_135},{t:this.shape_160},{t:this.shape_159},{t:this.shape_34},{t:this.shape_158},{t:this.shape_157},{t:this.shape_30},{t:this.shape_2},{t:this.shape_10},{t:this.shape_156},{t:this.shape_155},{t:this.shape}]},2).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]},2).to({state:[{t:this.shape_201},{t:this.shape_181},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_177},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_170},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_168},{t:this.shape_185},{t:this.shape_166}]},2).to({state:[{t:this.shape_218},{t:this.shape_181},{t:this.shape_200},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_197},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_186},{t:this.shape_168},{t:this.shape_167},{t:this.shape_203},{t:this.shape_202},{t:this.shape_166}]},2).to({state:[{t:this.shape_232},{t:this.shape_181},{t:this.shape_200},{t:this.shape_217},{t:this.shape_231},{t:this.shape_215},{t:this.shape_230},{t:this.shape_197},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_207},{t:this.shape_222},{t:this.shape_170},{t:this.shape_221},{t:this.shape_186},{t:this.shape_168},{t:this.shape_167},{t:this.shape_220},{t:this.shape_219},{t:this.shape_166}]},2).to({state:[{t:this.shape_249},{t:this.shape_181},{t:this.shape_248},{t:this.shape_247},{t:this.shape_216},{t:this.shape_215},{t:this.shape_230},{t:this.shape_197},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_170},{t:this.shape_221},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_220},{t:this.shape_234},{t:this.shape_233}]},2).to({state:[{t:this.shape_256},{t:this.shape_181},{t:this.shape_248},{t:this.shape_247},{t:this.shape_216},{t:this.shape_215},{t:this.shape_230},{t:this.shape_197},{t:this.shape_229},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_242},{t:this.shape_252},{t:this.shape_170},{t:this.shape_251},{t:this.shape_186},{t:this.shape_168},{t:this.shape_167},{t:this.shape_220},{t:this.shape_250},{t:this.shape_166}]},2).to({state:[{t:this.shape_268},{t:this.shape_181},{t:this.shape_248},{t:this.shape_247},{t:this.shape_216},{t:this.shape_215},{t:this.shape_230},{t:this.shape_197},{t:this.shape_229},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_193},{t:this.shape_263},{t:this.shape_262},{t:this.shape_170},{t:this.shape_251},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_168},{t:this.shape_167},{t:this.shape_258},{t:this.shape_257},{t:this.shape_166}]},2).to({state:[{t:this.shape_280},{t:this.shape_181},{t:this.shape_248},{t:this.shape_247},{t:this.shape_216},{t:this.shape_215},{t:this.shape_230},{t:this.shape_197},{t:this.shape_229},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_193},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_186},{t:this.shape_168},{t:this.shape_167},{t:this.shape_270},{t:this.shape_166},{t:this.shape_269}]},2).to({state:[{t:this.shape_292},{t:this.shape_291},{t:this.shape_248},{t:this.shape_247},{t:this.shape_216},{t:this.shape_215},{t:this.shape_230},{t:this.shape_197},{t:this.shape_229},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_170},{t:this.shape_283},{t:this.shape_282},{t:this.shape_186},{t:this.shape_168},{t:this.shape_167},{t:this.shape_281},{t:this.shape_166}]},2).to({state:[{t:this.shape_311},{t:this.shape_310},{t:this.shape_248},{t:this.shape_309},{t:this.shape_308},{t:this.shape_215},{t:this.shape_230},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_166}]},2).to({state:[{t:this.shape_328},{t:this.shape_183},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_197},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_312},{t:this.shape_166}]},2).to({state:[{t:this.shape_352},{t:this.shape_327},{t:this.shape_326},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_166}]},2).to({state:[{t:this.shape_365},{t:this.shape_327},{t:this.shape_326},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_363},{t:this.shape_197},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_209},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_353},{t:this.shape_166}]},2).to({state:[{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_351},{t:this.shape_350},{t:this.shape_383},{t:this.shape_382},{t:this.shape_323},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_296},{t:this.shape_295},{t:this.shape_366},{t:this.shape_166}]},2).to({state:[{t:this.shape_400},{t:this.shape_385},{t:this.shape_384},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_382},{t:this.shape_363},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_373},{t:this.shape_372},{t:this.shape_390},{t:this.shape_367},{t:this.shape_389},{t:this.shape_295},{t:this.shape_388},{t:this.shape_166}]},2).to({state:[{t:this.shape_418},{t:this.shape_385},{t:this.shape_417},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_382},{t:this.shape_363},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_234},{t:this.shape_401}]},2).to({state:[{t:this.shape_430},{t:this.shape_385},{t:this.shape_417},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_382},{t:this.shape_363},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_411},{t:this.shape_410},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_420},{t:this.shape_419},{t:this.shape_234},{t:this.shape_401}]},2).to({state:[{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_437},{t:this.shape_363},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_372},{t:this.shape_411},{t:this.shape_410},{t:this.shape_433},{t:this.shape_432},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_431},{t:this.shape_234},{t:this.shape_401}]},2).to({state:[{t:this.shape_457},{t:this.shape_456},{t:this.shape_438},{t:this.shape_351},{t:this.shape_455},{t:this.shape_364},{t:this.shape_454},{t:this.shape_363},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_372},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_441},{t:this.shape_234}]},2).to({state:[{t:this.shape_477},{t:this.shape_385},{t:this.shape_438},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_476},{t:this.shape_363},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_372},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_166}]},2).to({state:[{t:this.shape_492},{t:this.shape_385},{t:this.shape_438},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_454},{t:this.shape_363},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_372},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_463},{t:this.shape_480},{t:this.shape_461},{t:this.shape_479},{t:this.shape_478}]},2).to({state:[{t:this.shape_513},{t:this.shape_512},{t:this.shape_438},{t:this.shape_351},{t:this.shape_511},{t:this.shape_364},{t:this.shape_454},{t:this.shape_363},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_372},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_463},{t:this.shape_497},{t:this.shape_461},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493}]},2).to({state:[{t:this.shape_529},{t:this.shape_512},{t:this.shape_438},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_454},{t:this.shape_363},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_372},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_463},{t:this.shape_517},{t:this.shape_461},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514}]},2).to({state:[{t:this.shape_543},{t:this.shape_512},{t:this.shape_417},{t:this.shape_351},{t:this.shape_542},{t:this.shape_364},{t:this.shape_454},{t:this.shape_363},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_372},{t:this.shape_170},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_463},{t:this.shape_497},{t:this.shape_461},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_493}]},2).to({state:[{t:this.shape_559},{t:this.shape_512},{t:this.shape_558},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_557},{t:this.shape_363},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_170},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_493}]},2).to({state:[{t:this.shape_578},{t:this.shape_512},{t:this.shape_417},{t:this.shape_351},{t:this.shape_577},{t:this.shape_364},{t:this.shape_454},{t:this.shape_363},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_545},{t:this.shape_561},{t:this.shape_560},{t:this.shape_514}]},2).to({state:[{t:this.shape_595},{t:this.shape_512},{t:this.shape_417},{t:this.shape_351},{t:this.shape_350},{t:this.shape_364},{t:this.shape_454},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_372},{t:this.shape_170},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_562},{t:this.shape_545},{t:this.shape_580},{t:this.shape_579},{t:this.shape_514}]},2).to({state:[{t:this.shape_611},{t:this.shape_512},{t:this.shape_417},{t:this.shape_351},{t:this.shape_350},{t:this.shape_610},{t:this.shape_454},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_170},{t:this.shape_600},{t:this.shape_599},{t:this.shape_563},{t:this.shape_598},{t:this.shape_545},{t:this.shape_597},{t:this.shape_596}]},2).to({state:[{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612}]},2).to({state:[{t:this.shape_648},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_647},{t:this.shape_646},{t:this.shape_631},{t:this.shape_630},{t:this.shape_645},{t:this.shape_627},{t:this.shape_644},{t:this.shape_643},{t:this.shape_626},{t:this.shape_625},{t:this.shape_642},{t:this.shape_622},{t:this.shape_641},{t:this.shape_619},{t:this.shape_618},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_612}]},2).to({state:[{t:this.shape_660},{t:this.shape_636},{t:this.shape_659},{t:this.shape_658},{t:this.shape_634},{t:this.shape_657},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_626},{t:this.shape_625},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_619},{t:this.shape_618},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_612}]},2).to({state:[{t:this.shape_671},{t:this.shape_670},{t:this.shape_659},{t:this.shape_635},{t:this.shape_634},{t:this.shape_647},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_626},{t:this.shape_625},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_619},{t:this.shape_618},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_612}]},2).to({state:[{t:this.shape_683},{t:this.shape_636},{t:this.shape_682},{t:this.shape_635},{t:this.shape_634},{t:this.shape_681},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_626},{t:this.shape_625},{t:this.shape_675},{t:this.shape_674},{t:this.shape_619},{t:this.shape_618},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_673},{t:this.shape_672},{t:this.shape_612}]},2).to({state:[{t:this.shape_698},{t:this.shape_636},{t:this.shape_697},{t:this.shape_635},{t:this.shape_634},{t:this.shape_647},{t:this.shape_696},{t:this.shape_631},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_619},{t:this.shape_618},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_685},{t:this.shape_684},{t:this.shape_612}]},2).to({state:[{t:this.shape_710},{t:this.shape_636},{t:this.shape_659},{t:this.shape_635},{t:this.shape_634},{t:this.shape_647},{t:this.shape_709},{t:this.shape_631},{t:this.shape_708},{t:this.shape_707},{t:this.shape_693},{t:this.shape_706},{t:this.shape_705},{t:this.shape_626},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_619},{t:this.shape_618},{t:this.shape_639},{t:this.shape_638},{t:this.shape_700},{t:this.shape_699},{t:this.shape_612}]},2).to({state:[{t:this.shape_723},{t:this.shape_636},{t:this.shape_659},{t:this.shape_635},{t:this.shape_634},{t:this.shape_647},{t:this.shape_709},{t:this.shape_631},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_706},{t:this.shape_719},{t:this.shape_626},{t:this.shape_625},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_701},{t:this.shape_714},{t:this.shape_618},{t:this.shape_713},{t:this.shape_712},{t:this.shape_638},{t:this.shape_711},{t:this.shape_699},{t:this.shape_612}]},2).to({state:[{t:this.shape_732},{t:this.shape_636},{t:this.shape_659},{t:this.shape_635},{t:this.shape_634},{t:this.shape_647},{t:this.shape_709},{t:this.shape_631},{t:this.shape_731},{t:this.shape_730},{t:this.shape_706},{t:this.shape_729},{t:this.shape_728},{t:this.shape_626},{t:this.shape_625},{t:this.shape_727},{t:this.shape_717},{t:this.shape_726},{t:this.shape_725},{t:this.shape_618},{t:this.shape_712},{t:this.shape_638},{t:this.shape_724},{t:this.shape_612}]},2).to({state:[{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_659},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_718},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733}]},2).to({state:[{t:this.shape_786},{t:this.shape_785},{t:this.shape_757},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-183.7,724,419.7);


// stage content:
(lib.People_laptop_working_man_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hdqaiwhf();
	this.instance.parent = this;
	this.instance.setTransform(205.6,217.6,0.552,0.552,0,0,0,97.2,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(535,393.8,400,231.8);
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