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

    $('.favouritesSlider').owlCarousel({
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
            450: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            },
            1300: {
                items: 5
            },
        }
    })

    $('.vouchersSlider').owlCarousel({
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
            450: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            },
            1300: {
                items: 5
            },
        }
    })



    $('.homeSlider.owl-carousel .owl-nav button.owl-prev').html('').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.homeSlider.owl-carousel .owl-nav button.owl-next').html('').html('<i class="fa-solid fa-chevron-right"></i>')

    $('.favouritesSlider.owl-carousel .owl-nav button.owl-prev').html('').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.favouritesSlider.owl-carousel .owl-nav button.owl-next').html('').html('<i class="fa-solid fa-chevron-right"></i>')

    $('.vouchersSlider.owl-carousel .owl-nav button.owl-prev').html('').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.vouchersSlider.owl-carousel .owl-nav button.owl-next').html('').html('<i class="fa-solid fa-chevron-right"></i>')

    $(".slideRight").click(function () {
        var containerWidth = $(".mainSlidingScrollbar").width();
        var scrollPercentage = ($(window).width() < 640) ? 0.5 : 0.2;
        var newScrollLeft = $(".mainSlidingScrollbar").scrollLeft() + containerWidth * scrollPercentage;

        $(".mainSlidingScrollbar").animate({ scrollLeft: newScrollLeft }, 500);
    });

    $(".slideLeft").click(function () {
        var containerWidth = $(".mainSlidingScrollbar").width();
        var scrollPercentage = ($(window).width() < 640) ? 0.5 : 0.2;
        var newScrollLeft = $(".mainSlidingScrollbar").scrollLeft() - containerWidth * scrollPercentage;

        $(".mainSlidingScrollbar").animate({ scrollLeft: newScrollLeft }, 500);
    });


    $(document).on('mouseover', '.mailSlidingUl li.group', function () {
        let height = $(this).find('ul').innerHeight();
        $('.mailSlidingUl').height(height + 30);
    })

    $(document).on('click', '.showMobileSearchBox', function () {
        $('.mobileSearchWrapper').slideToggle()
    })

    $(document).on('click', '.headerSearchWrapper button', function () {
        let SerchInput = $('.headerSearchWrapper input').val();
        searchFunctionality(SerchInput)
    })
    $(document).on('click', '.mobileSearchWrapper button', function () {
        let SerchInput = $('.mobileSearchWrapper input').val();
        searchFunctionality(SerchInput)
    })
    $(document).on('focus', '.footerNewslatter input', function () {
        $('.newsLatterError').hide()
    })
    $(document).on('click', '.newsLatterSubmit', function () {
        let email = $('.footerNewslatter input').val();
        let emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.trim() == '') {
            $('.newsLatterError').show().html('Please Enter Your Email Address')
        } else if (emailRegx.test(email)) {
            console.log("email valid");
            $('.newsLatterError').hide()
            // your ajax code
            /* ajax before send  
             $('.footerNewslatter').css({opacity:'0.3'}) */
            //  =======================
            /* when ajax complete do it  
            $('.footerNewslatter').css({opacity:'1'}) */
        } else {
            $('.newsLatterError').show().html('Please Enter Valid Email Address')
        }
    })

    function searchFunctionality(SerchInput) {
        if (SerchInput.trim() == '') {
            $('.searchWrapper input').addClass('animate__animated animate__shakeX');
            setTimeout(() => {
                $('.searchWrapper input').removeClass('animate__animated animate__shakeX');
            }, 1200)
        } else {
            // your ajax code
        }
    }



});  // jquery function end
