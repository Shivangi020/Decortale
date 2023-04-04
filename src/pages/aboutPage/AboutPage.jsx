import React from "react";
import "./aboutPage.css";
import Hero from "../../components/hero/Hero";
import TeamCard from "./teamCard";
import { teamData } from "../../data";

function AboutPage() {
  return (
    <div className="aboutp-main">
      <Hero backImg='https://res.cloudinary.com/drgtvwy3q/image/upload/v1680550049/decortale-images/office_cnb3yr.jpg'>
        <h1 className="hero-heading">Our Office</h1>
        <p className='hero-p'>Just a interior designers creating your home tale</p>
        <p className='hero-p'>Transforming spaces, enhancing lifestyles</p>
        <button>Go Back</button>
      </Hero>
      <div className="people-div">
        <header className="team-header">Our People</header>
        <section className="team-s">
          {teamData.map((member,index)=>{
            const{name,imageSrc,pos,email} = member
            return <TeamCard name={name} mail={email} pos={pos}  imageSrc={imageSrc} key={index}/>
          })}
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
