$('.owl-1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	navText: ["<img class='next img-fluid' src='images/home/slider-phai.png'>","<img class='prev img-fluid' src='images/home/slider-trai.png'>"],
	dots:true,
	autoplay:true,
	 animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
	rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.owl-carousel').owlCarousel({
    thumbs: true,
    thumbsPrerendered: true,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },

  });


// MENUANITMATION
$(document).ready(function(){
	"use strict";
  $(".hamburger").click(function(){
	  
    $(this).toggleClass("is-active");
  });
});

// FULLSCREEN MENU
$(document).ready(function(){
	"use strict";
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
	
	
	
});


$('.overlay').on('click', function(){
      "use strict";
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
	
	
});