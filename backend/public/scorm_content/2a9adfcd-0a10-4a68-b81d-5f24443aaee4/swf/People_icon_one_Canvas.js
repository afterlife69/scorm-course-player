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


(lib.per6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnIJIBrgqIgUAvIgEAKIg9AbIgWgqgAhPGzIBVgjIBlgoIADgDIADgCIgFAOIgCAJIgFASIgDAHIgEABIgNAHIgaALIh1A0IgRgngAiWCbIEUhxIADAjIkaB6IADgsgAiKAuID9hrIABAMIj/BoIABgJgAh8g1IDkheIAFAkIjwBtIAHgzgAh4hOIDcheIACAOIgBgEIjeBdIABgJgAhqikIDChQIAGAkIjQBfIAIgzgAhTkbIA+gaIAIACIAHACIhPAhIACgLgAhcl1IDohgIgQAsIi7BVQgQgPgNgSgAhSljIAJAKIAAACIgJgMgAhil/IgFgIIC6hQIAPgHIAvgUIAAgBIAEgCIgFASIjwBnIgCgDgAh/m8IgBgFIgBgBIgBgEIgCgGIgBgCIDphjIAMAGQAYARAJAKIAGAGIgOgNIAAABIAAgBIgJAEIgHADIjtBtIgLgZgACZoGIABABIgCAHg");
	this.shape.setTransform(136.4,235.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4E9CB").s().p("AgSIyIA8gbIgEALIgKAUIgGAOIgYAKIgQgcgAhlGBIgRgrIEChmIACAdIgCANIjxBoIAAgBgAiXD7IEchvIADAlIkPB2IgQgsgAiNA2IEAhoIADAcIkIB3IAFgrgAiJAcIAEgfIDwhtIAFAkIAAABIj6BqIABgDgAh0hyIDRhfIAGAkIjdBeIAGgjgAhXkRIBPghQALADAAgBIARgEIAPgGQAOgGAQgOIAIAeIgeAPIiLA+IAJgugAgllAQgKgFgIgIIgKgIIC7hVIgMAbQgJAOgJAMIgEABIh6A1IgDgBgAgqlAIgBgBIABABgAh2mkIDthtIAHgDIAJgDIABgBIANANIADADIAAABIgCAIIgBAIIgBABIgEACIgvAVIgQAHIi5BQIgOgcgAiPnrIgCgGIgBgHIC5hVQAaAKATAJIgDABIjaBdIgBABIgFgQg");
	this.shape_1.setTransform(136.5,235.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FBF7E1","#FBF7E5","#F9F8F4"],[0.243,0.361,0.984],0.1,69.8,0.1,-51.5).s().p("AhqHnIDwhpIACgMIgBgdIkCBmIgHgRIEMhrIgBgLIAAABIgBgKIkQBuIgFgNIEPh3IgDglIAAgFIgBgGIABgBIgBgNIkgB1IAAAEIgCgGIEgh5IgBgQIgBgRIgEgjIAAgDIAAgKIAAAAIgBgMIgFgnIgDgcIgBgLIj9BsIgCAJIgEArIgEAhIgBAPIACAAIgDAHIAAACIgDAsIgCARIgDALIgJgaQgPg1gPg3QgXhTgShMIggiIIgUheIgIgkIACgEIAAABIAAACIAAgBIABAFIACgDQA/hcAyg4IAdgfQARBLAZAqIAMATIgDACIADgCIAPATIAJAMIgDASIgEAbIgDAPIgDALIgJAuIAAAAIgGAmIgCAJIgBAAIAAACIgBADIABAAIgBAFIgBAFIgJAzIgFAjIgCAJIAAAAIgCAKIgBAGIgHAyIgEAhIAAAAIgCAPID9hsIgBgOIgBABIgFgjIgEgkIgBgFIgBgGIgCgNIgGglIgGgkIgCgHIAAgDIgDgNIABAAIgEgTIgEgQIggAOIAegOIgIgfQgQAPgOAGIgPAFQAagJATgTQAagXASgfQARgeALgcQAKgdAEgTIAFgUIgEgCIAAgBIAAAAIgCgDIgGgGQgJgLgZgQIgLgHIjqBjIgIgcIAFARIACgBIACAIIDjhfIgMgGIADgCQgSgJgbgKIgVgHIgDgBIgagIIgQAGIgEACQgNAGgSAJIADgCIAXgNIAVgLIAPgGQgUAIgUAIIgSAJQAHgFAIgEIAIgEQAWgKAJgBIABgBIAFAAIADAAIABAAQATADASAGIAJAEIAHACQAbANAnAeQAnAeAxA3QApAvAxBHIAJAQQgsDMgvCgQgoCJgkBpIgFAPIgRArIjUBYIgLgcgABXH4IgBABIgMAFgABqHGIgEACIAFgEIABgBIgHASIAFgPgABuG8IAAAAIAAABgAgxjaIANAFIAGADQgIgCgIgEIgpARgAgBjSQgNAAgLgDIBdgoIgIAHQgaAVgRAIIgSAIIAAgBgAgujbIgCgBIAAAAIABAAIACABIgEABgABSkQIAEgBIgLANIAHgMgAhkkTIDjhfQAFgDACgDIADgHIAFgSIABgBIACgIIABgIQgNBEgXApIgGAKIANgbIAQgsIjoBgIgBgBgAiMloIACAFIACAFIgEgKgACKmQIAAABIgvAUgACBm0IAAABIgJAEg");
	this.shape_2.setTransform(137.1,225.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6D6").s().p("AiTCLIALgVQALgWAYgjQAYgkAjgmQAkgnAwgiQAWgQAagMIASgJQAUgJAVgHIgPAGIgVAKIgXANIgDACIgCAAQgWAMgYAQQgWAQgRAVIgDACIABACQgUASgUAWIgMAOIgeAlQgTAWgRAYQgQAWgLATIgBABg");
	this.shape_3.setTransform(121.6,188.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8DFC8").s().p("AAAJOIAAgCIAZgKIgPAeIgKgSgAg9HXIB0gzIAbgMIAMgFIAFgCIgeBMIhrAqIgXgwgAhXGdIDUhYIAAACIgGAPIgBAAIAAABIAAAAIgCAGIgBABIgFAEIgCAEIhlAnIhWAkIgIgUgAh9E7IgDgIIEQhuIAAAKIABgBIABALIkMBrIgDgJgAiaDqIAAgEIEgh1IABANIgBABIABAGIAAAFIkcBwIgFgQgAidDhIADgLIACgRIEah7IABARIABAQIkgB5IgBgDgAiVCXIADgHIgCAAIABgPIAEghIEHh4IAFAmIABAMIAAAAIAAAKIAAADIkTByIAAgCgAiHAbIAAAAIAAACID5hqIAAgBIABgBIABAOIj9BrIACgPgAh7g9IACgKIAAAAIDfhdIABADIABAGIABAFIjlBfIABgGgAhoisIABgFIgBAAIABgDIAAgCIABAAIACgJIAGgmIAAAAICLg+IAggOIAEAQIAEATIgBAAIADANIAAADIACAHIjCBQIABgFgAhQktIAFgbIADgSIAAgCIgJgKIgPgTIgDACIADgCIgMgTQgZgqgRhLIAAgCIgBgDIADgCQASgUAXgRQAXgPAXgMIABAAQASgJANgGIAEgCIAQgGIAaAIIADABIAVAHIi5BWIABAHIACAFIAIAcIABADIAEAKIABABIABAEIALAZIANAcIAFAIIABADIDwhmIgCAHQgCADgFADIjjBfIABABQANATAQAPIAJAIQAIAHAKAFIADABIB6g1IgHAMIALgNQAJgLAJgPIAGgKQAXgpANhEIAEACIgFAUQgEATgKAdQgLAcgRAeQgSAfgaAXQgTATgaAJIgQAFQgBABgLgDIgGgCIgIgDIg+AaIACgPgAhQktIAqgRQAIAEAIACIgGgDIgNgFgAgRk7QALADAMAAQAAABATgIQARgIAagVIAIgHgAgolCIACABIgDABIAEgBIgCgBIgBAAIgBgBgAiGndIDZhdIAMAGIjjBfIgCgIg");
	this.shape_4.setTransform(136.3,235.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FBF7E1","#FAF7EB","#F9F8F4"],[0.118,0.361,0.722],-20.6,0,20.7,0).s().p("AhbFqQALgUAQgWQASgYASgWIAdgkIANgPQAUgWATgTIAAADIgdAfQgxA4g/BbIgCAEgAhbFoIgFgWIgRhLIgYhqIgZh6IgFgbIgRhsIgTiBIgCgTIgBgbIAAgBIADgLIAGgbIAGgeQACgPAAgHIAHAcQAEAQAHAXIAMAgQAQAsAdA0QANAYARAYQATAbAYAbQAqAzA+AnQA+AoBSAVIgFAAIgCABQgJABgVAJIgIAFQgIADgIAGQgZANgXAQQgwAigkAnQgjAngYAjQgYAjgLAXIgLAUg");
	this.shape_5.setTransform(115.9,165.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#252528").s().p("AiKKrQg/hFg7hPQhPhqhFhyQgvhOgqhMIgKgSIgIgPIgWgpQg7hxgvhlQgvhlghhOQghhPgSgtIgQgrIgBgDICyh/Ih4hzICuB1IghASIgCgBIi8BnIABACQA7CiBICXQBJCYBNCGQBNCHBHBvQBIBvA5BQQA6BRAhAsIAiAsIgogrgACpKjQAigsA5hRQA5hQBIhvQBIhvBNiHQBMiGBJiYQBDiOA4iWIAJgYIi7hnIgCABIghgSICth0Ih5B0IACgBICyB+IgSAuQgRAughBOQghBOgvBmIgCADIgfBBQgiBFgoBMQg7BxhFBzQhGBzhOBqQhOBohVBWIAigrgAOcJuQgKgkgNhBQgNhCgIhbQgIhbAEhwQAEhwAXh+QAXiAAxiJQAwiHBPiKIAEgHIgDAHIgPAeQgSAmgcBGQgcBFgeBeQgeBfgYByQgYBwgLB+QgKB+ALCEQALCFAoCDIgMADIgLgkgAu+JvQAoiEAMiBQAMiBgKh5QgJh4gXhsQgXhrgdhZQgchZgbhBQgbhAgSgkIgRgiQBRCPAxCHQAxCHAXB7QAXB5AEBqQADBrgIBVQgIBVgNA+QgNA8gKAhIgLAig");
	this.shape_6.setTransform(136.2,234.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#010101").s().p("AAMNgIgvgDIiBgJQhSgHhrgLQhrgMh6gSQh6gSh/gZQh+gZh5ghQh5gihogrIgLgFQgKgFgNgQQgOgRgLggQgKghgCg4IACgkIAIhjQAGg/AKhQQALhQARhZQARhZAZhZQAZhZAjhRQAihRAtg/IALgMQAMgNAZgTQAYgUAmgWQAngWA1gTIAbgIIBGgWIBhgiQA1gTA2gXQA2gXAugZIAQgIQAZgPAUgOQAZgbAagfIABAGIACgFIAAAcIADASIASCBIASBtIAFAbIAZB6IAXBrIARBLIAFAWIgCADIAIAkIAUBfIAgCHQATBMAWBUQAPA2AQA2IAIAZIABAEIACAFIAGAQIAPAsIAFAOIADAIIADAIIAHARIAQArIABABIAMAcIAIAUIARAmIAXAwIAWApIAQAdIABABIAKASIAOgeIAGgNIAJgVIAFgLIAEgJIAUgvIAehMIgEACIAAgBIAEgBIADgHIAFgSIACgJIAHgSIADgGIAAgBIABAAIAFgPIAAgCIARgqIAGgQQAkhpAniJQAvigAsjMIgJgPIAJAOIARhQQA1j9Alk5IAKAXIAIAMQAMAPAZAUQAaAUAuAXIASAJQApATA6ATIAZAIQAZAHApAPQAqAOAyAUQAzAUA1AZQA1AZAwAcQAaAPAWARQhPCLgwCGQgxCKgXB+QgXCAgEBvQgEBwAIBbQAIBbANBCQANBCAKAjIALAkIAMgDQgoiDgLiFQgLiEAKh+QALh9AYhxQAYhxAehfQAehfAchFQAchGASgmIAPgeQATANAQAPQAkAfARAhIASApQARAoAaBIQAbBIAbBfQAcBfAWBuQAVBuAIB2QAIB2gOB1QABAAgFAMQgEALgSAUQgSATgpAZIgoAQQgnAQhNAZQhMAZhvAbQhuAbiNAYQiOAXipAOQiJALibAAIhIgBgApynxIiyB+IABAEIAQAqQASAtAhBPQAhBOAvBlQAvBkA7ByIAWAqIAIAOIAKASQAqBNAvBNQBFBzBPBpQA7BQA/BEIAoArIgigsQghgrg6hRQg5hRhIhvQhHhvhNiGQhNiHhJiYQhIiXg7iiIgBgCIC8hnIACABIAhgSIiuh0gAMmmAIgJAZQg4CWhDCNQhJCXhMCHQhNCHhIBvQhIBvg5BQQg5BRgiAsIgiArQBVhVBOhpQBOhqBGhzQBFhzA7hxQAohMAihGIAfhAIACgDQAvhmAhhOQAhhOARgtIASguIiyh/IgCABIB5h0IitB0IAhASIACgBgAxNnMQASAjAbBBQAbBAAcBZQAdBZAXBsQAXBqAJB5QAKB5gMCBQgMCBgoCEIAWAGIALghQAKghANg9QANg9AIhWQAIhVgDhqQgEhrgXh6QgXh6gxiHQgxiHhRiOIARAig");
	this.shape_7.setTransform(137.5,223.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F9F8F4","#FAF7EE","#FBF7E1"],[0.165,0.361,0.859],-21.3,0.5,21.3,0.5).s().p("ABWFmQgwhHgpgvQgxg4gmgeQgngdgcgNIgHgDIgIgDQgQgGgKgCIgMgBIgCAAQBSgXA9gqQA+gpAqg1QATgXAQgXQAUgfARgeQAcg3APgtIAIgXQAKgfAFgUIADgOIADgPQABAHAEASIAMAlIAMAjIAEAPIAAAKIgKgWQglE3g1D9IgRBRIgJgPg");
	this.shape_8.setTransform(158.2,164.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F6DABB","#E9BD95","#E5B083","#CE9752"],[0,0.31,0.561,0.898],0.2,37.3,0.2,-27.9).s().p("AAHDoIAMABQAKABAQAHQgTgGgTgDgAADDoQhRgVg+goQg+gpgsgyQgXgbgTgcQgRgYgNgWQgdg1gQgrIgMggQgKgpgIgyQAwBMA9A6QA+A9BHAjQBFAjBHAAQBQAABNglQBNglBDg/QA6g4AthDIABANIgDAOQgFAUgKAfQgaBJg+BtQgQAXgTAXQgrA2g+AqQg9AqhSAXIgCAAg");
	this.shape_9.setTransform(136.4,150.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4A57D").s().p("AIlhTIADAAQAEAAACAJQADAJgEAXQgDAXgMAqIgBADIgUA9gAocAXQgNgsgDgYQgEgYADgIQACgJAEAAIADAAIAcCqg");
	this.shape_10.setTransform(138.7,89.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E9BD95").s().p("AIVhsIACgGQAEgOAFgLIAGgKQAJgOAKgBIAGgMIADACQALALAHAWQAHAUgEAjQgFAjgVAzIgGAUQgGAUgMAeIgFAMQgLAXgOAYQgSAegXASgAInhPIgcCrIAUg+IABgDQAMgqADgXQAEgXgDgIQgCgKgDAAIgDAAIgBAAgAn/CMIgCgBQgHgEgKgIIgDgEQgNgMgMgUQgMgWgGghIgFgSIgKgpQgFgZgCgbQgCgbADgVQADgOAHgIQADgDAFgDQANgHAbANIAFAKIAEAIIAIAQIADAJIAIAZIgBARIAAAMIABAcQABAYAEAZQADAZAJAUIgIBHIgJgFgAolhSQgEAAgCAJQgCAJADAXQADAYANAsIAUA9IgbiqIgCAAIgCAAg");
	this.shape_11.setTransform(138.4,88.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5B083").s().p("AmdGLQghgegSghQgSgggGgdQgHgdgBgTIAAgSIAFhJQACBKARA2QARA2AZAkQAYAkAYAVQAYAUAQAJIAQAJQg1gUgigegAFPGvIAAAAIAAAAgAFiGZQATgWAYgqQAZgqAUg5QAUg7AEhHQADgugIgyIACABQAMAMAOALIAAgBIACAHIAGAeIAJA4IgCASQgCAVgJAkIgHAXQgIAZgNAbQgTAogfAnQggAmgwAcIATgWgAn0BxIgEgNIAEgKIADgJIgIiAQABgUAEgRQALgqARgaIALgPQALgNAMgHQAXgPASgCIASgCQA4ALAtABQANADAMAAQAXABAUgEIglAMIgXAHQg4ATgnAmQgnAmgZAtQgaAsgOApQgOApgFAbIgDAOIgDANQgBgNgFgTgAiAjtQASgNAMgPQAKgMAHgMQAKgOAGgLIAIgPQAVgkAXgYQALgLALgIQAmgcAkgIQgUARgQASQgWAYgMASIgMASQgRAjghAdQggAcgmAUIgeARQALgIAKgJg");
	this.shape_12.setTransform(139,71.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#F6DABB","#E9BD95"],[0,0.769],19.5,-33.8,0,19.5,-33.8,60.3).s().p("AihJYQhGgjg/g9Qg9g7gwhLIgDgFQgxhOgchXQgMgkgHgkIACABIAJAEIAIhHQgJgTgDgZQgEgZgBgYIgBgcQAFgGAEgHIAFgKIAEANQAFATABANIADgNIgFBIIAAASQABATAHAcQAGAdASAhQASAhAhAeQAiAeA1AUIgQgJQgQgJgYgUQgYgVgYgkQgZgkgRg2QgRg2gChJIADgPQAFgaAOgpQAOgpAagtQAZgtAngmQAngmA4gUIAXgGIAlgNQAOgDANgFQASgIAQgKIAegQQAmgVAggcQAggcASgkIAMgSQAMgRAWgYQAQgSAUgRIAGgCQAngIAhADQAgADATAGQAUAGAAABIAUAMIARAIQAQAHAZARQATAOATAUIACACQAYAhAPA1QAPA1gCBOIgCAPQgCAOACAYQADAXANAcQANAbAdAbIADABQAIAygDAuQgEBGgUA6QgUA6gZAqQgYApgTAXIgTAWIAAAAIAAAAQAwgcAggnQAfgmATgoQANgbAIgZQgFBEgXBGQgcBVgzBQIgMAUQguBDg6A4QhDA/hNAlQhNAmhQABQhGgBhGgjg");
	this.shape_13.setTransform(137.3,89.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#8F8F8E","#A5A5A5","#BFBEBF"],[0,0.251,1],-18.5,-0.2,18.6,-0.2).s().p("ABYF8IgJg4IgGgeIgCgHIAAABQgOgMgMgMIAGABQAHACAHAGIgEgGQgLgTgZgVQgBAAgIgPQgIgPgGgdQgEgcAHgpIABgYQABgXgFglQgEgjgSgoQgJgWgQgVQgNgQgQgQQgNgMgQgKQgTgMgXgKQANAHAQALQAYARAXAfQgTgUgTgOQgZgRgQgHIgRgIIgUgMIADgGIAFACIAUAJIgZgOIA1igIgEAfQgFAhgKAlQgIAdgLAaIACgEQAJgUAPguQAPgsAThJQA4AYAoAfQArAiAcAjQAcAkAPAfQALAWAGAQIAFANIAEANIABAEIgHgPQgagzgeglQgegkgcgYQgagYgSgLIgSgMQBNA8AuA/QAuBAAXA7QAWA7AHAvQAEAaABAUQgBgvgJgoQgLg0gTgqIAEAHQAcA2ALAzQAMA3gDAwQgCAwgKAkQgJAkgJAUIgEAIIgGANQgKAAgJAOIgGALQgFALgEANIgCAHQgGARgEASIgGAjIgDAPIgCgMg");
	this.shape_14.setTransform(180.8,47.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#BFBEBF","#A5A5A5","#8F8F8E"],[0,0.776,1],-44.7,0.4,45.4,0.4).s().p("AlrGRIABgRIgIgZIgDgIIgIgRIgEgIIgFgKQgbgNgNAHQgFADgDADQgDgegDgnQgFhNAHhjIAHgeQAGgeARgvQAMgjATgoIAPgdQAeg4Aug1QAtg1BCgoQATgMAVgJQAzgXA9gMIASgDQgvANgwAZQgdAPgeASQgtAdgtApQAggcAwgeQAogZAygUIAXgJQA+gYBQgKQBPgJBfANIAKACQBDAKBKAZIAFACIAiANIgBAOIgCAXIg1CgQgngUgigGQgXgDgUABQgVABgTAFQgmALgcAVQgdAUgTAWQgUAWgJAQIgKAQQgbAxgfAbQgeAbgfAKQgfAKgZAAQgagBgPgDIgQgFQg3gMgkAMQglAMgWAZQgWAagKAbQgLAcgDAUIgDAUIAFgUQgEARgBAVIAICAIgDAJIgEAKIgFAKQgEAIgFAGIAAgNgAhzAjQAkgDAegPQAegPAUgSQAVgSAMgOIALgOQAzg/AygcQAygdAsgFQAmgFAeAFIAKABQAeAGATAIQgsgUgmgFQgVgDgTAAQgagBgWAGQgoAJgeARQgeASgUAUQgUATgKAOIgKAOQgaAugeAZQgfAXgfAKQgfAJgZAAQgaAAgQgDIgPgEQAqAQAlgDgAkSBbQAXgPAVgDQAVgDANABIANADQAgAPAcAGQgtAAg4gMIgSACQgSADgXAOQgMAHgLANQAPgVARgKgABBALIAIgKQgHALgKAMQgMAPgSANQAXgUAQgVgACwiCQAkgYAkgIIANgDQAqgGAjAHQAfAFAVAIIgDAHQAAgBgUgGQgTgHgggDQghgDgnAJIgGABQgkAJgmAbQgMAIgLALQARgTASgMgAGzlmIgKgFQgXgKgigNQgqgQg3gLQAdAFAeAHQA0AMAwAaIARAJIAAACIgMgGg");
	this.shape_15.setTransform(123.5,42.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D7D7DB").s().p("AGqFtIgFgBIgCgBIgEgBQgdgagNgcQgNgbgCgYQgDgXACgPIADgPQAChOgQg1QgPg1gYgfIgBgCQgXgggYgQQgRgMgMgGQAWAJATAMQAQALANAMQARAPAMARQAQATAKAXQASAoAFAkQAFAkgBAXIgCAYQgIApAGAdQAFAcAIAPQAJAPABAAQAYAWAMASIADAGQgGgFgIgCgAohECQADgUALgcQALgbAWgaQAVgZAlgMQAlgMA3AMIAQAFQAPADAZABQAaAAAegKQAfgKAfgbQAfgbAbgyIAKgPQAKgQATgWQAUgWAcgUQAdgVAkgLQATgFAWgBQAUgBAWADQAjAGAnAUIAYANIgUgJIgFgCQgUgIgfgFQgjgHgrAGIgMADQglAIgjAYQgSAMgRATQgXAZgVAiIgIAPQgGALgKAPIgHAKQgQAVgYAUQgKAJgLAIQgPAKgSAHQgNAGgPADQgUAEgWgBQgNAAgNgDQgcgGgfgPIgOgDQgNgBgUADQgVADgXAPQgRAKgQAVIgLAPQgQAagMAqIgFAUIADgUgAIfBtQgGgvgXg7QgWg7gvg/Qgug/hOg8IATALQARAMAcAXQAbAYAeAlQAfAlAZAyIAIAQIADAGQASApALA0QAJApACAwQgCgVgEgagAmHBLIAPAEQAPADAaAAQAaAAAfgJQAegKAfgYQAfgZAagtIAKgOQALgOAUgTQAUgUAegSQAegRAngJQAWgGAaABQATAAAVADQAmAFArAUQgSgIgegGIgKgBQgfgFgmAFQgrAFgyAdQgxAcgzA/IgMANQgLAOgVASQgWATgdAPQgeAPglADIgNAAQgfAAgigNgADiigQAKgkAFghIAFgfIACgXIABgOIgjgNIgFgCQhKgZhCgKIgLgCQhdgNhQAJQhPAKhAAYIgXAJQgyAUgnAZQgwAeghAcQAtgpAugdQAdgSAdgPQAwgZAwgNIAAgBQBNgVBFgBQBFgBA7ALIAFABQA4ALApAQQAjANAWAKIALAFIALAGIAAgCIAAgDIAUAGIgBAHQgTBJgPAsQgQAtgJAUIgCAFQALgaAIgeg");
	this.shape_16.setTransform(143.3,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.per6, new cjs.Rectangle(0,0,275,310), null);


(lib.jsegigies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.per6();
	this.instance.parent = this;
	this.instance.setTransform(100,112.7,0.127,0.127,0,0,0,137.6,154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:137.4,regY:155,scaleX:0.73,scaleY:0.73,y:112.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.5,93,35,39.4);


// stage content:
(lib.People_icon_one_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jsegigies();
	this.instance.parent = this;
	this.instance.setTransform(200,200,1,1,0,0,0,100,112.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(717.5,505.3,35,39.4);
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