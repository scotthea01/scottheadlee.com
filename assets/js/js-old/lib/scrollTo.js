$(document).ready(function() {
 
        //Calculate the height of <header>
        //Use outerHeight() instead of height() if have padding
        var aboveHeight = $('header').outerHeight();
 
	//when scroll
        $(window).scroll(function(){
 
	        //if scrolled down more than the header’s height
                if ($(window).scrollTop() > aboveHeight){
 
	        // if yes, add “fixed” class to the <nav>
	        // add padding top to the #content 
                //(value is same as the height of the nav)
                $('nav').addClass('fixed-nav').next()
                .css('padding-top','57px').css('width','960px');
 
                } else {
 
	        // when scroll up or less than aboveHeight,
                //remove the “fixed” class, and the padding-top
                $('nav').removeClass('fixed-nav').next()
                .css('padding-top','0');
                }
        });
});