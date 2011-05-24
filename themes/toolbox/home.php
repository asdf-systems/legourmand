<?php get_header(); ?>
	<?php /* Start the Loop */
	$max_thumbs = 6;
	$thumb_id = 0;
	while ( have_posts() && $thumb_id < $max_thumbs) { ?>
		<div class="home_post" id="home_post_<?php echo $thumb_id; ?>">
		<?
		the_post();
		get_template_part( 'content', get_post_format() );
		$thumb_id++;
		?>
		</div>
	<?php } ?>


<?php get_footer(); ?>
