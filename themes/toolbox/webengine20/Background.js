asdf_Engine.extend(asdf_Background, asdf_Element);

function asdf_Background(id, parent, positionX, positionY, bgColor, width, height, positionType, extra_css_class, initialShow, zIndex, modus, imagePathArray){
	
	this.mImgPathArray = asdf_Engine.initParameter(imagePathArray, ( "Image Array is not set on element: " + this. mId) );
	this.mModus = asdf_Engine.initParameter(modus, "Modus for Background not set - set to default: stretch", "stretch");
	this.mImages = new Array();
	this.mImagesLoaded = new Array();
	this.mBgImage = null;
	
	asdf_Background.baseConstructor.call(this,id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex);
	
	

	
	
	
	
}

asdf_Background.prototype.show = function(){
	if(this.mDomTreeObject == null){
		asdf_Panel.superClass.show.call(this);
		this.preloadImages();
		// count in callbacks if allImages loaded 
		// thenn call allImageLoaded function which calculates the background 
		
	}
	
}

asdf_Background.prototype.preloadImages = function(){
	var count = 0;
	for(var i= 0; i<this.mImgPathArray.length; i++){
		var img  = new Image();
		img.src = this.mImgPathArray[i];
		this.mImages.push(img);
		img.onLoad=asdf_Engine.bind(this.imageLoadCallback(count));
		count ++;
	}	
}
asdf_Background.prototype.imageLoadCallback = function(index){
	if(!asdf_Engine.isElementOf(index, this.mImagesLoaded)){
		this.mImagesLoaded.push(index);
	}
	
	if(this.mImgPathArray.length == this.mImagesLoaded.length)
		this.allImagesLoaded();
}

asdf_Background.prototype.allImagesLoaded = function(){
	if(this.mModus == "stretch"){
		var targetWidth = $(this.mDomTreeObject).width();
		var targetHeight = $(this.mDomTreeObject).height();
		var currValue = -1;
		var sourceImage = this.mImages[0];
		for(var i = 0; i <this.mImages.length; i++){
			var img = this.mImages[i];
			var elemValue = Math.abs(new Unit(img.width).mValue - targetWidth) + Math.abs(new Unit(img.height).mValue - targetHeight);
			if(currValue  < 0 || elemValue < currValue){
				currValue = elemValue;
				sourceImage = img;
			}
			
		}
		
		
	} else{
		// PLACEHOLDER
		var sourceImage = this.mImages[0];
		alert(this.mModus + " on " + this.mId + " is NOT IMPLETED YET!");
	}
	
	this.mBgImage = asdf_Engine.createDomObject(this, this.mId+ "_bgImage", "img", this.mType, this.mExtraClassCSS, sourceImage.src);
	this.mBgImage.style.height = this.mHeight.getValue();
	this.mBgImage.style.width = this.mWidth.getValue();
	this.mBgImage.style.left = this.mPosX.getValue();
	this.mBgImage.style.top = this.mPosY.getValue();
	
	
	
}