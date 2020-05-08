<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$size = $_POST['sizes'];
	$radios = $_POST['radio'];
	$url = $_POST['url_name'];
	$message = $_POST['message'];

	$mailTo = "info@ehsaanali.co.uk";
	$headers = "From: " . $email;
	$txt = "You have received an email from " . $name . ".\n\n" . "Their enquiry details are: " . "./n/n" . $name . $email . $size . $radios . $url . $message;


	mail($mailTo, $txt, $headers);
	header("Location: summary.html?mailsend");
}
