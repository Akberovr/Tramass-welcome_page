
<script type="text/javascript">
$(document).ready(function(){
	$('h1')
.animate({
		top:'20px'},
	550, function() {
});
	$('h1 ')
	.fadeIn(900)
	$('h1 ')
});

	(function ()
	{		var bodyEl = $('body'),
			 navToggleBtn = bodyEl.find('.nav-toggle-btn');
				navToggleBtns = bodyEl.find('.nav-toggle-btns');
			 navToggleBtn.on('click', function(e){
				 bodyEl.toggleClass('active-nav');
				 e.preventDefault();
			 });
			 navToggleBtns.on('click', function(e){
				bodyEl.toggleClass('active-nav');
				e.preventDefault();
			});
	}) ();
		$('.nav-toggle-btn').click(function() {
		$('.nav-toggle-btn')
		.fadeOut('fast')
			$('.nav-toggle-btns')
		.animate({
				top:'30px'},
			700, function() {
		});
		$('.a1')
	.animate({
			paddingLeft:'50px'},
		700, function() {
	});
	$('h1')
.animate({
		opacity:'0.5'},
	500, function() {
});
		$('.icons,ul')
	.fadeIn('slow')
	$('.icons')

	});

	$('.nav-toggle-btns').click(function() {
		$('.nav-toggle-btn')
		.fadeIn('slow')
		$('.nav-toggle-btns')
	.animate({
			top:'0px'},
		600, function() {
	});
	$('.a1')
.animate({
		paddingLeft:'0px'},
	700, function() {
});
$('h1')
.animate({
	opacity:'1'},
500, function() {
});
$('.icons,ul')
.fadeOut('slow')
$('.icons')
	});

</script>
