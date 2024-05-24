<?php
const BASE_PATH = __DIR__ . '/../';
require BASE_PATH . '/vendor/autoload.php';
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>

<script src="index.js"></script>
<?php
$dirCoursePath = "../images/courses";
$courseFiles = scandir($dirCoursePath);
$hello = "hello";

foreach ($courseFiles as $courseFile) {
    $filePath = $dirCoursePath . '/' . $courseFile;
    /*     if (is_file($filePath)) {
        echo $courseFile . "<br>";
    } */

    echo "label";
};

?>