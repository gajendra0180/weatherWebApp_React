import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/gajendra0180/Weather-Web-App/main/Images/logo.png" alt="" />
          <p>
          Satoru Gojo&nbsp;
            <br />
            &nbsp;&nbsp;<span>Tenki</span>
          </p>
        </div>
        <div className="nav_action_buttons">
          <button id="change_it">Home</button>
          <button>About</button>
          <button>Tenki</button>
          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
