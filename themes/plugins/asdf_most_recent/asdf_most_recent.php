<?php
/*
Plugin Name: asdf Most Recent Widget
Plugin URI: http://www.asdf-systems.de
Description: widget for previewing the most recent articles, comments and tweets
Author: asdf-systems
Version: 0.1
Author URI: http://www.asdf-systems.de
*/
 
function asdf_most_recent() { ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="<?php echo bloginfo( 'stylesheet_directory' ); ?>/asdf_most_recent.js"></script> 
	<div class="widget">
		<div class="asdf_most_recent">
			<div class="buttons">
				<h1 class="articles widget-title">ARTIKEL</h1>
				<h1 class="widget-title">&middot;</h1>
				<h1 class="comments widget-title">KOMMENTARE</h1>
				<h1 class="widget-title">&middot;</h1>
				<h1 class="tweets widget-title">TWEETS</h1>
			</div>
			<div class="content">
				<div class="articles">
					<?php display_articles(); ?>
				</div>
				<div class="comments">
					<?php display_comments(); ?>
				</div>
				<div class="tweets">
					<?php display_tweets(); ?>
				</div>
			</div>
		</div>
	</div>
<?php } 

function display_articles() {
		 $articles = get_posts( array('numberposts' => 3) ) ;
		 //var_dump($articles);
		 foreach ($articles as $i => $article) {
		 	if ($i > 0) {
				?><hr><?php
			}
			echo get_the_post_thumbnail( $article->ID, array(80,80));
		 	?><h1 class="date"><?php echo $article->post_date; ?></h1><?php
		 	?><h1 class="title">
				<a href="<?php echo $article->guid; ?>"><?php echo $article->post_title; ?></a>
			</h1><?php
		 }
}

function display_comments() {
		 $comments = get_comments( array('number' => 3) ) ;
		 //var_dump($articles);
		 foreach ($comments as $i => $comment) {
		 	if ($i > 0) {
				?><hr><?php
			}
			//echo get_the_post_thumbnail( $comment->ID, array(80,80));
		 	?><h1 class="post">
				<a href="<?php echo $comment->comment_author_url; ?>"><?php echo $comment->comment_author; ?></a>
			</h1><?php
		 	?><h1 class="post">
				<?php $post = get_post($comment->comment_post_ID); ?>
				<a href="<?php echo $post->guid; ?>"><?php echo $post->post_title; ?></a>
			</h1><?php
		}
}

function display_tweets() {
		?><font> bilder 40x40px tweets comments</font><?php
}
 
function init_asdf_most_recent(){
	register_sidebar_widget("asdf Most Recent Widget", "asdf_most_recent");     
}
 
add_action("plugins_loaded", "init_asdf_most_recent");
 
?>
