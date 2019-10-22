<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="noindex">
    <title>erfolgriich</title>
    <link  rel="stylesheet" href="assets/style.css"><link>
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
        $sql = "INSERT INTO teilnehmer (Vorname, Nachname, Nachricht, Teilnahme) VALUES ('$firstnameEncoded', '$lastnameEncoded', '$nachrichtEncoded', '$teilnahme')";
        //$insert = $mysqli->query($sql);

        // if ( $insert ) {
        //     echo "Succesful! Row ID: {$mysqli->insert_id}";
        // } else {
        //     die("Error: {$mysqli->errno} : {$mysqli->error}");
        // }

        if ( mysqli_query($conn, $sql)) {
            echo "du hesch eus din entscheid soebe erfolgriich kommuniziert. Danke für das!";
        } else {
            echo "Error:" . $sql . "<br>" . mysqli.error($conn);
        }

        mysqli_close($conn);
    }
    ?>
    <a id="back-to-site" href="index.php">zrugg zude websiite</a>
    </div>
</body>
</html>