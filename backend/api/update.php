<?php

//database.php einfügen, um zur Datenbank zu verbinden
require 'database.php';

// die geposteten Daten lesen und in variable speichern
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    // die geposteten Daten in ein Array/Object umwandeln
    $request = json_decode($postdata);

    // abfragen ob die geposteten Daten gültig sind (nicht leer und nicht kleiner als 0)
    if ((int)$request->id < 1 ||
        trim($request->title) == '' ||
        trim($request->description) == '' ||
        trim($request->street) == '' ||
        trim($request->street_number) == '' ||
        trim($request->zip) == '' ||
        trim($request->city) == '' ||
        trim($request->phone) == '') {
        return http_response_code(400);
    }

    // säubert special charakters aus den geposteten daten
    $id    = mysqli_real_escape_string($con, (int)$request->id);
    $title = mysqli_real_escape_string($con, trim($request->title));
    $description = mysqli_real_escape_string($con, trim($request->description));
    $street = mysqli_real_escape_string($con, trim($request->street));
    $street_number = mysqli_real_escape_string($con, trim($request->street_number));
    $zip = mysqli_real_escape_string($con, trim($request->zip));
    $city = mysqli_real_escape_string($con, trim($request->city));
    $phone = mysqli_real_escape_string($con, trim($request->phone));
    $website_url = mysqli_real_escape_string($con, trim($request->website_url));
    $email = mysqli_real_escape_string($con, trim($request->email));
    $longitude = $request->longitude;
    $latitude = $request->latitude;
    $image_url = mysqli_real_escape_string($con, trim($request->image_url));

    // schreibt sql statement und ändert die daten in der datenbank
    $sql = "UPDATE `markers` SET 
            `title`='$title',
            `description`='$description',
            `street`='$street',
            `street_number`='$street_number',
            `zip`='$zip',
            `city`='$city',
            `phone`='$phone',
            `website_url`='$website_url',
            `email`='$email',
            `longitude`='$longitude',
            `latitude`='$latitude',
            `image_url`='$image_url'
            WHERE `id` = '{$id}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return http_response_code(422);
    }
}