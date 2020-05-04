<?php

/* Задаем переменные */
$name      = htmlspecialchars($_POST["name"]);
$tel        = htmlspecialchars($_POST["tel"]);
$message        = htmlspecialchars($_POST["message"]);


/* Ваш адрес и тема сообщения */
$address = "ruslan.slpv@ukr.net";
$sub = "Заявка на сайт";

$mes = "
Name: $name
Phone: $tel
message: $message
";

/* $headers = "From: " . $email . "\r\n";
 $headers .= "Reply-To: ". $email . "\r\n";
 $headers .= "MIME-Version: 1.0\r\n";
 $headers .= "Content-Type: text/html; charset=UTF-8\r\n";*/

/* Отправляем сообщение, используя mail() функцию */
$from  = $email;
mail($address, $sub, $mes, 'From: info@ochagh.com.ua');
?>
