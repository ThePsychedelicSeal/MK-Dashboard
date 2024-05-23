<?php
setcookie("fav_food", "pizza", (time() + 86400)); // 86,400 is one day
setcookie("fav_drink", "coffee", (time() + (86400 * 3)));
setcookie("fav_dessert", "brownies", (time() + (86400 * 4)));

foreach ($_COOKIE as $key => $value) {
    echo "{$key} = {$value} <br>";
};

if (isset($_COOKIE["fav_food"])) {
    echo "You should get some {$_COOKIE["fav_food"]}";
} else {
    echo "I don't know your favorite food";
};
