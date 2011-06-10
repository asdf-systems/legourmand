function loadRolloutpanel(page, path, categories, trigger){
	var rollout =  new asdf_Rolloutpanel(page+"_rollout", $("#main_navi").get(0), $button.position().left-5, $button.position().top + $button.height(), "green", 205, 500, "absolute", "Rollout_"+page, true, 500, 200, trigger);
	var imgArray = new Array(path + "/media/"+page+"_rollout_lang.png", path + "/media/"+page+"_rollout_kurz.png");
	// ONLY WORKING WITH ABSOLUTE VALUES for width and Height
	var bg = new asdf_Background(page+"bg", rollout, $button.position().left-5, $button.position().top + $button.height(), "red", 205, 500, "absolute", "testclass", true, 800, "stretch",imgArray);
	bg.show();
	// create all child elements
	var posX = 0; 
	var posY = 0;
	var  maxWidth = 0;
	for(var i=0; i < categories.length; i++){
		var cat = categories[i];
		var elem = new asdf_Text(page+"_elem"+i, rollout, posX, posY, "red", 150, 30, "absolute", "text", true, 600, cat);
		elem.show();
		if(maxWidth < elem.getWidth().mValue)
			maxWidth = elem.getWidth().mValue;
		posY += elem.getHeight().mValue +5 ;
		
	}
}

