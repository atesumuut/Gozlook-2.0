(function ($) {
'use strict';
jQuery(document).ready(function () {

/* Önyükleyici */

$(window).on('load', function() {
    $('body').addClass('loaded');
});

/* Önyükleyici */


/* MENU */

$('a.efekt1').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
    e.preventDefault();
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.Menu').addClass('navigation-background');
    } else {
        $('.Menu').removeClass('navigation-background');
    }
});

/* MENU */


/* Yukarı at */

$(window).scroll(function(){
if ($(this).scrollTop() >= 500) {
    $('.Yukari-at').fadeIn();
    } else {
    $('.Yukari-at').fadeOut();
    }
});

$('.Yukari-at').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

/* Yukarı at */
           

/* Fotoğraflar */

$(function() {
    $(".img-w").each(function() {
      $(this).wrap("<div class='img-c'></div>")
      let imgSrc = $(this).find("img").attr("src");
       $(this).css('background-image', 'url(' + imgSrc + ')');
    })
              
    $(".img-c").click(function() {
      let w = $(this).outerWidth()
      let h = $(this).outerHeight()
      let x = $(this).offset().left
      let y = $(this).offset().top
      
      $(".active").not($(this)).remove()
      let copy = $(this).clone();
      copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
      $(".active").css('top', y - 8);
      $(".active").css('left', x - 8);
      setTimeout(function() {
      copy.addClass("positioned")
    }, 0)  
    }) 
  })
  $(document).on("click", ".img-c.active", function() {
    let copy = $(this)
    copy.removeClass("positioned active").addClass("postactive")
    setTimeout(function() {
      copy.remove();
    }, 500)
  })

/* Fotoğraflar */

});
})(jQuery);