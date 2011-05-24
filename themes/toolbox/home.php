<?php get_header(); ?>

	<?php /* Start the Loop */ $max_thumbs = 6;
	while ( have_posts() && $thumb_id < $max_thumbs) {
		the_post();
		get_template_part( 'content', get_post_format() );
		$thumb_id++;
	}
	?>


<?php get_footer(); ?>
