$('.js-button-campaign').click(function() {
	$('.main-field-for-form').css('filter', 'blur(3px)');
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
})


$('.js-close').click(function() {
	$('.js-overlay-campaign').fadeOut();
	$('.main-field-for-form').css('filter', 'none')
})