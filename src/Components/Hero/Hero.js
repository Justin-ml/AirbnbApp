import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div>
      <section className="hero-imgs hero-container">
        <img src="/images/img-1.jpg" alt="img1" className="img1" />
        <img src="/images/img-2.jpg" alt="img2" className="img2" id="img2-id" />
        <img src="/images/img-3.jpg" alt="img3" className="img3" />
        <img src="/images/img-4.jpg" alt="img4" className="img4" />
        <img src="/images/img-5.jfif" alt="img5" className="img5" />
        <img src="/images/img-6.jpg" alt="img6" className="img6" />
        <img src="/images/img-7.jpg" alt="img7" className="img7" />
        <img src="/images/img-8.jfif" alt="img8" className="img8" />
        <img src="/images/img-9.jpg" alt="img9" className="img9" />
      </section>
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <span>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </span>
      </div>
    </div>
  );
}
