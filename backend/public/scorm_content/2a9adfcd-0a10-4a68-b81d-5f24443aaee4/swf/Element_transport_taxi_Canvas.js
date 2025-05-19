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


(lib.shape7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("AIbpTQCYCNDTDtIAtgNQEAAoCKAgIDRAyQBIATA3AqIAKALQAUAcgHAoQBsgFgLDpQArAhAMAvIACALQAHAogpBJQgdAzgzBDIhpAAIAAgmQARiohYhSQgcgZglgRQidhGiWBcQiGBVgcDfIgSCxIgggtIAMhNI8sgKIgIgyQg0kmiwgpQhpgZhZAWQgxARglASQgZAOgYATQhWBuANBuIAAAbIgKBpIg8AcIAUhxIj8g5QgegzgRgpQg8iPBggUIANgDQgWgjgKgjQgbheBBhbQAbglAqglQgPg+Bpg/IDBlZQBVi3EOgbIEogMIhWKEIgLA+IAWACQCmgGDDAXQDDAWFcABQAYDXgYDYIgNChIO5AEIAekYQAbjRhChwQJaAHBvAsAcFEEIgCAiIjnAAAccHQIiRAAAc8FUIinAAAKeiYQAPAXBSgGQAKiEhagDIgPAPQgXA8AVArgARiCNIgCgfIA+AAIAAAfgAaXgkIoShZIhVAAIhNgZAKvkOIgMg5QhsjFiigzQijg0jNAMIAKBOIAyEKIAAB3II9AAAIApsIGoIBIAzBYAHwrrQA9AugSBqAIApsIgQgNIAAhyAIApsIAbAZAgvrxIChgEIF+AKAhWpnIoOAAIANHCIIdAAIAAh1gAAqh1QAVAzgHA0QIvgKF0AFAB0BtICjAAQAAgjgegCIh4AAQgZAJAIAcAAqh1Qg/pmgagWAAZGKItCAAQgsAFgEglQAGgSAsgCINAAAQAnAagnAagAA/FqQAGgRAugDINiAAQAXAPgCAPQgDALgSAMItlAAQgrAEgFgggAPkJGIAiAAAAqh1INBAAAs3pdIhHGkImTgTQhjgNAfhQIBljVQALgSAVgOQA4goCEgOgAqMpnIANHCIiFAAIA6nCgAtng1IAXgBAtmg4IgBADAtCBhICiAAQAAgjgegCIh4AAQgYAJAIAcA7wAEIgmC5A1QESQApgYAtgLA1iEaQAJgFAJgDA3dG8QAKggANgcQAfhDBFgjImhgUA38I+QAMhJATg5QlDgIgHgLAtUJBIAwABQhFiDgLiCQgSi5Afi5ItEgRAtbh2QsYgKAihDAsFr6QGtgNEpAWAtbh2IOFABAsfHxIMwAMAskJCINPAA");
	this.shape.setTransform(185.5,76.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#689498","#97B8BD","#92BED7","#C3DCF7"],[0,0.184,0.62,1],0,27.5,0.1,-27.4).s().p("AjHC/QhjgNAghQIBkjVQALgRAVgPQA5gnCCgPIDegIIhIGjg");
	this.shape_1.setTransform(75.7,37.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#689498","#97B8BD","#92BED7","#C3DCF7"],[0,0.184,0.62,1],0,23.5,0,-23.4).s().p("AhBDhIA5nBIA+AAIAMHBg");
	this.shape_2.setTransform(114.9,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#689498","#97B8BD","#92BED7","#C3DCF7"],[0,0.184,0.62,1],-0.1,22.9,0.1,-22.8).s().p("AkIDhIgMnBIINAAIAcFLIAAB2g");
	this.shape_3.setTransform(152,37.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#689498","#97B8BD","#92BED7","#C3DCF7"],[0,0.184,0.62,1],0.7,25.1,-0.6,-25.1).s().p("AkIDoIAAh2IgykKIgKhNQDMgMCiAzQCjAzBrDEIANA6IgPAPQgXA8AVAqg");
	this.shape_4.setTransform(221.8,38.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#191919","#303030"],[0,1],0,4.3,0,-4.2).s().p("Ah1ARQgegygRgpQAHAMFCAIQgTA4gMBJg");
	this.shape_5.setTransform(18.8,126.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#191919","#303030"],[0,1],0,8.3,0,-8.5).s().p("AjWBIQg8iOBggUIGgAUQhFAjgfBCQgNAcgKAgQlCgIgHgLg");
	this.shape_6.setTransform(23.8,112.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AAXhbIglC3QgbhcBAhbg");
	this.shape_7.setTransform(5.5,86.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#191919","#303030"],[0,1],0,26.7,0,-26.6).s().p("AHJFEQg0kmiwgpQhpgZhZAXQgsALgpAWIgSAIImhgUIANgCQgWgjgKgiIAmi5QAbgmAqglINDARQgfC5ASC5QALCCBFCCg");
	this.shape_8.setTransform(54.5,102.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#191919","#303030"],[0,1],-0.7,9.7,-0.7,-75.3).s().p("AmmA2QgPg9Bpg/QgiBDMXAJIgMA9IAAAEg");
	this.shape_9.setTransform(57.1,64.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#191919","#303030"],[0,1],-0.2,33.9,0,-32.2).s().p("AmkD1IDAlYQBVi3ENgbIEpgMIhWKDQsXgKAihDgACXibQiDAOg4AoQgVAOgLASIhkDUQggBQBjANIGSATIBImjg");
	this.shape_10.setTransform(65.9,32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#191919","#303030"],[0,1],0.9,-4.7,0.9,-8.9).s().p("AN7AuIANhMI8tgLIgHgxIAwABINQAAIO3AEIAiAAIgRCwg");
	this.shape_11.setTransform(194.4,143.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#191919","#303030"],[0,1],0,3.4,0,-3.3).s().p("AnCgGQAGgRAsgDINAAAQAnAagnAaItDAAIgJABQgjAAgDghg");
	this.shape_12.setTransform(144.9,113.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#191919","#303030"],[0,1],0,24.4,0,-24.3).s().p("AmIE9QhFiDgLiCQgSi4Afi6IAWgBQCngGDDAXQDCAWFdABQAYDYgYDXIgNChgAGtD4IsxgMgAm9BlQADAlAsgFINCAAQAngagngaIs/AAQgsACgGASgAkEijQAAgjgegCIh4AAQgTAHAAARQAAAGACAHQgCgHAAgGQAAgRATgHIB4AAQAeACAAAjIijAAICjAAIAAAAgAkEijg");
	this.shape_13.setTransform(144.4,102.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#191919","#303030"],[0,1],0,2.7,0,-2.6).s().p("AnUgBIgBgFQAGgRAugDINiAAQAXAPgDAOQgCALgSAMItkAAIgKABQgiAAgFgcg");
	this.shape_14.setTransform(238.8,113.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#191919","#303030"],[0,1],3.7,3,3.7,-74.1).s().p("AhQAdQjDgWinAFIgWgCIAMg9IOEABQAWAygHA0QldgBjCgWg");
	this.shape_15.setTransform(144.9,70.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#191919","#303030"],[0,1],0,29.3,0,-29.3).s().p("AnuEpIANigQAYjXgYjZQIugJFzAEQBCBygbDQIgeEYgAnbBSIABAFQAGAgArgFINkAAQASgLACgMQADgOgXgPItiAAQguACgGASgAkDirQAAgjgegBIh4AAQgSAGAAASQAAAGACAGQgCgGAAgGQAAgSASgGIB4AAQAeABAAAjIiiAAICiAAIAAAAgAkDirg");
	this.shape_16.setTransform(239.4,104.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#191919","#303030"],[0,1],0,25,0,-25).s().p("AnCFEIBWqDQGsgNEpAWQAaAWBAJlgAi+EVIIcAAIAAh1IgclMIoNAAgAlrEVICFAAIgNnBIg+AAg");
	this.shape_17.setTransform(144.6,32.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2E2E2E").s().p("ACqArQh5g1jvgzIF9AKIAABxg");
	this.shape_18.setTransform(216.1,7.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF66").s().p("AgHAzIgQgOIAAhwQA8AugSBpg");
	this.shape_19.setTransform(237.5,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#191919","#303030"],[0,1],0,30,0,-29.6).s().p("AmqEMIM/AAIs/AAQhApkgagWICigEQDwAyB4A2IAVATIAPAOIGoH/IA0BYQl0gEouAJQAHgzgVg0gAmvjkIAKBNIAyEKIAAB2II8AAQAPAXBSgFQAKiEhagDIgNg6QhrjEiigzQiEgqifAAQglAAgnADgAmqEMg");
	this.shape_20.setTransform(232.5,38.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#191919").s().p("AxzFuQALhJATg5QALggANgcQAfhDBFgjIARgIQgZAOgYATQhWBuAOBuIAAAbIgKBpIg8AcgAQmloQgUgrAXg8IAPgPQBZADgJCEIgeABQg4AAgMgSg");
	this.shape_21.setTransform(146.3,97.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#191919","#303030"],[0,1],0,16.4,0,-16.3).s().p("AmMEtIAekYQAbjQhChxQJaAHBuAtQBsgFgLDpIgCAhIjnAAQgbgYgmgRQibhGiWBcQiGBUgdDfgAkNiLIA8AAIAAgfIg/AAg");
	this.shape_22.setTransform(324.8,104.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#191919","#303030"],[0,1],-14.5,0,14.6,0).s().p("AhKChIAAglQASiohZhSIDmAAIACgiQArAhANAvIACALQAHAogpBJIiRAAICRAAQgdAzg0BCgACPhQIinAAg");
	this.shape_23.setTransform(356.5,118.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#191919","#303030"],[0,1],4.3,41,4.3,5.3).s().p("Ah3ESIgzhYImon/IAcAZQCYCMDTDsIAtgMQD/AoCJAfIDRAyQBIATA4AqIAKAMQATAbgHApQhugspagIgAghCpIBUAAIISBZIoShZIhUAAIhOgZg");
	this.shape_24.setTransform(296.2,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,373.1,155.1);


(lib.shape5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ACAh/QA1A1AABKQAABLg1A1Qg1A1hLAAQhKAAg1g1Qg1g1AAhLQAAhKA1g1QA1g1BKAAQBLAAA1A1gADVjVQBZBZAAB8QAAB9hZBYQhYBZh9AAQh8AAhZhZQhYhYAAh9QAAh8BYhZQBZhYB8AAQB9AABYBYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191919").s().p("AjUDVQhZhYAAh9QAAh8BZhYQBYhZB8AAQB9AABYBZQBYBYAAB8QAAB9hYBYQhYBYh9AAQh8AAhYhYgAh/h/Qg1A1AABKQAABLA1A1QA1A1BKAAQBLAAA1g1QA1g1AAhLQAAhKg1g1Qg1g1hLAAQhKAAg1A1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQCcIgPgFIAAgBIABgCIgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIACgDQACgEAUgFQATgGAaAFIAQAEIAEADIABAAIAEAFIgCAEQgEAIgkABgAhOCIIgSgOIgXgbIgGgOIABgBIABgBIAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAEgBQAEgBASAKQAKAGAJAKIANAQIAIAPIABAFIABABIAAAGIgFACIgBAAQgGAAgLgJgABNCCIgBgBIgBAAIgBgBIgBgDQgBgFAKgSQAKgRAWgOQAIgIAGgBIAGgBIABgBIAEABIAEAEQABAJgYAaIgbAZIgPAFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAgAiQAtQgIgFgBgkIACgjIAAgBIAFgOIABAAIACABIABgBIABgBIADACQAEABADANIACAHQAGAVgFAYQgBAKgDAGIgDAEIAAACIgFADgACKAiQgDgDgGgUQgFgRAEgZIABgCIAEgQIABgBIADgDIAAgCIADgDIAGABQAHAFACAkIgCAjIgGAPIgBABIgCgBIAAABQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAiDhEIgCgEQgDgJAZgaIAbgZIAGgCIADgCIAGgCQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIABAAIABAAIABABIACADQABAFgLASIgFAIQgKANgRAKIgPAJIgEABIgBABgABuhRQgSgLgOgWQgHgHgCgHIgBgFIgBgBIAAgCIABgEIAFgCQAEgBALAHIAVAQQAQAQAHAMIABABIAFANIAAABIgBAAIAAABIgBABIgDACIgBAAIgBAAQgGAAgPgIgAgYiEIgQgEIgBAAIgDgEIgCAAIgDgDIABgGQAFgHAkgCIAkACIAOAGIABABIgCACIACAAQgBABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIgCADQgBADgJADIgMADQgKADgLAAQgLAAgMgCg");
	this.shape_2.setTransform(-0.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ah/CAQg1g1AAhLQAAhKA1g1QA1g1BKAAQBLAAA1A1QA1A1AABKQAABLg1A1Qg1A1hLAAQhKAAg1g1gAgLCEQgUAFgCAEIgBAEQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABABIgBABIABABIAOAGIAkACQAkgCAEgHIACgFIgDgEIgCAAIgEgDIgQgFQgMgCgLAAQgLAAgLADgAh6BKIgEABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAIgBABIgBABIAGAPIAYAbIARANQANAKAFgBIAFgCIAAgFIAAgCIgBgEIgJgQIgNgQQgJgKgKgFQgQgKgFAAIgBABgABMCBIAOgGIAbgYQAZgbgCgIIgDgFIgFgBIgBABIgFABQgHACgIAHQgVAOgLASQgKASABAEIACAEIABABIABAAIABABIAAgBIABABgAiaghIAAABIgCAjQABAkAIAEIAFABIAEgDIAAgBIADgEQADgGABgKQAFgZgFgUIgCgHQgEgNgDgCIgEgCIgBABIgBABIgCgBIgBAAgACGg5IAAACIgDAEIgBABIgEAQIAAACQgFAYAGASQAFAUAEACIADABQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIACABIABgBIAGgOIACgkQgCgkgHgEIgFgBgAhOiKIgDACIgFADIgbAYQgZAbACAIIADAFIAFABIABgBIAFgBIAOgJQARgLAKgNIAFgIQALgSgBgEIgCgEIgBgBIAAAAIgBAAIgBgBQAAABgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgABGiQIgFADIAAADIAAACIABABIAAAFQACAHAIAIQANAWASAKQASAKAFgCIAAAAIADgBIABgBIAAgBIABAAIAAgBIgFgOIAAgBQgIgMgQgPIgVgRQgJgGgFAAIgBAAgAgyiWIgCAFIADAEIACAAIAEADIABAAIAPAFQAaAEATgFIALgEQAJgDACgCIABgEQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBAAIABgCIgBgBIgOgGIgkgCQgkACgEAHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-31.1,62.3,62.3);


(lib.shape3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ACAh/QA1A1AABKQAABLg1A1Qg1A1hLAAQhKAAg1g1Qg1g1AAhLQAAhKA1g1QA1g1BKAAQBLAAA1A1gADVjVQBZBZAAB8QAAB9hZBYQhYBZh9AAQh8AAhZhZQhYhYAAh9QAAh8BYhZQBZhYB8AAQB9AABYBYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191919").s().p("AjUDVQhZhYAAh9QAAh8BZhYQBYhZB8AAQB9AABYBZQBYBYAAB8QAAB9hYBYQhYBYh9AAQh8AAhYhYgAh/h/Qg1A1AABKQAABLA1A1QA1A1BKAAQBLAAA1g1QA1g1AAhLQAAhKg1g1Qg1g1hLAAQhKAAg1A1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQCcIgPgFIAAgBIABgCIgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIACgDQACgEAUgFQATgGAaAFIAQAEIAEADIABAAIAEAFIgCAEQgEAIglABgAhgB6IgXgbIgGgOIABgBIAAgCIAAAAIABgCIAEgBQAEgBASAKQARALAPAVIAIAPIACAFIAAABIAAAGIgFACIgBAAQgJAAgagXgABNCCIgBgBIgBAAIgBAAIgBgEQgBgFAKgSQAKgRAWgOQAIgIAGgBIAGgBIABgBIAEABIAEAFQABAIgYAbIgcAYQgHAEgGABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAgAiQAtQgIgFgBgkIACgkIAFgOIABgBIACACIABgCQAAABAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIADACQAEACAFATQAGAUgFAZQgBAKgEAHIgCADIAAACIgFADgACKAhQgDgCgGgTQgFgTAFgaQABgKAEgHIADgDIAAgCIADgDIAFABQAIAFACAkIgCAkIgGAOIgBABIgCgCIAAACQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAiDhEIgCgEQgCgIAYgbIAbgZIAOgGQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIABgBIACACIACADQABAFgLARQgLATgVANIgPAJIgEABIgBABgABuhRQgSgLgNgWQgJgIgBgGIgBgFIgBgBIABgGIAFgCQAIgCAcAYQAPAPAJANIAFAOIAAABIgBAAIAAABIgBABIgDACIgCAAQgGAAgPgIgAgYiEQgKgBgHgEIgDgDIgCAAIgDgDIABgGQAFgHAkgCIAkACIAOAGIABABIgBACIABAAQgBABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIgBAEQgDADgUAGQgKACgLAAQgLAAgMgCg");
	this.shape_2.setTransform(-0.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ah/CAQg1g1AAhLQAAhKA1g1QA1g1BKAAQBLAAA1A1QA1A1AABKQAABLg1A1Qg1A1hLAAQhKAAg1g1gAgKCIQgUAFgCAEIgBADQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIABABIgBACIABABIAOAFIAkACQAkgBAEgIIACgEIgDgFIgCAAIgEgDIgQgEQgMgCgLAAQgMAAgKADgAh5BNIgEABIAAACIAAAAIgBACIgBABIAGAOIAYAbQAbAZAIgCIAFgCIAAgGIAAgBIgBgFIgJgPQgOgVgSgLQgQgJgFAAIgBAAgABNCEQAGgBAIgEIAbgYQAZgbgCgIIgDgFIgFgBIgBABIgFABQgHABgIAIQgVAOgLARQgKASABAFIACAEIABAAIABAAIABABIAAAAIABAAgAiZgeIgCAkQABAkAIAFIAFABIAEgDIAAgCIADgDQADgHABgKQAFgZgFgUQgGgTgDgCIgEgCQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAgBIgBACIgCgCIgBABgACHg1IAAACIgDADQgEAHgBAKQgFAaAGATQAFATAEACIADACQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAABIAAgCIACACIABgBIAGgOIACgkQgCgkgHgFIgFgBgAhViCIgbAZQgZAbACAIIADAEIAFABIABgBIAFgBIAOgJQAWgNAKgTQALgRgBgFIgCgDIgBgCIgBABIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBgABHiMIgFACIAAAGIABABIAAAFQACAGAIAIQANAWASALQASAKAFgCIADgCIABgBIAAgBIABAAIAAgBIgFgOQgIgNgQgPQgagWgJAAIgBAAgAgxiTIgCAGIADADIACAAIAEADQAGAEAKABQAaAFATgFQAUgGACgDIABgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBAAIABgCIgBgBIgOgGIgkgCQgkACgEAHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-31.1,62.3,62.3);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("A5lg1IAqEKMAxeAAHIBDhPIiWkrMgsYgA9g");
	this.shape.setTransform(163.8,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A47DVIgqkKIEdimMAsYAA8ICWEsIhDBPg");
	this.shape_1.setTransform(163.8,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,329.6,46);


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape7("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite8, new cjs.Rectangle(-1,-1,373.1,155.1), null);


(lib.sprite6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.2,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:21.1},1).to({scaleX:1,scaleY:1,rotation:42.4},1).to({scaleX:1,scaleY:1,rotation:63.7},1).to({rotation:169.5},5).to({rotation:190.5},1).to({rotation:211.8},1).to({scaleX:1,scaleY:1,rotation:232.9},1).to({scaleX:1,scaleY:1,rotation:338.9},5).wait(1).to({scaleX:1,scaleY:1,rotation:360},0).to({startPosition:0},28).to({scaleX:1,scaleY:1,rotation:503.9},2).to({rotation:576.1},1).to({rotation:503.9},4).to({rotation:576.1},1).to({rotation:503.9},4).to({rotation:576.1},1).to({scaleX:1,scaleY:1,rotation:720},2).to({rotation:540},2).to({rotation:360},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62.3,62.3);


(lib.sprite4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.2,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:21.1},1).to({scaleX:1,scaleY:1,rotation:42.4},1).to({scaleX:1,scaleY:1,rotation:63.7},1).to({rotation:169.5},5).to({rotation:190.5},1).to({rotation:211.8},1).to({scaleX:1,scaleY:1,rotation:232.9},1).to({scaleX:1,scaleY:1,rotation:338.9},5).wait(1).to({scaleX:1,scaleY:1,rotation:360},0).to({startPosition:0},32).to({scaleX:1,scaleY:1,rotation:503.9},2).to({rotation:576.1},1).to({rotation:503.9},4).to({rotation:576.1},1).to({rotation:503.9},4).to({rotation:576.1},1).to({scaleX:1,scaleY:1,rotation:720},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62.3,62.3);


(lib.sprite2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite2, new cjs.Rectangle(-1,-1,329.6,46), null);


(lib.sprite9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite8();
	this.instance.parent = this;
	this.instance.setTransform(-185.5,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite9, new cjs.Rectangle(-186,-80.6,372.1,154.6), null);


(lib.carr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.sprite9();
	this.instance.parent = this;
	this.instance.setTransform(-461.1,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-456.6,y:-6.4},2).to({x:-443.3,y:-6.5},2).to({x:-421,y:-6.7},2).to({x:-389.9,y:-6.9},2).to({x:-349.9,y:-7.3},2).to({x:-301,y:-7.7},2).to({x:-243.1,y:-8.2},2).to({x:-176.4,y:-8.8},2).to({x:-139.7,y:-9.1},1).to({skewX:1,skewY:0.3,x:-80.6,y:-9.6},1).to({scaleY:1,skewX:1.6,x:-38.4,y:-9.9},1).to({skewX:2,skewY:0.5,x:-13.1,y:-10.2},1).to({skewX:2.3,skewY:0.6,x:-4.6,y:-10.3},1).to({scaleY:1,skewX:0.9,skewY:0,x:-1.6,y:-7.4},2).to({skewX:0.8,x:-2.6,y:-7.7},1).to({x:-5.6,y:-8.9},3).wait(64).to({skewX:0.9,x:-6.6,y:-9.4},0).wait(20).to({x:-7.6},1).to({skewX:0.5,skewY:-0.1,x:-5.5,y:-8.7},1).to({skewX:0,skewY:-0.8,x:0.4,y:-6.7},1).to({skewX:-1.3,skewY:-2,x:10.2,y:-3.3},1).to({skewX:0.9,skewY:0,x:587.4,y:-9.4},12).to({_off:true},1).wait(393));

	// Layer 3
	this.instance_1 = new lib.sprite6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-608.8,20.9);

	this.instance_2 = new lib.shape5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123.3,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},63).to({state:[{t:this.instance_1}]},21).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},12).to({state:[]},1).wait(393));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-604.3},2).to({x:-590.9,y:20.8},2).to({x:-568.7,y:20.6},2).to({x:-537.5,y:20.3},2).to({x:-497.3,y:19.9},2).to({x:-448.3,y:19.4},2).to({x:-390.4,y:18.9},2).to({x:-323.5,y:18.3},2).to({x:-286.7,y:17.9},1).to({x:-229.4},1).to({x:-188.5},1).to({x:-163.9},1).to({x:-155.7},1).to({x:-152.2},2).to({x:-153.4,y:17.1},4).to({_off:true},1).wait(63).to({_off:false,x:-153.7,y:16.9},0).wait(21).to({x:-151.4},1).to({x:-144.5},1).to({x:-132.9},1).to({x:444.3},12).to({_off:true},1).wait(393));

	// Layer 4
	this.instance_3 = new lib.sprite4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-360.3,20);

	this.instance_4 = new lib.shape3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(125.2,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},63).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},12).to({state:[]},1).wait(393));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-355.9},2).to({x:-342.5,y:19.9},2).to({x:-320.2,y:19.7},2).to({x:-289,y:19.4},2).to({x:-248.9,y:19},2).to({x:-199.9,y:18.5},2).to({x:-141.9,y:18},2).to({x:-75,y:17.4},2).to({x:-38.3,y:17},1).to({x:19},1).to({x:60},1).to({x:84.5},1).to({x:92.7},1).to({x:96.2},2).to({x:95,y:16.2},4).to({_off:true},1).wait(63).to({_off:false,x:94.7,y:16},0).wait(21).to({x:97},1).to({x:104},1).to({x:115.5},1).to({x:692.8},12).to({_off:true},1).wait(393));

	// Layer 6
	this.instance_5 = new lib.sprite2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-613.6,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-609.2},2).to({x:-596,y:2.7},2).to({x:-574,y:2.4},2).to({x:-543.1,y:2},2).to({x:-503.5,y:1.5},2).to({x:-455.1,y:0.9},2).to({x:-397.9,y:0.2},2).to({x:-331.8,y:-0.6},2).to({x:-295.5,y:-1.1},1).to({x:-238.2},1).to({x:-197.3},1).to({x:-172.7},1).to({x:-164.5},1).to({scaleX:1,scaleY:1,rotation:2,x:-156.5,y:-6.9},2).to({scaleX:1,scaleY:1,x:-161.8,y:-6},4).wait(64).to({x:-163.1,y:-5.9},0).wait(20).to({x:-160.1},1).to({rotation:1.5,x:-158.6,y:-3.9},1).to({rotation:0.3,x:-154.3,y:1.4},1).to({scaleX:1,scaleY:1,rotation:-2,x:-146.7,y:10.6},1).to({scaleX:1,scaleY:1,rotation:2,x:26.3,y:-5.8},4).to({x:434.9,y:-5.9},8).to({_off:true},1).wait(393));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-647.1,-86.9,372,168.7);


// stage content:
(lib.Element_transport_taxi_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carr();
	this.instance.parent = this;
	this.instance.setTransform(143.6,215.3,0.6,0.6,0,0,0,-32,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(309.4,481.5,223.4,101.2);
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