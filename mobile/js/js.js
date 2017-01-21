$(document).ready(function () {
    /*owl carusel*/
    (function () {
        var $sliderSimple = $('[data-role="slider"]');

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
            itemsScaleUp: false,
            onTranslated: function () {
                var $activeSlide = $('.owl-loaded .owl-item.active');

                if ($activeSlide.has('video').length) {
                    $activeSlide.trigger('playVideo');
                }
            }
        });
    })();

    /*Fancybox*/
    (function () {
        var $fancyMenu = $('[data-role="lightbox-menu"]');
        var $fancySimple = $('[data-role="lightbox"]');
        var $fancyVideo = $('[data-role="lightbox-video-embed"]');
        var $fancyTest = $('[data-role="lightbox-test"]');

        $('.fancybox-modal').fancybox({
            padding: 0,
            margin: 0,
            width: '100%',
            height: 'auto',
            autoSize: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function (current) {
                if ($(current.href).has('video').length) {
                    $(current.href).trigger('playVideo');
                }
                $(document).trigger('popupOpened');
            },
            afterClose: function () {
                $(document).trigger('popupClosed');
            }
        });

        $fancySimple.fancybox({
            padding: 0,
            margin: 0,
            width: '100%',
            height: 'auto',
            autoSize: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function (current) {
                if ($(current.href).has('video').length) {
                    $(current.href).trigger('playVideo');
                }
                $(document).trigger('popupOpened');
            },
            afterClose: function () {
                $(document).trigger('popupClosed');
            }
        });

        $fancyVideo.fancybox({
            padding: 0,
            margin: 0,
            type: 'iframe',
            width: '100%',
            height: '100%',
            autoSize: true,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function () {
                $(document).trigger('popupOpened');
            },
            afterClose: function () {
                $(document).trigger('popupClosed');
            }
        });

        $fancyMenu.fancybox({
            //prevEffect: 'fade',
            //nextEffect: 'fade',
            padding: 0,
            margin: 0,
            width: '100%',
            height: 'auto',
            autoSize: false,
            loop: false,
            helpers: {
                overlay: {
                    closeClick: true
                },
                media: true
            },
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function (current) {
                if (current.index === current.group.length - 1) {
                    current.arrows = false;
                    current.keys.prev = {};
                    current.keys.next = {};
                    current.helpers.overlay.closeClick = false;
                    setTimeout(function () {
                        $('.fancybox-overlay').one('click', closeFancyOnOverlay);
                    }, 2000);

                    //console.log($(current.href).has('video').length);
                    $(current.href).trigger('playVideo');
                } else if(current.index === 0) {
                    $(document).trigger('popupOpened');
                }
            },
            afterClose: function () {
                $(document).trigger('popupClosed');
            }
        });

        $fancyTest.fancybox({
            padding: 0,
            margin: 0,
            width: '100%',
            height: 'auto',
            autoSize: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function () {
                $(document).trigger('popupOpened');
            },
            afterClose: function () {
                $('#popup__calculate-cost').trigger('resetTest');
                $(document).trigger('popupClosed');
            }
        });

        /*success and error forms*/
        /*prevent scroll*/
        $(document).on({
            'postSuccess': function (e) {
                $.fancybox({
                    href: "#popupThanks",
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    height: 'auto',
                    autoSize: false,
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    },
                    afterLoad: function () {
                        $(document).trigger('popupOpened');
                    },
                    afterClose: function () {
                        $(document).trigger('popupClosed');
                    }
                });
            },
            'postError': function (e) {
                $.fancybox({
                    href: "#popupError",
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    height: 'auto',
                    autoSize: false,
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    },
                    afterLoad: function () {
                        $(document).trigger('popupOpened');
                    },
                    afterClose: function () {
                        $(document).trigger('popupClosed');
                    }
                });
            },
            'popupOpened': function() {
                $("body").css({'position':'fixed'});
            },
            'popupClosed': function() {
                $("body").css({'position':''});
            },
            'popupMapOpen': function() {
                $.fancybox({
                    href: '#popup__map',
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    height: 'auto',
                    autoSize: false,
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    },
                    afterLoad: function () {
                        $(document).trigger('popupOpened');
                    },
                    afterClose: function () {
                        $(document).trigger('popupClosed');
                    }
                });
            }
        });


        function closeFancyOnOverlay(e) {
            var target = e.target;

            if (this !== target) return;

            $.fancybox.close();
        }
    })();

    /*tea bag*/
    (function () {
        var $teaBag = $('#manager-message-bell');
        var timer = setTimeout(showTeaBag, 0);
        //showTeaBag();

        $teaBag.on('click', function (e) {
            e.preventDefault();

            hideTeaBag();
            goToHiddenEl();
        });

        function showTeaBag() {
            $teaBag.addClass('active')
                .trigger('playVideo');
        }

        function hideTeaBag() {
            $teaBag.removeClass('active')
                .trigger('pauseVideo');
        }

        function goToHiddenEl() {
            var $targetEl = $($teaBag.attr('data-target'));
            $targetEl.removeClass('hidden');
            var destination = $targetEl.offset().top;
            var offset = $('.bottom-menu').height();
            var isplayed = false;

            if (destination < 0) {
                destination = 0;
            }

            $('html, body').animate({scrollTop: destination - offset}, "slow", function () {
                if (isplayed) return;

                isplayed = true;
                $targetEl.addClass('active')
                    .trigger('playVideo');
                console.log('play video');
                //alert('trigger play video');
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
            success: function () {
                $(document).trigger('postSuccess');
            },
            error: function () {
                $(document).trigger('postError');
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

        /*phone mask*/
        $("input[name=phone]").mask("+7 (999) 999-99-99");

        /*validation*/
        $formNamePhone.each(function () {
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
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form2").validate({
            rules: {
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form3").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form4").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                mess: {required: true, maxlength: 300,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                mess: {required: "", maxlength: "",},
            }
        });
        $("#form5").validate({
            rules: {
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                phone: {required: "", maxlength: "",},
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
            $.ajax({
                type: form.method,
                url: form.action,
                data: $.param(formDataArr),
                success: function () {
                    $(document).trigger('postSuccess');
                    hideTestBtn();
                },
                error: function () {
                    $(document).trigger('postError');
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

    /*crazy scroller (модификация "Русский бунт")*/
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

        scrollToElement("a[href='#f1']", 30);
        scrollToElement("a[href='#f2']", 30);
        scrollToElement("a[href='#f3']", 25);
        scrollToElement("a[href='#f4']", 30);
        scrollToElement("a[href='#f5']", 30);
        scrollToElement("a[href='#f6']", 30);
        scrollToElement("a[href='#f8']", 30);
    })();

    /*magic menu*/
    (function () {
        $('[data-role="open-menu"]').click(showMenu);

        $('[data-role="close-menu"]').click(hideMenu);

        $('.list-menu').on('click', 'li', hideMenu);

        /*$(".link1").click(function (e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        });
        $(".link2").click(function (e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        });
        $(".link3").click(function (e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        });
        $(".link4").click(function (e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        });
        $(".link6").click(function (e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        });
        $(".link7").click(function (e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        });
        $(".link8").click(function (e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        });*/

        /*jQuery(function ($) {
            $(document).mouseup(function (e) {
                var div = $("#close-menu.active");
                if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                    $(".list-menu").removeClass('active');
                    $(".menu-button").removeClass('active');
                }
            });
        });*/

        function showMenu(e) {
            $(".list-menu").toggleClass('active');
            $(".menu-button").addClass('active');
            e.preventDefault();
        }

        function hideMenu(e) {
            $(".list-menu").removeClass('active');
            $(".menu-button").removeClass('active');
            e.preventDefault();
        }

    })();

    /*hidden block openers*/
    (function () {
        $(".moreservices").click(function (e) {
            $(".block-service").removeClass('active');
            $(".block-service").addClass('active');
            $(".moreservices").addClass('active');
            e.preventDefault();
        });

        $(".moretext").click(function (e) {
            $(".block-text").removeClass('active');
            $(".block-text").addClass('active');
            $(".moretext").addClass('active');
            e.preventDefault();
        });

        $(".opencontacts").click(function (e) {
            $(".contacts").toggleClass('active');
            e.preventDefault();
        });
    })();

    /*back button managing*/
    (function () {
        $(document).on({
            'popupOpened': stepForward,
            'popupClosed': removeFancyStep,
        });

        function stepForward() {
            //if (window.location.hash === '#popup_opend') return;

            window.location.hash = "popup_opend";

            window.addEventListener('hashchange', stepBack);
        }

        function stepBack() {
            if (window.location.hash === '#popup_opend') return;

            $.fancybox.close();
            window.removeEventListener('hashchange', stepBack);
        }

        function removeFancyStep() {
            window.removeEventListener('hashchange', stepBack);
            //console.log(window.location.hash);

            /*if (window.location.hash === '#popup_opend') {
             window.location.hash = '';
             console.log(window.location.hash);


             }*/
        }
    })();

    /*Yandex map*/
    (function(){
        if (!document.getElementById('yaMap')) return;

        var firstScript = document.querySelectorAll('script')[0];
        var script = document.createElement('script');
        var placemarks = {
            0: {
                coords: [55.76127956896109,37.67980749999999],
                hintContent: 'Оформление выписки из роддома'
            }
        };
        var center = [55.76127956896109,37.67980749999999];
        var zoom = 15;

        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        firstScript.parentNode.insertBefore(script, firstScript);

        script.addEventListener('load', function () {
            ymaps.ready(init);
        });

        function init(){
            var myMap = new ymaps.Map('yaMap', {
                center: center,
                zoom: zoom
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('drag');

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

                placemark.events.add(['click', 'touch'], function (e) {
                    e.preventDefault();
                    console.log('click');

                    $(document).trigger('popupMapOpen');
                });
                /*placemark.events.add('touch', function (e) {
                    e.preventDefault();

                    console.log('touch');
                    $(document).trigger('popupMapOpen');
                });*/
            }
        }
    })();

    /*/!*html player*!/
    (function () {
        $(document).on({
            'playVideo': onPlayVideo,
            //'canplay': onCanPlay
        });

        document.addEventListener('canplay', onCanPlay);

        document.querySelector('.calculate-cost video').addEventListener('canplay', onCanPlay);

        function onCanPlay(e) {
            var target = e.target;

            target.setAttribute('data-ready', 'true');
            console.log('can play');
            console.log(this);
        }

        function onPlayVideo(e, videoParent) {
            playVideo(videoParent);
        }

        function playVideo(parent) {
            var $video = $(parent).find('video');

            if (!$video.length) return;

            //console.log($video);
            var timer = setTimeout(function () {
                $video.each(function () {
                    if (this.paused) {
                        this.play();
                    }
                });
            }, 500);
        }
    })();*/
});


/*html player*/
(function () {
    //alert('hello dolly');
    var $autoplayedVideo = $('[data-role="autoplay"]');
    //var $video = $('video');



    $('#htmlPlayer').mediaelementplayer({
        pluginPath: "mediaelement/",
        success: function(mediaElement, originalNode) {
        // do things
        console.log('hello');
        console.dir(arguments);
    }});

// To access player after its creation through jQuery use:
    //var playerId = $('#mediaplayer').closest('.mejs-container').attr('id');
    //var player = mejs.players[playerId];

    //console.dir(player);
// With iOS (iPhone), since it defaults always to QuickTime, you access the player directly;
// i.e., if you wanna exit fullscreen on iPhone using the player, use this:
    /*var player = $('#mediaplayer')[0];
    player.webkitExitFullScreen();*/






    $(document).on({
        'playVideo': onPlayVideo,
        'pauseVideo': onPauseVideo
    });

    //$video.on('canplay', onCanPlay);
    //$autoplayedVideo.one('canplay', onPlayVideo);


    function onCanPlay(e) {
        var target = e.target;

        //console.dir(e);

        target.setAttribute('data-ready', 'true');
        playVideo(target);
        //console.log('can play');
        //console.log(this);
    }

    /*function autoplay() {
        playVideo(this);
    }*/

    function onPlayVideo(e) {
        //loadNPlay(e.target);
        playVideo(e.target);
    }

    function onPauseVideo(e) {
        pauseVideo(e.target);
    }

    function playVideo(parent) {
        var $video = $(parent).is('video') ? $(parent) : $(parent).find('video');

        if (!$video.length) return;

        console.log(parent);
        console.log($video);
        //alert('video knock out');
        //console.log($video);
        var timer = setTimeout(function () {
            $video.each(function () {

                this.play();
                /*if (this.paused) {
                    this.play();
                }*/
            });
        }, 500);
    }

    function pauseVideo(parent) {
        var $video = $(parent).is('video') ? $(parent) : $(parent).find('video');

        if (!$video.length) return;

        $video.each(function () {
            if (!this.paused) {
                this.pause();
            }
        });
    }

    function loadNPlay(parent) {
        var $video = $(parent).is('video') ? $(parent) : $(parent).find('video');

        $video.each(function () {
            this.load();

            $(this).one('canplay', playVideo.bind(this, this));
        })
    }
})();

/*global helpers*/
/*some unused function*/
    function baseName(str) {
        var base = new String(str).substring(str.lastIndexOf('/') + 1);
        if (base.lastIndexOf(".") != -1)
            base = base.substring(0, base.lastIndexOf("."));
        return base;
    }


