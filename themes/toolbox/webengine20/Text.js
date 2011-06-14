asdf_Engine.extend(asdf_Text,asdf_Element);

function asdf_Text(id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex, text){
	this.mText = asdf_Engine.initParameter(text, "text not set - will be empty on Element: " + this.mId, "");
	asdf_Text.baseConstructor.call(this,id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex);
	
}


asdf_Text.prototype.show = function(){
	if(this.mDomTreeObject == null){
		//alert(this.mText);
		this.mDomTreeObject = asdf_Engine.createDomObject(this, this.mId, "div", this.mType, this.mExtraClassCSS, null, this.mText);
		
		$(this.mDomTreeObject).mouseover(onMouseOver);
		$(this.mDomTreeObject).mouseout(onMouseOut);
		$(this.mDomTreeObject).click(onMouseClick);
		$(this.mDomTreeObject).mouseenter(onMouseEnter);
		this.mDomTreeObject.style.position = this.mPositionType;
		this.setPosition(this.mPosX, this.mPosY);
		this.setSize(this.getWidth().getValue(), this.getHeight().getValue());
		this.mDomTreeObject.style.background = this.mBgColor;
		this.mDomTreeObject.style.zIndex = this.mZIndex;

	}
	$(this.mDomTreeObject).show();	
}

asdf_Text.prototype.getHeight = function(){
	// TODO : Calculate Text size
	//return new Unit(this.mDomTreeObject.clientHeight);
	return this.mHeight;
}

asdf_Text.prototype.getWidth = function(){
	// TODO : Calculate Text size
	//return new Unit(this.mDomTreeObject.clientWidth);
	return this.mWidth;
}

