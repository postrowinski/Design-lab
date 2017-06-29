$(document).ready(function () {

    function scrollTopAnimation(goTop) {
         $('html, body').animate({
            scrollTop: goTop
        }, 800);
    }
 
    //scroll website to next section
    $('.slide-down').click(function () {
        var windowHeight = $(window).height(),
            goTop = $('.hero').offset().top + windowHeight;
        
        scrollTopAnimation(goTop);
    });
    
    //Disable link in gallery section
    $('.gallery-info').find('a').click(function (e) {
        e.preventDefault();
    })
});
