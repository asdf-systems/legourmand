<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */

/**
 * Make theme available for translation
 * Translations can be filed in the /languages/ directory
 * If you're building a theme based on toolbox, use a find and replace
 * to change 'toolbox' to the name of your theme in all the template files
 */
load_theme_textdomain( 'toolbox', TEMPLATEPATH . '/languages' );

$locale = get_locale();
$locale_file = TEMPLATEPATH . "/languages/$locale.php";
if ( is_readable( $locale_file ) )
	require_once( $locale_file );

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 640; /* pixels */

/**
 * This theme uses wp_nav_menu() in two locations.
 */
register_nav_menus( array(
	'main' => __( 'Main Menu', 'toolbox' ),
	'top' => __( 'Top Menu', 'toolbox' ),
) );

/* customized searchbar */
function get_asdf_search_form() {
	?>
	<form role="search" method="get" id="searchform" action="http://projects.asdf-systems.de/gourmand/wordpress/" > 
	<div><label class="screen-reader-text" id="s">Search for:</label>
	<img id = "headerimage" src="<?php echo bloginfo( 'stylesheet_directory' ); ?>/media/pfeil_hellgrau_suche.png" >	
	<input type="text" value="HIER SUCHEN" name="searchinput" id="searchinput" /> 
	<input type="submit" id="searchsubmit" value="Search" /> 
	</div> 
	</form>
	<?
}

/**
 * Add default posts and comments RSS feed links to head
 */
add_theme_support( 'automatic-feed-links' );

/**
 * Add support for the Aside and Gallery Post Formats
 */
add_theme_support( 'post-formats', array( 'aside', 'gallery' ) );

/**
 * Add support for the post-thumbnails
 */
add_theme_support('post-thumbnails');

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 */
function toolbox_page_menu_args($args) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'toolbox_page_menu_args' );

/**
 * Register widgetized area and update sidebar with default widgets
 */
function toolbox_widgets_init() {
	register_sidebar( array (
		'name' => __( 'Sidebar 1', 'toolbox' ),
		'id' => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h1 class="widget-title">',
		'after_title' => '</h1>',
	) );

	/*register_sidebar( array (
		'name' => __( 'Sidebar 2', 'toolbox' ),
		'id' => 'sidebar-2',
		'description' => __( 'An optional second sidebar area', 'toolbox' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h1 class="widget-title">',
		'after_title' => '</h1>',
	) );	*/
}
add_action( 'init', 'toolbox_widgets_init' );

/* begin excerpt customization */
function new_excerpt_more($more) {
       global $post;
	return ' [...] <a class="more-link" href="'. get_permalink($post->ID) . '">WEITERLESEN</a>';
}
add_filter('excerpt_more', 'new_excerpt_more');

function new_excerpt_length($length) {
	$visible = 6;
	$addition = 30;
	if (null == get_the_post_thumbnail()) { // no thumbnail -> more text
		$visible += $addition;
	}
	return $visible;
}
add_filter('excerpt_length', 'new_excerpt_length');
/* end excerpt customization */

