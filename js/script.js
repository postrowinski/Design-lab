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
    });
    
    //Zooming gallery image when mouse is on that photo
    var zoomTime = '0.7s';
    
    $('.gallery-img').hover(function () {
        
        $(this).css({
            'transition': 'background ' + zoomTime,
            'background-size': '130% 130%'
        });
    }, function () {
         $(this).css({
            'transition': 'background ' + zoomTime,
            'background-size': '100% 100%'
        });
    });
});
