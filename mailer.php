<?php
    if(strlen($_POST['getout']) > 0) {
        // $spambot = true;
        header("Location: index.php");
        exit;
    }
    $messageBody ="";
    if($_POST["whatForm"] != ''){
        $messageBody = $_POST["whatForm"];
    }
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $subject = 'Сообщение с сайта ' . $_SERVER['SERVER_NAME'].' (десктоп) с формы:'.$messageBody;
    // $messageBody = "";
    // $subject = '';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['info'])) {
        $subject = $_POST['info'];
    }

    if(isset($_POST['name'])) {
        $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
        $mess .= '<b>Имя отправителя:</b>' . $name . '<br>';
    }
    if(isset($_POST['email'])) {
        $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
        $mess .= '<b>Email:</b>' . $email . '<br>';
    }
    if(isset($_POST['phone'])) {
        $phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
        $mess .= '<b>Телефон:</b>' . $phone . '<br>';
    }
    if(isset($_POST['mess'])) {
        $mess = substr(htmlspecialchars(trim($_POST['mess'])), 0, 100);
        $mess .= '<b>Сообщение:</b>' . $mess . '<br>';
    }


    $mess .= '<hr>';


    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->From = 'welcome@roddom-for-men.ru';               // от кого
    $mail->FromName = 'Выписка из роддома под ключ';        // от кого
    $mail->AddAddress('lislab@yandex.ru','');
    $mail->AddBCC('lislab@yandex.ru','');  // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка

    // если был файл, то прикрепляем его к письму
    if(isset($_FILES['uploaded_file1'])) {
        if($_FILES['uploaded_file1']['error'] == 0){
            $mail->AddAttachment($_FILES['uploaded_file1']['tmp_name'], $_FILES['uploaded_file1']['name']);
        }
    }
    if (isset($_POST['cena']) && $_POST['cena'] != '') {
    $mail->AddAddress('lislab@yandex.ru');  // кому - адрес, Имя
        
        
    }
		$fp = @fopen("test.txt","a");
        fwrite($fp, $_POST['name']."\n".$_POST['phone']."\n");
        fclose($fp);

    $mail->Body = $mess;

    if (!$mail->Send()) die ('Mailer Error: ' . $mail->ErrorInfo);



?>