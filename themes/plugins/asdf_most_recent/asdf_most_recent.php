<?php
/*
Plugin Name: asdf Most Recent Widget
Plugin URI: http://www.asdf-systems.de
Description: widget for previewing the most recent articles, comments and tweets
Author: asdf-systems
Version: 0.1
Author URI: http://www.asdf-systems.de
*/
 
function asdf_most_recent() { ?>
	<div id="asdf_most_recent" class="widget">
		<div id="amr_buttons">
			<h1 id="amr_articles_button" class="widget-title">ARTIKEL</h1>
			<h1 class="widget-title">&middot;</h1>
			<h1 id="amr_comments_button" class="widget-title">KOMMENTARE</h1>
			<h1 class="widget-title">&middot;</h1>
			<h1 id="amr_tweets_button" class="widget-title">TWEETS</h1>
		</div>
		<div id="amr_articles_content" class="amr_content">
		</div>
		<div id="amr_comments_content" class="amr_content">
		</div>
		<div id="amr_tweets_content" class="amr_content">
		</div>
		<font> text</font>
	</div>
<?php }
 
function init_asdf_most_recent(){
	register_sidebar_widget("asdf Most Recent Widget", "asdf_most_recent");     
}
 
add_action("plugins_loaded", "init_asdf_most_recent");
 
?>
