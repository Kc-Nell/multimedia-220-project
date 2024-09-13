// u20780193 - Deliverable 1

import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav flex-column bg-light p-3 position-fixed" style={{ width: "200px", height: "100vh", top: 0, left: 0 }}>
          <h3>LoFind</h3>
          <Link to="/" className="nav-link">
            Discover
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
          <Link to="/splash" className="nav-link">
            Splash
          </Link>
        </nav>
      </div>
    );
  }
}
