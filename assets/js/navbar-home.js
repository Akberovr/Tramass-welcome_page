$(document).ready(function(){
	$('h1 , .navbar-brand' )
.animate({
		top:'20px'},
	550, function() {
});
$('.arrows' )
.animate({
	bottom:'40px'},
550, function() {
});
	$('h1 , .navbar-brand , .arrows')
	.fadeIn(600)
	$(this)
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
		$(this)
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
	$('h1 , .navbar-brand , .arrow , .paragraphs , h2')
.animate({
		opacity:'0.4'},
	400, function() {
});
		$('.icons,ul')
	.fadeIn('slow')
	$(this)
	});

	$('.nav-toggle-btns').click(function() {
		$('.nav-toggle-btn')
		.fadeIn('slow')
		$(this)
	.animate({
			top:'0px'},
		600, function() {
	});
	$('.a1')
.animate({
		paddingLeft:'0px'},
	700, function() {
});
$('h1 , .navbar-brand , .arrow , .paragraphs , h2')
.animate({
	opacity:'1'},
500, function() {
});
$('.icons,ul')
.fadeOut('slow')
$(this)
	});
	function slideArrow(){
			$('.arrows')
			.css({
				animation: 'pulse 2s ease-in-out infinite',
				animationDelay: '-3s',
				color:'#2F4241',
				border:'1px solid #2F4241',
				borderRadius:'100px',
				padding:'0px 10px'
			});
			$('.arrows')
			.animate({
				marginBottom:'-10px'},
				400, function() {
			});
		}
		function slideBack(){
				$('.arrows')
				.css({
					animation: 'stop'
				});
				$('.arrows')
				.animate({
					marginBottom:'0px'},
					400, function() {
				});
			}
