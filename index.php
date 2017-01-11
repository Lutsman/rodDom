<?php
require 'mobile-detect.php';
$detect = new Mobile_Detect;
if (!isset($_GET['full'])) {
    if ($detect->isTablet() || isset($_GET['t'])) {
        require 'tablet/index.php';
        exit;
    } elseif ($detect->isMobile() || isset($_GET['m'])) {
        require 'mobile/index.php';
        exit;
    }
}
ob_start(); ?>
    <!DOCTYPE html>
    <!--[if lt IE 7]>
    <html lang="ru" class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
    <!--[if IE 7]>
    <html lang="ru" class="lt-ie9 lt-ie8"><![endif]-->
    <!--[if IE 8]>
    <html lang="ru" class="lt-ie9"><![endif]-->
    <!--[if gt IE 8]><!-->
    <html lang="ru">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <?php /* require_once $_SERVER['DOCUMENT_ROOT'].'/mobile-detect.php';
		$detect = new Mobile_Detect;
		if($detect->isMobile()) { echo '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">'; } */
        ?>
        <title>ВЫПИСКА ИЗ РОДДОМА "ПОД КЛЮЧ" - ВЕСЬ ГЕМОРРОЙ МЫ БЕРЕМ НА СЕБЯ! Твоя задача только ЗВОНИТЬ ВСЕМ ДРУЗЬЯМ -
            приглашать на праздник!</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <meta name="copyright" content="(c)">
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <meta name="format-detection" content="telephone=no"/>
        <meta name="format-detection" content="address=no"/>
        <meta http-equiv="x-rim-auto-match" content="none">
        <meta name="HandheldFriendly" content="True"/>
        <meta http-equiv="cleartype" content="on"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta http-equiv="imagetoolbar" content="no"/>
        <meta http-equiv="msthemecompatible" content="no"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

        <!--Styles-->
        <!--<style><?php /*echo file_get_contents('sass/style.css'); */ ?></style>-->
        <!--<style><?php /*echo file_get_contents('compile/compile.css'); */ ?></style>-->
        <link rel="stylesheet" href="sass/style.css">

    </head>
    <body>
    <div class="globalWrapper cf">
        <a id="vipiska"></a>
        <div class="header cf">
            <div class="top">
                <div class="resize cf">
                    <div class="fll">
                        <h1 class="text_bebasreg txt_46 yellow">Мужик - МЫ ТЕБЕ ПОМОЖЕМ!</h1>
                    </div>
                    <div class="flr">
                        <div class="text">
                            <p class="text_bebasreg white txt_46"><a class="topphone" href="#popup__call-back">+7
                                    (926) 763-35-49</a></p>
                            <div class="cf"></div>
                            <!-- <div class="share_block">
                                <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,viber,whatsapp"></div>
                            </div> -->
                            <div class="cf"></div>

                        </div>
                        <div class="flr">
                            <a href="#popup1" class="fancybox-modal bbox">Перезвоните мне!</a>

                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-menu">
                <div class="resize">
                    <ul class="tac">
                        <li>
                            <a href="#popup__rates">Тарифы<span></span></a>
                        </li>
                        <li>
                            <a href="#popup__services1">Услуги<span></span></a>
                        </li>
                        <li>
                            <a href="#popup__examples1">Примеры работ<span></span></a>
                        </li>
                        <li>
                            <a href="#f7">Контакты<span></span></a>
                        </li>
                        <li class="double-string">
                            <p>+7 (926) 763-35-49</p>
                            <a href="#popup__call-back">Заказать звонок</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="firstscreen cf">
            <div class="resize cf">
                <h1 class="txt_86 yellow text_bebasreg">Оформление Выписки из Роддома</h1>
                <h2 class="txt_40 text_bebasreg white">ВСЮ ПОДГОТОВКУ МЫ БЕРЕМ НА СЕБЯ!</h2>
                <form action="mailer.php" method="post" id="form1" class="flr bbox">
                    <p>Введите Ваше имя</p>
                    <input type="text" name="name">
                    <p>Введите Ваш номер телефона</p>
                    <input type="text" name="phone">
                    <input type="submit" class="trans btn_all" value="Заказать оформление!"
                           onclick="yaCounter36217330.reachGoal('ORDER_FORM'); return true;">
                    <input type="hidden" name="whatForm" value="Форма Заказать оформление! - первый экран">
                </form>
                <div class="cf"></div>
                <ul class="tac">
                    <li class="wow animate fadeInLeft" data-wow-delay="0.3s">
                        <img src="images/li1-1.png" width="38" height="46" alt="">
                        <h3>Горят сроки выписки из роддома?</h3>
                        <p>Организуем на следующий день!</p>
                    </li>
                    <li class="wow animate fadeInLeft" data-wow-delay="0.6s">
                        <img src="images/li1-2.png" width="49" height="47" alt="">
                        <h3>Дорогой, хочу что-то необычное!</h3>
                        <p>Креатив обеспечен</p>
                    </li>
                    <li class="wow animate fadeInLeft" data-wow-delay="0.9s">
                        <img src="images/li1-3.png" width="46" height="46" alt="">
                        <h3>Нет времени все<br/>за всеми проверять?</h3>
                        <p>Организовываем<br/>выписки более 3 лет</p>
                    </li>
                    <li class="wow animate fadeInLeft" data-wow-delay="1.2s">
                        <img src="images/li1-4.png" width="47" height="44" alt="">
                        <h3>Ограничен бюджет?<br/><br/></h3>
                        <p>Оформление выписки <br/>от 7.900 руб.!</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="more360 cf">
            <a id="f3"></a>
            <div class="resize cf">
                <a id="prices"></a><a id="catalogs"></a><a id="photos"></a>
                <h2 class="text_bebasreg txt_40 black">Мы организовали более <span class="txt_86">360 выписок!</span>
                    Как это было:</h2>
                <div class="owl-carousel" id="owl2">
                    <div class="item loaded" data-slide="0">
                        <div class="col">
                            <div class="block medium">
                                <a href="images/portfolio-1.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-1-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                            <div class="block medium">
                                <a href="images/portfolio-2.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-2-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                            <div class="block medium">
                                <a href="images/portfolio-3.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-3-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="block medium">
                                <a href="images/portfolio-4.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-4-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                            <div class="block medium">
                                <a href="images/portfolio-5.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-5-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                            <div class="block medium">
                                <a href="images/portfolio-6.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-6-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="block medium">
                                <a href="images/portfolio-7.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-7-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                            <div class="block medium">
                                <a href="images/portfolio-8.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-8-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                            <div class="block medium">
                                <a href="images/portfolio-9.jpg" class="fancybox-modal" rel="gal1">
                                    <img src="images/portfolio-9-small.jpg" width="250" height="200" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="item" data-slide="1">
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-10.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-11.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-12.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-13.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-14.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-15.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-16.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-17.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-18.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                    </div>
                    <div class="item" data-slide="2">
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-19.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-20.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-21.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-22.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-23.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-24.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-25.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-26.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-27.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                    </div>
                    <div class="item" data-slide="3">
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-28.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-29.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-30.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-31.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-32.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-33.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-34.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-35.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-36.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                    </div>
                    <div class="item" data-slide="4">
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-37.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-38.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-39.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-40.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-41.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-42.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-43.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-44.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-45.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                    </div>
                    <div class="item" data-slide="5">
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-46.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-47.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-48.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-49.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-50.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-51.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-52.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-53.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-54.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                    </div>
                    <div class="item" data-slide="6">
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-55.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-56.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-57.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-58.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-59.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-60.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                        <div class="col">
                            <div class="block medium"><a href="images/portfolio-61.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-62.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                            <div class="block medium"><a href="images/portfolio-63.jpg" class="fancybox-modal"
                                                         rel="gal1"></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="details cf">
            <div class="resize cf">
                <p class="txt_36">Все подробности по организации выписки из роддома: <a href="callto:+79267633549">+7
                        (926) 763-35-49</a></p>
            </div>
        </div>

        <div class="video cf">
            <div class="resize cf">
                <iframe width="940" height="529" src="https://www.youtube.com/embed/r7nzvCrscXg?rel=0" frameborder="0"
                        allowfullscreen></iframe>

                <iframe width="463" height="260" src="https://www.youtube.com/embed/FJe6Gd61PvQ" frameborder="0"
                        allowfullscreen style="margin-right: 10px;margin-top: 5px;"></iframe>
                <iframe width="463" height="260" src="https://www.youtube.com/embed/K8jfiJj89lE" frameborder="0"
                        allowfullscreen></iframe>

                <iframe width="463" height="260" src="https://www.youtube.com/embed/ZvvRSJWRzbE" frameborder="0"
                        allowfullscreen style="margin-right: 10px;margin-top: 5px;"></iframe>
                <iframe width="463" height="260" src="https://www.youtube.com/embed/t5D6J-Jg1v8" frameborder="0"
                        allowfullscreen></iframe>

                <iframe width="463" height="260" src="https://www.youtube.com/embed/YLLc6-nDuX0" frameborder="0"
                        allowfullscreen style="margin-right: 10px;margin-top: 5px;"></iframe>
                <iframe width="463" height="260" src="https://www.youtube.com/embed/AVyHR_eDrBo" frameborder="0"
                        allowfullscreen></iframe>

                <iframe width="463" height="260" src="https://www.youtube.com/embed/0KQK6vfZbNk" frameborder="0"
                        allowfullscreen style="margin-right: 10px;margin-top: 5px;"></iframe>
                <iframe width="463" height="260" src="https://www.youtube.com/embed/r79FLwjbBEI" frameborder="0"
                        allowfullscreen></iframe>

                <iframe width="463" height="260" src="https://www.youtube.com/embed/GsFAzqH6meg" frameborder="0"
                        allowfullscreen style="margin-right: 10px;margin-top: 5px;"></iframe>
                <iframe width="463" height="260" src="https://www.youtube.com/embed/VqSt6ehFlog" frameborder="0"
                        allowfullscreen></iframe>
            </div>
        </div>

        <div class="details cf">
            <div class="resize cf">
                <p class="txt_36">Все подробности по организации выписки из роддома: <a href="callto:+79267633549">+7
                        (926) 763-35-49</a></p>
            </div>
        </div>

        <div class="price cf">
            <a id="f2"></a>
            <div class="resize cf">
                <h2 class="text_bebasreg txt_86 white">Мужик - выбери подходящий тариф!</h2>
                <div href="#popup1" title="узнать" class="content fancybox-modal" data-wow-delay="0.3s">
                    <h3>«Мини»</h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>50 шаров к роддому или в квартиру</li>
                    </ul>
                    <div class="line"></div>
                    <h4>Подарок!</h4>
                    <h5>Букет из шаров с гелием</h5>
                    <p>Цена <span>9 900 рублей</span></p>
                    <h6>7 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
                <div class="block bl2 bbox wow animate fadeInRight" data-wow-delay="0.6s">
                    <h3>«Стандарт»</h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>Видеооператор</li>
                        <li>50 шаров к роддому или в квартиру</li>
                    </ul>
                    <div class="line"></div>
                    <h4>Подарок!</h4>
                    <h5>Метровый воздушный медведь</h5>
                    <p>Цена <span>14 900 рублей</span></p>
                    <h6>12 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
                <div class="block bl3 bbox wow animate fadeInRight" data-wow-delay="0.9s">
                    <h3><span>«Оптимальный»</span></h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>Видеооператор</li>
                        <li>50 шаров к роддому или в квартиру</li>
                        <li>Оформление авто лентами и магнитами</li>
                        <li>Оформление квартиры шарами и гирляндами</li>
                    </ul>
                    <div class="line" style="margin-top:50px;"></div>
                    <h4>Подарок!</h4>
                    <h5>Метровый воздушный медведь</h5>
                    <p style="margin-top:20px;">Цена <span>22 900 рублей</span></p>
                    <h6>20 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
                <div class="block bl4 bbox wow animate fadeInRight" data-wow-delay="1.2s">
                    <h3>«Престижный»</h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>Видеооператор</li>
                        <li>50 шаров к роддому или в квартиру</li>
                        <li>Оформление авто лентами и магнитами</li>
                        <li>Оформление квартиры шарами и гирляндами</li>
                        <li>Скрипач или саксофонист на выбор</li>
                        <li>Ростовая кукла</li>
                    </ul>
                    <div class="line" style="margin-top:50px;"></div>
                    <h4>2 ПОДАРКА!</h4>
                    <h5 style="font-size:22px;">Букет из шаров с гелием</h5>
                    <h5 style="font-size:22px;margin-top:7px;">Метровый воздушный медведь</h5>
                    <p style="margin-top:15px;">Цена <span>34 900 рублей</span></p>
                    <h6>29 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
            </div>
        </div>

        <div class="details cf">
            <div class="resize cf">
                <p class="txt_36">Все подробности по организации выписки из роддома: <a href="callto:+79267633549">+7
                        (926) 763-35-49</a></p>
            </div>
        </div>

        <div class="organisation cf">
            <a id="f5"></a>
            <div class="resize cf">
                <h2 class="txt_86 black text_bebasreg">Организуем неорганизуемое!</h2>
                <h3 class="txt_40 black text_bebasreg">Закажи любую услугу дополнительно к тарифу!</h3>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us1.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Фотограф</p>
                            <h4>от <span>4 490</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us2.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Видеооператор</p>
                            <h4>от <span>4 490</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us3.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Музыканты</p>
                            <h4>от <span>4 380</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us4.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Мимы и аниматоры</p>
                            <h4>от <span>4 290</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us5.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Ростовые куклы</p>
                            <h4>от <span>4 390</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us6.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Оформление шарами</p>
                            <h4>от <span>4 480</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us7.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Букеты цветов</p>
                            <h4>от <span>4 470</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us8.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Лепестки роз</p>
                            <h4>от <span>2 890</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us9.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Аренда авто</p>
                            <h4>от <span>4 970</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us10.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Праздничные торты</p>
                            <h4>от <span>2 480</span> р./кг</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us11.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Конфетти</p>
                            <h4>от <span>8 170</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us12.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Мыльные пузыри</p>
                            <h4>от <span>4 970</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us13.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Небесные фонарики</p>
                            <h4>от <span>2 970</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us14.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Запуск голубей</p>
                            <h4>от <span>2 280</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us15.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Запуск шаров</p>
                            <h4>от <span>3 290</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us16.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Флешмоб</p>
                            <h4>от <span>19 890</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us17.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Граффити на асфальте</p>
                            <h4>от <span>7 170</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us18.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Плюшевые медведи</p>
                            <h4>от <span>3 980</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us19.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Баннеры и плакаты</p>
                            <h4>от <span>7 280</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us20.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Подарки медсестрам</p>
                            <h4>от <span>4 270</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us21.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Фруктовые букеты</p>
                            <h4>от <span>4 190</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us22.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Визажист в роддом</p>
                            <h4><span>3 280</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us23.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Наборы для отпечатков</p>
                            <h4>от <span>780</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us24.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>Уборка перед выпиской</p>
                            <h4>от <span>5 670</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
                <div class="block">
                    <a href="#popup1" class="content fancybox-modal">
                        <img src="images/us25.jpg" width="168" height="174" alt="">
                        <div class="text">
                            <p>И любая услуга по желанию</p>
                            <h4>от <span>1</span> р.</h4>
                        </div>
                    </a>
                    <a href="#popup1" class="clarify fancybox-modal"><span>Уточнить цену</span></a>
                </div>
            </div>
        </div>

        <div class="scenario cf">
            <a id="f1"></a>
            <div class="resize cf">
                <h2 class="text_bebaslight txt_60 black">Закажи услугу до <span class="txt_98">31 января</span></h2>
                <h3 class="text_bebasreg txt_74 black">получи <span class="txt_98">3 сценария</span> встречи жены!</h3>
                <form action="mailer.php" method="post" id="form2">
                    <input type="text" name="phone" placeholder="Введите номер телефона">
                    <input type="submit" value="Получить сценарии"
                           onclick="yaCounter36217330.reachGoal('ORDER_SCENARIO'); return true;">
                    <input type="hidden" name="whatForm" value="Форма - Закажи услугу до 1 марта, получи 3 сценария">
                </form>
            </div>
        </div>

        <div class="details cf">
            <div class="resize cf">
                <p class="txt_36">Все подробности по организации выписки из роддома: <a href="callto:+79267633549">+7
                        (926) 763-35-49</a></p>
            </div>
        </div>

        <div class="aboutus cf">
            <a id="f4"></a>
            <div class="resize cf">
                <h2 class="txt_86 text_bebasreg black">Клиенты о нас</h2>
                <div class="owl-carousel" id="owl1">
                    <div class="item">
                        <div class="review rev1">
                            <div class="content bbox">
                                <h3>Кирилл и его сын Сережа</h3>
                                <p>Недавно в моей жизни произошло важное наверное для каждого событие – в моей семье
                                    родился ребенок, сын. Накануне выписки ломал голову над тем, как бы все устроить
                                    поинтереснее. Нашел этот сервис и заказал здесь все под ключ. Очень удобно - сразу
                                    полный комплект услуг. Быстро доставили все в нужное утро, украсили машину,
                                    подготовили сценарий для гостей - все не просто толпились, а было действие! Самое
                                    главное - любимая, все ее родственники и подруги были в восторге. Громадное спасибо
                                    за помощь!</p>
                            </div>
                        </div>
                        <div class="review rev2">
                            <div class="content bbox">
                                <h3>Михаил с младшей Машенькой</h3>
                                <p>Очень хотелось порадовать мою жену и удивить всех родственников в день выписки из
                                    роддома. Чтобы устроить необычную встречу, обратился сюда. Ребенок у нас первый,
                                    дочка, опыта, сами понимаете, никакого. А здесь для нас все организовала целая
                                    команда. Мы остановились на принадлежностях ярко-розового цвета - жена аж
                                    прослезилась от восторга, и фотки симпатичные получились. Очень рекомендую такой
                                    формат всем молодым отцам. Хлопот ноль, радости - целый мешок!</p>
                            </div>
                        </div>
                        <div class="review rev3">
                            <div class="content bbox">
                                <h3>Семен с сыном Коленькой</h3>
                                <p>Перед родами жена недвусмысленно намекнула, что выписка – очень трогательное и
                                    волнительное для семьи событие, и ей бы хотелось "чего-то особенного". Надо так
                                    надо. На улицах Москвы часто видел машины с наклейками вроде "Любимая, спасибо за
                                    малыша!", но решил не ограничиваться этим, а устроить любимке "торжественный прием".
                                    Заказал здесь все-все и даже сам не ожидал, как все получилось здорово. А уж как
                                    довольна моя благоверная. Спасибо вам и удачи!</p>
                            </div>
                        </div>
                        <div class="review rev4">
                            <div class="content bbox">
                                <h3>Денис и его дочь Анютка</h3>
                                <p>За день до выписки жены и нашей Анютки из роддома я был сам не свой. Решил скрыть
                                    волнение перед родственниками и устроить целое событие с сюрпризами и трогательными
                                    украшениями, которые так нравятся женщинам. Моего волнения и правда никто из
                                    родственников не заметил. Самое интересное, что жена ничего такого особого не ждала,
                                    поэтому сюрприз действительно удался! Спасибо вам за помощь в организации этого
                                    дня!</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="review rev5">
                            <div class="content bbox">
                                <h3>Николай с сыном Олежкой</h3>
                                <p>Никогда не думал, что с таким трепетом и нежностью буду готовиться к встрече с Инной
                                    и сыном Олежкой. В голову пришла мысль устроить что-то необыкновенное. Знаю, что для
                                    этого есть event-агентства и подыскивал что-то в этом духе. Мне повезло вдвойне,
                                    потому что нашел агентство, которое занимается именно организацией выписок из
                                    роддома! Это невероятно, ребята! И отдельная благодарность за то, как просто
                                    получилось с вами устроить этот день. Создали настроение и фотки со встречи
                                    получились классные!</p>
                            </div>
                        </div>
                        <div class="review rev6">
                            <div class="content bbox">
                                <h3>Сергей с сыном Толиком</h3>
                                <p>Марина такой человек (как и большинство женщин, наверное), которые что-то себе
                                    придумают и полагают, что ее мужчина должен читать мысли. Зная эту ее особенность, я
                                    предположил, что просто обязан угодить ей в наш долгожданный день встречи с
                                    маленьким. Все даже проще, чем мне казалось. Нашел вас, по телефону объяснил, что
                                    примерно нужно. В день выписки не прослезился только наш кот. Респект за то, что вы
                                    точно знаете, о чем думают женщины, и помогаете нам, мужчинам, держать марку перед
                                    прекрасным полом!</p>
                            </div>
                        </div>
                        <div class="review rev7">
                            <div class="content bbox">
                                <h3>Алексей с сыном Ванечкой</h3>
                                <p>Я готовился к выписке жены и сына. Купил для друзей шампанское и конфеты. Цветы
                                    любимой (предупредила по телефону, что ей ничего нельзя, кроме цветов). И тут я
                                    задумался об оформлении всего события как праздника. Друзья были растроганы
                                    масштабом того, что я устроил для Оксаны и нашего первенца. Что уж говорить об
                                    Оксане, которая две минуты плакала у меня на плече под всеобщие аплодисменты...
                                    Получилось красиво, мило. Никто не подозревает, что за всем этим буквально один
                                    звонок декораторам за пару дней до.</p>
                            </div>
                        </div>
                        <div class="review rev8">
                            <div class="content bbox">
                                <h3>Антон и его сын Степа</h3>
                                <p>Когда в нашей семье появился Степашка, я, честно признаюсь, очень растрогался. Я
                                    понял, ради чего все это, ради чего стоит жить. Выразить это словами невозможно, да
                                    и нет таких слов, особенно в этот самый день, перед родственниками. Я пошел другим
                                    путем. Выразил свое отношение на деле. Очень здорово¸ что вы помогли мне устроить
                                    все так быстро и просто. Это как нажать на одну кнопку и получить результат. Это
                                    супер!</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="review rev9">
                            <div class="content bbox">
                                <h3>Борис с дочерью Лизой</h3>
                                <p>Мужики, если в вашей семье случилось пополнение, устройте любимой вот такой вот
                                    праздник! По опыту скажу - от вас этого ждут, даже если и не говорят. Впервые видел,
                                    как теща плачет от умиления. Жена уставшая, но счастливая и довольная. Оно того
                                    стоит! Как-то сразу понял, что сам крепить те же ленточки на радиатор мне не с руки
                                    - позвонил и заказал все разом тут. Получилось целое организованное праздничное
                                    мероприятие на пороге роддома и дома. На твердую "пятерку". За что и спасибо!</p>
                            </div>
                        </div>
                        <div class="review rev10">
                            <div class="content bbox">
                                <h3>Анатолий и его дочь Света</h3>
                                <p>Выписывались. Все на нервах, особенно я, отец, которому новый статус вроде и
                                    радостен, но непривычен. Этот сервис порекомендовал коллега, сказав, что это
                                    настоящий мужской вариант: декораторы все сделают сами, а мне нужно только позвать
                                    близких. Первая встреча с нашей девчонкой прошла красиво и весело! Не буду
                                    раскрывать подробностей - но довольны остались все, каждый был причастным к нашему
                                    событию. Осталось много эмоций, сувениров, фотографий. Очень стоящая идея!</p>
                            </div>
                        </div>
                        <div class="review rev11">
                            <div class="content bbox">
                                <h3>Евгений с дочерью Оленькой</h3>
                                <p>До рождения ребенка я часто баловал жену подарками и сюрпризами. В день выписки тоже
                                    хотел что-то особенное, красивое. Долго искал в интернете идеи для такого случая.
                                    Остановился на этой услуге, когда мастера полностью готовят все необходимое для
                                    праздника. Понравилось, что организуют все люди с опытом. То есть ничего важного не
                                    упустишь, ты на высоте. Спасибо за то, что помогаете молодым папам готовить
                                    оригинальные сюрпризы для своих жен!</p>
                            </div>
                        </div>
                        <div class="review rev12">
                            <div class="content bbox">
                                <h3>Леонид с младшим Никитой</h3>
                                <p>Первый раз я стал папой 7 лет назад, но тогда еще не была развита сфера декора да и
                                    из роддома - садились и уезжали на такси. Могли фотографа заказать и цветы подарить.
                                    Поэтому выписка старшего сына была не такой яркой, как младшего. Второго ребенка
                                    решили "отметить" уже на профессиональном уровне: позвать декораторов, фотографов,
                                    нанять красивый автомобиль. Получилось очень круто! Понравилось, что все
                                    организационные моменты вы взяли на себя, а у нас был праздник.</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="review rev13">
                            <div class="content bbox">
                                <h3>Максим с дочерью Наташенькой</h3>
                                <p>Готовясь к выписке жены с дочкой, я не задумывался о том, что из встречи с ребенком
                                    можно устроить какое-то мероприятие, праздник. Идея нашла меня сама. Знакомый друга
                                    посоветовал вариант для реальных мужей, любящих своих жен. Расскажу вам один секрет,
                                    как мужчина может угодить в такой момент своей женщине - взять подсказку и помощь
                                    опытных людей. Моя была в восторге, пока я держал сверток с дочуркой, пытаясь
                                    рассмотреть среди пеленок ее личико! Всем советую дарить любимой такую встречу. Это
                                    лучше всяких слов!</p>
                            </div>
                        </div>
                        <div class="review rev14">
                            <div class="content bbox">
                                <h3>Константин и его сын Платон</h3>
                                <p>Спасибо за вашу работу! С отделом закрывали проект, жена с малышом выписываются. Все
                                    как-то так совпало, что на счету была каждая минута. Я был невероятно счастлив, но
                                    понимал, что от меня требуется больше - отклик, действия, эмоции! Все это удалось
                                    благодаря вам - все решил один звонок. Это отличная идея - ваш сервис для занятых
                                    отцов. А других сейчас и не бывает - это-то после пополнения в семье.</p>
                            </div>
                        </div>
                        <div class="review rev15">
                            <div class="content bbox">
                                <h3>Владимир с дочерью Лидой</h3>
                                <p>Первая встреча со своей маленькой копией – волнительное событие для любого отца.
                                    Очень хотелось в день выписки необычно отблагодарить ее, выразить как-то свою любовь
                                    и заботу. Вы помогли мне сделать то, с чем я бы сам так не справился. Каждый момент
                                    этого дня сопровождала какая-то милая, любимая всеми девочками, деталь. Нина была
                                    так счастлива, тронута, сказала, что не ожидала от меня таких талантов и что я
                                    "суперпапочка". Думаю оставить вас в секрете от нее.</p>
                            </div>
                        </div>
                        <div class="review rev16">
                            <div class="content bbox">
                                <h3>Павел и его сын Макар</h3>
                                <p>Хотел удивить жену собственноручно изготовленным плакатом «Любимая, спасибо за сына»,
                                    но после неудачной попытки решил купить готовые украшения. И нашел целый сайт о
                                    выписке для молодых пап! Не подозревал, что так можно. Тем более ценно, что от меня
                                    потребовалось только позвонить, а декораторы уже все взяли в свои руки. Зая была
                                    просто польщена. Хорошо, что есть люди, умеющие профессионально сопровождать такие
                                    моменты в жизни!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="say cf">
            <div class="resize cf">
                <h2 class="txt_86 white text_bebasreg">Есть что<br/>сказать о нас?</h2>
                <h3 class="txt_24 white ">Мы готовы выслушать :)</h3>
                <form action="mailer.php" id="form3">
                    <textarea name="mess" placeholder="Текст сообщения"></textarea>
                    <label for="uploaded_file1" class="lol">
                        <input type="file" id="uploaded_file1" name="uploaded_file1"
                               accept="image/jpeg,image/png,image/jpg" style="display:none;">
                        <div class="fileName">Добавить файл</div>
                    </label>
                    <input type="submit" value="Оставить отзыв" class="trans"
                           onclick="yaCounter36217330.reachGoal('REVIEW'); return true;">
                    <input type="hidden" name="whatForm" value="Форма - Есть что сказать ? Мы готовы выслушать">
                </form>
            </div>
        </div>


        <div class="consult cf">
            <div class="resize cf">
                <h2 class="txt_50 text_bebasreg white">Нужна консультация по организации выписки?</h2>
                <h3 class="txt_26 white">Оставь заявку, перезвоним в течение 2 минут</h3>
                <form action="mailer.php" method="post" id="form4">
                    <input type="text" name="phone" placeholder="Введите номер телефона">
                    <input type="submit" value="Оставить заявку" class="trans"
                           onclick="yaCounter36217330.reachGoal('ORDER_CONSULT'); return true;">
                    <input type="hidden" name="whatForm" value="Форма - Нужна консультация">
                </form>
            </div>
        </div>

        <div class="details cf">
            <div class="resize cf">
                <p class="txt_36">Все подробности по организации выписки из роддома: <a href="callto:+79267633549">+7
                        (926) 763-35-49</a></p>
            </div>
        </div>

        <div class="alltime cf">
            <a id="f6"></a>
            <div class="resize cf">
                <h2 class="white txt_28">Хочешь порадовать жену, избавить себя от лишней нервотрепки?<br/>Все, что нужно
                    сделать тебе - оставить заявку</h2>
                <a href="#popup1" class="btn_all fancybox-modal trans">Оставить заявку</a>
                <h3 class="txt_60 text_bebasreg white">Весь геморрой мы берем на себя!</h3>
                <div class="block-time time1 wow animate zoomIn" data-wow-delay="0.3s">
                    <img src="images/time1.jpg" width="448" height="252" alt="">
                    <p>Разработаем<br/>сценарий</p>
                </div>
                <div class="block-time time2 wow animate zoomIn" data-wow-delay="0.7s">
                    <img src="images/time2.jpg" width="393" height="183" alt="">
                    <p>Составим смету</p>
                </div>
                <div class="block-time time3 wow animate zoomIn" data-wow-delay="1.1s">
                    <img src="images/time3.jpg" width="446" height="279" alt="">
                    <p>Организуем<br/>все до мелочей</p>
                </div>
                <div class="block-time time4 wow animate zoomIn" data-wow-delay="1.5s">
                    <img src="images/time4.jpg" width="393" height="385" alt="">
                    <p>В день выписки все<br/>будут счастливы<br/>и рады!</p>
                </div>
            </div>
        </div>

        <div class="details cf">
            <div class="resize cf">
                <p class="txt_36">Все подробности по организации выписки из роддома: <a href="callto:+79267633549">+7
                        (926) 763-35-49</a></p>
            </div>
        </div>

        <div class="price cf">
            <a id="f2"></a>
            <div class="resize cf">
                <h2 class="text_bebasreg txt_86 white">Мужик - выбери подходящий тариф!</h2>
                <div class="block bl1 bbox">
                    <h3>«Мини»</h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>50 шаров к роддому или в квартиру</li>
                    </ul>
                    <div class="line"></div>
                    <h4>Подарок!</h4>
                    <h5>Букет из шаров с гелием</h5>
                    <p>Цена <span>9 900 рублей</span></p>
                    <h6>7 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
                <div class="block bl2 bbox">
                    <h3>«Стандарт»</h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>Видеооператор</li>
                        <li>50 шаров к роддому или в квартиру</li>
                    </ul>
                    <div class="line"></div>
                    <h4>Подарок!</h4>
                    <h5>Метровый воздушный медведь</h5>
                    <p>Цена <span>14 900 рублей</span></p>
                    <h6>12 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
                <div class="block bl3 bbox">
                    <h3><span>«Оптимальный»</span></h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>Видеооператор</li>
                        <li>50 шаров к роддому или в квартиру</li>
                        <li>Оформление авто лентами и магнитами</li>
                        <li>Оформление квартиры шарами и гирляндами</li>
                    </ul>
                    <div class="line" style="margin-top:50px;"></div>
                    <h4>Подарок!</h4>
                    <h5>Метровый воздушный медведь</h5>
                    <p style="margin-top:20px;">Цена <span>22 900 рублей</span></p>
                    <h6>20 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
                <div class="block bl4 bbox">
                    <h3>«Престижный»</h3>
                    <div class="cf"></div>
                    <ul>
                        <li>Фотограф</li>
                        <li>Видеооператор</li>
                        <li>50 шаров к роддому или в квартиру</li>
                        <li>Оформление авто лентами и магнитами</li>
                        <li>Оформление квартиры шарами и гирляндами</li>
                        <li>Скрипач или саксофонист на выбор</li>
                        <li>Ростовая кукла</li>
                    </ul>
                    <div class="line" style="margin-top:50px;"></div>
                    <h4>2 ПОДАРКА!</h4>
                    <h5 style="font-size:22px;">Букет из шаров с гелием</h5>
                    <h5 style="font-size:22px;margin-top:7px;">Метровый воздушный медведь</h5>
                    <p style="margin-top:15px;">Цена <span>34 900 рублей</span></p>
                    <h6>29 900 р.</h6>
                    <a href="#popup1" class="btn_all fancybox-modal">Заказать пакет по СПЕЦ. ЦЕНЕ!</a>
                </div>
            </div>
        </div>

        <div class="details cf">
            <div class="resize cf">
                <p class="txt_36">Все подробности по организации выписки из роддома: <a href="callto:+79267633549">+7
                        (926) 763-35-49</a></p>
            </div>
        </div>

        <div class="optimization cf">
            <div class="resize cf">
                <h1>Выписка из роддома "ПОД КЛЮЧ" - весь геморрой мы берем на себя!</h1>
                <p>Поздравляем тебя, счастливый отец! Ведь так же тебя называют сейчас все, кто узнал вашу радостную
                    новость? Близкие и коллеги тоже поздравляют тебя: "Мужик! Так держать!" Друзья радостно басят и
                    хлопают тебя по плечу: "Мужиик! Глава семьи!" Все за тебя счастливы. </p>
                <p>И только мы знаем - тебе сейчас ох как нелегко. На твоих крепких мужских плечах - заботы. Твой статус
                    - обязывает. От тебя многого ждут... Мы-то знаем, но никому не скажем! Мы - творческая и не особо
                    молодая команда креаторов, которая спешит на помощь счастливым отцам! Мы специализируемся только на
                    выписках из роддома. Знаем на клеточном уровне, как растрогать любимую и умилить гостей. Как с
                    первых минут прослыть лучшим в мире папочкой. </p>
                <p>Будь спокоен и уверен в этот день! У нас для этого есть просто бесподобные решения. Есть номер
                    телефона, по которому нужно позвонить всего раз. Есть работающие (что немаловажно) формочки на
                    сайте, чтобы отправить нам свой номер, если ты сейчас занят. </p>
                <p>Настоящему мужику хлопотать не к лицу! Все заботы и проблемы берем на себя. С нами твоя задача одна -
                    звонить всем друзьям и приглашать на праздник!</p>
                </p>
            </div>
        </div>
        <div class="questions cf">
            <div class="resize cf">
                <h2 class="txt_60 white text_bebasreg">Остались вопросы? Мы ответим на них!</h2>
                <form action="mailer.php" method="post" id="form5">
                    <input type="text" name="phone" placeholder="Введите номер телефона">
                    <input type="submit" class="trans" value="Позвоните мне!"
                           onclick="yaCounter36217330.reachGoal('ORDER_CALL'); return true;">
                    <input type="hidden" name="whatForm" value="Форма - Остались вопросы?">
                </form>
            </div>
        </div>
        <div class="map">
            <a id="f7"></a>
            <script type="text/javascript" charset="utf-8"
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=7mRmMII-4HhT5NguNs5Vur7Q1Y3ktjdt&width=100%&height=470&lang=ru_UA&sourceType=constructor"></script>
            <div class="contacts">
                <h2 class="text_bebasreg white txt_36">Контакты</h2>
                <a href="callto:+79267633549" class="phone">+7 (926) 763-35-49</a>
                <p class="free"></p>
                <a href="mailto:welcome@roddom-for-men.ru" class="mail">welcome@roddom-for-men.ru</a>
                <p class="pin">РФ, г.Москва, наб. Академика Туполева,<br/>15к4</p>
                <a href="#popup1" class="btn_all fancybox-modal trans">Перезвоните мне!</a>
                <div class="rekviz">
                    <p class="bold">Наши реквизиты:</p>
                    <p>ИП Барабаш Н.Ю.</p>
                    <p>ИНН: 770102174190</p>
                    <p>ОГРНИП: 316774600061477</p>
                    <p>ОКПО: 0202743721</p>
                    <p>Расчетный счет: 40802810297280000097</p>
                    <p>Банк: ПАО РОСБАНК</p>
                    <p>БИК: 044525256</p>
                    <p>Корр. счет: 30101810000000000256</p>
                    <p>Юридический адрес: 105005, Москва г, Бауманская ул, дом № 62-66, квартира 17</p>
                    <p>Телефон: +79169102061</p>
                    <p>Свидетельство: 77 №017690258 от 20.01.2016</p>
                </div>
            </div>
        </div>
        <div class="footer cf">
            <div class="resize cf">
                <div class="fll"><p>Copyright © - Выписка из роддома под ключ</p></div>
                <div class="center"><p>При использовании материалов ссылка на сайт обязательна</p></div>

            </div>
        </div>

    </div>


    <div id="popupThanks" style="display: none" class="popup popup_ty">
        <h3 class="txt_40 text_bebasreg white">Спасибо за заявку</h3>
        <h4 class="txt_20 text_sanslight1 white">Мы свяжемся с Вами в ближайшее время</h4>
    </div>

    <div id="popup1" style="display: none" class="popup">
        <form action="mailer.php" class="popupform" id="form6" method="post">
            <h3 class="txt_40 text_bebasreg white">Оставьте заявку</h3>
            <h4 class="txt_20 text_sanslight1 white">и мы свяжемся с Вами<br/>в ближайшее время</h4>
            <p>Введите Ваше имя</p>
            <input type="text" name="name" autofocus="true">
            <p>Введите Ваш номер телефона</p>
            <input type="text" name="phone">
            <input type="submit" value="Отправить заявку" class="trans"
                   onclick="yaCounter36217330.reachGoal('ORDER_POPUP'); return true;">
            <input type="hidden" name="whatForm" value="Форма - Оставить заявку  / уточнить цену / позвоните мне">
        </form>
    </div>
    <!-- <div id="popup2" style="display: none" class="popup">
        <form action="" class="popupform" id="form7" method="post">
            <h3 class="txt_40 text_bold white">Добавить отзыв</h3>
            <input type="text" name="name" placeholder="Ваше имя">
            <input type="text" name="phone" placeholder="Ваш телефон">
            <textarea name="mess"></textarea>
            <label for="uploaded_file1" class="lol">
              <input type="file" id="uploaded_file1" name="uploaded_file1" accept="image/jpeg,image/png,image/jpg" style="display:none;">
              <div class="fileName">Прикрепить фото</div>
            </label>
            <input type="submit" value="Добавить отзыв" class="trans">
        </form>
    </div> -->

    <div id="popup__call-back" class="pop-up popup__call-back">
        <h3>Заказать звонок</h3>

        <div>
            <div class="avatar">
                <img src="images/avatar_manager.jpg" width="64" height="64" alt="фото">
                <p class="title">Мария</p>
                <p>Менеджер <br> по подбору курсов</p>
            </div>
            <p class="notice">Закажите звонок <br> и мы свяжемся <br> с Вами в ближайшее время.</p>
        </div>

        <div>
            <form class="popup__form" action="" method="post" novalidate="novalidate">
                <input type="text" name="name" placeholder="Фамилия и Имя">
                <input type="text" name="phone" placeholder="Введите телефон">
                <input class="trans" type="submit" value="Заказать звонок">
            </form>
        </div>

    </div>

    <div id="popup__rates" class="pop-up popup__rates">
        <div class="image-box">
            <img src="images/tarrifs_lightbox.jpg" width="506" height="547"  alt="img">
        </div>

        <div class="popup__content">
            <h3>Тарифы</h3>

            <div>
                <p>По опыту более 200 выписок мы сформировали 4 тарифа. Тарифы отличаются ценой и набором услуг, цена тарифов
                    от 7.900 р до 29.900 р. Оставьте свои контакты и мы поможем подобрать подходящий вам тариф.</p>

                <form class="popup__form" action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Узнать подробнее">
                </form>
            </div>

        </div>

    </div>

    <div id="popup__services1" class="pop-up popup__services">
        <div class="image-box">
            <img src="images/service_lightbox_1.jpg" width="397" height="485"  alt="img">
        </div>

        <div class="popup__content">
            <h3>Услуги</h3>

            <div>
                <h4>Фотограф</h4>
                <p class="notice">от 4.490 р.</p>

                <form class="popup__form services__form"  action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Уточнить стоимость услуги">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__services2" class="pop-up popup__services">
        <div class="image-box">
            <img src="images/service_lightbox_2.jpg" width="397" height="485"  alt="img">
        </div>

        <div class="popup__content">
            <h3>Услуги</h3>

            <div>
                <h4>Видеооператор</h4>
                <p class="notice">от 4.490 р.</p>

                <form class="popup__form services__form"  action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Уточнить стоимость услуги">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__services3" class="pop-up popup__services">
        <div class="image-box">
            <img src="images/service_lightbox_3.jpg" width="397" height="485"  alt="img">
        </div>

        <div class="popup__content">
            <h3>Услуги</h3>

            <div>
                <h4>Украшение квартиры</h4>
                <p class="notice">от 4.490 р.</p>

                <form class="popup__form services__form"  action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Уточнить стоимость услуги">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__services4" class="pop-up popup__services">
        <div class="image-box">
            <img src="images/service_lightbox_4.jpg" width="397" height="485"  alt="img">
        </div>

        <div class="popup__content">
            <h3>Услуги</h3>

            <div>
                <h4>Воздушные шары</h4>
                <p class="notice">от 4.490 р.</p>

                <form class="popup__form services__form"  action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Уточнить стоимость услуги">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__services5" class="pop-up popup__services">
        <div class="image-box">
            <img src="images/service_lightbox_5.jpg" width="397" height="485"  alt="img">
        </div>

        <div class="popup__content">
            <h3>Услуги</h3>

            <div>
                <h4>Украшение машины</h4>
                <p class="notice">от 4.490 р.</p>

                <form class="popup__form services__form"  action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Уточнить стоимость услуги">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__services6" class="pop-up popup__services">
        <div class="image-box">
            <img src="images/service_lightbox_6.jpg" width="397" height="485"  alt="img">
        </div>

        <div class="popup__content">
            <h3>Услуги</h3>

            <div>
                <h4>Музыканты</h4>
                <p class="notice">от 4.490 р.</p>

                <form class="popup__form services__form"  action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Уточнить стоимость услуги">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__services" class="pop-up popup__services">
        <h3>Услуги</h3>

        <div class="info-block">
            <div class="avatar">
                <img src="images/avatar_manager.jpg" width="64" height="64" alt="фото">
                <p class="title">Мария</p>
                <p>Менеджер <br> по подбору курсов</p>
            </div>
            <p>На сегодняшний день мы организовали более 360 выписок и нам есть чем с Вами поделиться. Посмотрите наши
                сценарии торжественной встречи жены из роддома.</p>
        </div>

        <div class="form-box">
            <form class="popup__form services__form" action="" method="post" novalidate="novalidate">
                <input type="text" name="name" placeholder="Фамилия и Имя">
                <input type="text" name="phone" placeholder="Введите телефон">
                <input class="trans" type="submit" value="Уточнить стоимость услуги">
            </form>
        </div>

    </div>

    <div id="popup__examples1" class="pop-up popup__examples">
        <div class="image-box">
            <img src="images/job_example_1.jpg" width="506" height="708"  alt="Примеры работ">
        </div>

        <div class="popup__content">
            <h3>Примеры работ</h3>

            <div>
                <p>На сегодняшний день мы организовали более 360 выписок и нам есть чем с Вами поделиться. Посмотрите наши
                    сценарии торжественной встречи жены из роддома. Мы специализируемся только на выписках из роддома, и
                    умеем делать это быстро, качественно, торжественно, и учитывая ваш бюджет. Оставьте заявку и мы
                    расскажем вам о разных примерах организации встречи жены и малыша.</p>

                <form class="popup__form services__form" action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Узнать больше о примерах">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__examples2" class="pop-up popup__examples">
        <div class="image-box">
            <img src="images/job_example_2.jpg" width="506" height="708"  alt="Примеры работ">
        </div>

        <div class="popup__content">
            <h3>Примеры работ</h3>

            <div>
                <p>На сегодняшний день мы организовали более 360 выписок и нам есть чем с Вами поделиться. Посмотрите наши
                    сценарии торжественной встречи жены из роддома. Мы специализируемся только на выписках из роддома, и
                    умеем делать это быстро, качественно, торжественно, и учитывая ваш бюджет. Оставьте заявку и мы
                    расскажем вам о разных примерах организации встречи жены и малыша.</p>

                <form class="popup__form services__form" action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Узнать больше о примерах">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__examples3" class="pop-up popup__examples">
        <div class="image-box">
            <img src="images/job_example_3.jpg" width="506" height="708"  alt="Примеры работ">
        </div>

        <div class="popup__content">
            <h3>Примеры работ</h3>

            <div>
                <p>На сегодняшний день мы организовали более 360 выписок и нам есть чем с Вами поделиться. Посмотрите наши
                    сценарии торжественной встречи жены из роддома. Мы специализируемся только на выписках из роддома, и
                    умеем делать это быстро, качественно, торжественно, и учитывая ваш бюджет. Оставьте заявку и мы
                    расскажем вам о разных примерах организации встречи жены и малыша.</p>

                <form class="popup__form services__form" action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Узнать больше о примерах">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__examples4" class="pop-up popup__examples">
        <div class="image-box">
            <img src="images/job_example_4.jpg" width="506" height="708"  alt="Примеры работ">
        </div>

        <div class="popup__content">
            <h3>Примеры работ</h3>

            <div>
                <p>На сегодняшний день мы организовали более 360 выписок и нам есть чем с Вами поделиться. Посмотрите наши
                    сценарии торжественной встречи жены из роддома. Мы специализируемся только на выписках из роддома, и
                    умеем делать это быстро, качественно, торжественно, и учитывая ваш бюджет. Оставьте заявку и мы
                    расскажем вам о разных примерах организации встречи жены и малыша.</p>

                <form class="popup__form services__form" action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Узнать больше о примерах">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__examples5" class="pop-up popup__examples">
        <div class="image-box">
            <img src="images/job_example_5.jpg" width="506" height="708"  alt="Примеры работ">
        </div>

        <div class="popup__content">
            <h3>Примеры работ</h3>

            <div>
                <p>На сегодняшний день мы организовали более 360 выписок и нам есть чем с Вами поделиться. Посмотрите наши
                    сценарии торжественной встречи жены из роддома. Мы специализируемся только на выписках из роддома, и
                    умеем делать это быстро, качественно, торжественно, и учитывая ваш бюджет. Оставьте заявку и мы
                    расскажем вам о разных примерах организации встречи жены и малыша.</p>

                <form class="popup__form services__form" action="" method="post" novalidate="novalidate">
                    <input type="text" name="name" placeholder="Фамилия и Имя">
                    <input type="text" name="phone" placeholder="Введите телефон">
                    <input class="trans" type="submit" value="Узнать больше о примерах">
                </form>
            </div>

        </div>

    </div>
    <div id="popup__examples" class="pop-up popup__examples">
        <h3>Примеры работ</h3>

        <div class="info-block">
            <div class="avatar">
                <img src="images/avatar_manager.jpg" width="64" height="64" alt="фото">
                <p class="title">Мария</p>
                <p>Менеджер <br> по подбору курсов</p>
            </div>
            <p>На сегодняшний день мы организовали более 360 выписок и нам есть чем с Вами поделиться. Посмотрите наши
                сценарии торжественной встречи жены из роддома. Мы специализируемся только на выписках из роддома, и
                умеем делать это быстро, качественно, торжественно, и учитывая ваш бюджет. Оставьте заявку и мы
                расскажем вам о разных примерах организации встречи жены и малыша.</p>
        </div>

        <div class="form-box">
            <form class="popup__form services__form" action="" method="post" novalidate="novalidate">
                <input type="text" name="name" placeholder="Фамилия и Имя">
                <input type="text" name="phone" placeholder="Введите телефон">
                <input class="trans" type="submit" value="Узнать больше о примерах">
            </form>
        </div>

    </div>

    <!--Чайный пакетик-->
    <div class="manager-notification active" id="manager-message-bell">
        <a href="#manager-message-1">
        <span class="tea-bag">
            <span class="number-posts">1</span>
        </span>
        </a>
    </div>



    <!--[if lt IE 9]>
    <script src="bower_components/html5shiv/es5-shim.min.js"></script>
    <script src="bower_components/html5shiv/html5shiv.min.js"></script>
    <script src="bower_components/html5shiv/html5shiv-printshiv.min.js"></script>
    <script src="bower_components/respond/respond.min.js"></script>
    <![endif]-->

    <!-- Load Scripts -->


    <script type="text/javascript" src="compile/compile.js?<?= filemtime('compile/compile.js') ?>" async></script>


