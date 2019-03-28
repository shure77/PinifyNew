<?php
/**
 * Ruft die Datenbankdaten ab und speichert diese in ein Array
 * Wandelt Array in Json um
 * Gibt eine Liste von Policies als json zurück oder wirft einen 404 Error
 */

//database.php einfügen, um zur Datenbank zu verbinden
require 'database.php';

$cities = [];

if(isset($_GET['city'])) {
    $city = $_GET['city'];
    $sql = "SELECT id, city, longitude, latitude FROM cities WHERE city ='" . $city . "'";
    if($result = mysqli_query($con,$sql))
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $cities['id']    = $row['id'];
            $cities['city'] = $row['city'];
            $cities['longitude'] = $row['longitude'];
            $cities['latitude'] = $row['latitude'];
        }

        echo json_encode($cities);
    }
    else
    {
        http_response_code(404);
    }
} else {
    $sql = "SELECT id, city, longitude, latitude FROM cities";
    if($result = mysqli_query($con,$sql))
    {
        $i = 0;
        while($row = mysqli_fetch_assoc($result))
        {
            $cities[$i]['id']    = $row['id'];
            $cities[$i]['city'] = $row['city'];
            $cities[$i]['longitude'] = $row['longitude'];
            $cities[$i]['latitude'] = $row['latitude'];
            $i++;
        }

        echo json_encode($cities);
    }
    else
    {
        http_response_code(404);
    }
}
