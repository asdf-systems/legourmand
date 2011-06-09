<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */
?>

<?php
	$cats = get_the_category(); // Get all categories
	$firstcat = $cats[0]; // First category
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<div class="hr-header">
			<hr>
			<div class="hr-title"><span>
				<?  if(!is_page()): ?>
					<a href="<?=get_category_link($firstcat->cat_ID);?>"><?=$firstcat->cat_name;?></a>
				<? else: ?>
					<a href="<?=get_page_link();?>"><?=the_title();?></a>
				<? endif; ?>
			</span></div>
		</div>
		<?php if ( is_home() ) : ?>
			<?php the_post_thumbnail('thumbnail', 'class=thumbnail'); ?>
		<?php endif; ?>
		<? if(!is_page()):?>
		<h1 class="entry-title"><a href="<?=get_permalink();?>"><?php the_title(); ?></a></h1>

		<div class="entry-meta">
		von <?=get_the_author();?> am <?=get_the_date();?>, mit <?=comments_number("keinem Kommentar", "einem Kommentar", "% Kommentaren");?>
			<?php
				/*echo "Permalink: ".get_permalink();
				echo "Date(std-format): ".get_the_date( 'c' );
				echo "Date: ".get_the_date();
				echo "Authorurl: ".get_author_posts_url( get_the_author_meta( 'ID' ) );
				echo "Author: ".get_the_author();*/
			?>
		</div><!-- .entry-meta -->
		<? endif;?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php 
			if (is_home() ) {
				the_excerpt();
			} else {
				the_content();
			}
		?>
	</div><!-- .entry-content -->

        <footer class="entry-meta">
    	<div class="hr-header">
    	    <hr>
    	    <div class="hr-title"><span>SHARE THIS POST</span></div>
    	</div>
    	<div id="social_footer">
    	    <div id="twitter_div">
		<font>TWEET THIS</font>
		<div>
			<img class="inactive" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/media/twitter_klein_inaktiv.png">
			<img class="active" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/media/twitter_klein_aktiv.png">
		</div>
		<?php echo easy_retweet_button(); ?>
	    </div>
	    <div id="facebook_div">
		<font>SHARE ON FACEBOOK</font>
		<div>
			<img class="inactive" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/media/facebook_klein_inaktiv.png">
			<img class="active" src="<?php bloginfo( 'stylesheet_directory' ) ; ?>/media/facebook_klein_aktiv.png">
		</div>
		<iframe src="http://www.facebook.com/plugins/like.php?href=<? the_permalink(); ?>&layout=button_count&show-faces=true&width=470&action=like&colorscheme=light" scrolling="no" frameborder="0" allowTransparency="true" style="border:none; overflow:hidden"></iframe>
	    </div>
	    <div id="flattr_div">
		<?php the_flattr_permalink() ?>
	    </div>
	</div>
    </footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
