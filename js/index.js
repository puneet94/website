$(document).ready(function( {
  if(window.innerWidth > 400) {
    $boy = $(".boy_img img");
    $girl = $(".girl_img img");
    $boy.hide();
    $girl.hide();
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        scroll = scroll+400;
        var z = $('.disp_header').offset().top;
        console.log(scroll);
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