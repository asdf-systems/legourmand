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
	<div class="widget asdf_archive">
		<h1 class="widget-title">ARCHIVE</h1>
		<img src="<?php echo bloginfo( 'stylesheet_directory' ); ?>/media/pfeil_hellgrau_archiv.png" >	
		<select name="archive-dropdown" onchange="document.location.href=this.options[this.selectedIndex].value;">
			<option value="">W&Auml;HLE DEN MONAT</option> 
			<?php wp_get_archives( 'type=monthly&format=option&show_post_count=1' ); ?>
		</select>
	</div>
<?php }
 
function init_asdf_archive(){
	register_sidebar_widget("asdf Archive Widget", "asdf_archive");     
}
 
add_action("plugins_loaded", "init_asdf_archive");
 
?>
