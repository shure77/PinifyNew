<?php

//database.php einfügen, um zur Datenbank zu verbinden
require 'database.php';

// die geposteten Daten lesen und in variable speichern
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    //die geposteten Daten in ein Array/Object umwandeln
    $request = json_decode($postdata);


    // abfragen ob die geposteten Daten gültig sind (nicht leer und nicht kleiner als 0)
    if(trim($request->title) === '' ||
        trim($request->description) === '' ||
        trim($request->street) === '' ||
        trim($request->street_number) === '' ||
        trim($request->zip) === '' ||
        trim($request->city) === '' ||
        trim($request->phone) === '')

    {
        return http_response_code(400);
    }

    // säubert special charakters aus den geposteten daten
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


    // schreibt sql statement und fügt daten zur datenbank hinzu
    $sql = "INSERT INTO `markers`(`id`,`pins_id`,`title`,`description`,`street`,`street_number`,`zip`,`city`,`phone`,`website_url`,`email`,`longitude`,`latitude`,`image_url`) 
            VALUES (null, null,'{$title}','{$description}','{$street}','{$street_number}','{$zip}','{$city}','{$phone}','{$website_url}','{$email}','{$longitude}','{$latitude}','{$image_url}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $marker = [
            'title' => $title,
            'description' => $description,
            'street' => $street,
            'street_number' => $street_number,
            'zip' => $zip,
            'city' => $city,
            'phone' => $phone,
            'website_url' => $website_url,
            'email' => $email,
            'longitude' => $longitude,
            'latitude' => $latitude,
            'image_url' => $image_url,
            'id'    => mysqli_insert_id($con)
        ];
        echo json_encode($marker);
    }
    else
    {
        http_response_code(422);
    }
}