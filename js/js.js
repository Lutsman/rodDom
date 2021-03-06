/*custom script*/
/*'use strict'*/
/*костыли для owl карусели для продакшена при асинхронной загрузке стилей*/
/*var styleLoaded = false;

document.body.addEventListener('styleLoaded', function(e) {
    styleLoaded = true;
    console.log('style loaded true');
});*/

$(document).ready(function () {

    /*owl carusel*/
    (function () {
        var $sliderSimple = $('[data-role="slider"]');
        initOwl();

        /*костыли для owl карусели для продакшена при асинхронной загрузке стилей*/
        /*if (styleLoaded) {
            console.log('owl init');
            initOwl();
        } else {
            document.body.addEventListener('styleLoaded', function(e) {
                console.log('owl init');
                initOwl();
            });
        }*/

        function initOwl() {
            setTimeout(function () {
                $sliderSimple.each(function () {
                    $(this).owlCarousel({
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
                        itemsScaleUp: false,
                        onTranslated: function () {
                            playVideo($('.owl-loaded .owl-item.active'));
                        }
                    });
                });
            }, 2000);
        }



        function playVideo (parent) {
            var $video = $(parent).find('video');

            if (!$video.length) return;

            //console.log($video);
            var timer = setTimeout(function () {
                $video.each(function () {
                    //console.log(this);
                    this.play();
                });
            }, 1000);
        }
    })();

    /*Fancybox*/
    (function () {
        var $fancyMenu = $('[data-role="lightbox-menu"]');
        var $fancySimple = $('[data-role="lightbox"]');
        var $fancyVideo = $('[data-role="lightbox-video"]');
        var $fancyTest = $('[data-role="lightbox-test"]');

        $('.fancybox-modal').fancybox({
            padding: 0,
            margin: [0, 70,0,70],
            fitToView: false,
            height: 'auto',
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function(current) {
                playVideo(current.href);
            }
        });

        $fancySimple.fancybox({
            padding: 0,
            margin: [0, 70,0,70],
            fitToView: false,
            height: 'auto',
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function(current) {
                playVideo(current.href);
            }
        });

        /*http://jsfiddle.net/x03xqu7t/2/ отключить последнему слайду навигацию*/
        $fancyMenu.fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none',
            padding: 0,
            fitToView: false,
            height: 'auto',
            loop: false,
            helpers: {
                overlay: {
                    closeClick: true
                }
            },
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function(current) {
                if (current.index === current.group.length - 1) {
                    current.arrows = false;
                    current.keys.prev = {};
                    current.keys.next = {};
                    current.helpers.overlay.closeClick = false;
                    setTimeout(function () {
                        $('.fancybox-overlay').one('click', closeFancyOnOverlay);
                    }, 2000);

                    playVideo(current.href);
                    //console.dir(current);
                }
            }
        });

        $fancyTest.fancybox({
            padding: 0,
            loop: false,
            fitToView: false,
            height: 'auto',
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterClose: function() {
                $('#popup__calculate-cost').trigger('resetTest');
                //console.log('test reset triggered');
            }
        });

        function closeFancyOnOverlay(e) {
            var target = e.target;

            if (this !== target) return;

            $.fancybox.close();
        }

        function playVideo (parent) {
            var $video = $(parent).find('video');

            if (!$video.length) return;

            //console.log($video);
            var timer = setTimeout(function () {
                $video.each(function () {
                    //console.log(this);
                    this.play();
                });
            }, 1000);
        }

        /*youtube fancy change modal on video end*/
        (function () {
            var script = '<script src="http://www.youtube.com/iframe_api?enablejsapi=1" async></script>';
            $('script').eq(0).after(script);

            $fancyVideo.fancybox({
                padding: 0,
                loop: false,
                fitToView: false,
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
                    videoId: 'rOM4c0pDhvg',
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
                        type: 'inline',
                        padding: 0,
                        fitToView: false,
                        height: 'auto',
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        },
                        afterLoad: function(current) {
                            playVideo(current.href);
                        }
                    });
                }
            }
        })();
    })();

    /*tea bag*/
    (function () {
        var $teaBag = $('#manager-message-bell');
        var timer = setTimeout(showTeaBag, 10000);
        //showTeaBag();

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
        var $formNamePhone = $('[data-validate="name-phone"]');
        var $formPhone = $('[data-validate="phone"]');

        /*request*/
        var options = {
            delegation: true,
            clearForm: true,
            resetForm: true,
            type: 'post',
            /*beforeSubmit: function () {
             //$.fancybox.close();
             console.dir(arguments);
             },*/
            /*beforeSend: function () {
             console.dir(this);
             },*/
            success: function () {
                $('body').trigger('gotoThanksPage');
                /*$.fancybox({
                 href: "#popupThanks",
                 padding: 0,
                 loop: false,
                 fitToView: false,
                 height: 'auto',
                 tpl: {
                 closeBtn: '<span class="lightbox-close"></span>',
                 next: '<span class="lightbox-next"></span>',
                 prev: '<span class="lightbox-prev"></span>'
                 }
                 });*/
            },
            error: function () {
                $.fancybox({
                    href: "#popupError",
                    padding: 0,
                    loop: false,
                    fitToView: false,
                    height: 'auto',
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    }
                });
            }
        };
        $formNamePhone
            .add($formPhone)
            .ajaxForm(options);

        $('#form1').ajaxForm(options);
        $('#form2').ajaxForm(options);
        $('#form3').ajaxForm(options);
        $('#form4').ajaxForm(options);
        $('#form5').ajaxForm(options);
        $('#form6').ajaxForm(options);

        /*phone mask*/
        $("input[name=phone]:not(#uptocall-phone)").mask("+7 (999) 999-99-99");

        /*validation*/
        $formNamePhone.each(function(){
            $(this).validate({
                rules: {
                    name: {required: true, maxlength: 100},
                    phone: {required: true}
                },
                messages: {
                    name: {required: "", maxlength: ""},
                    phone: {required: ""}
                }
            });
        });
        $formPhone.each(function () {
            $(this).validate({
                rules: {
                    phone: {required: true}
                },
                messages: {
                    phone: {required: ""}
                }
            });
        });

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

        /*input type file validation*/
        $('input[type=file]').change(function () {
            var filename = $(this).val().replace("C:\\fakepath\\", "");
            if (filename == '') {
                filename = "(Не выбранa)";
            }
            var parent = $(this).parent().parent();
            $(parent).find('.fileName').html(filename);
        });
    })();

    /*set form target*/
    (function () {
        var $button = $('[data-form-location]');

        $button.on('click', setFormLocation);

        function setFormLocation() {
            var _ = $(this);
            var target = _.attr('href');
            var data = _.attr('data-form-location');

            $(target).find('input[name="whatForm"]').eq(0).val(data);
        }
    })();

    /*Yandex map*/
    (function(){
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
                        fitToView: false,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        }
                    });
                });
            }
        }
    })();

    /*test*/
    (function () {
        var $formStep1 = $('#step1__form');
        var $formStep2 = $('#step2__form');
        var $formStep4 = $('#step4__form');

        var $popUp = $('#popup__calculate-cost');
        var $forms = $popUp.find('form');
        var $steps = $popUp.find('.step');
        var $stepCounters = $popUp.find('.steps__counter span');
        var stepIndex = 0;
        var formDataArr = [];


        $popUp.on({
            'resetTest': resetTest,
            'submit': onSubmitValidForm
        });

        $formStep1.add($formStep2).on('click', 'input',  function (e) {
            validate(this.closest('form'));
        });

        $formStep4.on('blur', 'input',  function (e) {
            setTimeout(function () {
                validate(this.closest('form'))
            }.bind(this), 500);
        });

        function onSubmitValidForm(e) {
            e.preventDefault();

            var target = e.target;

            //console.log(target);

            //console.log($(target).parents('.step'));

            stepIndex = $(target).parents('.step').index();

            if (!validate(target)) return;

            if (stepIndex === 1) {
                collectFormData(target);
                nextStep();
                setTimeout(nextStep, 4200);
            } else if (stepIndex < $steps.length - 1) {
                collectFormData(target);
                nextStep();
            } else {
                collectFormData(target);
                sendRequest(target);
            }
        }
        function validate(form) {
            var valid = false;

            if (stepIndex === 3) {
                var phone = form.querySelector('input[name="phone"]');
                valid = !!phone.value;

                phone.classList.remove('valid');
                phone.classList.remove('error');

                if (!valid) {
                    phone.classList.add('error');
                } else {
                    phone.classList.add('valid');
                }
            } else {
                valid = form.querySelectorAll('input:checked').length > 0;

                if (!valid) {
                    showError(form);
                } else {
                    hideError(form);
                }
            }

            return valid;
        }
        function sendRequest(form) {
            //console.dir($.param(formDataArr));
            $.ajax({
                type: form.method,
                url: form.action,
                data: $.param(formDataArr),
                success: function (respond) {
                    //console.log(respond);
                    hideTestBtn();
                    $('body').trigger('gotoThanksPage');

                    /*$.fancybox({
                     href: "#popupThanks",
                     padding: 0,
                     loop: false,
                     fitToView: false,
                     height: 'auto',
                     tpl: {
                     closeBtn: '<span class="lightbox-close"></span>',
                     next: '<span class="lightbox-next"></span>',
                     prev: '<span class="lightbox-prev"></span>'
                     }
                     });*/
                },
                error: function () {
                    $.fancybox({
                        href: "#popupError",
                        padding: 0,
                        loop: false,
                        fitToView: false,
                        height: 'auto',
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        }
                    });
                }
            })
        }
        function collectFormData(form) {
            var dataArr = $(form).serializeArray();

            formDataArr = formDataArr.concat(dataArr);
            //console.log(formDataArr);
        }
        function nextStep() {
            if (stepIndex === $steps.length - 1) return;

            $stepCounters.eq(stepIndex).removeClass('active');
            $stepCounters.eq(stepIndex + 1).addClass('active');

            $steps.eq(stepIndex).removeClass('active');
            $steps.eq(stepIndex + 1).addClass('active');

            stepIndex++;
        }
        function showError(form) {
            var $error = $(form).find('.error-block');

            $error.fadeIn();
            /*setTimeout(function () {
             $error.fadeOut();
             }, 2000);*/
        }
        function hideError(form) {
            var $error = $(form).find('.error-block');

            $error.fadeOut();
        }
        function resetTest() {
            stepIndex = 0;

            $stepCounters.removeClass('active');
            $stepCounters.eq(0).addClass('active');

            $steps.removeClass('active');
            $steps.eq(0).addClass('active');

            $forms.each(function () {
                this.reset();
            });
        }
        function hideTestBtn() {
            $('[data-role="lightbox-test"]').hide();
        }
    })();

    /*scroller*/
    (function () {
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
    })();

    /*before leave page*/
    /*(function () {
     $(window).on('beforeunload', function (e) {
     console.log(e);
     console.dir(e);

     return;
     })
     })();*/

    /*goto thanks page*/
    (function () {
        var thanksUrl = '/form-ok/index.php';
        var userId = '123';

        $('body').on('gotoThanksPage', function () {
            var url = thanksUrl + '#' + userId;

            goToNewUrl(url);
        });

        function goToNewUrl(windowPath) {
            window.open(windowPath, '_self');
        }
    })();

});


/*orientation change*/
(function () {
    /*var overlay = $('.mobile-overlay');

    doOnOrientationChange();
    window.addEventListener('orientationchange', doOnOrientationChange);

    function doOnOrientationChange() {
        //alert('landscape' + device.landscape());
        if (device.landscape() && device.mobile()) {
            overlay.fadeIn();
            $('body').css('position', 'fixed');
            $('html').removeClass('portrait')
                .addClass('landscape');
        } else if (device.portrait() && device.mobile()) {
            overlay.fadeOut();
            $('body').css('position', '');
            $('html').removeClass('landscape')
                .addClass('portrait');
        }
    }*/
})();

/*global helpers*/
/*some unused function*/
function baseName(str) {
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}