<?php
    if(strlen($_POST['getout']) > 0) {
        // $spambot = true;
        header("Location: index.php");
        exit;
    }
    mysql_connect("localhost", "roddom_usr", "bcyB08Nb") or die (mysql_error ());
    mysql_select_db("roddom") or die(mysql_error()); 
    mysql_query("SET NAMES 'utf8'"); 
mysql_query("SET CHARACTER SET 'utf8'");
mysql_query("SET SESSION collation_connection = 'utf8_general_ci'");
    mysql_query("INSERT INTO orders (form,date,name,phone) VALUES ('".$_POST['whatForm']."', '".time()."', '".$_POST['name']."', '".$_POST['phone']."')");

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
    $mail->AddAddress('welcome@roddom-for-men.ru',''); //lislab@yandex.ru  333333y@gmail.com
    $mail->AddBCC('welcome@roddom-for-men.ru','');  // кому - адрес, Имя
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
    $mail->AddAddress('welcome@roddom-for-men.ru');  // кому - адрес, Имя pr@svadba-dream.ru !!!!старый адресс был, этот уточнить адресс
        
        
    }
        $fp = @fopen("test.txt","a");
        fwrite($fp, $_POST['name']."\n".$_POST['phone']."\n");
        fclose($fp);

    $mail->Body = $mess;

    if (!$mail->Send()) die ('Mailer Error: ' . $mail->ErrorInfo);



?>