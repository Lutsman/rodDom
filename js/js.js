$(document).ready(function () {
    /*owl carusel*/
    (function () {
        $sliderSimple = $('[data-role="slider"]');

        $sliderSimple.owlCarousel({
            items: 1,
            autoplay: false,
            autoplayTimeout: 4000,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 300,
            nav: true,
            dots: false,
            dotsEach: true,
            navText: false,
            loop: true,
            autoWidth: false,
            responsive: false,
            itemsScaleUp: false
        });

        /*$("#owl1").owlCarousel({
            items: 1,
            autoplay: false,
            autoplayTimeout: 4000,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 300,
            nav: true,
            dots: true,
            dotsEach: true,
            navText: false,
            loop: true,
            autoWidth: false,
            responsive: false,
            itemsScaleUp: false,
        });

        $("#owl2").owlCarousel({
            items: 1,
            autoplay: false,
            autoplayTimeout: 4000,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 300,
            nav: true,
            dots: true,
            dotsEach: true,
            navText: false,
            loop: true,
            autoWidth: false,
            responsive: false,
            itemsScaleUp: false,
            onTranslated: function () {
                slide = $('#owl2 .active .item');
                if (!$(slide).hasClass('loaded')) {

                    $.ajax({
                        method: "POST",
                        url: "js/loadslide.php",
                        data: {'index': $(slide).data('slide')},
                        success: function (data) {
                            $(slide).html(data).addClass('loaded');
                        }
                    });
                }
            }
        });*/
    })();

    /*Fancybox*/
    (function () {
        var $fancyMenu = $('[data-role="lightbox-menu"]');
        var $fancySimple = $('[data-role="lightbox"]');
        var $fancyVideo = $('[data-role="lightbox-video"]');

        $('.fancybox-modal').fancybox({
            padding: 0,
            margin: [0, 70,0,70],
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            }
        });

        $fancySimple.fancybox({
            padding: 0,
            margin: [0, 70,0,70],
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            }
        });


        /*http://jsfiddle.net/x03xqu7t/2/ отключить последнему слайду навигацию*/
        $fancyMenu.fancybox({
            padding: 0,
            loop: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function(current) {
                if (current.index === current.group.length - 1) {
                    current.arrows = false;
                }
            }
        });

        /*youtube fancy change modal on video ens*/
        (function () {
            $fancyVideo.fancybox({
                padding: 0,
                loop: false,
                tpl: {
                    closeBtn: '<span class="lightbox-close"></span>',
                    next: '<span class="lightbox-next"></span>',
                    prev: '<span class="lightbox-prev"></span>'
                },
                afterLoad: function(current) {
                    onYouTubePlayerAPIReady();
                }
            });

            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player', {
                    height: '390',
                    width: '640',
                    videoId: '0Bmhjf0rKe8',
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }

            // autoplay video
            function onPlayerReady(event) {
                event.target.playVideo();
            }

            // when video ends
            function onPlayerStateChange(event) {
                if(event.data === 0) {
                    $.fancybox({
                        href: "#popup__video-form",
                        type: null,
                        padding: 0,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        }
                    });
                    player = null;
                }
            }
        })();
    })();

    /*tea bag*/
    (function () {
        var $teaBag = $('#manager-message-bell');
        //var timer = setTimeout(showTeaBag, 10000);
        showTeaBag();

        $teaBag.on('click', function (e) {
            e.preventDefault();

            hideTeaBag();
            goToHiddenEl();
        });

        function showTeaBag() {
            $teaBag.addClass('active');
        }

        function hideTeaBag() {
            $teaBag.removeClass('active');
        }

        function goToHiddenEl() {
            var $targetEl = $($teaBag.attr('data-target'));
            $targetEl.removeClass('hidden');
            var destination = $targetEl.offset().top;
            var offset = $('.bottom-menu').height();

            if (destination < 0) {
                destination = 0;
            }

            $('html, body').animate({scrollTop: destination - offset}, "slow", function () {
                $targetEl.addClass('active');
            });
        }
    })();

    /*$(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            $(".bottom-menu").addClass("active");
        }
        else {
            $(".bottom-menu").removeClass("active");
        }
    });*/

    /*Forms*/
    (function () {
        /*request*/
        var options = {
            delegation: true,
            clearForm: true,
            resetForm: true,
            type: 'post',
            beforeSubmit: function () {
                $.fancybox.close();
            },
            success: function () {
                $.fancybox({href: "#popupThanks", type: 'inline', padding: 0});
            },
            error: function () {
                $.fancybox({href: "#popupError", type: 'inline', padding: 0});
            }
        };
        $('#form1').ajaxForm(options);
        $('#form2').ajaxForm(options);
        $('#form3').ajaxForm(options);
        $('#form4').ajaxForm(options);
        $('#form5').ajaxForm(options);
        $('#form6').ajaxForm(options);

        /*phone mask*/
        $("input[name=phone]:not(#uptocall-phone)").mask("+7 (999) 999-99-99");

        /*validation*/
        $("#form1").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form2").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form3").validate({
            rules: {
                mess: {required: true, maxlength: 300,},
            },
            messages: {
                mess: {required: "", maxlength: "",},
            }
        });
        $("#form4").validate({
            rules: {
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form5").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form6").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
                mess: {required: true, maxlength: 300,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
                mess: {required: "", maxlength: "",},
            }
        });
    })();
});


function scrollToElement(element, offset) {
    $(element).click(function (e) {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if (destination < 0) {
            destination = 0;
        }
        $('html, body').animate({scrollTop: destination - offset}, "slow");
        e.preventDefault();
    });
}
scrollToElement("a[href='#f1']", 102);
scrollToElement("a[href='#f2']", 102);
scrollToElement("a[href='#f3']", 102);
scrollToElement("a[href='#f4']", 102);
scrollToElement("a[href='#f5']", 102);
scrollToElement("a[href='#f6']", 102);
scrollToElement("a[href='#f7']", 102);


function baseName(str) {
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}

$('input[type=file]').change(function () {
    var filename = $(this).val().replace("C:\\fakepath\\", "");
    if (filename == '') {
        filename = "(Не выбранa)";
    }
    var parent = $(this).parent().parent();
    $(parent).find('.fileName').html(filename);
});


