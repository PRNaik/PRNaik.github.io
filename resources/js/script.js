$(document).ready(function() {
   
    /* For the sticky navigation */ 
    $('.js--section-features').waypoint(function(direction) {
       if(direction == "down") {
           $('nav').addClass('sticky');  /* we can remove the class = "sticky from nav element coz this statement will add it dynamically" */
       } else {
           $('nav').removeClass('sticky');
       }
}, {
  offset: '60px;'
});
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); /* animate function will help to scroll to top of plans sections in 1sec. Note that $('.js--section-plans').offset().top will take to the top of the section. This value is just stored in scrollTop for understanding purpose */ 
    });
    
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    /* Navigation Scroll */
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    
    /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile nav */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');  /* stores the <i> present inside class js--nav-icon inside icon variable */
        
        nav.slideToggle(200); /* time required to create the toggle effect */
        
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});


   