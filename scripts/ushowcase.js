$(function() {	
	
	/* photogrid text hover */
	$('#photogrid-wrapper .photogrid').hover(		
		function () {			
			$(this).children(".info").stop(true, true).slideDown();
		}, 
		function () {			
			$(this).children(".info").stop(true, true).slideUp();
		}
	);	
});