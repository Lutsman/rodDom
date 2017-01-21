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
    
    require_once $_SERVER['DOCUMENT_ROOT'].'/mobile-detect.php';
    $detect = new Mobile_Detect;

    $ver = 'десктопная';
    if(!isset($_GET['full'])&&!$_SESSION['full']) {
        if($detect->isTablet()) {
            $ver = 'планшетная';
            echo file_get_contents('tablet.html');
        } elseif($detect->isMobile()||isset($_GET['m'])) {
            $ver = 'мобильная';
            echo file_get_contents('mobile.html');
        }
    }
    if($ver == 'десктопная') echo file_get_contents('desktop.html');

    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $subject = 'Сообщение с сайта ' . $_SERVER['SERVER_NAME'].' ('.$ver.') с формы:'.$messageBody;
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
    require $_SERVER['DOCUMENT_ROOT'].'/class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->From = 'welcome@roddom-for-men.ru';               // от кого
    $mail->FromName = 'Выписка из роддома под ключ';        // от кого
    //$mail->AddAddress('pr@svadba-dream.ru','');
    //$mail->AddBCC('pr@svadba-dream.ru','');  // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "utf-8";                   // кодировка

	define('cmfPart', 'main');
	define('cmfDbPefix', 'site17_');
    require $_SERVER['DOCUMENT_ROOT'].'/_system/config_sql.php';
    try {
		$db = new PDO(
			'mysql:host='.mysql_host.';dbname='.mysql_db, 
			mysql_user, 
			mysql_password, 
			array(
			PDO::ATTR_PERSISTENT => 1,
			PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'
			));
	}
	catch(PDOException $e) {
		echo $e;
		exit;
	}

    // если был файл, то прикрепляем его к письму
    if(isset($_FILES['uploaded_file1'])) {
        if($_FILES['uploaded_file1']['error'] == 0){
            $mail->AddAttachment($_FILES['uploaded_file1']['tmp_name'], $_FILES['uploaded_file1']['name']);
        }
    }

    $query = $db->prepare('SELECT email FROM `'.cmfDbPefix.'mail_list` WHERE `form` = \'yes\'');
	$query->execute();
	while ($row =  $query->fetch(PDO::FETCH_ASSOC)) {
		$mail->AddAddress($row['email']);
	}

    //if (isset($_POST['cena']) && $_POST['cena'] != '') {
    //$mail->AddAddress('pr@svadba-dream.ru');  // кому - адрес, Имя
    //}


    $mail->Body = $mess;
    $mail->Send();

    //if (!$mail->Send()) die ('Mailer Error: ' . $mail->ErrorInfo);

?>
