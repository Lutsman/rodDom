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
                afterLoad: onLightboxOpen,
                beforeClose: onLightboxClose
            });

            var player;

            function onLightboxOpen() {
                if(player) {
                    player.playVideo();
                    return;
                }

                onYouTubeIframeAPIReady();
            }

            function onLightboxClose() {
                if (!player) return;
                //console.dir(player);
                //player.stopVideo();
                $('#player').replaceWith('<div id="player"></div>');
                player = null;
                //console.log('closed');
                //console.log($('#player'));
            }

            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                    height: '390',
                    width: '640',
                    videoId: '0Bmhjf0rKe8',
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });

                //console.dir(player);
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

    /*Yandex map*/
    /*(function(){
        if (!document.getElementById('map')) return;

        var firstScript = document.querySelectorAll('script')[0];
        var script = document.createElement('script');
        var placemarks = {
            0: {
                coords: [55.76127956896109,37.67980749999999],
                hintContent: 'Оформление выписки из роддома'
            }
        };
        var center = [55.76127956896109,37.67980749999999];
        var zoom = 17;

        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        firstScript.parentNode.insertBefore(script, firstScript);

        script.addEventListener('load', function () {
            ymaps.ready(init);
        });

        function init(){
            var myMap = new ymaps.Map('map', {
                center: center,
                zoom: zoom
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable('scrollZoom');

            for (var currPlacemark in placemarks) {
                var placemark = new ymaps.Placemark(placemarks[currPlacemark].coords, {
                    hintContent: placemarks[currPlacemark].hintContent
                }, {
                    iconLayout: "default#image",
                    iconImageHref: "./images/mark_orange.png",
                    iconImageSize: [50, 50],
                    iconImageOffset: [-25, -50]
                });

                myMap.geoObjects.add(placemark);

                placemark.events.add('click', function (e) {
                    e.preventDefault();

                    $.fancybox({
                        href: '#popup__map',
                        type: null,
                        padding: 0,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        }
                    });
                });
            }
        }
    })();*/

    /*test*/
    (function () {
        var $popUp = $('#popup__calculate-cost');
        var $steps = $popUp.find('.step');
        var $stepCounters = $popUp.find('.steps__counter span');
        var stepIndex = 0;

        $popUp.on('submit', function (e) {
            e.preventDefault();

            var target = e.target;

            console.log(target);
            //if (!validate(target)) return;


            stepIndex = $(target).parent('.step').index();

            if (stepIndex === 1) {
                nextStep();
                setTimeout(nextStep, 4200);
            } else if (stepIndex < $steps.length) {
                collectFormData(target);
                nextStep();
            } else {
                collectFormData(target);
                sendRequest();
            }
        });

        function validate(form) {

            return true;
        }
        function sendRequest() {

        }
        function collectFormData(form) {

        }
        function nextStep() {
            if (stepIndex === $steps.length - 1) return;

            console.log('next step');
            console.log(stepIndex);
            console.log($steps.length);
            console.log(stepIndex === $steps.length - 1);

            $stepCounters[stepIndex].classList.remove('active');
            $stepCounters[stepIndex + 1].classList.add('active');

            $steps[stepIndex].classList.remove('active');
            $steps[stepIndex + 1].classList.add('active');

            stepIndex++;
        }
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

