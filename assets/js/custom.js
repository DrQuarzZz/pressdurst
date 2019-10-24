$(document).ready(function() {
    new fullpage('#fullpage', {
        sectionSelector: '.section',
        normalScrollElements: '#normal-scroll',
        autoScrolling:true,
        scrollHorizontally: true
    });
    
    function interfaceHeights() {
        setTimeout(function(){
            $('.main-message').each(function(){
                var getTitleHeight = 55,
                    getMainMesssageHeight = $(this).outerHeight(),
                    getImageWrapHeight = getTitleHeight + getMainMesssageHeight;
                    // console.log(getImageWrapHeight);
                    $(this).closest('.fullscreen-img-wrap').find('.inner-bg-wrap').css({
                        'height': 'calc(100vh - ' + getImageWrapHeight + 'px)',
                        'margin-top': getTitleHeight + 'px'
                    });
            });
        }, 50);
    }
    interfaceHeights();
    $(window).on('resize', function(){
        interfaceHeights();
    });
}); // ready

$(window).on('load', function(){
    // $(window).on('scroll',function(){
    //     var offsetFromTop = $(window).scrollTop();
    //     console.log(offsetFromTop);
    // });

    // Intersection observer
    //! commented out 1
    /**var options = {
        root: null,
        rootMargin: '0px',
        threshold: .5
    }

    function handler(entries, observer) {
        for (entry of entries) {
            // console.log(entry);

            if (entry.isIntersecting) {
                // var fileNameAttr = entry.target.getAttribute('data-img');
                // console.log(fileNameAttr);
                // entry.target.style.backgroundColor = 'red';
                $('#' + entry.target.id ).css('opacity', '1');
            } else {
                $('#' + entry.target.id ).css('opacity', '0');
            }
        }
    }**/

    /* By default, invokes the handler whenever:
    1. Any part of the target enters the viewport
    2. The last part of the target leaves the viewport */

    //! commented out 2
    /*let observer = new IntersectionObserver(handler, options);
    observer.observe(document.getElementById("slide-1"));
    observer.observe(document.getElementById("slide-2"));
    observer.observe(document.getElementById("slide-3"));
    observer.observe(document.getElementById("slide-4"));
    observer.observe(document.getElementById("slide-5"));
    observer.observe(document.getElementById("slide-6"));
    observer.observe(document.getElementById("slide-7"));
    observer.observe(document.getElementById("slide-8"));
    observer.observe(document.getElementById("slide-9"));
    observer.observe(document.getElementById("slide-10"));
    observer.observe(document.getElementById("slide-11"));
    observer.observe(document.getElementById("slide-12"));
    observer.observe(document.getElementById("slide-13"));
    observer.observe(document.getElementById("slide-14"));
    observer.observe(document.getElementById("slide-15"));
    observer.observe(document.getElementById("slide-16"));
    observer.observe(document.getElementById("slide-17"));
    observer.observe(document.getElementById("slide-18"));
    observer.observe(document.getElementById("slide-19"));
    observer.observe(document.getElementById("slide-20"));
    observer.observe(document.getElementById("slide-21"));*/

    //progress bar
    /*document.addEventListener("scroll", function() {
          var scrollTop =
            document.documentElement["scrollTop"] || document.body["scrollTop"];
          var scrollBottom =
            (document.documentElement["scrollHeight"] ||
              document.body["scrollHeight"]) - document.documentElement.clientHeight;
          scrollPercent = scrollTop / scrollBottom * 100 + "%";
          document
            .getElementById("progress")
            .style.setProperty("--scroll", scrollPercent);
        },
        { passive: true }
      );*/
    
    // lottie web intro
    var elem = document.getElementById('lottie-elem');
    lottie.loadAnimation({
        container: elem, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animation/data.json' // the path to the animation json
      });
      /*
    setTimeout(function(){
        $("html, body").animate({ scrollTop: $(window).height() }, 1000);
        // $('.corner-claim').each(function(){
        //     $(this).css('opacity', '1');
        // });
        $('#slide-1 .main-message').css('opacity', '1');
    }, 8500);
    */

    $('#infos').on('click', function(e){
        e.preventDefault();
        $(this).closest('#fixed-title-section').find('p').slideToggle();
        if ( $(this).hasClass('opened') ) {
            $(this).removeClass('opened');
            $(this).html('Alle Infos')
        } else {
            $(this).addClass('opened');
            $(this).html('&#10007');
        }
    });

    $('#anmeldung').on('click', function(e){
        e.preventDefault();
        console.log('well at least that worked');
        // $(this).closest('#anmelden-wrapper').find('#normal-scroll').slideToggle();
        if ( $(this).closest('#anmelden-wrapper').hasClass('anmeldung-open') ) {
            $(this).closest('#anmelden-wrapper').removeClass('anmeldung-open');
            $(this).html('jetzt ahmelde…')
        } else {
            $(this).closest('#anmelden-wrapper').addClass('anmeldung-open');
            $(this).html('&#10007');
        }
    });
}); //window