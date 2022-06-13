import React from "react";
import "./card.css";

export default function Card({ item }) {
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <section>
        {badgeText && <div className="card-availability">{badgeText}</div>}
        <img src={item.coverImg} alt="katie zaferes" className="profile-pic" />
      </section>
      <div>
        <img src="/images/star-icon.png" alt="starIcon" className="star-icon" />
        <span className="rating common-styles">{item.stats.rating}</span>
        <span className="rating-location common-styles">
          ({item.stats.reviewCount}).{" "}
        </span>
        <span className="rating-location common-styles">{item.location}</span>

        <p className="title common-styles">{item.title}</p>
        <p className="common-styles">
          <strong>From ${item.price}</strong> / Person
        </p>
      </div>
    </div>
  );
}
