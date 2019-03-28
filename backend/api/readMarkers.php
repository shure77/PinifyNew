<?php
/**
 * Ruft die Datenbankdaten ab und speichert diese in ein Array
 * Wandelt Array in Json um
 * Gibt eine Liste von Policies als json zurück oder wirft einen 404 Error
 */

//database.php einfügen, um zur Datenbank zu verbinden
require 'database.php';

$markers = [];

if(isset($_GET['city'])) {
    $city = $_GET['city'];
    $sql = "SELECT id, pins_id, title, description, street, street_number, zip, city, phone, website_url, email, longitude, latitude, image_url FROM markers WHERE city='" . $city . "'";
} else {
    $sql = "SELECT id, pins_id, title, description, street, street_number, zip, city, phone, website_url, email, longitude, latitude, image_url FROM markers";
}
if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $markers[$i]['id']    = $row['id'];
        $markers[$i]['title'] = $row['title'];
        $markers[$i]['description'] = $row['description'];
        $markers[$i]['street'] = $row['street'];
        $markers[$i]['street_number'] = $row['street_number'];
        $markers[$i]['zip'] = $row['zip'];
        $markers[$i]['city'] = $row['city'];
        $markers[$i]['phone'] = $row['phone'];
        $markers[$i]['website_url'] = $row['website_url'];
        $markers[$i]['email'] = $row['email'];
        $markers[$i]['longitude'] = $row['longitude'];
        $markers[$i]['latitude'] = $row['latitude'];
        $markers[$i]['image_url'] = $row['image_url'];
        $i++;
    }

    echo json_encode($markers);
}
else
{
    http_response_code(404);
}