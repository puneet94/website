$(document).ready(function(){
	$(".boy_img img").hide();
        $(".girl_img img").hide();
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".boy_img img").show();
        $(".girl_img img").show();
        $(".boy_img img").addClass("bounceInRight");
        $(".girl_img img").addClass("bounceInLeft");
    }
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