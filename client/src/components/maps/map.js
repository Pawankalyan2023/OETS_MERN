import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';

function map{
  return (
    <div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=myMap"></script>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            
        <script>
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker = null;

        function autoUpdate() {
          navigator.geolocation.getCurrentPosition(function(position) {  
            var newPoint = new google.maps.LatLng(position.coords.latitude, 
                                                  position.coords.longitude);

            if (marker) {
              // Marker already created - Move it
              marker.setPosition(newPoint);
            }
            else {
              // Marker does not exist - Create it
              marker = new google.maps.Marker({
                position: newPoint,
                map: map
              });
            }

            // Center the map on the new position
            map.setCenter(newPoint);
          }); 

          // Call the autoUpdate() function every 5 seconds
          setTimeout(autoUpdate, 5000);
        }

        autoUpdate();
        </script>
        </body>
        </html>
    </div>
  )
}
export default map