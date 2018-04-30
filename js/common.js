//smooth scroll

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });


$(document).ready(function() {

  $(".some-col h1").animated("fadeInDown", "fadeOutUp");
  $(".some-col p, section h2, section p").animated("fadeInUp", "fadeOutDown");
  $(".contest-stuff").animated("zoomIn", "zoomOut");


  function heightDetect() {
      $(".main-head").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
    heightDetect();
  });

  $(".toggle-menu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
  });

  $(".top-menu li a").click(function() {
    $(".top-menu").fadeOut(600);
    $(".sandwich").toggleClass("active");
  })

  $(".toggle-menu").click(function() {
    if ($(".top-menu").is(":visible")) {
      $(".top-menu").fadeOut(600);
      $(".top-menu li a").removeClass("fadeInUp animated");
      $(".top-wrap").fadeIn(600);

    } else {
      $(".top-menu").fadeIn(600);
      $(".top-menu li a").addClass("fadeInUp animated");
      $(".top-wrap").fadeOut(600);
    };
  });

});

$('.main-head').parallax({imageSrc: "img/header-bgr.jpg"});
$('.judges').parallax({imageSrc: "img/header-bgr2.jpg"});
$('.becomepartner').parallax({imageSrc: "img/header-bgr3.jpg"});

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});
