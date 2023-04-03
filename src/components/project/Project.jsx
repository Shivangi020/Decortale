import React from "react";
import "./project.css";
import image1 from "../../images/Kitchen-design.jpg";
import image2 from '../../images/Bedroom-design.jpg'
import image3 from '../../images/LivingRoom-design.jpg'



function Project() {
  return (
    <div className="project-main">
      <div className="project-wrapper">
        <section className="project-title">Recent works</section>
        <section className="project-content">
          <div className="project">
            <div className="project-image vertical">
              <img src={image1} ></img>
              <div className="image-overlay ">
                <p>Kitchen Interior</p>
              </div>
            </div>
            <div className="project-image horizontal">
              <img src={image2}></img>
              <div className="image-overlay ">
                <p>Bedroom Interior</p>
              </div>
            </div>
            <div className="project-image big">
              <img src={image3}></img>
              <div className="image-overlay">
                <p>Living Room Interior</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="project-link-main">
          <a href="/works" className="pro-link">Find more</a>
        </section> */}
      </div>
    </div>
  );
}

export default Project;
