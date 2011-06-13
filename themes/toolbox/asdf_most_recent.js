function asdf_most_recent_show_content(event) {
	var classList = ["articles", "comments", "tweets"];

	$.each( classList, function(index, item){
		if ($(event.currentTarget).hasClass(item)) {
			$('.asdf_most_recent .content div:visible').hide('fast','linear', function() {
				$('.asdf_most_recent .content .'+item).show('fast','linear');
			});
		}
	});
	event.stopPropagation();
}

$(document).ready(function() {
	$('.asdf_most_recent .content .comments').hide();
	$('.asdf_most_recent .content .tweets').hide();
	$('.asdf_most_recent .buttons h1').bind('click',  asdf_most_recent_show_content);
});
