asdf_Engine.extend(Rolloutpanel, Panel);

/**
 * Creates an RollOutPanel is only an placing Element without any visible Elements
 * In Contrast to normal Elements RollOutPanels load DomObject onInit not on Show
 */
//* class RollOutPanel{
/**
 * \param: _id          string      unique Id for the Element (used also for the HTML elements)
 * \param: _parent      Element     parent Element (need to know where HTML elements add to)
 * \param: positionX    int         x Position of the RollOutPanel - relative to parent
 * \param: positionY    int         y Position of the RollOutPanel - relative to parent
 * \param: bgColor      colorHex    bgColor of the Element : Default: transparent
 * \param: width        int         width of the Panel (need if filled with bg Color) : Default: 0
 * \param: height       int         height of the Panel (need if filled with bg Color) : Default: 0
 * \param: extra_css    string      Name of extra css_classes for the HTML Object
 * \param: initialShow  bool        state if child should be shwon if parent is show
 * \param: z-Index      int         number to show in fore or background - higer is more in Front
 */
function asdf_Rolloutpanel(id, parent, positionX, positionY, bgColor, width , height,animationSpeed, positionType, extra_css_class, initialShow, zIndex){
	asdf_Rolloutpanel.baseConstructor.call(this,id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex);
	
	this.mType = "Rolloutpanel";
	
	if(animationSpeed == null){
		this.mAnimationSpeed = globals.defaultAnimationSpeed;
	} else
		this.mAnimationSpeed = animationSpeed;
		
	this.mMouseOver = false;
	registerOnMouseEnterEvent(this.enter, false);
	registerOnMouseOutEvent(this.leave, false);
	var parentElement = parent.nextNode;
	if(parentElement.registerOnMouseOutEvent != null && parentElement.registerOnMouseOutEvent){
		parent.nextNode.registerOnMouseOutEvent(this.checkSlide, false);	
	}
	

		
	
}

asdf_Rolloutpanel.prototype.enter = function(params){
	var object = params.event.currentTarget.nextNode;
	object.mMouseOver = true;
}
asdf_Rolloutpanel.prototype.leave = function(params){
	var object = params.event.currentTarget.nextNode;
	object.mMouseOver = false;
	object.slideup();
}

asdf_Rolloutpanel.prototype.stopAnimation = function(){
	// ! TBD
	
}

asdf_Rolloutpanel.prototype.checkSlide = function(params){
	var object = params.event.currentTarget.nextNode;
	if(!object.isOverPanel()){
		slideup();
	}
}

asdf_Rolloutpanel.prototype.slidedown = function(){
  $(this.mDomTreeObject).slideDown(this.mAnimationSpeed, this.rollDownCallback);	
}

asdf_Rolloutpanel.prototype.slideup = function(){
	$(this.mDomTreeObject).slideUp(this.mAnimationSpeed, this.rollUpCallback);	
}

asdf_Rolloutpanel.prototype.isMouseOverPanel(){
	return this.mMouseOver;
}
/**
  * function called if animation for rollup is finished
  */
asdf_Rolloutpanel.prototype.rollDownCallback = function (){
	// ACHTUNG: this is pointing to mDomTreeObject
    //var object = this.parentElement.nextNode;
}

/**
  * function called if animation for rollup is finished
  */
asdf_Rolloutpanel.prototype.rollUpCallback = function (){
	// ACHTUNG: this is pointing to mDomTreeObject
    //var object = this.parentElement.nextNode;
    //object.hide();
}