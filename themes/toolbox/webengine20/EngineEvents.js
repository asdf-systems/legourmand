/**
 * React on MouseOver Events and call all saved Functions for the object
 */
function onMouseOver(event){
    var object = event.currentTarget.nextNode;
    for(var i=0; i< object.mMouseOverEvents.length; i++){
        params =new EventParameter();
        params = object.mMouseOverParams[i];
        var propagate = params.parameter.pop();
        params.event = event;
        object.mMouseOverEvents[i].call(this,params);
        checkStopCnd(propagate);
    }
}

/**
 * React on MouseOut Events and call all saved Functions for the object
 */
function onMouseOut(event){
    var object = event.currentTarget.nextNode;
    var propagate = true;
    for(var i=0; i< object.mMouseOutEvents.length; i++){
        params = new EventParameter();
        params = object.mMouseOutParams[i];
        propagate = params.parameter.pop();
        params.event = event;
        object.mMouseOutEvents[i].call(this, params);
        checkStopCnd(propagate);
    }
    
}

/**
 * React on MouseEnter Events and call all saved Functions for the object
 */
function onMouseOut(event){
    var object = event.currentTarget.nextNode;
    var propagate = true;
    for(var i=0; i< object.mMouseEnterEvents.length; i++){
        params = new EventParameter();
        params = object.mMouseEnterParams[i];
        propagate = params.parameter.pop();
        params.event = event;
        object.mMouseEnterEvents[i].call(this, params);
        checkStopCnd(propagate);
    }
    
}

/**
 * React on MouseOut Events and call all saved Functions for the object
 */
function onMouseClick(event){
    var object = event.currentTarget.nextNode;
    for(var i=0; i< object.mMouseClickEvents.length; i++){
        params = new EventParameter();
        params = object.mMouseClickParams[i];
        var propagate = params.parameter.pop();
        params.event = event;
	    object.mMouseClickEvents[i].call(this,params);
	    checkStopCnd(propagate);
    }
}

/**
 * React on MouseOut Events and call all saved Functions for the object
 */
function onKeyPress(event){
    object = event.currentTarget.nextNode;
    if(object.mKeyPressEvents == null){ // Object can not Handle KeypressEvents
        if(globals.debug > 1)
            alert("Warning: Object: " + object.mId + " cannot handle Keypress Events");
        return ;
    }
    for(var i=0; i< object.mKeyPressEvents.length; i++){
        params = new EventParameter();
        params = object.mKeyPressParams[i];
        var propagate = params.parameter.pop();
        params.event = event;
        object.mKeyPressEvents[i].call(this,params);
        checkStopCnd(propagate);
    }
}

function checkStopCnd(flag){
	if(flag == null){
		if(globals.debug > 0)
			alert("Error : CheckPropagation get no value - EngineEvents.js");	
	}
	if(!flag){ // we have to stop the propagation
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
  		} 
	}
		
}