<!--    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function () {
                try {
                    w.yaCounter36217330 = new Ya.Metrika({
                        id: 36217330,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true
                    });
                } catch (e) {
                }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () {
                    n.parentNode.insertBefore(s, n);
                };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/36217330" style="position:absolute; left:-9999px;" alt=""/></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-75364947-1', 'auto');
        ga('send', 'pageview');

    </script>

    <!-- RedConnect -->
    <script id="rhlpscrtg" type="text/javascript" charset="utf-8" async="async"
            src="https://web.redhelper.ru/service/main.js?c=fieldofdream"></script>
    <div style="display: none"><a class="rc-copyright"
                                  href="http://redconnect.ru">Обратный звонок RedConnect</a></div>
    <!--/RedConnect -->

    <script
        type="text/javascript">(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=mJlh8jC*OMlMsDC/9Y4Bjfj66opPUVIBkKHM7vWV3IZytRIzk4Wc6qQaf6di72ja2SFN9j5j0Xg1ukLyrcjex2OdnXEzs/ecEqSmkyYPAix977A8f1B0Igz07suQRVInR2VX9MjTQ/gVv0vdQZfFlMcDphDiw0h5bJJ3yqNXgLM-&pixel_id=1000049644';</script>-->
    </body>
    </html>
<?php
$c = preg_replace('/ +/', ' ', str_replace(array("\r", "\n", "\t"), '', preg_replace('/<!--(.)*?-->/', '', ob_get_contents())));
ob_end_clean();
//$c = str_replace('<script type="text/javascript" src="compile/compile.js?'.filemtime('compile/compile.js').'"></script>','<script>'.str_replace('<script></script>','',file_get_contents('compile/compile.js')).'</script>',$c);
echo $c;
?>