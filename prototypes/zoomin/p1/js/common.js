$(function() {

	$.backstretch(["images/bg.jpg"]);

	for(i = 0; i < 6; i++) {
		$('.mc').append('<div class="item"></div><!-- /item -->');
	}

});

var viewportWidth = jQuery(window).width(),
    viewportHeight = jQuery(window).height();
$('.mc').css('width',(viewportWidth - 523));



$(window).resize(function() {

	var viewportWidth = jQuery(window).width(),
    	viewportHeight = jQuery(window).height();
	$('.mc').css('width',(viewportWidth - 523))

});