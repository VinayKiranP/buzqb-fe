import React from "react";

const ContactComponent = () => {
  return (
    <div name="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="vk888@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default ContactComponent;
