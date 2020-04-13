$(document).ready(function () {
    //foundation
    // $(document).foundation();
    // slick
    
    $('.for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.nav1',
        adaptiveHeight: false,
        // variableWidth: true,
        zindex: 1,
        // infinite: true
    });
    $('.nav1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.for1',
        dots: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        variableWidth: true,
        // adaptiveHeight: false,
        zindex: 100,
        swipe: true
    });
    $('.for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.nav2',
        adaptiveHeight: false,
        // variableWidth: true,
        zindex: 1,
        // infinite: true
    });
    $('.nav2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.for2',
        dots: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        variableWidth: true,
        // adaptiveHeight: false,
        zindex: 100,
        swipe: true
    });
});