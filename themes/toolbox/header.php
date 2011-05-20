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
<script src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/hackStuff.js" type="text/javascript"></script>	
<script src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/Rolloutpanel.js" type="text/javascript"></script>

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
										?>	
					<div id= "menu_button_<?=$page;?>" class="generic_menu_button menu_button_<?=$page;?>">
						<a href="">
							<img src="<?php bloginfo('stylesheet_directory');?>/media/<?=$page;?>_inaktiv.png" class="inactive">
							<img src="<?php bloginfo('stylesheet_directory');?>/media/<?=$page;?>_aktiv.png" class="active">
						</a>
					</div>
					<script>
					<?php
						// Query all subcategories for the current rollout
						$args = array('hierarchical' => false, 'parent' => get_cat_id($categorieNames[$count]) );
						$categories = get_categories($args);
						$count ++;
						$categorieNames = array();						
						foreach($categories as $categorie){
							array_push($categorieNames , $categorie->cat_name);	
						}	
					?>
					
						// Position the Rollout
						$button = $(".menu_button_<?=$page;?>");
						var $rollout = $(".menu_rollout_<?=$page;?>");
						
						
						var x = new Unit($button.css("left"));
						var y = new Unit($button.css("top"));
						var wx = new Unit($button.css("width"));
						var wy = new Unit($button.css("height"));
						y.add(wy);
						x.add(20);
						//$rollout.css("left",x.getValue() );
						//$rollout.css("top",y.getValue() );

					</script>

					<img id = "<?=$page;?>_bgImage" src="<?php bloginfo('stylesheet_directory');?>/media/hotels_rollout_lang.png">	
					<script>
					var image = $("<?=$page;?>_bgImage").get(0);
					alert(image.id)
					new RollOutPanel($("main_navi").get(0), x.getValue(), y.getValue(), <?=json_encode($categorieNames);?>,"menu_rollout_<?=$page;?>", 5, 5, image, 5, 200, mouseOutFunctionCallback,"generic_menu_rollout menu_rollout_<?=$page;?>");
					
					
				
						
					
						// Hover Functions		
						$(".menu_button_<?=$page;?>").hover(
							function(e) {
								// This bezieht sich in diese falle auf den menu_button -> jQuery Doku
								/*var $rollout = $(".menu_rollout_<?=$page;?>");
								var $rollouts = $(".generic_menu_rollout");
								$rollouts.each(
									function(){
										if(this.id != $rollout.get(0).id){
											//Stops all animations, end jump to end of animation
											$(this).stop(true,true); 	
											$(this).hide();
										}
									}
								)*/


								$rollout.slideDown("slow");

								
							},
							function(e) {
								var $rollout = $(".menu_rollout_<?=$page;?>");
								if(!mouseOverPanel(e,$rollout)){
									$rollout.hide();
								}
							}		

							
						);
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
