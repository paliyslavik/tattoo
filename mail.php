<?php
require 'vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.ukr.net';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'missmay@ukr.net';                 // SMTP username
$mail->Password = 'Sp122334';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;
$mail ->charSet = "UTF-8";
$mail->setFrom('missmay@ukr.net', 'Sait');
$mail->addAddress('imherea@i.ua');               // Name is optional
$mail->isHTML(true);                                  // Set email format to HTML


if (!empty ($_POST['name']) && !empty ($_POST['email']) && !empty ($_POST['message'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail->Subject =$email;
    $mail->Body = 'Повідомлення від <strong>'.$name.'</strong><br/>'.$message;
    $mail->AltBody = $message;

    if (!$mail->send()) {
        echo 'Повідомлення не відправлено.';
        echo 'Сталась помилка: ' . $mail->ErrorInfo;
    } else {
        echo 'Повідомлення відправлено';
    }
}else{

    echo 'He всі поля заповнені';
}