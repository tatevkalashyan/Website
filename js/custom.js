// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('header-up');
        }
    }

    lastScrollTop = st;
}


// job poster and rewards aside toggled on click
$(document).on("mouseover",".job-poster-aside",function() {
    $(this).addClass("show");
});

$(document).on("mouseleave",".job-poster-aside",function() {
    $(this).removeClass("show");
});
$(document).on("mouseover",".rewards-aside",function() {
    $(this).addClass("show");
    
});
$(document).on("mouseleave",".rewards-aside",function() {
    $(this).removeClass("show");
});



$('.slider-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    dots: false,
    responsive: [
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

