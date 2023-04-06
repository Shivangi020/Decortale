import React from "react";
import "./project.css";



function Project() {
  return (
    <div className="project-main">
      <div className="project-wrapper">
        <section className="project-title">RECENT WORK</section>
        <section className="project-content">
          <div className="project">
            <div className="project-image vertical">
              <img src='https://res.cloudinary.com/drgtvwy3q/image/upload/v1680550036/decortale-images/Kitchen-design_nh78o3.jpg' alt='Kitchen Interior' ></img>
              <div className="image-overlay ">
                <p>Kitchen Interior</p>
              </div>
            </div>
            <div className="project-image horizontal">
              <img src='https://res.cloudinary.com/drgtvwy3q/image/upload/v1680550020/decortale-images/Bedroom-design_mlxmuq.jpg' alt="Bedroom Interior"></img>
              <div className="image-overlay ">
                <p>Bedroom Interior</p>
              </div>
            </div>
            <div className="project-image big">
              <img src='https://res.cloudinary.com/drgtvwy3q/image/upload/v1680550042/decortale-images/LivingRoom-design_bjmcqg.jpg' alt="Living Room Interior"></img>
              <div className="image-overlay">
                <p>Living Room Interior</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
