
function main() {

  (function () {
    'use strict';
    // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    $('a.page-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 900);
          return false;
        }
      }
    });

    // Auto hide drop down when click on other place
    $(window).click(function() {
      if ($('#nav-collapse').hasClass('in')) {
        $('#nav-collapse').collapse('hide');
      }
    });
    // Fix Menu bar position
    $(window).load(function() {
      $(".main-nav").sticky();
    });

    // skills chart
    $(document).ready(function (e) {
      //var windowBottom = $(window).height();
      var index = 0;
      $(document).scroll(function () {
        var top = $('#about').height() - $(window).scrollTop();
        //console.log(top);
        if (top < -380) {
          if (index == 0) {
            $('.chart').easyPieChart({
              easing: 'easeOutBounce',
              onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
              }
            });
          }
          index++;
        }
      })
      //console.log(nagativeValue)
    });


    // Portfolio isotope filter
    $(window).load(function () {
      var $container = $('.portfolio-items');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $('.cat a').click(function () {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });

    });


    // CounterUp
    $(document).ready(function ($) {
      if ($("span.count").length > 0) {
        $('span.count').counterUp({
          delay: 10, // the delay time in ms
          time: 1500 // the speed time in ms
        });
      }
    });

    // Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
      social_tools: false
    });

  }());


}
main();