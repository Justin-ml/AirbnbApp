import React from "react";
import img1 from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import img4 from "../../images/img-4.jpg";
import img5 from "../../images/img-5.jfif";
import img6 from "../../images/img-6.jpg";
import img7 from "../../images/img-7.jpg";
import img8 from "../../images/img-8.jfif";
import img9 from "../../images/img-9.jpg";
import "./hero.css";

export default function Hero() {
  return (
    <div>
      <section className="hero-imgs">
        <img src={img1} alt="img1" className="img1" />
        <img src={img2} alt="img2" className="img2" id="img2-id" />
        <img src={img3} alt="img3" className="img3" />
        <img src={img4} alt="img4" className="img4" />
        <img src={img5} alt="img5" className="img5" />
        <img src={img6} alt="img6" className="img6" />
        <img src={img7} alt="img7" className="img7" />
        <img src={img8} alt="img8" className="img8" />
        <img src={img9} alt="img9" className="img9" />
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
