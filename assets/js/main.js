$(document).ready(function(){
    $('.promos').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
            }
        }
        ]
    });
});
    //   Libreria slich utilizada