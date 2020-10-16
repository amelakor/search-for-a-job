import React from "react";
import sliderImg from "../../assets/images/sliderImg.jpg";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="Slider">
      <img src={sliderImg} alt="Main" />
      <div className="Overlay">
        <h1>Welcome to Github Jobs</h1>
      </div>
    </div>
  );
}
