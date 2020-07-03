$(document).ready(function(){
    
    //Nav Effect
    $('.menu a').each(function(index, element){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1000 + (index * 500));
    });

    //Header Effect
    if( $(window).width() > 800 ){
        $('header .texts').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .texts').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //Scroll Nav Element
    var about = $('#about').offset().top,
        menu = $('#saucers').offset().top,
        galery = $('#galery').offset().top,
        location = $('#location').offset().top;

    $('#btn-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about - 100
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-galery').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galery
        }, 500);
    });

    $('#btn-location').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: location 
        }, 500);
    });
});