asdf_Engine.extend(asdf_Rolloutpanel, asdf_Panel);

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
 * \param: animSpeed	int			Speed in ms for rollout and rollin animation
 * \param: triggerElem	element		Element which show the rollout when hovered

 * USAGE: 
  var rollout = new asdf_Rolloutpanel("buttonID", $("#PARENTHTMLID").get(0) OR ASDF_ELEMENT, posX, posY, "backgroundColor", width, height, "positionType", "extraCSS", initialShow, zIndex, animationSpeed, TriggerElement);

 * Example:
   var button = new asdf_Button("button1", $("#mainBody").get(0), 10, 10, "transparent", 200, 50, "absolute", "testclass", true, 510, "../media/essentrinken_inaktiv.png", "../media/essentrinken_aktiv.png");
			button.show();
			var rollout = new asdf_Rolloutpanel("rollout", $("#mainBody").get(0), 10, 60, "green", 200, 500, "absolute", "testclass", true, 500, 200, button);
			var rElem1 = new asdf_Text("text1", rollout, 10, 10, "red", 150, 30, "absolute", "testclass", true, 600, "kalte Küche");
			var rElem2 = new asdf_Text("text2", rollout, 10, 60, "red", 150, 30, "absolute", "testclass", true, 600, "SPAß an der FREUDE");
			rElem1.show();
			rElem2.show();
 
 * Example to add an std HTML Object and no Element: 
	 var Elem1 = asdf_Engine.createElementFromHTML = function(htmlobject, rollout);
	 Elem1.show();
 */
 
function asdf_Rolloutpanel(id, parent, positionX, positionY, bgColor, width , height,positionType, extra_css_class, initialShow, zIndex, animationSpeed, triggerElement){
	asdf_Rolloutpanel.baseConstructor.call(this,id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex);
	
	this.mType = "Rolloutpanel";
	
	if(animationSpeed == null){
		this.mAnimationSpeed = globals.defaultAnimationSpeed;
	} else
		this.mAnimationSpeed = animationSpeed;
		
	this.mMouseOver = false;
	this.registerOnMouseEnterEvent(asdf_Engine.bind(this, "enter"), true);
	this.registerOnMouseOutEvent(asdf_Engine.bind(this, "leave"), true);
	this.registerOnMouseOverEvent(asdf_Engine.bind(this, "enter"), true);
	
	if(triggerElement == null || triggerElement == undefined){
		if(globals.debug > 0)
			alert("Error: Get rollout without trigger - will not be visible: " + this.mId);
		return null;
	}
	
	this.mTimerId = null;
	this.mTrigger = triggerElement;
	this.mTrigger.registerOnMouseEnterEvent(asdf_Engine.bind(this, "slidedown"), true);
	this.mTrigger.registerOnMouseOutEvent(asdf_Engine.bind(this, "startTimer"), true);
	this.mTrigger.registerOnMouseOverEvent(asdf_Engine.bind(this, "stopTimer"), true );
	
	
	return this;
		
	
}



asdf_Rolloutpanel.prototype.enter = function(){
	this.stopTimer();
}

asdf_Rolloutpanel.prototype.stopTimer = function(){
	if(this.mTimerId != null)
		window.clearTimeout(this.mTimerId);
	this.mTimerId = null;
	this.mMouseOver = true;
}
asdf_Rolloutpanel.prototype.leave = function(params){
	var object = params.event.currentTarget.nextNode;
	object.startTimer(params);

}

asdf_Rolloutpanel.prototype.setMouseOver = function(params){
	this.mMouseOver = params.parameter[0];
}
asdf_Rolloutpanel.prototype.startTimer = function(params){
	this.mMouseOver = false;
	if(this.mTimerId == null){
		
		this.mTimerId = window.setTimeout(asdf_Engine.bind(this,"timerCallback"),100);
	}
}

asdf_Rolloutpanel.prototype.timerCallback = function(params){
	
	//alert("TimerCallback: Slideup element: " + this.mId + " X " + this.id);
	this.mTimerId = null;
	this.slideup();
	
}
asdf_Rolloutpanel.prototype.stopAnimation = function(){
	// ! TBD
	
}

asdf_Rolloutpanel.prototype.checkSlide = function(params){
	if(!this.isOverPanel()){
		slideup();
	}
}

asdf_Rolloutpanel.prototype.slidedown = function(){
  this.show();
  $(this.mDomTreeObject).slideDown(this.mAnimationSpeed, this.rollDownCallback);	
}

asdf_Rolloutpanel.prototype.slideup = function(){
	$(this.mDomTreeObject).slideUp(this.mAnimationSpeed, this.rollUpCallback);	
}

asdf_Rolloutpanel.prototype.isMouseOverPanel = function(){
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
