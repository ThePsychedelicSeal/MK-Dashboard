<?php
$username = "Psychedelic Seal";
$phone = "(123) 456-7890";
$username_array = array("Psychedelic", "Seal");

$username_lower = strtolower($username); // all lowercase
$username_upper = strtoupper($username); // all uppercase
$username_trim = trim($username); // remove white spaces before and after string
$username_pad = str_pad($username, 20, "0"); // add "character" until it equals the middle value
$phone_replace = str_replace(array("-", "(", ") "), array(".", "", "."), $phone); // replaces values in the string (value to replace, replace with, $var)
$username_reverse = strrev($username); // reverse the string
$username_shuffle = str_shuffle($username); // shuffle the string
$equals = strcmp($username, "Psychedelic Seal"); // compare the $var to a string
$count = strlen($phone); // get the length of the string
$index = strpos($phone, "-"); // get the first position of the defined string
$first_name = substr($username, 0, 11); // create substring from $var from defined starting postion to defined end position
$last_name = substr($username, 12); // create substring from $var from defined start position to whatever the end is
$full_name = explode(" ", $username); // breaks up the string into substring based on the ""
$username_implode = implode("-", $username_array); // takes an array and makes a single string from them

echo $username . "<br>";
echo $username_lower . "<br>";
echo $username_upper . "<br>";
echo $username_trim . "<br>";
echo $username_pad . "<br>";
echo $phone_replace . "<br>";
echo $username_reverse . "<br>";
echo $username_shuffle . "<br>";
echo $equals . "<br>";
echo $count . "<br>";
echo $index . "<br>";
echo $first_name . "<br>";
echo $last_name . "<br>";
foreach ($full_name as $name) {
    echo $name . "<br>";
};
echo $username_implode . "<br>";
