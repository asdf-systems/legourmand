asdf_Engine.extend(asdf_Button,asdf_Element);

function asdf_Button(id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex,image_normal, image_active, image_hover){
	this.mNormalSrc = asdf_Engine.initParameter(image_normal, "Normal Image not set");
	this.mActiveSrc = asdf_Engine.initParameter(image_active, "Active Image not set - set to Image normal", image_normal);
	this.mHoverSrc = asdf_Engine.initParameter(image_active, "Hover Image not set - set to Image normal", image_normal);
	
	this.mActive = false;
	
	asdf_Button.baseConstructor.call(this,id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex);
		
	this.registerOnMouseEnterEvent(asdf_Engine.bind(this, "setHoverImage"), true);
	this.registerOnMouseOutEvent(asdf_Engine.bind(this, "unsetHoverImage"), true);
	this.registerOnMouseClickEvent(asdf_Engine.bind(this, "toggleActive"), true);
	
	
    


}

asdf_Button.prototype.show = function(){
	if(this.mDomTreeObject == null){
		asdf_Panel.superClass.show.call(this);
		
	this.mImage = asdf_Engine.createDomObject(this, this.mId+ "_Image", "img", this.mType, this.mExtraClassCSS, this.mNormalSrc);
	this.mImage.style.left = this.mPosX.getValue();
	this.mImage.style.top = this.mPosY.getValue();
	this.mImage.style.zIndex = this.mZIndex-1;

			
	}
	
}
asdf_Button.prototype.setHoverImage = function(){
	if(this.mDomTreeObject == null)
        return;

    this.mImage.src = this.mHoverSrc;
}

asdf_Button.prototype.unsetHoverImage = function(){
	if(!this.mActive){
		if(this.mDomTreeObject == null)
    	    return;
    	this.mImage.src = this.mNormalSrc;
	}
	
}

asdf_Button.prototype.setActiveImage = function(){
	if(this.mDomTreeObject == null)
        return;
    this.mActive = true;
    this.mImage.src = this.mActiveSrc;
}

asdf_Button.prototype.unsetActiveImage = function(){
	this.mActive = false;
	this.unsetHoverImage();
}

asdf_Button.prototype.activate = function(){
	this.setActiveImage();
}

asdf_Button.prototype.deactivate = function(){
	this.unsetActiveImage();
}

asdf_Button.prototype.toggleActive = function(){
	if(this.mActive)
		this.deactivate();
	else
		this.activate();
}


