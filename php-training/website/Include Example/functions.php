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
<?php


function happy_birthday($first_name, $age)
{
    echo "Happy Birthday to You <br>";
    echo "Happy Birthday to You <br>";
    echo "Happy Birthday dear {$first_name} <br>";
    echo "Happy Birthday to You <br>";
    echo "You are {$age} years old! <br> <br>";
};

happy_birthday("Seal", 28);
happy_birthday("Mac", 26);

function hypotenuse(float $a, float $b)
{
    $c = sqrt($a ** 2 + $b ** 2);
    return $c;
};

echo hypotenuse(3, 4);
?>