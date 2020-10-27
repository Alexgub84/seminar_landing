<?php
    // $name = $_POST['name'];
    // $lastname= $_POST['lastname'];
    // $phone= $_POST['phone'];
    // $email= $_POST['email'];
    // $address= $_POST['address'];
    // $city= $_POST['city'];
    // $participation= $_POST['participation'];

    // $email_from='Landmark Registration site';
    // $email_subject='Seminar Registration';
    // $email_body = "Name: $name.\n".
    //              "Email: $email.\n".
    //              "Participation history: $participation.\n";
    $email_from='Landmark Registration site';
    $email_subject='Seminar Registration';
    $email_body = "Name: Alex.\n".
                 "Email: bla@bla.\n".
                 "Participation history: Hero.\n";
    $headers = "From: alex@gmail.com \r\n";
    $to="alex.gub@gmail.com";
    mail($to,$email_subject,$email_body,$headers);
    header("location: home.html");
?>