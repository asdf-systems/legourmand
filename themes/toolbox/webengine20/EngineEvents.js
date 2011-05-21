/**
 * React on MouseOver Events and call all saved Functions for the object
 */
function onMouseOver(event){
    var object = event.currentTarget.nextNode;
    for(var i=0; i< object.mMouseOverEvents.length; i++){
        params =new EventParameter();
        params = object.mMouseOverParams[i];
        params.event = event;
        object.mMouseOverEvents[i](params);
    }
}

/**
 * React on MouseOut Events and call all saved Functions for the object
 */
function onMouseOut(event){
    var object = event.currentTarget.nextNode;
    for(var i=0; i< object.mMouseOutEvents.length; i++){
        params = new EventParameter();
        params = object.mMouseOutParams[i];
        params.event = event;
        object.mMouseOutEvents[i](params);
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
        params.event = event;
        object.mMouseClickEvents[i](params);
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
        params.event = event;
        object.mKeyPressEvents[i](params);
    }
}
