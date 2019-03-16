<?php
$name = $_POST['Name'];
$email = $_POST['Email'];
$phone = $_POST['Phone'];
//$call = $_POST['call'];
//$type = $_POST['type'];
$subj = $_POST['Subject'];
$message = $_POST['Message'];
$formcontent=" From: $name \n Phone: $phone \n Message: $message";
$recipient = "YOUREMAIL@HERE.COM";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Message sent Thank You!" . " -" . "<a href='contact.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
