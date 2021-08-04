'use strict';
$(window).on('load', function () {
  /* loader */
  $('.loader').fadeOut();
  $('#preloder').delay(400).fadeOut('slow');
});

(function ($) {
  /* Navigation	*/
  $('.nav-switch').on('click', function (event) {
    $('.main-menu').slideToggle(400);
    event.preventDefault();
  });

  // $('button .btn-search').focus(function () {
  //   alert('Handler for .focus() called.');
  //   console.log('teste');
  // });

  /* Back to top button */

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };
  let backtotop = document.querySelector('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /* end Back to top button */

  /* Sliderers */

  $('.home-slider').owlCarousel({
    loop: true,
    // nav: true,
    // navText: [
    //   '<img src="img/seta-left.png" alt="#">',
    //   '<img src="img/seta-right.png" alt="#">',
    // ],
    dots: true,
    mouseDrag: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    // autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  });

  $('.hero-slider').owlCarousel({
    items: 1,
    // autoplay: true,
    // autoplayTimeout: 5000,
    smartSpeed: 400,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    merge: true,
    dots: true,
    navText: [
      '<img src="img/seta-left.png" alt="#">',
      '<img src="img/seta-right.png" alt="#">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  });

  $('.selos-slider').owlCarousel({
    items: 1,
    // autoplay: true,
    // autoplayTimeout: 5000,
    smartSpeed: 400,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    loop: true,
    // nav: true,
    merge: true,
    dots: true,
    navText: [
      '<img src="img/seta-left.png" alt="#">',
      '<img src="img/seta-right.png" alt="#">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 6,
      },
    },
  });
  $('.depoiments-slider').owlCarousel({
    items: 1,
    // autoplay: true,
    // autoplayTimeout: 5000,
    smartSpeed: 400,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    merge: true,
    dots: true,
    navText: [
      '<img src="img/seta-left.png" alt="#">',
      '<img src="img/seta-right.png" alt="#">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1170: {
        items: 2,
      },
    },
  });
  $('.publish-slider').owlCarousel({
    items: 1,
    // autoplay: true,
    // autoplayTimeout: 5000,
    smartSpeed: 400,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    merge: true,
    dots: true,
    navText: [
      '<img src="img/seta-left.png" alt="#">',
      '<img src="img/seta-right.png" alt="#">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  /* end Sliderers */

  /* menu site */

  var mobileToggleClick = function () {
    $('.js-menu-toggle').click(function (e) {
      e.preventDefault();

      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-menu-toggle').removeClass('active');
        if ($('.js-burger-toggle-menu').length) {
          $('.js-burger-toggle-menu').removeClass('open');
        }
      } else {
        $('body').addClass('offcanvas');
        $('.js-menu-toggle').addClass('active');
        if ($('.js-burger-toggle-menu').length) {
          $('.js-burger-toggle-menu').addClass('open');
        }
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $('.site-mobile-menu');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('body').find('.js-menu-toggle').removeClass('active');

          $('body').find('.js-burger-toggle-menu').removeClass('open');
        }
      }
    });
  };
  mobileToggleClick();

  var siteMenuClone = function () {
    setTimeout(function () {
      $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this
          .clone()
          .attr('class', 'site-nav-wrap')
          .appendTo('.site-mobile-inner');
      });

      var counter = 0;
      $('.site-mobile-menu .has-children').each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          class: 'collapse',
          id: 'collapseItem' + counter,
        });

        counter++;
      });
    }, 1000);

    $('body').on('click', '.arrow-collapse', function (e) {
      var $this = $(this);
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
        }
      }
    });

    $('.js-burger-toggle-menu').click(function (e) {
      e.preventDefault();
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-burger-toggle-menu').removeClass('open');
      } else {
        $('body').addClass('offcanvas');
        $('.js-burger-toggle-menu').addClass('open');
      }
    });
  };
  siteMenuClone();

  $(window).resize(function () {
    var $this = $(this),
      w = $this.width();

    $('.scroll-section').each(function () {
      if (w < 768) {
        $(this)
          .find('.mobile-links a')
          .clone()
          .appendTo($(this).find('.link-mobile'));
        $(this).find('.mobile-links a').remove();
      } else {
        $(this)
          .find('.link-mobile a')
          .clone()
          .appendTo($(this).find('.mobile-links'));
        $(this).find('.link-mobile a').remove();
      }
    });
  });

  var mobileLinks = function () {
    $('.scroll-section').each(function () {
      if ($(document).width() < 768 || $(window).width() < 768) {
        $(this)
          .find('.mobile-links a')
          .clone()
          .appendTo($(this).find('.link-mobile'));
        $(this).find('.mobile-links a').remove();
      }
    });
  };
  mobileLinks();
})(jQuery);
