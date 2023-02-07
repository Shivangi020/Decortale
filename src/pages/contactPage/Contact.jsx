import React from "react";
import './contact.css'
import {AiOutlineMail,AiOutlinePhone,AiOutlineHome,AiOutlineClockCircle} from 'react-icons/ai'
import {FaPinterestSquare,FaInstagramSquare,FaTwitterSquare,FaFacebookSquare} from 'react-icons/fa'
function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-wrapper">
<div className="co-heading">
  <h2>Contact Us</h2>
  <p>Feel free to contact us any time.We will get back to you as soon we can</p>
</div>
<form className="co-form">
  <input className="f-name" placeholder="Name"></input>
  <input className="f-email" placeholder="Email"></input>
  <input className="f-msg" placeholder="Message"></input>
<button className="f-btn">Submit</button>
</form>
<div className="co-info">
  <div className="info">
    <h3>Info</h3>
    <div className="info-main">
      <p className="info-p"><AiOutlineMail className="info-icon"/><span>info87@gmail.com</span></p>
      <p className="info-p"><AiOutlinePhone className="info-icon"/><span>+1024587</span></p>
      <p className="info-p"><AiOutlineHome className="info-icon"/><span>12 bluewitch road</span></p>
      <p className="info-p"><AiOutlineClockCircle className="info-icon"/><span>9:00 A.M - 7:00 P.M</span></p>

    </div>
  </div>
  <div className="socail-media">
  <FaFacebookSquare className="sm-icon"/>
  <FaInstagramSquare className="sm-icon"/>
  <FaPinterestSquare  className="sm-icon"/>
  <FaTwitterSquare  className="sm-icon"/>
  </div>
</div>
      </div>
    </div>
  );
}

export default Contact;
