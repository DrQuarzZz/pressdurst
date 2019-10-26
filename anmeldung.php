<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="noindex">
    <title>Danke und hoffentli bis denn</title>
    <link  rel="stylesheet" href="assets/style.css"><link>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130784549-3"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-130784549-3');
    </script>
</head>
<body class="php-feedback-page">
<div>
<?php
    if ( !empty( $_POST ) ) {

        $servername = "80.74.151.100";
        $database = "wg_fescht_ahmeldige";
        $username = "wgfescht_user";
        $password = "qP~m0d31";

        // Create connection

        $conn = mysqli_connect($servername, $username, $password, $database);

        // Check connection

        if (!$conn) {

            die("Connection failed: " . mysqli_connect_error());

        }
        // echo "Connected successfully";

        $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
        $firstnameEncoded = utf8_decode($firstname);
        $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
        $lastnameEncoded = utf8_decode($lastname);
        $nachricht = htmlspecialchars($_POST['nachricht']);
        $nachrichtEncoded = utf8_decode($nachricht);
        $teilnahme = mysqli_real_escape_string($conn, $_POST['teilnahme']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $emailEncoded = utf8_decode($email);
        $sql = "INSERT INTO teilnehmer (Vorname, Nachname, Nachricht, Teilnahme, Email) VALUES ('$firstnameEncoded', '$lastnameEncoded', '$nachrichtEncoded', '$teilnahme', '$emailEncoded')";


        if ( mysqli_query($conn, $sql)) {
            echo "du hesch eus din entscheid soebe erfolgriich kommuniziert. Danke für das!";
        } else {
            echo "Error:" . $sql . "<br>" . mysqli.error($conn);
        }

        // automatic confirmation email
        // Set the recipient email address.
        $recipient = $emailEncoded;
        // $recipient = "tobijafischer@gmail.com";
        

        // Set the email subject.
        $subject = "";
        if ( $teilnahme == "Ja" ) {
            $subject .= "Mir freued eus uf dich!";
        } elseif ( $teilnahme == "Vielleicht" ) {
            $subject .= "Du wirsches nöd bereue!";
        } elseif ( $teilnahme == "Nein" ) {
            $subject .= "Das isch würklich üsserscht Schaad!";
        } else {
            $subject .= "Was isch denn jetzt los?!";
        }

        // Build the email content.
        $email_content = "Hoi \nMega cool dassd chunnsch, mir freued eus uf dich! Din Schwümmbiweg 1!";
        // $email_content .= "Mega cool dassd chunnsch, mir freued eus uf dich! Din Schwümmbiweg 1!";
        // $email_content .= "Telefon:\n$phone\n\n";
        // $email_content .= "Nachricht:\n$message\n";

        // Build the email headers.
        $email_headers = "From: info@pressdurst.ch";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            // http_response_code(200);
            echo "<br>Eine Bestätigungsnachricht wurde soeben auf deine E-Mail versendet.";
        } else {
            // Set a 500 (internal server error) response code.
            // http_response_code(500);
            echo "Ups! Ups! Da scheint was schief gelaufen zu sein. Wir konnten dir keine Bestätigung senden.";
        }

        mysqli_close($conn);
    }
    ?>
    <a id="back-to-site" href="index.php">zrugg zude websiite</a>
    </div>
</body>
</html>