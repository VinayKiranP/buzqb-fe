import React from "react";
import ProfilePic from "../../Assets/vk-black.png";
import { AiFillStar } from "react-icons/ai";

const TestimonialComponent = () => {
  return (
    <div name="testimonials" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          buzQB Helped me to List my small scale General Store Business in an Online Platform.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          buzQB Maintaining our Listing and Profiling at zero cost and Hassel free.
          I can now share my profile in my Locality and in Google Map's also.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Vinay Kiran</h2>
      </div>
    </div>
  );
};

export default TestimonialComponent;
