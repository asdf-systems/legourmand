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
function toolbox_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case '' :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<article id="comment-<?php comment_ID(); ?>" class="comment">
			<footer>
				<div class="comment-author vcard">
					<?php echo get_avatar( $comment, 40 ); ?>
					<?php printf( __( '%s <span class="says">says:</span>', 'toolbox' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
				</div><!-- .comment-author .vcard -->
				<?php if ( $comment->comment_approved == '0' ) : ?>
					<em><?php _e( 'Your comment is awaiting moderation.', 'toolbox' ); ?></em>
					<br />
				<?php endif; ?>

				<div class="comment-meta commentmetadata">
					<a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>"><time pubdate datetime="<?php comment_time( 'c' ); ?>">
					<?php
						/* translators: 1: date, 2: time */
						printf( __( '%1$s at %2$s', 'toolbox' ), get_comment_date(),  get_comment_time() ); ?>
					</time></a>
					<?php edit_comment_link( __( '(Edit)', 'toolbox' ), ' ' );
					?>
				</div><!-- .comment-meta .commentmetadata -->
			</footer>

			<div class="comment-content"><?php comment_text(); ?></div>

			<div class="reply">
				<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
			</div><!-- .reply -->
		</article><!-- #comment-##  -->

	<?php
			break;
		case 'pingback'  :
		case 'trackback' :
	?>
	<li class="post pingback">
		<p><?php _e( 'Pingback:', 'toolbox' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __('(Edit)', 'toolbox'), ' ' ); ?></p>
	<?php
			break;
	endswitch;
}
endif; // ends check for toolbox_comment()

?>

	<div id="comments">
		<div class="hr-header">
			<hr>
			<div class="hr-title"><span><?php _e('Comments', 'toolbox');?></span></div>
		</div>
	<?php if ( post_password_required() ) : ?>
		<div class="nopassword"><?php _e( 'This post is password protected. Enter the password to view any comments.', 'toolbox' ); ?></div>
	</div><!-- .comments -->
	<?php return;
		endif;
	?>

	<?php // You can start editing here -- including this comment! ?>

	<?php if ( have_comments() ) : ?>
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

	<?php else : // this is displayed if there are no comments so far ?>

		<?php if ( comments_open() ) : // If comments are open, but there are no comments ?>
		<p class="nocomments"><?php _e( 'No comments yet.', 'toolbox' ); ?></p>
		<?php else : // or, if we don't have comments:

			/* If there are no comments and comments are closed,
			 * let's leave a little note, shall we?
			 * But only on posts! We don't want the note on pages.
			 */
			if ( ! comments_open() && ! is_page() ) :
			?>
			<p class="nocomments"><?php _e( 'Comments are closed.', 'toolbox' ); ?></p>
			<?php endif; // end ! comments_open() && ! is_page() ?>


		<?php endif; ?>

	<?php endif; ?>
	</div>
	
	
	<div id="commentdiv">
		<div class="hr-header">
			<hr>
			<div class="hr-title"><span><?php _e('Leave a comment', 'toolbox'); ?></span></div>
		</div>

	<?php /*comment_form();*/ ?>
	<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">

	<div><textarea name="comment" id="comment" tabindex="4" onFocus="clearText(this)" onBlur="clearText(this)" ></textarea></div>
	<div><input type="text" name="author" id="author" value="" size="22" tabindex="1" onFocus="clearText(this)" onBlur="clearText(this)" value="NAME (erforderlich)" />
	<input type="text" name="email" id="email" value="" size="22" tabindex="2"  value="EMAIL (wird nicht publiziert)"/>
	<input type="text" name="website" id="website" value="" size="22" tabindex="3"  value="WEBSITE"/></div>

	<div class="submitdiv"><input name="submit" type="submit" id="submit" tabindex="5" value="KOMMENTAR SENDEN" /></div>
	<?php comment_id_fields(); ?>

	<?php do_action('comment_form', $post->ID); ?>
	</form>

</div><!-- #comments -->
