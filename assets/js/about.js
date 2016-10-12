$(document).scroll(function(){
	$('h2 , .post , .head_icon')
	.fadeIn(800)
	$(this)
  $('.post , .head_icon' )
.css({
	animation: 'paragraphAnim 1s ease-in-out ',
});
$('h2' )
.css({
animation: 'headingAnim 1s ease-in-out ',

});
});
