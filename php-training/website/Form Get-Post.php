<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <input type="radio" name="course" id="" value="Bowser Castle 3">Bowser Castle 3 <br>
        <input type="radio" name="course" id="" value="Yoshi Valley">Yoshi Valley <br>
        <input type="radio" name="course" id="" value="Snow Land">Snow Land <br>
        <input type="radio" name="course" id="" value="Waluigi Stadium">Waluigi Stadium <br>
        <input type="submit" value="submit" name="submit">
    </form>
</body>

</html>
<?php
if (isset($_POST["submit"])) {
    if (isset($_POST["course"])) {
        $course = $_POST["course"];
        echo $course;
    } else {
        echo "Please select a course";
    }
};

// For checkboxes format with [] to define as array <input type="checkbox" name="name[]" id="" value="title">Title<br>
?>