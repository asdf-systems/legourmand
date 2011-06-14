function asdf_most_recent_show_content(event) {
	var classList = ["articles", "comments", "tweets"];
	var blau = "#6EA9DC";
	var grau = "#8C8C8C";
	var orange = "#B64830";

	$.each( classList, function(index, item){
		if ($(event.currentTarget).hasClass(item)) {
			$('.asdf_most_recent .buttons h1').css("color", grau);
			var color_active = blau;
			if (item == "comments") {
				color_active = orange;
			}	
			$('.asdf_most_recent .buttons h1.'+item).css("color", color_active);
			$('.asdf_most_recent .content > div:visible').hide(function() {
			//$('.asdf_most_recent .content div:visible').hide('fast','linear', function() {
				//$('.asdf_most_recent .content .'+item).show('fast','linear');
				$('.asdf_most_recent .content > .'+item).show();
			});
		}
	});
	event.stopPropagation();
}

$(document).ready(function() {
	$('.asdf_most_recent .content > .comments').hide();
	$('.asdf_most_recent .content > .tweets').hide();
	$('.asdf_most_recent .buttons > h1').bind('click',  asdf_most_recent_show_content);
});
