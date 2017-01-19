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
                playVideo($('.owl-loaded .owl-item.active'));
            }
        });

        function playVideo(parent) {
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
            margin: 0,
            fitToView: false,
            width: '100%',
            height: 'auto',
            autoSize: true,
            scrolling: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function (current) {
                playVideo(current.href);
                stepForward();
            },
            afterClose: function () {
                removeFancyStep();
            }
        });

        $fancySimple.fancybox({
            padding: 0,
            margin: 0,
            fitToView: false,
            width: '100%',
            height: 'auto',
            autoSize: false,
            scrolling: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function (current) {
                playVideo(current.href);
                stepForward();
            },
            afterClose: function () {
                removeFancyStep();
            }
        });

        $fancyVideo.fancybox({
            padding: 0,
            margin: 0,
            type: 'iframe',
            width: '100%',
            height: '100%',
            autoSize: true,
            scrolling: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function () {
                stepForward();
            },
            afterClose: function () {
                removeFancyStep();
            }
        });

        $fancyMenu.fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            padding: 0,
            margin: 0,
            width: '100%',
            height: 'auto',
            autoSize: false,
            scrolling: false,
            //autoHeight: true,
            fitToView: false,
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

                    playVideo(current.href);
                } else if(current.index === 0) {
                    stepForward();
                }
            },
            afterClose: function () {
                removeFancyStep();
            }
        });

        $fancyTest.fancybox({
            padding: 0,
            margin: 0,
            fitToView: false,
            width: '100%',
            height: 'auto',
            autoSize: false,
            scrolling: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function () {
                stepForward();
            },
            afterClose: function () {
                $('#popup__calculate-cost').trigger('resetTest');
                removeFancyStep();
            }
        });

        function closeFancyOnOverlay(e) {
            var target = e.target;

            if (this !== target) return;

            $.fancybox.close();
        }

        function playVideo(parent) {
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

        /*back button managing*/
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
             $.fancybox.close();
             },*/
            success: function () {
                $.fancybox({
                    href: "#popupThanks",
                    padding: 0,
                    loop: false,
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    },
                    afterLoad: function () {
                        stepForward();
                    },
                    afterClose: function () {
                        removeFancyStep();
                    }
                });
            },
            error: function () {
                $.fancybox({
                    href: "#popupError",
                    padding: 0,
                    loop: false,
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    },
                    afterLoad: function () {
                        stepForward();
                    },
                    afterClose: function () {
                        removeFancyStep();
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
            $.ajax({
                type: form.method,
                url: form.action,
                data: $.param(formDataArr),
                success: function () {
                    $.fancybox({
                        href: "#popupThanks",
                        padding: 0,
                        loop: false,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        },
                        afterLoad: function () {
                            stepForward();
                        },
                        afterClose: function () {
                            removeFancyStep();
                        }
                    });
                },
                error: function () {
                    $.fancybox({
                        href: "#popupError",
                        padding: 0,
                        loop: false,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        },
                        afterLoad: function () {
                            stepForward();
                        },
                        afterClose: function () {
                            removeFancyStep();
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
});

/*global helpers*/
/*some unused function*/
    function baseName(str) {
        var base = new String(str).substring(str.lastIndexOf('/') + 1);
        if (base.lastIndexOf(".") != -1)
            base = base.substring(0, base.lastIndexOf("."));
        return base;
    }


