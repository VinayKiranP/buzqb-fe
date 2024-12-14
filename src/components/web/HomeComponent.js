import React from "react";
import { Link as Redirect } from 'react-router-dom';
import BannerBackground from "../../Assets/home-background.svg";
import BannerImage from "../../Assets/home-background-image.png";
import Navbar from "./NavbarComponent";
import { FiArrowRight } from "react-icons/fi";

const HomeComponent = () => {
  return (
    <div name="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Business Website
          </h1>
          <p className="primary-text">
            List Your Business on buzQB On Free Of Cost,
            & We Have Solotion for marinating your Sales Records, is Our Responsibility.
          </p>
          <Redirect to="/add-business" className="secondary-button">Register Now <FiArrowRight />{" "}
          </Redirect>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
