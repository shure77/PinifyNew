<?php
//database.php einfügen, um zur Datenbank zu verbinden
require 'database.php';

// ID einlasen, verifizieren und säubern
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

if(!$id)
{
    return http_response_code(400);
}

// erzeugt sql statement und löscht den eintrag von der datenbank
$sql = "DELETE FROM `markers` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
    http_response_code(204);
}
else
{
    return http_response_code(422);
}