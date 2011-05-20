function RollOutPanel(parent, positionX, positionY, members,id, spacing, spacingLeft, bgImage, offsetTop, animSpeed, mouseOutFunction, css_class) {
	
	this.mPx = positionX;
	this.mPy = positionY;
	this.mMembers = members;
	this.mId = id;
	this.mSpacing = 0;
	this.mParent = parent;
	this.mBgImage = bgImage;
	this.mOffsetTop = offsetTop;
	this.mAnimSpeed = animSpeed;
	this.mCall = mouseOutFunction;
	this.mFirstCall = true;
	this.mSpacingLeft = spacingLeft;
	this.mCssClass = css_class;
	
	
	
	//alert(this.mOffsetTop);
	if(spacing == null)
		this.mSpacing = 2;
	else 
		this.mSpacing = spacing;

	if(this.mMembers.length > 0 ){
		var cmd = ("<div id=\""+this.mId+ "\" class=\""+this.mCssClass+"\">");
		$("div[id=moveDiv]").append(cmd);
		$("div[id="+this.mId+"]").hide();
		var domObject = document.getElementById(this.mId);
		
		domObject.style.backgroundColor  = global.rollOutBG;
		domObject.style.position  = "absolute";
		domObject.style.border = global.rollOutBorder;	
		
		
		for(var i = 0; i < this.mMembers.length; i++){
			$("*[id="+this.mMembers[i].id+"]").appendTo("div[id="+this.mId+"]");
			$("*[id="+this.mMembers[i].id+"]").show();
			
		}
		
	}
	
	if(this.mBgImage != null){ // add bgImage to RollOut div
		$(this.mBgImage).appendTo("div[id="+this.mId+"]");
		this.mBgImage.style.left = this.mSpacingLeft + "px";
	}
	
	this.init();
	
	// save parent to domObject
	domObject.name = this;
	$(domObject).mouseout(RollOutonMouseOutHandler);
				
	return this;	
	
}

function RollOutonMouseOutHandler(event){

	
	
	if(event.target == event.currentTargte){ // target = parent
		//alert(event.releatedTarget);
		if(!jQuery.contains(event.target, event.relatedTarget)){ // releated Target not child
			object = $(event.currentTarget).get(0).name;
			object.hide(event);
			
			
		}
	} else { // target is child 
		// and relatedTarget != parent && relatedTareg not chilc
		if(event.relatedTarget != event.currentTarget && !jQuery.contains(event.currentTarget, event.relatedTarget)){
			
			object = $(event.currentTarget).get(0).name;
			object.hide(event);
						
			
		}
	}
	
	
	
	

}


RollOutPanel.prototype.hide = function(event) {
	//alert("div[id="+this.mId+"]".length);
	$("div[id="+this.mId+"]").hide();
	
	if(event != null){
		
		event.target = this.mParent;
		event.currentTarget = this.mParent;
		event.pageY = 0;
		this.mCall(event);
	}
}

RollOutPanel.prototype.slideUp = function() {
	$("div[id="+this.mId+"]").slideUp(this.mAnimSpeed);
}
	
RollOutPanel.prototype.slideDown = function() {
	if(this.mFirstCall){
		this.init();
		this.mFirstCall = false;
	}
	this.updatePosition();
	$("div[id="+this.mId+"]").slideDown(this.mAnimSpeed);
}

RollOutPanel.prototype.show = function() {
	$("div[id="+this.mId+"]").show();
}

RollOutPanel.prototype.init = function(){
	
	$("div[id="+this.mId+"]").show();
	$(this.mBgImage).show();
	var domObject = document.getElementById(this.mId);
	
	var top = getNumber(this.mBgImage.height); //this.mOffsetTop; 
	//alert(top);
	var maxWidth = 0;
	

	for(var i = 0; i < this.mMembers.length; i++){

		//alert(getNumber(top));
		this.mMembers[i].style.top = getNumber(top) + "px";
		this.mMembers[i].style.left = this.mSpacingLeft + "px"; //this.mSpacing + "px"; 
		this.mMembers[i].style.position = "absolute";
		$(this.mMembers[i]).show();
		top +=  Number(this.mSpacing);

		var font = this.mMembers[i].id + "_font";
		var value =  $("font[id="+font+"]").width();
		if ( value > maxWidth ) 
			maxWidth = value;

	}

	
	domObject.style.top = getNumber(this.mPy) + getNumber(this.mParent.height) + "px";
	domObject.style.width = Number(this.mSpacing) + Number(5) + Number(maxWidth) + "px";
	domObject.style.height = top + "px";
	domObject.style.left = this.mPx - this.mSpacingLeft + "px";
		
	$("div[id="+this.mId+"]").hide();
}

RollOutPanel.prototype.updatePosition = function(){
	
	var domObject = document.getElementById(this.mId);
	//alert(this.mPy);
	domObject.style.top = getNumber(this.mPy) + "px";
	domObject.style.left = getNumber(this.mPx) - this.mSpacingLeft + "px";
}


function getNumber(value){
	return new Unit(value).getValue();	
}


