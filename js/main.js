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
$('.owl-2').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	navText: ["<img class='phongtra-next ' src='images/phongtra/phai.png'>","<img class='phongtra-prev' src='images/phongtra/trai.png'>"],
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
            items:3
        },
        1000:{
            items:3
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


// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}
function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}
function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}
function myFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}
function myFunction6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
}
function myFunction7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.toggle("show");
}
function myFunction8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.toggle("show");
}
function myFunction9() {
  var popup = document.getElementById("myPopup9");
  popup.classList.toggle("show");
}
function myFunction10() {
  var popup = document.getElementById("myPopup10");
  popup.classList.toggle("show");
}
function myFunction11() {
  var popup = document.getElementById("myPopup11");
  popup.classList.toggle("show");
}
function myFunction12() {
  var popup = document.getElementById("myPopup12");
  popup.classList.toggle("show");
}

(function($) {
		$(document).ready(function() {

			// Pause/Play functionality
			var playButton = $('.control-play'),
				album = $('.album');

			playButton.on('click', function() {
				$('.music-player-container').toggleClass('is-playing');
			});
		});
	})(jQuery);

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


