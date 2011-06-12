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
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="<?php echo bloginfo( 'stylesheet_directory' ); ?>/asdf_most_recent.js"></script> 
	<div class="widget">
		<div class="asdf_most_recent">
			<div class="buttons">
				<h1 class="articles widget-title">ARTIKEL</h1>
				<h1 class="widget-title">&middot;</h1>
				<h1 class="comments widget-title">KOMMENTARE</h1>
				<h1 class="widget-title">&middot;</h1>
				<h1 class="tweets widget-title">TWEETS</h1>
			</div>
			<div class="content">
				<div class="articles">
					<font> content articles</font>
				</div>
				<div class="comments">
					<font> content comments</font>
				</div>
				<div class="tweets">
					<font> content tweets</font>
				</div>
			</div>
		</div>
	</div>
<?php }
 
function init_asdf_most_recent(){
	register_sidebar_widget("asdf Most Recent Widget", "asdf_most_recent");     
}
 
add_action("plugins_loaded", "init_asdf_most_recent");
 
?>
