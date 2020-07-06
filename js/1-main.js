jQuery(function($){
	
	$(document).ready(function() {
		
		jQuery('.counter-item').appear(function() {
			jQuery('.counter-number').countTo();
			jQuery(this).addClass('funcionando');
			console.log('funcionando');
		});
		
		// Animate the scroll to top
		$('.to_top').click(function(event) {
			event.preventDefault();
		
			$('html, body').animate({scrollTop: 0}, 500);
		});
	}); 
	
	/* wow
	-------------------------------*/
	new WOW({ mobile: false }).init();
	
});
