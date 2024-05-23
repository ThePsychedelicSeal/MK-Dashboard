<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <label for="">Username</label>
        <input type="text" name="username" id="">
        <label for="">Password</label>
        <input type="password" name="password" id="">
        <input type="submit" name="login" value="Log In">
    </form>
</body>

</html>
<?php
$username = null;

if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if (empty($username)) {
        echo "No Username";
    } else {
        echo "Hello {$username}";
    }
};
?>