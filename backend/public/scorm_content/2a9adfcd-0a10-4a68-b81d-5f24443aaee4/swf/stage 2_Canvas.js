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


(lib.mma3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.263)","rgba(255,255,255,0.129)","rgba(255,255,255,0.067)"],[0,0.122,1],-130.3,-27.2,116.3,-27.2).s().p("ARvNQMglDgOmIgIgFQgXgTgRgZIAAAAQgTgaAFggIAAAAQAHgtAjgdQAFgEAHgCMAnKgJAQAJgCAJAEQAIADAGAIQAFAHAAAJQAMQtiHJCQgCAJgHAGQgGAGgJACIgGAAQgFAAgGgCgAzVhiIAFADMAlDAOmQAGACAFgBQAGgBAEgFQAFgEABgFQCHpBgMwsQAAgGgEgFQgDgFgGgCQgGgCgGABMgnKAJAQgEABgEADQggAagGAqQgEAbAQAXIAAAAQAQAYAXATg");
	this.shape.setTransform(131.7,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.329)","rgba(255,255,255,0.165)","rgba(255,255,255,0.082)"],[0,0.122,1],-130.3,-27.2,116.3,-27.2).s().p("ARzNHMglDgOmIgFgDQgXgSgQgZIAAAAQgQgXAEgbQAGgqAggaQAEgDAEgBMAnKgJAQAGgBAGACQAGACADAFQAEAFAAAHQAMQriHJBQgBAGgFAEQgEAEgGABIgEAAIgHgBgATzs9MgnKAJAIgEACQgeAXgFAmQgEAYAOAUQAQAXAVARIADACMAlDAOmQACABADgBQADAAACgCQACgDABgCQCHpAgMwqQAAgDgCgDQgCgCgDgBIgDgBIgCAAg");
	this.shape_1.setTransform(131.7,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0.098)","rgba(255,255,255,0.051)"],[0,0.122,1],-130.3,-27.2,116.3,-27.2).s().p("ARsNZMglDgOmQgGgCgFgEQgYgUgTgbIABAAQgVgdAFgjIAAAAQAIgyAmgeQAHgGAJgCMAnKgJAQAMgDALAEQAMAFAHAKQAHAKAAAMQAMQviIJCQgCAMgJAIQgIAIgMACIgIABQgHAAgHgDgAzchbIAIAFMAlDAOmQAJADAIgBQAJgCAGgGQAGgGADgJQCHpCgMwtQAAgJgFgHQgGgIgIgDQgJgEgJACMgnKAJAQgHACgFAEQgjAdgHAtIAAAAQgFAgATAaIAAAAQARAZAXATg");
	this.shape_2.setTransform(131.7,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.129)","rgba(255,255,255,0.063)","rgba(255,255,255,0.031)"],[0,0.122,1],-130.3,-27.2,116.3,-27.2).s().p("ARoNjMglDgOmQgHgDgGgFQgagVgTgcIAAAAQgXghAGgmIAAgBQAIg1ApghQAJgHAMgDMAnKgJAQAPgDAOAFQAOAGAJAMQAJANAAAPQAMQwiIJEQgDAOgLAKQgKAKgPADIgKABQgJAAgJgDgAzihTQAFAEAGADMAlDAOmQALAEALgCQAMgDAIgIQAJgIACgMQCIpCgMwvQAAgMgHgKQgHgKgMgEQgLgFgMADMgnKAJAQgJACgHAGQgmAegIAyIAAAAQgFAjAVAeIgBgBQATAbAYAUg");
	this.shape_3.setTransform(131.7,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.063)","rgba(255,255,255,0.031)","rgba(255,255,255,0.016)"],[0,0.122,1],-130.3,-27.2,116.3,-27.2).s().p("ARkNsMglDgOmQgJgDgHgGQgagWgUgdIAAAAQgZgkAHgrIAAAAQAIg6AsgjQALgJANgDMAnKgJAQASgEARAHQASAGAKAQQALAPAAASQAMQyiIJEQgEARgNAMQgNANgRADIgMABQgLAAgLgEgAzohLQAGAFAHADMAlDAOmQAOAFAOgDQAOgDALgKQALgKADgOQCIpEgMwwQAAgPgJgNQgJgMgOgGQgOgFgPADMgnKAJAQgMADgJAHQgpAhgIA1IAAABQgGAmAXAhIAAAAQATAcAaAVg");
	this.shape_4.setTransform(131.7,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(255,255,255,0.102)"],[0,0.122,1],-130.3,-27.2,116.3,-27.2).s().p("AR3M+MglDgOmIgDgCQgVgRgQgXQgOgUAEgYQAGgmAdgXIAEgCMAnKgJAQADgBACACQADABACACQACADAAADQAMQqiHJAQgBACgCADQgCABgDABIgCAAIgDAAg");
	this.shape_5.setTransform(131.7,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","rgba(255,255,255,0.702)","rgba(255,255,255,0.2)"],[0,0.122,1],0,0,0,0,0,7.2).s().p("AAABHQgaABgTgVQgSgVAAgeQAAgdASgVQATgUAagBQAbABASAUQATAVAAAdQAAAegTAVQgSAUgbAAIAAAAg");
	this.shape_6.setTransform(8.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-59.5,266,176.1);


(lib.mma2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0.349)","rgba(255,255,255,0.098)"],[0,0.122,1],-202.6,-61.4,44,-61.4).s().p("AGETPMgk9gZ3IgHgEIAAAAQgegUgWgbIABABQgfgmAJgqQAIg3AzghQAKgJAQgBMA+SgJIQAQgDANAKQANAJADAPQADAQgIAOQx4chnUI9QgKAMgPACIgHABQgMAAgKgHgA+0mxMAk+AZ3QAJAHAMgBQAMgCAHgJQHUo9R48hQAGgKgCgMQgDgLgKgHQgJgHgMACMg+WAJJQgLAAgHAHQguAegJAyQgJAnAcAiIAAAAQAVAaAdATIgBAAIAHADg");
	this.shape.setTransform(249.9,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.329)","rgba(255,255,255,0.231)","rgba(255,255,255,0.063)"],[0,0.122,1],-202.6,-61.4,44,-61.4).s().p("AF+TXMgk9gZ3IgHgEIABABQgggVgXgcIABAAQgjgqAMgwQAJg4A0gjQAMgLASgBMA+UgJJQATgDARAMQAQALAEAUQAEATgLARQx4cinUI9QgNAPgTADIgIABQgPAAgNgJgA+5moMAk9AZ3QANAIAQgCQAPgCAKgMQHUo9R48hQAIgOgDgQQgDgPgNgJQgNgKgQADMg+SAJIQgQABgKAJQgzAhgIA3QgJAqAfAmIgBgBQAWAbAeAUIAAAAIAHAEg");
	this.shape_1.setTransform(249.9,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.161)","rgba(255,255,255,0.114)","rgba(255,255,255,0.031)"],[0,0.122,1],-202.6,-61.4,44,-61.4).s().p("AF5TfMgk9gZ2IgHgEIAAAAQghgWgXgeIAAABQglgtALgyQAKg9A2gmQAQgPAXgBMA+RgJIQAYgEAUAOQATAOAFAXQAFAYgNAUQx5cjnUI+QgPASgYADIgJABQgSAAgPgLgA+/mgMAk9AZ3QAQALAUgDQATgDANgPQHUo9R48iQALgRgEgUQgEgTgQgMQgQgLgUADMg+UAJIQgSACgMALQg0AigJA5QgMAvAjArIgBgBQAXAcAgAVIgBAAIAHAEg");
	this.shape_2.setTransform(249.9,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.831)","rgba(255,255,255,0.58)","rgba(255,255,255,0.165)"],[0,0.122,1],-202.7,-61.4,43.9,-61.4).s().p("AGPS+Mgk/gZ4IgFgDQgcgSgTgYIAAAAQgZgeAIgiQAHguArgdQAGgFAKgBMA+UgJJQAIgBAGAFQAHAFABAHQACAIgEAHQx3cgnUI8QgEAGgIABIgDABQgGAAgGgEgA/cnuQASAYAaARIAFACMAlAAZ5QADACAEAAQAEgBADgDQHTo9R28fQADgDgBgEQgBgEgDgCQgEgCgEAAMg+VAJJQgFABgEADQgoAagHArIAAgBQgHAeAWAag");
	this.shape_3.setTransform(249.9,43.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.663)","rgba(255,255,255,0.463)","rgba(255,255,255,0.129)"],[0,0.122,1],-202.7,-61.4,43.9,-61.4).s().p("AGKTGMgk+gZ3IgHgDIAAAAQgdgTgUgaIAAAAQgcgiAJgnQAJgyAugeQAHgHALAAMA+WgJJQALgCAKAHQAKAHACALQADAMgHAKQx3chnUI9QgHAJgMACIgEAAQgJAAgIgGgAfhzAMg+UAJIQgKABgGAGQgrAcgHAvQgIAhAZAeIAAAAQATAYAcATIAFACMAk/AZ4QAHAFAIgBQAHgBAFgGQHUo9R38gQAEgHgCgIQgBgHgHgFQgFgEgGAAIgDABg");
	this.shape_4.setTransform(249.9,43.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","rgba(255,255,255,0.702)","rgba(255,255,255,0.2)"],[0,0.122,1],-202.7,-61.4,43.9,-61.4).s().p("AGVS2MglAgZ5IgFgCQgagRgSgXQgWgbAHgdIAAAAQAHgrAogaQAEgDAFgBMA+VgJJQAEAAAEACQADACABAEQABAEgDAEQx2cenTI9QgDADgEABIgBAAQgDAAgDgCg");
	this.shape_5.setTransform(249.9,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","rgba(255,255,255,0.702)","rgba(255,255,255,0.2)"],[0,0.122,1],0,0,0,0,0,9.4).s().p("Ag7A0QgYgVAAgfQAAgeAYgWQAZgVAiAAQAjAAAYAVQAZAWAAAeQAAAfgZAVQgYAWgjAAQgiAAgZgWg");
	this.shape_6.setTransform(55.5,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.9,-82.2,416,251.6);


(lib.mma2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.663)","rgba(255,255,255,0.463)","rgba(255,255,255,0.129)"],[0,0.122,1],-174.2,-29.7,72.4,-29.7).s().p("Aa3JWMg1FgLSQgFgBgFgDQgcgSgTgYIAAgBQgZgdAHgjIAAABQAIgwAtgdQAGgEAIAAMAwggEaQAJgBAIAEQAIAFAEAIQClFICPMwQACAKgFAJQgFAJgJAFQgGACgGAAIgHAAgAWLpLMgwgAEaQgFAAgEADQgqAagHArIAAAAQgGAeAVAaIAAAAQATAYAaARIAHACMA1FALSQAHABAGgDQAGgCADgGQADgGgBgHQiPsuiklHQgCgGgGgDQgFgCgFAAIgBAAg");
	this.shape.setTransform(185.4,34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.831)","rgba(255,255,255,0.58)","rgba(255,255,255,0.165)"],[0,0.122,1],-174.2,-29.7,72.4,-29.7).s().p("Aa5JMMg1FgLSIgHgCQgagRgTgYIAAAAQgVgaAGgeIAAAAQAHgrApgaQAFgDAEAAMAwggEaQAHgBAFADQAFADADAGQCkFHCPMuQABAHgDAGQgDAGgGACQgEACgFAAIgEAAgAWLpBMgwgAEaIgEABQglAYgHAnQgFAaASAWQASAWAZAQIADACMA1FALRQADABADgCQADgBACgDQACgDgBgDQiOstiklGQgBgDgDgBIgFgBIgBAAg");
	this.shape_1.setTransform(185.4,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0.349)","rgba(255,255,255,0.098)"],[0,0.122,1],-174.2,-29.7,72.4,-29.7).s().p("Aa1JgMg1FgLSQgHgCgHgEQgcgTgVgZIAAAAQgcgiAJgnIgBABQAIg0AygfQAIgFAKgBMAwggEaQAMgBALAGQALAGAFALQClFICQMyQACANgGANQgHAMgMAGQgIADgJAAIgIAAgA7HirIAAABQATAYAcASQAFADAFABMA1FALSQAKACAJgEQAJgFAFgJQAEgJgBgKQiPswillIQgEgIgIgFQgIgEgJABMgwgAEaQgIAAgGAEQgtAdgIAwIAAgBQgHAiAZAeg");
	this.shape_2.setTransform(185.4,34.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.329)","rgba(255,255,255,0.231)","rgba(255,255,255,0.063)"],[0,0.122,1],-174.2,-29.7,72.4,-29.7).s().p("AazJpMg1FgLRQgJgCgIgFQgegUgWgbIAAAAQgegmAJgqIAAAAQAIg4A2giQAKgGAMgBMAwggEaQAPgCAOAIQANAHAHAOQCmFJCQM1QADAQgIAPQgIAPgPAIQgLAEgLAAIgKgBgA7PikIAAAAQAVAZAcATQAHAEAHACMA1FALSQANACAMgFQANgGAGgMQAGgNgCgNQiQsyillIQgFgLgLgGQgLgGgMABMgwgAEaQgKABgIAFQgxAfgJA0IABgBQgIAnAbAig");
	this.shape_3.setTransform(185.4,34.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.161)","rgba(255,255,255,0.114)","rgba(255,255,255,0.031)"],[0,0.122,1],-174.2,-29.7,72.4,-29.7).s().p("AaxJzMg1FgLRQgLgDgKgGQgfgVgXgbIAAgBQghgpAKguQAJg9A5gkQAMgIAPgBMAwggEaQASgCAQAJQARAJAIARQCmFKCQM2QAEAUgJASQgKASgSAJQgMAFgNAAIgNgBgA7XieIAAAAQAWAbAeAUQAIAFAJACMA1FALRQAQAEAQgHQAPgIAIgPQAIgPgDgQQiQs1imlJQgHgOgNgHQgOgIgPACMgwgAEaQgMABgKAGQg2AigIA4IAAAAQgJAqAeAmg");
	this.shape_4.setTransform(185.4,34.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","rgba(255,255,255,0.702)","rgba(255,255,255,0.2)"],[0,0.122,1],-174.2,-29.7,72.4,-29.7).s().p("Aa7JCMg1FgLRIgDgCQgZgQgSgWQgSgWAFgaQAHgnAlgYIAEgBMAwggEaQADgBADACQADABABADQCkFGCOMtQABADgCADQgCADgDABIgEABIgCAAg");
	this.shape_5.setTransform(185.4,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","rgba(255,255,255,0.702)","rgba(255,255,255,0.2)"],[0,0.122,1],0,0,0,0,0,9.4).s().p("Ag7A0QgYgWAAgeQAAgeAYgWQAZgVAiAAQAjAAAYAVQAZAWAAAeQAAAegZAWQgYAWgjAAQgiAAgZgWg");
	this.shape_6.setTransform(21.2,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,-27.9,357,125.7);


(lib.blik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.831)").s().p("ArVBpQlBgoAEhBQgEhBFBgnQEsgmGpAAQGqAAEtAmQFAAngEBBQAEBBlAAoQktAnmqAAQmpAAksgngArUhhQk2AnACA6QgCA7E2AnQEsAmGoAAQGpAAEsgmQE2gngCg7QACg6k2gnQksgmmpABQmogBksAmg");
	this.shape.setTransform(112.3,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.161)").s().p("ArcCJQltgvAPhaQgPhaFtguQEwglGsgBQGuABEvAlQFtAugPBaQAPBaltAvQkvAmmugBQmsABkwgmgArbiAQlhAtAMBTQgMBUFhAtQEvAmGsAAQGtAAEvgmQFigtgNhUQANhTligtQkvglmtgBQmsABkvAlg");
	this.shape_1.setTransform(112.3,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.329)").s().p("ArbCAQlhgsAMhUQgMhTFhgtQEvgmGsAAQGtAAEvAmQFiAtgNBTQANBUliAsQkvAnmtAAQmsAAkvgngAwmAAQgJBOFWArQEvAmGqAAQGsAAEugmQFXgrgKhOQAKhNlXgrQkvgmmrAAQmqAAkvAmIAAAAQlXArAKBNg");
	this.shape_2.setTransform(112.3,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.663)").s().p("ArXBxQlMgpAHhIQgHhGFMgrQEtglGqAAQGrAAEtAlQFMArgHBGQAHBIlMApQktAmmrAAQmqAAktgmgArVhoQlBAnAEBBQgEBBFBAoQEsAnGpAAQGqAAEtgnQFAgogEhBQAEhBlAgnQktgmmqAAQmpAAksAmg");
	this.shape_3.setTransform(112.3,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.498)").s().p("ArZB5QlWgrAJhOQgKhNFXgrIAAAAQEvgmGqAAQGrAAEvAmQFXArgKBNQAKBOlXArQkuAmmsAAQmqAAkvgmgArXhxQlMArAHBGQgHBIFMApQEtAmGqAAQGrAAEtgmQFMgpgHhIQAHhGlMgrQktglmrAAQmqAAktAlg");
	this.shape_4.setTransform(112.3,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ArUBiQk2gnACg7QgCg6E2gnQEsgmGoABQGpgBEsAmQE2AngCA6QACA7k2AnQksAmmpAAQmoAAksgmg");
	this.shape_5.setTransform(112.3,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.blik, new cjs.Rectangle(4,-5.2,216.7,34.9), null);


(lib.mm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mma3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-41.3,205,0.91,0.723,-93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:204.7,alpha:0.988},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.9,-35,127.9,240.7);


(lib.mm1aa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mma2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-17.4,163.9,0.526,0.915,-76.7);
	this.instance.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.328},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-12,128.2,175.6);


(lib.mm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mma2copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(117.7,172.6,0.509,0.672,-117.7);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.238},3).to({alpha:0.199},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-14.1,188.4,172.3);


(lib.aasss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(112.5,17.4,1,1,0,0,0,112.5,17.4);
	this.instance.alpha = 0.059;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.07},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,-5.2,216.7,34.9);


(lib.ugunjii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_130 = function() {
		/* gotoAndPlay(14);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(130).call(this.frame_130).wait(1));

	// Layer 8
	this.instance = new lib.mm2();
	this.instance.parent = this;
	this.instance.setTransform(268,223.1,0.058,0.766,-2.8,0,0,-24.1,215.9);
	this.instance.alpha = 0.828;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-23.9,scaleX:0.68,rotation:-3.3,x:268.1},9).to({regY:215.8,y:223},4).to({regX:-24,regY:216,rotation:-4.8,x:268,y:223.2},26).to({regX:-24.1,scaleX:0.72,rotation:-2.8,y:223.1},45).to({regX:-23.9,regY:215.8,scaleX:0.68,rotation:-3.3,x:268.1,y:223},46).wait(1));

	// Layer 5
	this.instance_1 = new lib.mm1aa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(264.6,219,0.067,1.062,-2.5,0,0,-0.8,166.5);
	this.instance_1.alpha = 0.828;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regX:-0.1,scaleX:0.45,rotation:-13.5,y:218.9},9).to({regY:166.6,scaleY:1.06,rotation:-13.8,x:264.7,y:219},2).to({scaleY:1.06,rotation:-18.9,x:264.6},26).to({scaleY:1.06,rotation:-16.6},45).to({rotation:-13.8,x:264.7},46).wait(1));

	// Layer 2
	this.instance_2 = new lib.mm1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(267.1,215.5,0.086,1.082,-0.7,0,0,118.9,155.6);
	this.instance_2.alpha = 0.828;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:119.3,regY:155.5,scaleX:0.29,rotation:8.3,x:267.2,y:215.3},9).to({regX:119.5,regY:155.6,scaleX:0.29,rotation:3.7,y:215.4},26).to({regY:155.5,scaleY:1.12,rotation:10.4,x:266.4,y:220.6},45).to({regX:119.3,scaleX:0.29,scaleY:1.08,rotation:8.3,x:267.2,y:215.3},46).wait(1));

	// Layer 6
	this.instance_3 = new lib.aasss();
	this.instance_3.parent = this;
	this.instance_3.setTransform(256.7,36,0.099,0.142,-2.8,0,0,112.3,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:17.7,scaleX:0.41,scaleY:0.28,x:244.5,y:40.6},9).to({regX:112.2,regY:17.8,scaleX:0.45,scaleY:0.31,x:255.4,y:40.7},4).to({regX:112.3,scaleX:0.42,scaleY:0.29,x:247,y:39.9},13).to({regY:17.6,scaleX:0.41,scaleY:0.28,x:245,y:39.8},13).to({regX:112.4,scaleX:0.49,scaleY:0.33,x:256.4,y:40.2},45).to({regX:112.3,scaleX:0.47,scaleY:0.32,x:252,y:41.3},46).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245.8,26.5,25.5,191.6);


(lib.autoo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 2
	this.instance = new lib.ugunjii();
	this.instance.parent = this;
	this.instance.setTransform(-41.3,461.5,2.414,2.414,-177,0,0,307.4,38.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:0.699},15).wait(12));

	// Layer 3
	this.instance_1 = new lib.aasss();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111,472.1,0.956,0.656,0,0,0,112.4,17.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.stage2_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:9,step1:10,step2:11,step3:12,step4:13,step5:14,step6:15,step7:16,step8:17,step9:18,step10:19});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(9));

	// ugunji
	this.auto2 = new lib.autoo1();
	this.auto2.parent = this;
	this.auto2.setTransform(459.4,23.8,2.647,2.187,0,0,0,84.3,236.9);
	this.auto2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.auto2).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;