/**
 * Creates an Panel is only an placing Element without any visible Elements
 * In Contrast to normal Elements Panels load DomObject onInit not on Show
 */
//* class Panel{
/**
 * \param: _id          string      unique Id for the Element (used also for the HTML elements)
 * \param: _parent      Element     parent Element (need to know where HTML elements add to)
 * \param: positionX    int         x Position of the Panel - relative to parent
 * \param: positionY    int         y Position of the Panel - relative to parent
 * \param: bgColor      colorHex    bgColor of the Element : Default: transparent
 * \param: width        int         width of the Panel (need if filled with bg Color) : Default: 0
 * \param: height       int         height of the Panel (need if filled with bg Color) : Default: 0
 * \param: extra_css    string      Name of extra css_classes for the HTML Object
 * \param: initialShow  bool        state if child should be shwon if parent is show
 * \param: z-Index      int         number to show in fore or background - higer is more in Front
 */
asdf_Engine.extend(asdf_Panel,asdf_Element);

function asdf_Panel(id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex){
	asdf_Panel.baseConstructor.call(this,id, parent, positionX, positionY, bgColor, width , height, positionType, extra_css_class, initialShow, zIndex);
	this.mChildren = new Array();
	this.mType = "Panel"
}

/**
 * Add Child to the DomTree and save as Child
 * @param child     Element childElement to addd
 */
asdf_Panel.prototype.addElement = function(element){
	this.mChildren.push(element);
	$(element.mDomTreeObject).appendTo(this.mDomTreeObject);
}




   
	