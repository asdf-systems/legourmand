<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'toolbox' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />

<!-- webfonts -->
<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webfonts/webfonts.css" type="text/css" charset="utf-8" media="all">
<!-- less-file -->
<link rel="stylesheet/less" href="<?php bloginfo( 'stylesheet_directory' ) ; ?>/lestylesheet.less" type="text/css">
<!-- dummy -->
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<!-- less.js -->
<script src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/less.js" type="text/javascript"></script>
<!-- jquery.js -->
<script src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/jquery.js" type="text/javascript"></script>
<script src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/jquery-ui.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/Engine.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/EngineEvents.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/EventParameter.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/EngineGlobals.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/Unit.js"></script>

<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/Element.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/Panel.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/Rolloutpanel.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/Background.js"></script>
<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/webengine20/Text.js"></script>

<script type="text/javascript" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/headerFunctions.js"></script>

<?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); ?>
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<script src="<?php bloginfo( 'template_directory' ); ?>/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed">
	<header id="branding" role="banner">
			<nav id="top_navi" role="navigation">
			<!-- Top Right Navi -->
				<aside id="search" class="widget widget_search">
					<?php get_search_form(); ?>
				</aside>
				<?php wp_nav_menu( array( 'theme_location' => 'top' ) ); ?>
			</nav>
			<img id = "headerimage" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/media/header.png" alt="<?php bloginfo( 'name' ); ?>">
			<nav id="main_navi" role="navigation">
				<h1 class="section-heading"><?php _e( 'Main menu', 'toolbox' ); ?></h1>
				<div class="skip-link screen-reader-text"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'toolbox' ); ?>"><?php _e( 'Skip to content', 'toolbox' ); ?></a></div>
				<!-- (Original) Main Menu-->
				<?php /*wp_nav_menu( array( 'theme_location' => 'main' ) );*/ ?>
				
				
				<!-- (asdf) Main Menu -->
				
			
				<?php
					$pages = Array("news", "essentrinken", "reise", "hotels", "social", "termine", "tv");
					$categorieNames = Array("News - Allgemein", "Essen & Trinken", "Reise", "Hotels", "Social Media", "Termine", "Le Gourmand TV");
					$count = 0;
					foreach($pages as $page) {
						
						// Query all subcategories for the current rollout
						$args = array('hierarchical' => false, 'parent' => get_cat_id($categorieNames[$count]) );
						$categories = get_categories($args);
						$count ++;
						$categorieNames = array();						
						foreach($categories as $categorie){
							array_push($categorieNames , $categorie->cat_name);	
						}
						//var_dump($categorieNames);
				?>
					<script>
						var menu_button = new asdf_Button(new asdf_Button("button1", $("#mainBody").get(0), 10, 10, "transparent", 200, 50, "absolute", "testclass", true, 510, "<?php bloginfo('stylesheet_directory');?>/media/<?=$page;?>_inaktiv.png", "<?php bloginfo('stylesheet_directory');?>/media/<?=$page;?>_aktiv.png");
						loadRolloutpanel("<?=$page;?>", <?=$path?>, categories, trigger){		
					</script>
				<?php 
					}
				?>
				<script>
					$(".generic_menu_rollout").hide();
				</script>
			</nav><!-- #access -->
	</header><!-- #branding -->


	<div id="main">
