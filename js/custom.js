(function ($) {

    // nav fixed 
    $("document").ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('.top-nav').addClass('fixed-top');
            } else {
                $('.top-nav').removeClass('fixed-top');
            }
        });
    });



    // main slider
    $('document').ready(function () {
        $('#main-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5500,
            smartSpeed: 1000,
            animateOut: 'fadeOut',
            mouseDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $('#main-carousel').on("changed.owl.carousel", function (event) {
            // selecting the current active item
            var item = event.item.index - 2;
            // first removing animation for all captions

            $('h1').removeClass('animated fadeInDown');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInDown');

            $('p').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');

        })
    });




    //counting up
    $('document').ready(function () {
        $('.counter').countUp({
            delay: 10,
            duration: 1000,
        });
    });


    //scroll top
    $('document').ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 260) {
                $('.scroll-top').fadeIn();
            } else {
                $(".scroll-top").fadeOut();
            }
        });
        $('.scroll-top').click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
    });
    
    
    
    // parallax image
$('document').ready(function () {
    $(window).scroll(function (e) {
        parallax();
    })


    function parallax() {
        var scroll = $(window).scrollTop();
        var screenHeight = $(window).height();

        $('.parallax').each(function () {
            var offset = $(this).offset().top;
            var distanceFromBottom = offset - scroll - screenHeight

            if (offset > screenHeight && offset) {
                $(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.2) + 'px');
            } else {
                $(this).css('background-position', 'center ' + ((-scroll) * 0.2) + 'px');
            }
        })
    }
});


})(jQuery)
