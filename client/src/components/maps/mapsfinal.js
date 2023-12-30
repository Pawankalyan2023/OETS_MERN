import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './style.css';

function mapsfinal{
  return(
    <div>
        <html>
          <head>
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
            <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
            <title>Vehicle Live Movement on Maps</title>
            <script type="text/javascript"
            src="http://maps.google.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&sensor=false"></script>
            <script type ="text/javascript" src="v3_epoly.js"></script> 
            <!-- http://www.geocodezip.com/scripts/ -->
            <script type="text/javascript" src="script.js"></script>
          </head>
          <body onload="initialize()">
            <div id="tools">
              <h4>Please enter locations and hit start to get started</h4>
              <input id="start" value="tambaram" />
              <input id="end" value="cit kundrathur bus" />
              <div id="error-msg"></div>
              <button id="start-btn" onclick="setRoutes();">Start</button>
            </div>
            <div id="map_canvas" style="width:100%;height:100%;"></div>
          </body>
        </html>
     </div>
)
}
export default mapsfinal