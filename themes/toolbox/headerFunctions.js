function buttonLoaded(page,path){
	$button = $(".menu_button_"+page);
	$("#menuElement_"+page).css("width",$button.width() );
	$("#menuElement_"+page).css("height",$button.height() );
	loadRolloutpanel(page,path);
}

function loadRolloutpanel(page, path){
	$button = $(".menu_button_"+page);
	var buttonElement = new asdf_Element("menuElement_"+page, $("#main_navi").get(0), $button.position().left, $button.position().top, "transparent", $button.width(), $button.height(), "absolute", "", true, 800);
	buttonElement.show();
	var rollout =  new asdf_Rolloutpanel(page+"_rollout", $("#main_navi").get(0), $button.position().left-5, $button.position().top + $button.height(), "green", 205, 500, "absolute", "Rollout_"+page, true, 500, 200, buttonElement);
	var imgArray = new Array(path + "/media/"+page+"_rollout_lang.png", path + "/media/"+page+"_rollout_kurz.png");
	// ONLY WORKING WITH ABSOLUTE VALUES for width and Height
	var bg = new asdf_Background(page+"bg", rollout, $button.position().left-5, $button.position().top + $button.height(), "red", 205, 500, "absolute", "testclass", true, 800, "stretch",imgArray);
	bg.show();
}