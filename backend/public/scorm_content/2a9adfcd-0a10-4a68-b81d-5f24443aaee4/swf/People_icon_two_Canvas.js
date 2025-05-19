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


(lib.per3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#AEACAB"],[0.737,1],0,5.4,0,-5.2).s().p("AAFgCQAIgUgEgLQgDgLgGgFIgGgEIAAAAQAVgBACAQQACAQgIAVQgJAVgIARIgFAKIAAAAIgBABIgEAGg");
	this.shape.setTransform(111.1,80.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#AEACAB"],[0.737,1],-5.3,0,5.2,0).s().p("Ag0AJQABgFAGgFQAGgGAOgDIANgBIAFAAIABAAIAYgCIAkgBIgQAAQgPABgVACIgCABQgSACgQAGQgIACgFAFQgEAEgCAGIABgGg");
	this.shape_1.setTransform(78.3,73.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEACAB").s().p("AhZBPIgEgEIAHgNQAHgNAGgSQAHgQACgPIABgBIABgDIAAgBIABgIIAAgBQAAgNgFgIIgRgKIgBAAIAAACIgZgDIgJgBIgEgBIgxgFIgDAAIgZgDIgOgBIgngDQgrgDgnABQgmAAgZAGQgXAFgCAOIgDBHIgBAGIgEgCQgFgCgFgHQgHgGgDgOIgEgCIgIgFQgEgDAAgCIAAgLIgCgEIgBgJIAAgOIgHgbIAfABIAGgFIANgDIABAAIANgCIABAAIAkgDQAmgBBHAFIA8AGQA2AGBGAKIAAgCIAAAAIACgGIATACQAUACAiABQAhAAAvgFIABAHIAAABQBxgRBHgFQBHgGAlABQAmACAOADIAMADQAIAFACAGIACAGIAFAJIAPgHIAMgGIAEABIgHAxIgMAEIAAACIgGAFIgHAFIgEACQgGAUgJAGQgJAGgBgBIAAgDIgDhKQgBgNgZgGQgZgGgmAAQgnAAgrADIgeACIg0AFIg/AIIgFABIgUACIAAgDIgQAJQgFAKACAPIAAgDIAAADIAAACIAAABIAAABIAAABIAAABIABABIAAADQADAPAGAQQAHASAGANIAHANIgDAEQgFAFgGgEQgHgEgGgLIgLgVIgEgKQgLgTgLgHQgMgGgGgBIgCAAIgCAAIgDAAIgCAAQgIABgLAHQgMAHgMATIgFAKIgKAVQgHALgHAEIAAABIgEABQgDAAgDgDgAhEgnQAGAFADALQAEALgJATIgVA5IAEgGIABgBIAAAAIAFgKQAJgRAIgWQAJgUgCgQQgDgQgVABIgBAAIAIAEgAmZhMIgMABQgOADgHAGQgFAGgBAFIgBAGQABgGAEgEQAGgFAIgDQAPgGATgCIADgBQAUgCAQgBIAQAAIgkABIgaACIAAAAIgGAAg");
	this.shape_2.setTransform(118,79.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGDCQgUgfggg8Qgfg9glhWQgghQgehlIAJAGQARAOAiAQQAiAQAvAGQAvAIA7gLQA8gMBGgoIgCAFQgIAggRA0QgQA1gXBAQgWA+gcA/QgcBAgfA1IgUggg");
	this.shape_3.setTransform(116,263.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E9BD95","#F6DABB","#E9BD95","#E8BC94","#E5B083"],[0.004,0.239,0.655,0.659,0.929],0,60.8,0,-68.3).s().p("Ag5JcQgvgHgigQQgigPgRgOIgJgGIgJgIQgPgsgPhEQgPhEgOhSQgOhRgLhWIgXijIgRiPIgLhkIgCgSIgCgTQAKgVAJgbIAHgbQAKgrAGgvQAHgvADgpIACgUIAMAOQCeCoCagBQCCgBCBiOIADAeQAGA/ANArQAMArALAWIAGANIAFAJIgDAfQgKBfgOBeQgRBsgSBkQgUBkgSBVQgTBVgPA/IgZBiIgCAIIgGAZIgBADQhHAog7AMQgjAHgfAAQgVAAgTgEg");
	this.shape_4.setTransform(117.1,185.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545355").s().p("Aj6BXIgRgCIgqgIQgYgFgZgHQgZgIgRgKQgRgKgCgNIgBgPIAAgCIAChHQACgNAYgGQAZgGAmAAQAnAAAqACIAnADIgxgCIhFAAIgbAAQgfAAgOAGQgMAFgBAGIgBAHQgDASAAAUIADAgIACAPQABAMARAKQARAJAXAIQAYAHAYAFIAoAHIARACQAzAFAhgEQAggEARgJQAQgIAFgHIAGgHIADAEIgEAGQgHAHgRAJQgRAIghAFQgQACgUAAQgXAAgcgDgACkBYQghgFgSgIQgRgJgFgHIgGgHIADgEIgGgNQgGgNgIgTQgFgOgEgQIAEALIAaBAIAFAIQAGAHARAIQAQAIAgAFQAgAEA0gFIARgDIAogHQAYgFAYgHQAYgHAQgKQARgKABgMIACgPIACggQAAgUgCgSQABgBgBgGQgDgFgMgGQgMgGggAAIgbAAIhFABIgpACIAdgDQArgDAnABQAnAAAYAFQAZAGABANIADBLIgBANQgCANgRAKQgRAKgZAIQgZAIgYAFIgqAHIgQADQgeADgYAAQgTAAgPgCgAhYAxIAAAAIAAAAgAhYAxIAahBIADgKQgDAQgGAOQgHATgHAMIgGAOIAAAAgAA6gpIAAADQgCgOAFgKIAQgJIAAADIAUgDIgSAEIgIADQgHAEgFALIAAAAIAAACIAAAAIgBABIAAAIIAAgDgAg7gxQgEgLgHgEQgIgEAAABIgkgHIAKABIAZAEIAAgCIABAAIARAJQAEAJAAANIgCgJg");
	this.shape_5.setTransform(117.6,82.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-31.4,-0.5,31,-0.5).s().p("AkMBnQAlgHA3gOQA3gOBCgUQBAgUBDgaQBEgZA8geQAygaAmgbQhMA5hQAmQhXAqhQAYQhQAZhAALQhAAMglADIgQABIAYgEg");
	this.shape_6.setTransform(117.4,56.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8B98F").s().p("AioB/QhHgFgmABIgkADIgBAAQgfgEgVgEIgBAAIgMgDIgIgBIAAgBIgBgBQBoAJBhgNIAYgEIAIgBQBTgNBJgXQBXgcBIgiQBHghAzggQA0gfAbgUIAcgVIgEAHQgyBMg/AxQhDA0hKAeQhLAdhKAMQguAHgsADIg8gGg");
	this.shape_7.setTransform(108.2,59.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-28.7,-0.7,29.9,-0.7).s().p("AkDB0QAcgEAugJQAvgJA8gRQA7gSBBgcQBCgbBBgoQA4gkAyguIgDAJQgNAOgXAVQgeAcgvAfQgvAfhBAdQhBAdhVAUQhUAUhnAFIAXgDg");
	this.shape_8.setTransform(121.4,50.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-28.9,-0.4,29.7,-0.4).s().p("AkEB3QAbgDAvgJQAvgKA7gRQA8gRBAgcQBCgcBBgoQA8gmA1gyIgCAGIgBABQgOAQgdAcQgeAbguAfQgvAfhCAdQhBAdhUAUQhWAUhpAFIAbgDg");
	this.shape_9.setTransform(122.5,46.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-29.5,0,29.1,0).s().p("AkLB8QAbgEAvgJQAvgJA7gRQA8gSBBgcQBBgbBBgoQArgbAogiIgFAOIgLAJQgdAcgvAfQgvAfhCAdQhAAdhVAUQhUAUhnAFIAXgDgAEhh7IACgCIgDAEIABgCg");
	this.shape_10.setTransform(127.7,38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-28.1,-1.2,30.5,-1.2).s().p("Aj8BwQAbgEAvgJQAugJA8gSQA8gRBAgcQBCgbBBgoQAzghAugpIgCAGIgCAGIgaAYQgeAcgvAfQguAfhCAdQhAAchWAVQhUAUhqAFIAbgDg");
	this.shape_11.setTransform(124,43.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-5.2,0,5.2,0).s().p("AgjBbIACgIIADgIIAPgpIABgGIADgJIADgFIACgGIACgIIAFgMIAJgaIAKgZIAWg8IAKgYIgBANIAAAEQgCArgLAoIAAACIgDALIgEAOQgPAsgQAkIgGAMQgRAggMAUIgPAXIgBABQAFgVALgkg");
	this.shape_12.setTransform(152.8,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8E4D6").s().p("ABlKcIAAAAIgBACgACDJ1QAegpA0hKQA0hLBBhmQBBhnBHh9QBGh7BEiNQBEiNA5iXIAMAHIgRArQgRAqggBIQggBKgsBeQgtBdg3BoQg3BqhABqQhABphHBhQhGBghKBMIAegngAhYKVQhIhMhEhdQhHhihAhpQhAhqg3hpQg3hogthfQgshegghIQgghKgRgqIgRgrIAMgFQA5CXBECMQBECNBGB8QBHB9BBBmQBBBmA0BLQA0BLAeAoIAbAlIAEAFIgFgFgAMZJQIgNgqQgMgqgOhNQgNhNgEhqQgEhqAPiCQAPh/AsiSQAsiRBSiaIgSApQgUAtgcBRQgcBRgbBtQgaBugOCAQgPCAAJCNQAICMAoCOIABACIgWAEgAsxItIABgCIAAAAQAoiQAJiHQAIiJgPh7QgOh6gahnQgbhmgchMQgchLgUgqIgPghQBQCYArCKQAsCOAOB7QAPB8gFBjQgEBkgOBHQgOBIgMAmIgMAlIgBABgAIwonIgTgJICXhpIhqBsICbB1gAo5oyIhqhrICXBoIgTAJIi1Bug");
	this.shape_13.setTransform(118.7,232.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9F6EA").s().p("ABWL+IhGAAIgGAAIgogCIhIgFIgbglQgegog0hLQg0hLhBhmQhBhnhHh9QhGh8hEiMQhEiNg5iWIgMAFIC1huIATgKIiXhnIBqBrIibB0IARArQARAqAgBJQAgBJAsBeQAtBeA3BpQA3BpBABpQBABqBHBhQBEBeBIBMIgogEQhIgFhdgLQhegKhrgQQhqgQhvgWIhWgSIAMgmQAMgmAOhHQAOhIAEhjQAFhkgPh7QgOh7gsiOQgriKhQiYIAPAhQAUApAcBMQAcBLAbBnQAaBmAOB7QAPB7gICJQgJCHgoCPIAAAAQg4gNg3gQQhqgehbgmIgJgEQgJgFgMgOQgMgPgJgdQgKgdgBgxIACghIAHhYQAFg3AJhIQAJhHAPhPQAPhPAWhPQAWhPAehIQAehIAng4IATgTQASgTAngaQAngaA+gXIAXgHIA+gUIBUgeQAvgRAvgUQAvgUApgXIAJgFQAjgTAYgVQAcgXAGgWIAIATQgJAagKAVIACATIACATIALBkIARCOIAWClQAMBVAOBSQAOBSAOBCQAPBEAPAtIAJAHQAeBlAhBQQAkBYAfA8QAgA9AUAfIAVAfQAeg1Acg/QAchAAXg/QAWg/ARg1QAQg1AJggIABgFIABgDIAHgZIACgHIAYhjQAQg+AThVQAShVAThkQAThkARhtQAOheAKhfIADgfIgFgJIAPgbIAWAMQAWAMA2AbIAiAQIBxA1IAeAKQAcAJAvARQAuARA2AXQA2AYA0AcQA0AcAnAgQAnAgARAiIAQAlQAPAkAXA/QAXBAAYBVQAZBUATBiQASBiAHBoQAHBpgMBoIgDAKQgEALgQARQgQARgjAWIgyAVQgyAThfAdIgNAEQgzAPg+AOQgoiPgIiLQgJiNAPiBQAOiAAahtQAbhtAchRQAchRAUgtIASgqQhSCbgsCQQgsCSgPCAQgPCBAEBrQAEBqANBNQAOBNAMApIANAqIhTASQiIAcisARQiMAOihAAQBKhMBGhgQBHhhBAhqQBAhpA3hqQA3hpAthdQAsheAghJQAghJARgqIARgrIibh0IBqhsIiXBoIATAKIC1BuIgMgGQg5CXhECNQhECMhGB8QhHB9hBBnQhBBmg0BLQg0BKgeApIgeAngArjlcIAAAAg");
	this.shape_14.setTransform(120.2,222.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4A57D").s().p("AH6hBIAEAAIAAAAQADAAADAJQACAIgDAWQgEAXgNArIgTA6gAnnApIgBgCIgKggQgNgqgDgWQgDgXACgIQACgJAEAAIACAAIABAAIAbCig");
	this.shape_15.setTransform(118.6,83.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#F6DABB","#E9BD95"],[0,0.769],2.2,-12.9,0,2.2,-12.9,63).s().p("AkUE/IgMgNQg4g/gphKIgIgOIAPAJIAKAFIAIAEIgEgEQgcgdgUgmQgRgigNgjIADABIgKhSQgCgUgBgYIgCgvIAAgbIACAEIgBALQABACAEAEIAIAFIAEACQADAOAGAGQAGAHAEACIAFACIABgGIAAABIABAQQACAMARALQARAKAZAHQAZAIAZAFIApAHIARADQA2AFAhgFQAigEARgJQARgIAGgIIAFgGQAEAEAFgCIABgBQAHgEAHgLIAKgVIAEgKQANgTALgHQAMgHAGgBIADAAIADAAIACAAIACAAQAHABALAGQALAHAMATIAEAKIAKAVQAHALAHAEQAGAEAFgFIAFAHQAGAHARAJQARAJAhAEQAhAFA3gGIARgCIApgIQAZgFAYgIQAZgHARgKQARgLACgMIACgOIAAADQABABAJgGQAJgGAGgUIAEgCIAHgFQgDAOgEAKIgFAYQgFAWgLAlQgLAkgRApQgRAqgZAnQgSAcgWAWIgRAQIAWgKIAMgGQASgKAZgRQAfgUAighIgBAKQgQAkgSAiQgiA/grA3QgXAfgXAaQiBCNiDACIgCAAQiYAAieiogAjvglIgRgDIgogHQgXgFgYgHQgYgHgRgKQgRgJgBgNIgCgOIgCgiQgBgUADgSIABgGQABgGANgGQANgFAgAAIAbgBIBEABIAyACIAOABIAZADIADAAIAxAFIADABIAkAGQABAAAHAEQAHAEAEALIACAIIAAABIgBAIIAAABIAAADIgBACIgDAJIgaBCIgFAIQgGAHgQAIQgRAIggAEQgPACgUAAQgWAAgbgCgACuglQgggEgQgIQgRgJgGgHIgFgHIgahCIgDgLIgBgDIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgIIAAgBIAAgBIABgBIAAgBQAEgLAHgDIAIgEIATgDIAFgBIA/gIIA0gFIApgCIBFgBIAbABQAgAAAMAFQANAGACAGQABAGgBAAQADATgBATIgCAiIgBAOQgCANgQAJQgRAKgYAHQgYAIgYAFIgnAHIgRACQgdADgXAAQgSAAgPgCgAHIjMIgCgGQgCgGgIgFIgNgDQgNgDgmgCQglgBhHAGQhHAFhyARIAAgBIgBgHQguAFgiAAQgigBgTgCIgUgCIgBAGIAAAAIAAACQhHgKg2gGQAsgDAvgHQBLgMBJgdQBLgeBCg0QBAgyAxhMIAHgGIACgDIAGATQAGASANAdQAOAdAXAhQAYAhAiAeQAXAUAcAQIgEA5IgPAHIgFgJgAnPjYIgEgKIAAgCIgCgEIgDgFIAJABIALADIACAAQAVAEAfAEIgNACIgBAAIgNADIgGAFgAnZjvIAAAAIgGgDQByAIBhgLIAEAAIARgCIgYAEQg7AIg9AAQgoAAgqgEg");
	this.shape_16.setTransform(116.6,94.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E9BD95").s().p("AG3CtIACgLIAfj3IAGgwIAFgqIAJADQAJADALALIAKAMQAEAHAEALQAIAUgCAhQgCAhgSAwIgFAUQgEATgKAdQgJAagNAaIgCAEQgPAcgTATgAIAhjIgbCjIATg6QANgrAEgWQADgXgCgIQgDgIgDgBIAAAAIgDAAIgBAAgAnHBqIgDgCIgHgEQgLgHgOgVQgOgWgHgoIgEgQIgKgoQgGgZgDgaQgDgaADgUQACgUAMgHQAHgFANAEIAIADIAFADIABAAIABABIAAAAIACAFIACAFIABABIAEALIAIAaIAAAPIAAAJIABAbIABAuQABAXADAVIAJBSgAn9h6QgCAIADAXQADAWANArIAKAfIABACIAIAZIgbijIgBAAIgCAAQgEABgCAIg");
	this.shape_17.setTransform(118,87.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-7.8,0,7.9,0).s().p("AgHAoQgggjgPgfQgPghgFgVIgDgWQAIAdASAdQASAdAWAaQAVAaAVAVIAiAhIAOAMQg3gcgfgjg");
	this.shape_18.setTransform(157.7,55.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-7.8,0,7.9,0).s().p("AgHAoQgggjgPgfQgPghgFgVIgDgWQAIAdASAdQASAeAWAZQAVAaAVAVQAUAVAOAMIAOAMQg3gcgfgjg");
	this.shape_19.setTransform(158.1,53);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-7.8,0,7.9,0).s().p("AgIAoQgfgjgQgfQgPghgDgVIgFgWQAJAdARAdQATAdAWAaQAVAaAVAVIAhAhIAPAMQg4gcgfgjg");
	this.shape_20.setTransform(159.9,48.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#443624","#7B6556","#8D7467","#443624"],[0.035,0.341,0.435,0.906],-7.8,0,7.9,0).s().p("AgHAoQgggjgPgfQgQghgEgVIgEgWQAJAdASAdQASAeAWAZQAVAbAVAUQAUAVAOAMIAOAMQg3gcgfgjg");
	this.shape_21.setTransform(159.4,50.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#362A1D").s().p("AFFImQAWgXASgcQAYgnASgpQARgqALglQAKgkAFgXIAFgXQAEgLAEgOIAFgFIAAgCIANgFIgfD4QgjAhgeAVQgaARgSAKIgLAGIgWAKIARgQgAl0ImIgLgGIgOgIQgOgJgRgNQgbgWgfgkQgfglgbg3Qgbg3gShNIgGgiQgFghgEg4QgEg4AGhEQAFhFAVhJQAVhJAthDQAog9BCgwIAJgKIAYgTIAOgKQAVgSAZgQIAegPQAcgOAxgRQA7gWBIgLQBHgMBRAKQBOAKBUAmQBWAkBVBJIABgDQAdAYAWAmQA0ApAeA5QAeA6AOBBQANBCACA/QADBAgEA0QgEA1gFAfIgFAhQgYBLgjA3QgXAjgYAdQANgaAJgaQAKgdAEgTIAFgUQASgxACghQACghgIgUQgEgLgEgHIgKgMQgLgLgJgDIgJgDIgFAqIgEgBIgMAFIAEg5QgcgQgWgTQgjgfgXghQgXgggOgdQgOgdgGgSIgFgSIABgCIAPgWQAMgUARggIAEAVQAEAVAPAhQAPAhAgAjQAgAiA3AbIgOgMIgiggQgVgUgWgbQgWgagSgeQgSgdgIgcIAGgNQARgkAPgtIAEgNIADgLIACgEIgCACQAKgoADgsIACgHIgCAEIABgOIgKAYIgXA9IgJAZIgKAZQgnAigrAbQhBAphCAbQhBAcg8ASQg7ARguAJQgvAJgbAEIgYADQBogFBSgUQBVgUBCgdQBBgdAvggQAvgfAegcIAKgJIgDAIQguApgyAgQhBAphCAbQhCAcg6ASQg8ARgvAJQgvAJgbAEIgaADQBpgFBVgUQBUgUBCgdQBBgdAvggQAvgfAegcIAZgYIgDAJQg1Ayg8AmQhBAphCAcQhBAcg7ARQg7ARgvAJQgvAJgbADIgbADQBqgFBVgTQBUgUBBgdQBCgdAvggQAugfAegbQAegcANgQIABgBIgOAoQgyAug4AkQhBAphCAbQhCAcg6ARQg8ARgvAJQguAJgcAEIgXADQBngFBUgUQBUgUBCgcQBBgdAvggQAvgfAegcQAXgVANgOIgCAHQgMAkgEAWIgCACIgHAHIAEgIIgcAVQgbAVg0AfQgzAfhHAhQhHAihXAcQhKAXhTAOIgIABIgRACIgDAAQhiAKhxgHIgIgDQgNgEgHAFQgMAHgCAUQgDAUADAaQADAaAGAZIAKAoIAEARQAHAoAOAWQAOAVALAHIAHAEIADACQAMAkASAhQAUAnAcAdIADADIAAAAIgHgDgADPg3Qg8AehDAZQhDAahBAUQhBAUg4AOQg3AOgkAHIgYAEIAQgBQAlgDA/gMQBAgLBQgZQBQgYBYgqQBPgmBNg5QgnAbgyAagAFMhYQAEAVAPAhQAPAhAgAiQAgAiA3AdIgOgNIgiggQgUgVgXgbQgWgZgSgdQgSgegIgdIAEAWgAFQh0QAEAVAPAhQAPAhAgAhQAgAjA3AcIgOgMQgNgMgVgVQgUgUgWgaQgXgagSgeQgSgdgIgdIAEAWgAFciJQAEAVAQAhQAPAgAgAjQAgAiA3AcIgOgMQgOgMgUgVQgVgTgWgbQgWgagSgeQgSgdgJgdIAEAWg");
	this.shape_22.setTransform(117.1,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.per3, new cjs.Rectangle(0,0,240.4,299.2), null);


(lib.awjfwjwof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.per3();
	this.instance.parent = this;
	this.instance.setTransform(99.9,124.5,0.196,0.196,0,0,0,120.2,149.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:120.1,regY:149.5,scaleX:0.83,scaleY:0.83,x:100,y:124.4},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.3,95.1,47.2,58.8);


// stage content:
(lib.People_icon_two_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.awjfwjwof();
	this.instance.parent = this;
	this.instance.setTransform(200,200.1,1,1,0,0,0,100,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(711.3,495.6,47.2,58.8);
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