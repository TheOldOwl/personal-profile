

$( document ).ready(function() {
    // $('.fa').hover(function() {
    //     $(this).toggleClass('sm-on', 300);
    //     $('.fa').not(this).toggleClass('sm-not-on', 200)
    // });
    const fas = $('.social-media a')

    fas
        .mouseenter(function() {
            $(this).addClass('sm-on')
            fas.not(this).addClass('sm-not-on')
        })
        .mouseleave(function() {
            $(this).removeClass('sm-on')
            fas.not(this).removeClass('sm-not-on')
        })

        $('.cv-container').mouseenter(function() {
            $('.cv-container').addClass('on-top');
        });

        $('.portfolio-container').mouseenter(function() {    
            $('.cv-container').removeClass('on-top');
        });
    
    //2

    // $('.second-container').hover(function() {
    //     $('.second-container').toggleClass('second-container-hover')
    //     $('.main-container').toggleClass('first-link')
    // });
    // //3

    // $('.third-container').hover(function() {
    //     $('.third-container').toggleClass('third-container-hover')
    //     $('.main-container').toggleClass('second-link')
        
    // });

    // //4

    // $('.fourth-container').hover(function() {
    //     $('.fourth-container').toggleClass('fourth-container-hover', 200)
    // });

    // //5

    // $('.fifth-container').hover(function() {
    //     $('.fifth-container').toggleClass('fifth-container-hover', 200)
    // });
});