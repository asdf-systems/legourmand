function asdf_Element(id, parent, positionX, positionY, bgColor, width, height, positionType, extra_css_class, initialShow, zIndex){
	
			
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
        this.mWidth = new Unit("auto");
    else 
        this.mWidth = new Unit(width);

    if(height == null || height == "")
        this.mHeight = new Unit("auto");
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
    this.mDomTreeObject = null;
        
    this.mType          = "BaseElement";

    if(positionX == null){
        if(globals.debug > 1)
           alert("Warning: BaseElement: potitionX is not set");
        this.mPosX = new Unit("auto");
    }
    else
        this.mPosX = new Unit(positionX);

    if(positionY == null){
        if(globals.debug > 1)
           alert("Warning: BaseElement: potitionY is not set");
        this.mPosY = new Unit("auto");
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
    
    this.mParent = parent;
    if(parent.mType != null && parent.mType != undefined ){ // we got an element
    	this.mParent        = parent.mDomTreeObject; 	
	if(parent.addElement != null && parent.addElement != undefined){
    		parent.addElement(this);	

    	} else {
    		if(globals.debug > 1 )
    			alert("Warning: Adding Element : " + this.mId + " as child to non container Type element: " + parent.mId);
    	}	
    }


	// private:
    // Holds function Pointer
    this.mMouseOverEvents = new Array();
    this.mMouseOutEvents = new Array();
	this.mMouseEnterEvents = new Array();
    this.mMouseClickEvents = new Array();
    
    // ParameterEvents typ: EventParameter()
    this.mMouseOverParams = new Array();
    this.mMouseOutParams = new Array();
	this.mMouseEnterParams = new Array();
    this.mMouseClickParams = new Array();
    
    return this;
};


asdf_Element.prototype.show = function(){

	if(this.mDomTreeObject == null){
		this.mDomTreeObject = asdf_Engine.createDomObject(this, this.mId, "div", this.mType, this.mExtraClassCSS);
		$(this.mDomTreeObject).mouseover(onMouseOver);
		$(this.mDomTreeObject).mouseout(onMouseOut);
		$(this.mDomTreeObject).click(onMouseClick);
		$(this.mDomTreeObject).mouseenter(onMouseEnter);
		this.mDomTreeObject.style.position = this.mPositionType;
		this.setPosition(this.mPosX, this.mPosY);
		this.setSize(this.mWidth, this.mHeight);
		this.mDomTreeObject.style.background = this.mBgColor;
		this.mDomTreeObject.style.zIndex = this.mZIndex;

	}
	$(this.mDomTreeObject).show();	
}

asdf_Element.prototype.hide = function(){
	$(this.mDomTreeObject).hide();
}

// Print out the current HTML Tree (so can be used for static HTML pages)
asdf_Element.prototype.write = function(){}

asdf_Element.prototype.setPosition = function(x,y){
	this.mPosX = new Unit(x);
    this.mPosY = new Unit(y);
    if(this.mPosX != "auto")
	    this.mDomTreeObject.style.left = this.mPosX.getValue();
    if(this.mPosY != "auto")
	    this.mDomTreeObject.style.top = this.mPosY.getValue();
    	
} 

asdf_Element.prototype.setSize = function(x,y){
	this.mWidth = new Unit(x);
	this.mHeight = new Unit(y);
	this.mDomTreeObject.style.width = this.mWidth.getValue();
	this.mDomTreeObject.style.height = this.mHeight.getValue();
		
}

asdf_Element.prototype.initParams = function(params, propagate){
	if(params == null)
        params = new EventParameter();
    if(propagate) // do this because propagate can be null
    	params.parameter.push(true);
    else
    	params.parameter.push(false);
    
    return params;	
}
/**
 * Adds an Function that is called everytime Mouse is over the BaseElement
 * \param: functionName    string           Name of the Function
 * \param: propagate		bool			say if the event call should propagated to parents / childs or not
 * \param: params          EventParameter   Parameter for the called functions
 */
asdf_Element.prototype.registerOnMouseOverEvent = function(functionName, propagate, params){
   	if(propagate == null || propagate == undefined)
   		propagate = true;
	params = this.initParams(params, propagate);

    	
    this.mMouseOverEvents[this.mMouseOverEvents.length] = functionName;
    this.mMouseOverParams[this.mMouseOverParams.length] = params;

}

/**
 * Adds an Function that is called everytime BaseElement is clicked
 * \param: functionName    string           Name of the Function
 * \param: propagate		bool			say if the event call should propagated to parents / childs or not
 * \param: params          EventParameter   Parameter for the called functions
 */
asdf_Element.prototype.registerOnMouseClickEvent = function(functionName,  propagate, params){
	if(propagate == null || propagate == undefined)
   		propagate = true;
	params = this.initParams(params, propagate);
        
    this.mMouseClickEvents[this.mMouseClickEvents.length] = functionName;
    this.mMouseClickParams[this.mMouseClickParams.length] = params;
}

/**
 * Adds an Function that is called everytime Mouse leave the BaseElement
 * \param: functionName    string           Name of the Function
 * \param: propagate		bool			say if the event call should propagated to parents / childs or not
 * \param: params          EventParameter   Parameter for the called functions
 */
asdf_Element.prototype.registerOnMouseOutEvent = function(functionName,  propagate, params){
   	if(propagate == null || propagate == undefined)
   		propagate = true;
   	params = this.initParams(params, propagate);
        
    this.mMouseOutEvents[this.mMouseOutEvents.length] = functionName;
    this.mMouseOutParams[this.mMouseOutParams.length] = params;
    
}

/**
 * Adds an Function that is called everytime Mouse Enter the BaseElement
 * \param: functionName    string           Name of the Function
 * \param: propagate		bool			say if the event call should propagated to parents / childs or not
 * \param: params          EventParameter   Parameter for the called functions
 */
asdf_Element.prototype.registerOnMouseEnterEvent = function(functionName,  propagate, params){
    if(propagate == null || propagate == undefined)
   		propagate = true;
   	params = this.initParams(params, propagate);
        
    this.mMouseEnterEvents[this.mMouseEnterEvents.length] = functionName;
    this.mMouseEnterParams[this.mMouseEnterParams.length] = params;
    
}
//*};