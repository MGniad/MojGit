$('.slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
})

$('.testimonials .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


AOS.init();


