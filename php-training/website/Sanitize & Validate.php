<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        Name: <br>
        <input type="text" name="name"> <br>
        Age: <br>
        <input type="text" name="age"> <br>
        Email: <br>
        <input type="text" name="email"> <br>
        <input type="submit" name="enter" value="enter">
    </form>
</body>

</html>

<?php
/* if (isset($_POST["enter"])) {
    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
    $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

    echo "hello {$name} <br>";
    echo "you are {$age}. <br>";
    echo "Email: {$email} <br>";
}
 */
if (isset($_POST["enter"])) {
    $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);
    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);

    if (empty($age)) {
        echo "Not a valid number <br>";
    } else {
        echo "you are {$age}. <br>";
    }

    if (empty($email)) {
        echo "Not a valid email <br>";
    } else {
        echo "Your email is {$email}. <br>";
    }
}

// <script> alert("Hi"); </script>