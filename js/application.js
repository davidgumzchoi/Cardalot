// Document Window Height
if (!window.matchMedia('(max-width: 375px)').matches) {
	$(window).load(function() {
		var windowHeight = $(window).height();
		var wrapperHeight = $('.wrapper').height();
		if (windowHeight > wrapperHeight) {
		  	$('.wrapper').css({'height':(windowHeight)+'px'});
		}
	})
}