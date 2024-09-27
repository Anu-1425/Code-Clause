const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
};

$(document).ready(function() {
    const $nav = $('.nav');
    const $toggleCollapse = $('.toggle-collapse');
    const $carouselSection = $('.carousel-section'); // Carousel section to show

    // After clicking on toggle menu
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });

    // When the Explore button is clicked
    $('.explore-button').click(function() {
        // Show the carousel section
        $carouselSection.slideDown(); // You can use slideToggle() if you want a toggle effect
        $('html, body').animate({
            scrollTop: $carouselSection.offset().top // Scroll to carousel section
        }, 800); // Adjust duration as needed
    });

    // Initialize owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // AOS instance
    AOS.init();
});
