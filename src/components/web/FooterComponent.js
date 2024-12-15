import React from "react";
import Logo from "../../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link as Redirect } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div>
    <hr/>
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <br/>
        <div className="footer-section-columns">
          <span>#36, 1st Main, Maruthi Layout,</span>
          <span>Behind malleshwaram Railway Station,</span>
          <span>Bengaluru - 560021 | Katnataka (India)</span>
          <span>contact@buzqb.com</span>
        </div>
        {/* <div className="footer-icons">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>
            <Redirect to="">Home</Redirect>
          </span>
          <span>
            <Redirect to="/share">Share</Redirect>
          </span>
          <span>
            <Redirect to="/connect">Connect</Redirect>
          </span>
          <span>
            <Redirect to="">Work</Redirect>
          </span>
        </div>
        <div className="footer-section-columns">
        <span>
            Consumer Policy
          </span>
          <span>
            <Redirect to="/terms-condition">Terms & Conditions</Redirect>
          </span>
          <span>
            <Redirect to="/privacy-policy">Privacy Policy</Redirect>
          </span>
        </div>
        <div className="footer-section-columns">
          <span><FaFacebookF /> Facebook</span>
          <span><BsYoutube /> Youtube</span>
          <span><BsTwitter /> Twitter</span>
          <span><SiLinkedin /> LinkedIn</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FooterComponent;
