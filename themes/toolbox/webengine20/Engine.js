// namespace placeholder
asdf_Engine = {};
	
/**
 * Erstellt ein neues DomTreeObject und hängt es beim angegebenen Parent ein
 * \return: newDomTreeObject or null if error occurs
 * returned DomTreeObject saves parent in nextNode
 * \definition: HTML Objecttag: nextNode is reserved to save Wrapper Elements
 * \param:  parent\t    domObject or Element Element where the new Element should add to
 * \param:  id\t        string  id of the ne HTML Object
 * \param:  type\t      string  HTML-Type of the new DomTreeObject. Default: div
 * \param:  css\t       string  normal css class. Default: "NOTSET"
 * \param:  extra_css\t string  secoond css class. Default: "EXTRA_NOTSET"
 * \param:  src\t       string  for HTML types that need a sourcePath like img. Default: NULL
 * \param:  extraContent    string  Conent that shoul come after > so for <p>extraContent</p>
 */

asdf_Engine.createDomObject = function(parent, id, type, css, extra_css, src, extraContent){
    // check Params
	var domparent;
    if(parent != null && parent != undefined){
    	domparent = parent.mParent;
    } else{
		alert("Error: CreateDom Object need Element as Parent!! get only: " + parent.id);
	}
    
    if(domparent == null){
        if(globals.debug > 0)
            alert("Error Creating Dom Object - no parent set!");
        return null;
    }
    
    if(id == null){
        if(globals.debug > 0)
            alert("Error Creating Dom Object - no id set!");
        return null;
    }
   
    if(type == null)
        type = "div";
        
    if(css == null)
        css = "NOTSET";
    
    if(extra_css == null)
        extra_css = "EXTRA_NOTSET";
    
     //create HTML command

     var cmd;
        
     if(type.match(/input.*password/)){
       cmd = "<input id=\"" +id+ "\" type=\"password\" class =\""+ css +" "+ extra_css+"\">";
       type = "input";
      
     }
        
     else if(src != null)
        cmd = "<" + type + " id=\"" +id+ "\" class =\""+ css +" " +extra_css+ "\" src=\""+src+"\">";
     
     else
        cmd = "<" + type + " id=\"" +id+ "\" class =\""+ css +" "+ extra_css+"\">";
        
    if(extraContent == null)
        extraContent = "";
        
     var ending = asdf_Engine.checkForTypesWithEnding(type);
     if(ending)
        cmd += extraContent + "</"+type+">";
    
    
    $(domparent).append(cmd);
    var domObject = $(type+"[id="+id+"]").get(0);
    domObject.nextNode = parent;
    return domObject;                  
}

/**
 * check if type need an ending like <p>, <a>, <h> etc
 * \return true if nedded false else
 */
asdf_Engine.checkForTypesWithEnding = function(type){
	var flag = false
	flag |= type.match(/^h?/);
	flag |= type == "p";
	flag |= type == "pre";
	flag |= type == "b";
	flag |= type == "div";
	return flag;
}

asdf_Engine.checkBrowser = function(){
    var userAgent = navigator.userAgent.toLowerCase();
    // Figure out what browser is being used
    jQuery.browser = {
    	version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
    	chrome: /chrome/.test( userAgent ),
    	safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
    	opera: /opera/.test( userAgent ),
    	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
    	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
    };
    return jQuery.browser;
}

/**
 * @return cleaned path (deleted // and ./ )
 */
asdf_Engine.cleanPath = function(path){
    path = path.replace(/\/\//, "/");
    path = path.replace(/\.\//, "");
    return path;
}

/**
 * inheritance
 * 
 * @author Kevin Lindsey
 * @version 1.0
 * 
 * copyright 2006, Kevin Lindsey
 * 
 */

/**
 * A function used to extend one class with another
 * 
 * @param {Object} subClass
 * 		The inheriting class, or subclass
 * @param {Object} baseClass
 * 		The class from which to inherit
 */
asdf_Engine.extend = function(subClass, baseClass) {
   function inheritance() {}
   inheritance.prototype = baseClass.prototype;

   subClass.prototype = new inheritance();
   subClass.prototype.constructor = subClass;
   subClass.baseConstructor = baseClass;
   subClass.superClass = baseClass.prototype;
}