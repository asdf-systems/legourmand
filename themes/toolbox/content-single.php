<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<div class="hr-header">
			<hr>
			<div class="hr-title"><span><?=get_the_category_list(" ");?></span></div>
		</div>
		<h1 class="entry-title"><?php the_title(); ?></h1>

		<div class="entry-meta">
			<?php
				echo "Permalink: ".get_permalink();
				echo "Date(c): ".get_the_date( 'c' );
				echo "Date: ".get_the_date();
				echo "Authorurl: ".get_author_posts_url( get_the_author_meta( 'ID' ) );
				echo "Author: ".get_the_author();
			?>
		</div><!-- .entry-meta -->
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->

	<footer class="entry-meta">
		<div class="hr-header">
			<hr>
			<div class="hr-title"><span>SHARE THIS POST</span></div>
		</div>
		<?php echo easy_retweet_button(); ?>
		<iframe src="http://www.facebook.com/plugins/like.php?href=<? the_permalink(); ?>&amp;layout=standard&amp;show-faces=true&amp;width=470&amp;action=like&amp;colorscheme=light" scrolling="no" frameborder="0" allowTransparency="true" style="border:none; overflow:hidden; width:470px; height:60px"></iframe>
		<?php the_flattr_permalink() ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
