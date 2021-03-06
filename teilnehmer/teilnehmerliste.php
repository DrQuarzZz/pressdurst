<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="noindex">
    <title>Teilnehmerliste</title>
    <link rel="shortcut icon" href="../assets/favicon.ico"/>
    <!--<link  rel="stylesheet" href="../assets/style.css"><link>-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130784549-3"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-130784549-3');
    </script>
    <style>
        body {
            padding: 25px 50px;
        }
        .php-teilnehmer-page table th {
            background-color: darkgray;
        }
        table {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        table td, table th {
            border: 1px solid #ddd;
            padding: 8px;
        }
        table tr:nth-child(even){
            background-color: #f2f2f2;
        }
        table tr:hover {
            background-color: #ddd;
        }
        table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #4CAF50;
            color: white;
        }
        body > h1 {
            padding-top: 100px;
        }
        #teilnehmer-table > div {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 25px;
            background-color: #fff;
            border-bottom: 1px solid #000;
            font-family: sans-serif;
        }
    </style>
</head>
<body class="php-teilnehmer-page">
    <h1>Teilnehmerliste</h1>
    <div id="teilnehmer-table">
<?php
    if ( !empty( $_POST ) ) {

        require_once('../assets/requirements/config.php');

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $database);

        // Check connection
        if (!$conn) {

            die("Connection failed: " . mysqli_connect_error());

        }

        // echo "Connected successfully";

        // if ( mysqli_query($conn, $sql)) {
        //     echo "Datenbankverbindung erfolgreich";
        // } else {
        //     echo "Error:" . $sql . "<br>" . mysqli.error($conn);
        // }

        $password = mysqli_real_escape_string($conn, $_POST['password']);
        
        $dbpassword = "SELECT Passwort FROM adminpw";
        $getPassword = $conn->query($dbpassword);
            if ( $getPassword=mysqli_query($conn,$dbpassword) ) {
                // Fetch one and one row
                while ($row=mysqli_fetch_row($getPassword))
                    {
                        $adminPassword = $row[0];
                    }
            }

        if ( $password == $adminPassword ) {
            // $sql = "SELECT id, Vorname, Nachname, Nachricht, Teilnahme, Email FROM teilnehmer";
            $sql = "SELECT * FROM teilnehmer";
            $result = $conn->query($sql);

            $yesCounter = 0;
            $maybeCounter = 0;
            $noCounter = 0;

            // 
            if ($result->num_rows > 0) {
                echo "<table><tr><th>ID</th><th>Nimmt teil?</th><th>Name:</th><th>Nachricht</th><th>Email</th></tr>";
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>" . utf8_encode($row["ID"]) . "</td><td>" . utf8_encode($row["Teilnahme"]) . "</td><td>" . utf8_encode($row["Vorname"]) . " " . utf8_encode($row["Nachname"]) . "</td><td>" . utf8_encode($row["Nachricht"]) . "</td><td>" . utf8_encode($row["Email"]) . "</td></tr>";
                    if ( $row["Teilnahme"] == "Ja") {
                        ++$yesCounter;
                    }
                    if ( $row["Teilnahme"] == "Vielleicht") {
                        ++$maybeCounter;
                    }
                    if ( $row["Teilnahme"] == "Nein") {
                        ++$noCounter;
                    }
                    // var_dump($row["Email"]);
                }
                echo "</table>";
            } else {
                echo "0 results";
            }
            print "<div><span>Ja: $yesCounter </span><span>Vielleicht: $maybeCounter </span><span>Nein: $noCounter </span></div>";
        } else {
            echo "please enter the right password in order to see the participants\n";
            ?>
            <a id="back-to-site" href="index.php">TRY AGAIN</a>
            <?php
        }

        // $sql = "INSERT INTO teilnehmer (Vorname, Nachname, Nachricht, Teilnahme, Email) VALUES ('$firstnameEncoded', '$lastnameEncoded', '$nachrichtEncoded', '$teilnahme', '$emailEncoded')";

        mysqli_close($conn);
    }
    ?>
    </div>
</body>
</html>
