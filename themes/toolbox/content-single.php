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
		SHARE THIS MOTHERFUCKING POST!
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
