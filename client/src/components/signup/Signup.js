// Signup.js

import React from 'react';
import './Signup1.css'; // Make sure to adjust the path based on your project structure

function Signup() {
  return (
    <div>
      <html lang="en" dir="ltr">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Registration</title>
        </head>
        <body>
          <div className="container">
            <div className="title">Registration</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Username</span>
                    <input type="text" placeholder="Enter your username" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input type="text" placeholder="Enter your number" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input type="password" placeholder="Confirm your password" required />
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" />
                  <span className="gender-title">Gender</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one"></span>
                      <span className="gender">Male</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two"></span>
                      <span className="gender">Female</span>
                    </label>
                    <label htmlFor="dot-3">
                      <span className="dot three"></span>
                      <span className="gender">Other</span>
                    </label>
                  </div>
                </div>
                <div className="button">
                  <input type="submit" value="Register" onClick={() => { window.location.href = '//Login page oda link inga varanum bro '; }} />
                </div>
              </form>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default Signup;
