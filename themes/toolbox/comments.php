<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */

if ( ! function_exists( 'toolbox_comment' ) ) :
/**
 * Template for comments and pingbacks.
 *
 * To override this walker in a child theme without modifying the comments template
 * simply create your own toolbox_comment(), and that function will be used instead.
 *
 * Used as a callback by wp_list_comments() for displaying the comments.
 *
 * @since Toolbox 0.4
 */
$comment_count = 0;
function toolbox_comment( $comment, $args, $depth ) {
	global $comment_count;
	$comment_count += 1;
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case '' :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<article id="comment-<?php comment_ID(); ?>" class="comment">
			<? if($comment_count > 1): ?>
				<div class="hr-header">
					<hr>
					<!--<div class="hr-title"><span><?php _e('Comments', 'toolbox');?></span></div>//-->
				</div>
			<? endif; ?>
			<table>
				<tr>
					<td>
				<div class="comment-author vcard">
					<?php echo get_avatar( $comment, 40 ); ?>
				</div><!-- .comment-author .vcard -->
				</td>
				<td>
				<?php if ( $comment->comment_approved == '0' ) : ?>
					<em><?php _e( 'Your comment is awaiting moderation.', 'toolbox' ); ?></em>
					<br />
				<?php endif; ?>
			<div class="comment-content"><?php comment_text(); ?></div>
			<div class="comment-meta">POSTED BY: <?=get_comment_author_link();?>  <?=printf( __( '%1$s at %2$s', 'toolbox' ), get_comment_date(),  get_comment_time() ); ?>
			</td>
			</tr>
			</table>

		</article><!-- #comment-##  -->

	<?php
			break;
	endswitch;
}
endif; // ends check for toolbox_comment()

?>

	<?php if ( comments_open() ) : ?>
		<?php if(have_comments()) :?>
			<div id="comments">
				<div class="hr-header">
					<hr>
					<div class="hr-title"><span><?php _e('Comments', 'toolbox');?></span></div>
				</div>

	<?php // You can start editing here -- including this comment! ?>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
		<nav id="comment-nav-above">
			<h1 class="section-heading"><?php _e( 'Comment navigation', 'toolbox' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'toolbox' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'toolbox' ) ); ?></div>
		</nav>
		<?php endif; // check for comment navigation ?>

		<ol class="commentlist">
			<?php wp_list_comments( array( 'callback' => 'toolbox_comment' ) ); ?>
		</ol>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
		<nav id="comment-nav-below">
			<h1 class="section-heading"><?php _e( 'Comment navigation', 'toolbox' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'toolbox' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'toolbox' ) ); ?></div>
		</nav>
		<?php endif; // check for comment navigation ?>

	</div>
	<?php endif; // have_comments() ?>
	
	
	<div id="commentdiv">
		<div class="hr-header">
			<hr>
			<div class="hr-title"><span><?php _e('Leave a comment', 'toolbox'); ?></span></div>
		</div>

	<?php /*comment_form();*/ ?>

	<script>
		function clearIt(obj) {
			if(obj.value == obj.defaultValue) {
				obj.value = "";
			}
		}

		function resetIt(obj) {
			if(obj.value == "") {
				obj.value = obj.defaultValue;
			}
		}
	</script>
	<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
	<div>
		<textarea name="comment" id="comment" tabindex="4" onFocus="clearText(this)" onBlur="clearText(this)"></textarea>
	</div>
	<div>
		<input type="text" name="author" id="author" size="22" tabindex="1" onFocus="clearIt(this)" onBlur="resetIt(this)" value="NAME (erforderlich)">
		<input type="text" name="email" id="email" size="22" tabindex="2"  onFocus="clearIt(this)" onBlur="resetIt(this)"  value="EMAIL (wird nicht publiziert)">
		<input type="text" name="website" id="website" size="22" tabindex="3"  onFocus="clearIt(this)" onBlur="resetIt(this)"  value="WEBSITE">
	</div>

	<div class="submitdiv">
	<img src="<?php echo bloginfo('stylesheet_directory');?>/media/pfeil_schwarz_comment.png"><input name="submit" type="submit" id="submit" tabindex="5" value="KOMMENTAR SENDEN" />
	</div>
	<?php comment_id_fields(); ?>

	<?php do_action('comment_form', $post->ID); ?>
	</form>

</div><!-- #comments -->
	<?php endif; ?>
