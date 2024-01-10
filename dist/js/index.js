$(document).ready(function () {

    $('.homeSlider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 17,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    $('.homeSlider.owl-carousel .owl-nav button.owl-prev').html('').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.homeSlider.owl-carousel .owl-nav button.owl-next').html('').html('<i class="fa-solid fa-chevron-right"></i>')

    $(".slideRight").click(function () {
        var newScrollLeft = $(".mainSlidingScrollbar").scrollLeft() + $(".mainSlidingScrollbar").width() * 0.2;
        console.log("New Scroll Left:", newScrollLeft);
    
        $(".mainSlidingScrollbar").animate({ scrollLeft: newScrollLeft }, 500);
    });

    $(".slideLeft").click(function () {
        var newScrollLeft = $(".mainSlidingScrollbar").scrollLeft() - $(".mainSlidingScrollbar").width() * 0.2;
        console.log("New Scroll Left:", newScrollLeft);
    
        $(".mainSlidingScrollbar").animate({ scrollLeft: newScrollLeft }, 500);
    });
    
    
    


});  // jquery function end
