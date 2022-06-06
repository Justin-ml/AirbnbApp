import React from "react";
import "./navbar.css";
import airbnb from "../../images/airbnb-icon.png";

export default function () {
  return (
    <div className="nav">
      <img src={airbnb} alt="airbnb icon" className="nav-icon" />
    </div>
  );
}
