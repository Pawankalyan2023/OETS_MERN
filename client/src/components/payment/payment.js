import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './stylep.css';


function payment{
    return(
        <div>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    

                </head>
                <body>

                <div class="container">

                    <form action="">

                        <div class="row">

                            <div class="col">

                                <h3 class="title">billing address</h3>

                                <div class="inputBox">
                                    <span>full name :</span>
                                    <input type="text" placeholder="john deo">
                                </div>
                                <div class="inputBox">
                                    <span>email :</span>
                                    <input type="email" placeholder="example@example.com">
                                </div>
                                <div class="inputBox">
                                    <span>address :</span>
                                    <input type="text" placeholder="room - street - locality">
                                </div>
                                <div class="inputBox">
                                    <span>city :</span>
                                    <input type="text" placeholder="mumbai">
                                </div>

                                <div class="flex">
                                    <div class="inputBox">
                                        <span>state :</span>
                                        <input type="text" placeholder="india">
                                    </div>
                                    <div class="inputBox">
                                        <span>zip code :</span>
                                        <input type="text" placeholder="123 456">
                                    </div>
                                </div>

                            </div>

                            <div class="col">

                                <h3 class="title">payment</h3>

                                <div class="inputBox">
                                    <span>cards accepted :</span>
                                    <img src="card_img.png" alt="">
                                </div>
                                <div class="inputBox">
                                    <span>name on card :</span>
                                    <input type="text" placeholder="mr. john deo">
                                </div>
                                <div class="inputBox">
                                    <span>credit card number :</span>
                                    <input type="number" placeholder="1111-2222-3333-4444">
                                </div>
                                <div class="inputBox">
                                    <span>exp month :</span>
                                    <input type="text" placeholder="january">
                                </div>

                                <div class="flex">
                                    <div class="inputBox">
                                        <span>exp year :</span>
                                        <input type="number" placeholder="2022">
                                    </div>
                                    <div class="inputBox">
                                        <span>CVV :</span>
                                        <input type="text" placeholder="1234">
                                    </div>
                                </div>

                            </div>
                    
                        </div>
                        <!--<a href="successpage.html">
                            <input type="submit" value="proceed to check" class="submit-btn" onclick="myfunction()" /></a>
                            <script> 
                                function myfunction(){
                                    window.location.href = "successpage.html";
                                }
                            </script>-->
                            <div class="dummy-btn">            <a href="successpage.html" class="submit-btn">proceed</a>
                            </div>
                    </form>

                </div>    
                    
                </body>
                </html>
        </div>
    )
}
export default payment
