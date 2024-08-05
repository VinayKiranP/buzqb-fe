import React from "react";
import PickMeals from "../../Assets/pick-meals.svg";
import ChooseMeals from "../../Assets/choose-image.svg";
import DeliveryMeals from "../../Assets/delivery-image.svg";

const WorkComponent = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "No Extra Cost",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
    },
    {
      image: ChooseMeals,
      title: "One-Stop Solution",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
    },
    {
      image: DeliveryMeals,
      title: "Listing Delivered",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
    },
  ];
  return (
    <div name="work" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We are Taking your basic information to List your Business and host in our site,
          for Profiling and Listing, so that customers can find & Trust your Business.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkComponent;
