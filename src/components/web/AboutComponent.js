import React from "react";
import AboutBackground from "../../Assets/about-background.svg";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutComponent = () => {
  return (
    <div name="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          buzQB - Business Listing Platform
        </h1>
        <p className="primary-text">
          Your Business now a days is growing like never before.
        </p>
        <p className="primary-text">
          We are taking care on your business Listing and Maintain at a Zero Cost
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
