window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

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
                    //console.log( window.mobilecheck() );
                    if ( window.mobilecheck() == true ) {
                        var getTitleHeight = 55;
                    } else {
                        var getTitleHeight = 155;
                    }

                    var getMainMesssageHeight = $(this).outerHeight(),
                    getImageWrapHeight = getTitleHeight + getMainMesssageHeight,
                    calculatedViewportHeight = window.innerHeight;
                    
                    console.log(calculatedViewportHeight - getImageWrapHeight);

                    $(this).closest('.fullscreen-img-wrap').find('.inner-bg-wrap').css({
                        'height': calculatedViewportHeight - getImageWrapHeight + 'px',
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

    $.iMissYou({
        title: "Chum zrugg!",
        favicon: {
            enabled: true,
            src:'assets/favicon-unhappy.ico'
        }
    });

    function getDudeGif() {
        var xhr = $.get('https://api.giphy.com/v1/gifs/random?api_key=oqQ3Y5EvPTePdLjDXViKnbiUP9FQ7NT6&tag=lebowski&limit=1');
        var timeout;
        document.onmousemove = function(){
        clearTimeout(timeout);
        document.body.classList.remove('idle');
        timeout = setTimeout(function(){
            xhr.done(function(data) {
                console.log(data.data.embed_url);
                $('#dude-wrapper img').attr('src', data.data.image_original_url);
                // $('#dude-wrapper').css('z-index', '11');
            })
            document.body.classList.add('idle');
        }, 30000);
        }
    }
    getDudeGif();
}); //window