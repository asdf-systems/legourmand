asdf_Engine.extend(asdf_Background, adsf_Element);

asdf_Background(id, parent, positionX, positionY, bgColor, width, height, positionType, extra_css_class, initialShow, zIndex, modus, imagePathArray){
	asdf_Panel.baseConstructor.call(this,id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex);
	
	this.mModus = asdf_Engine.initParameter(modus, "Modus for Background not set - set to default: stretch", "stretch");

	this.mImgPathArray = asdf_Engine.initParameter(imagePathArray, ( "Image Array is not set on element: " + this. mId) );
	this.mImages = new Array();
	for(img in this.mImgPathArray){
			
	}	
	
}

asdf_Background.prototype.show = function(){
	if(this.mDomTreeObject){
		asdf_Panel.superClass.show.call(this);
		// TBD
		// load Images with callback 
		// count in callbacks if allImages loaded 
		// thenn call allImageLoaded function which calculates the background 
		
	}
	
}

asdf_Background.prototype.imageLoadCallback = function(){
	
}

asdf_Background.prototype.allImagesLoad = function(){
	
}