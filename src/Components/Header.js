import React, { Component } from "react";
import logo from "../Components/images/logo.png";
//import { Navbar} from "react-router-dom";
// To use routing functionalities

const Navbar = () => {
  return (
    <nav>
      <h2>
        {" "}
        <img
          src={logo}
          width="200"
          height="100"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
          }}
          alt=""
        />
        FRAUD REPORTING 
      </h2>
    </nav>
  );
};

export default Navbar;
