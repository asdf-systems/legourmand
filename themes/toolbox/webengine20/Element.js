function asdf_Element(id, parent, positionX, positionY, bgColor, width, height, positionType, extra_css_class, initialShow, zIndex){

    this.initElement(id, parent, positionX, positionY, bgColor, width, height, positionType, extra_css_class, initialShow, zIndex);
    return this;
};

/*
 * This function is build to give child classes the possibility to Call the base class Constructor
*/
asdf_Element.prototype.initElement = function(id, parent, positionX, positionY, bgColor, width, height, positionType, extra_css_class, initialShow, zIndex){
		
	if(id == null){
     	if(globals.debug > 0)
           alert("BaseElement: Id is not set - cancel");
        return null;
    }

    if(parent == null){
		if(globals.debug > 0)
            alert("BaseElement: Parent is null - cancel");
        return null;
    }

    if(width == null || width == "")
        this.mWidth = new Unit(0);
    else 
        this.mWidth = new Unit(width);

    if(height == null || height == "")
        this.mHeight = new Unit(0);
    else 
        this.mHeight = new Unit(height);   
    
    if(positionType == undefined || positionType == null){
         if(globals.debug > 2 )
            alert("Warning: PositionType on Element: " + this.mId + " is not set\n");
        this.mPositionType = "absolute";
    } else{
        this.mPositionType = positionType
    }

    this.mId = id;
    this.mParent        = parent; 
    this.mType          = "BaseElement";

    if(positionX == null){
        if(globals.debug > 1)
           alert("Warning: BaseElement: potitionX is not set");
        this.mPosX = new Unit(0);
    }
    else
        this.mPosX      = new Unit(positionX);

    if(positionY == null){
        if(globals.debug > 1)
           alert("Warning: BaseElement: potitionY is not set");
        this.mPosY = new Unit(0);
    }
    else
        this.mPosY      = new Unit(positionY);
    
    if(extra_css_class == null)
        this.mExtraClassCSS = "EXTRA_NOTSET";
    else    
        this.mExtraClassCSS = extra_css_class;

    if(bgColor == null)
        this.mBgColor = "transparent";
    else   
        this.mBgColor = bgColor;

    if(initialShow == "false")
        this.mInitialShow = false;
    else if(initialShow != false)
        this.mInitialShow = true;
    else
        this.mInitialShow = initialShow;
    
    if(zIndex == null || zIndex == undefined)
        this.mZIndex = 500;
    else
        this.mZIndex = zIndex;
           
    this.mDomTreeObject = null;
    
	// private:
    // Holds function Pointer
    this.mMouseOverEvents = new Array();
    this.mMouseOutEvents = new Array();
    this.mMouseClickEvents = new Array();
    
    // ParameterEvents typ: EventParameter()
    this.mMouseOverParams = new Array();
    this.mMouseOutParams = new Array();
    this.mMouseClickParams = new Array();
}

asdf_Element.prototype.show = function(){
	
	if(this.mDomTreeObject == null){
		this.mDomTreeObject = createDomObject(this, this.mId, "div", this.mType, this.mExtraClassCSS);
            $(this.mDomTreeObject).mouseover(onMouseOver);
            $(this.mDomTreeObject).mouseout(onMouseOut);
            $(this.mDomTreeObject).click(onMouseClick);
            this.mDomTreeObject.style.position = this.mPositionType;
            this.setPosition(this.mPosX, this.mPosY);
            this.setSize(this.mWidth, this.mHeight);
            this.mDomTreeObject.style.background = this.mBgColor;
            this.mDomTreeObject.style.zIndex = this.mZIndex;

    }
    $(this.mDomTreeObject).show();	
}

asdf_Element.prototype.hide = function(){}

// Print out the current HTML Tree (so can be used for static HTML pages)
asdf_Element.prototype.write = function(){}

asdf_Element.prototype.setPosition = function(x,y){
	this.mPosX = new Unit(x);
    this.mPosY = new Unit(y);
    this.mDomTreeObject.style.left = this.mPosX.getValue();
    this.mDomTreeObject.style.top = this.mPosY.getValue();
    	
} 

asdf_Element.prototype.setSize = function(x,y){
	this.mWidth = new Unit(x);
	this.mHeight = new Unit(y);
	this.mDomTreeObject.style.width = this.mWidth.getValue();
	this.mDomTreeObject.style.height = this.mHeight.getValue();
		
}

/**
 * Adds an Function that is called everytime Mouse is over the BaseElement
 * \param: functionName    string           Name of the Function
 * \param: params          EventParameter   Parameter for the called functions
 */
asdf_Element.prototype.registerOnMouseOverEvent = function(functionName, params){
    if(params == null)
        params = new EventParameter();
    this.mMouseOverEvents[this.mMouseOverEvents.length] = functionName;
    this.mMouseOverParams[this.mMouseOverParams.length] = params;

}

/**
 * Adds an Function that is called everytime BaseElement is clicked
 * \param: functionName    string           Name of the Function
 * \param: params          EventParameter   Parameter for the called functions
 */
asdf_Element.prototype.registerOnMouseClickEvent = function(functionName,  params){
    if(params == null)
        params = new EventParameter();
        
    this.mMouseClickEvents[this.mMouseClickEvents.length] = functionName;
    this.mMouseClickParams[this.mMouseClickParams.length] = params;
}

/**
 * Adds an Function that is called everytime Mouse leave the BaseElement
 * \param: functionName    string           Name of the Function
 * \param: params          EventParameter   Parameter for the called functions
 */
asdf_Element.prototype.registerOnMouseOutEvent = function(functionName,  params){
    if(params == null)
        params = new EventParameter();
        
    this.mMouseOutEvents[this.mMouseOutEvents.length] = functionName;
    this.mMouseOutParams[this.mMouseOutParams.length] = params;
    
}
//*};