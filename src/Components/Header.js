import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// To use routing functionalities

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"></a>
        <div>
          <h1>SAFARICOM FRAUD CASE REPORT</h1>
        </div>
      </nav>
    );
  }
}
export default Header;
