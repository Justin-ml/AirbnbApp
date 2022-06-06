import React from "react";
import "./card.css";
import katieZaferes from "../../images/katie-zaferes.jpg";
import starIcon from "../../images/star-icon.png";

export default function Card() {
  return (
    <section className="card-section">
      <img src={katieZaferes} alt="katie zaferes" className="katie-pic" />

      <div>
        <img src={starIcon} alt="starIcon" className="star-icon" />
        5.0(6).USA
      </div>
      <p>Life lessons with katie Zaferes</p>
      <p>
        <strong>From $136</strong> / Person
      </p>
    </section>
  );
}
