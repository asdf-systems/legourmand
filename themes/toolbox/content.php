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
		<?php the_content(); ?>
	</div><!-- .entry-content -->

	<footer class="entry-meta">
		SHARE THIS MOTHERFUCKING POST!
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
