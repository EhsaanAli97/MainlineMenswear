<?php

	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		$email=$_POST['email'];
		$message=$_POST['message'];

		$mailTo = "info@ehsaanali.co.uk";
		$headers = "From: ".$email;
		$txt = "You have received an email from ".$name.".\n\n".$message;


		mail($mailTo, $txt, $headers);
		header("Location: final.html?mailsend");
	}
