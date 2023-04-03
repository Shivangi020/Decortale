import React from "react";
import "./services.css";
import {
  MdOutlineChair,
  MdOutlinePriceCheck,
  MdPeopleOutline,
  MdOutlineDesignServices,
} from "react-icons/md";

function Services() {
  return (
    <div className="service-main">
      <section className="service-wrapper">
        <div className="service-text">
          <h1 className="service-heading">Reason Why</h1>
          <p className="service-p">Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
        </div>
        <div className="service-content">
          <div className="service-item">
            <span className="service-icon"><MdPeopleOutline/></span><p className="icon-p">2K+ Satisfied customer</p>
          </div>
          <div className="service-item"><span className="service-icon"><MdOutlineChair/></span><p className="icon-p">Customised furnitures</p></div>
          <div className="service-item"> <span className="service-icon"><MdOutlinePriceCheck/></span><p className="icon-p">Affordable price</p></div>
          <div className="service-item"><span className="service-icon"><MdOutlineDesignServices/></span><p className="icon-p">Unique Designs</p></div>
        </div>
      </section>
    </div>
  );
}

export default Services;
