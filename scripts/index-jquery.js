$( document ).ready(function() { 
		$('.fa').hover(function(){
        $('.fa').not(this).toggleClass('toggle');
    });
});