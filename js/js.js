

$(document).ready(function() {

        //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 700) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });


    $('.button-down').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 1300);
        return false;
    });
        $('.menu-toggle').click(function() {
    $('.toggle-slide').slideToggle('fast');
    setTimeout(function () {
        $('.banner').toggleClass('blur');
    }, 130);
    
    })
    $('.class-1,.class-2,.item-2,.item-3,.item-4,.item-6').mouseenter(function(e) {
        $(this).children('span').fadeIn(200);
        }).mouseleave(function(e) {
        $(this).children('span').fadeOut(200);
    });
});


