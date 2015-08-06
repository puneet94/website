$(document).ready(function(){
	$(".boy_img img").hide();
        $(".girl_img img").hide();
	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();
    	scroll = scroll+400;
    	var z = $('.disp_header').offset().top;
    	console.log(scroll);
    	if (scroll >= z) {
        	$(".boy_img img").show();
        	$(".girl_img img").show();
        	$(".boy_img img").addClass("bounceInRight");
        	$(".girl_img img").addClass("bounceInLeft");
    	}
    	else{
        	$(".boy_img img").hide();
        	$(".girl_img img").hide();
        	$(".boy_img img").removeClass("bounceInRight");
        	$(".girl_img img").removeClass("bounceInLeft");	
    	}
     	/*
    	if (scroll >= 400) {	
        	$(".boy_img img").show();
        	$(".girl_img img").show();
        	$(".boy_img img").addClass("bounceInRight");
        	$(".girl_img img").addClass("bounceInLeft");
    	}
    	else if(scroll <= 100){
    		$(".boy_img img").hide();
        	$(".girl_img img").hide();
        	$(".boy_img img").removeClass("bounceInRight");
        	$(".girl_img img").removeClass("bounceInLeft");	
    	}*/
	}); 
	$('#right_ar1').click(function(){
		$(this).toggleClass("active");
   		$parent = $(this).parent("p").parent(".follow_header")
   		$parent.siblings(".vis_stores ul").slideToggle( "fast");
   		$(".near_stores ul").hide( "fast");
   		$(".follow_suggestions ul").hide( "fast");
	});
	$('#right_ar2').click(function(){
		$(this).toggleClass("active");
   		$parent = $(this).parent("p").parent(".follow_header")
   		$parent.siblings(".near_stores ul").slideToggle( "fast");
   		$(".vis_stores ul").hide( "fast");
   		$(".follow_suggestions ul").hide( "fast");
	});
	$('#right_ar3').click(function(){
		$(this).toggleClass("active");
   		$parent = $(this).parent("p").parent(".follow_header")
   		$parent.siblings(".follow_suggestions ul").slideToggle( "fast");
   		$(".near_stores ul").hide( "fast");
   		$(".vis_stores ul").hide( "fast");
	});
	$("#menu").click(function(){
		$(".vert_navbar ").slideToggle('slow');
	});
});