function loadRolloutpanel(page, path, categories, categorieLinks, trigger){
	
	var $button = $(trigger.mDomTreeObject);
	var bgHeight = categories.length * 35 + 10 + "px";
	var rollout =  new asdf_Rolloutpanel(page+"_rollout", $("#main_navi").get(0), $button.position().left-5, $button.position().top+6 + $button.height(), "transparent", 205, bgHeight, "absolute", "Rollout_"+page, true, 500, 200, trigger);
	var imgArray = new Array(path + "/media/"+page+"_rollout_lang.png", path + "/media/"+page+"_rollout_kurz.png");
	// ONLY WORKING WITH ABSOLUTE VALUES for width and Height
	var bg = new asdf_Background(page+"bg", rollout, $button.position().left-5, $button.position().top + $button.height(), "red", 205, bgHeight, "absolute", "testclass", true, 800, "stretch",imgArray);
	bg.show();
	// create all child elements
	var posX = 0; 
	var posY = 10;
	var  maxWidth = 0;
	for(var i=0; i < categories.length; i++){
		var cat = categories[i];
		cat = "<a href=\""+categorieLinks+"\">" + cat + "</a>";
		var elem = new asdf_Text(page+"_elem"+i, rollout, posX+5, posY, "transparent", 150, 30, "absolute", "generic_text", true, 600, cat);
		elem.show();
		if(maxWidth < elem.getWidth().mValue)
			maxWidth = elem.getWidth().mValue;
		posY += elem.getHeight().mValue +5 ;
		
	}
	
	return rollout;
}

