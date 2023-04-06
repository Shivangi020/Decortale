import React from "react";
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
 
function TeamCard({ imageSrc, name, pos, mail }) {
  return (
    <div className="t-card">
      <div className="img-bx">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="content-bx">
        <div className="detail">
        <h2>{name}
        <br/>
        <span>{pos}</span>
        </h2>
        <ul className="sci">
          <li><a><FaFacebookF/></a></li>
          <li><a><FaLinkedinIn/></a></li>
          <li><a><FiInstagram/></a></li>
          <li><a><AiOutlineTwitter/></a></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
