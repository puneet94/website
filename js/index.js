$(document).ready(function(){
	if($(window).width() > 400){
    $boy = $(".boy_img img");
  	$girl = $(".girl_img img");
  	$boy.hide();
    $girl.hide();
  	$(window).scroll(function() {    
      	var scroll = $(window).scrollTop();
      	scroll = scroll+400;
      	var z = $('.disp_header').offset().top;
      	if (scroll >= z) {
          	$boy.show();
          	$girl.show();
          	$boy.addClass("bounceInRight");
          	$girl.addClass("bounceInLeft");
      	}
      	else{
          	$boy.hide();
          	$girl.hide();
          	$boy.removeClass("bounceInRight");
          	$girl.removeClass("bounceInLeft");	
      	}
  	}); 
  }
	$('#right_ar1').click(function(){
		$(this).toggleClass("active");
   		$parent = $(this).parent("p").parent(".follow_header")
   		$parent.siblings(".vis_stores_div").slideToggle( "fast");
   		$(".near_stores_div").hide( "fast");
   		$(".follow_suggestions_div").hide( "fast");
	});
	$('#right_ar2').click(function(){
		$(this).toggleClass("active");
   		$parent = $(this).parent("p").parent(".follow_header")
   		$parent.siblings(".near_stores_div").slideToggle( "fast");
   		$(".vis_stores_div").hide( "fast");
   		$(".follow_suggestions_div").hide( "fast");
	});
	$('#right_ar3').click(function(){
		$(this).toggleClass("active");
   		$parent = $(this).parent("p").parent(".follow_header")
   		$parent.siblings(".follow_suggestions_div").slideToggle( "fast");
   		$(".near_stores_div").hide( "fast");
   		$(".vis_stores_div").hide( "fast");
	});
	$("#menu").click(function(){
		//$(".vert_navbar ").slideToggle('slow');
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = { direction: 'left' };

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $(".vert_navbar ").toggle(effect, options, duration);
	});
});