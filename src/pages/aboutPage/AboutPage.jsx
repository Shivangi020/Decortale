import React from "react";
import "./aboutPage.css";
import Hero from "../../components/hero/Hero";
import TeamCard from "./teamCard";
import { teamData } from "../../data";
import {BiHomeAlt} from 'react-icons/bi'
import {BsTelephonePlus} from 'react-icons/bs'

function AboutPage() {
  return (
    <div className="aboutp-main">
      <Hero backImg='https://res.cloudinary.com/drgtvwy3q/image/upload/v1680550049/decortale-images/office_cnb3yr.jpg'>
        <h1 className="hero-heading">Our Office</h1>
        <p className='hero-p-l'><BiHomeAlt className="abt-i"/>123 Main Street, Suite 456, Anytown, USA 12345</p>
        <p className='hero-p-l'><BsTelephonePlus className="abt-i"/>889214753</p>
        <p className='hero-p-s'> Decortale is an interior design company located in downtown Anytown. Our team of experts is dedicated to helping you create a beautiful and functional home with our high-quality furniture, decor, and accessories. Visit our showroom today to transform your space.</p>
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
