<?php
/*
Plugin Name: asdf Archive
Plugin URI: http://www.asdf-systems.de
Description: angepasstes Sidebar Archiv fuer Wordpress
Author: asdf-systems
Version: 0.1
Author URI: http://www.asdf-systems.de
*/
 
function asdf_archive() { 
	?>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="<?php echo bloginfo( 'stylesheet_directory' ); ?>/jsddm.js"></script> 
	<div class="widget"><div class="asdf_archive">
		<h1 class="widget-title">ARCHIVE</h1>
		<img src="<?php echo bloginfo( 'stylesheet_directory' ); ?>/media/pfeil_hellgrau_archiv.png" >
		<ul class="jsddm">
			<li><a href="">W&Auml;HLE DEN MONAT</a>
			<ul><?php wp_get_archives( 'type=monthly&format=html&show_post_count=0' ); ?></ul>
			</li>
		</ul>
	</div></div>
<?php }
 
function init_asdf_archive(){
	register_sidebar_widget("asdf Archive Widget", "asdf_archive");     
}
 
add_action("plugins_loaded", "init_asdf_archive");
 
?>
