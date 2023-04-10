import React ,{useState} from "react";
import "./navbar.css";
import { GiHamburgerMenu ,GiHouse} from "react-icons/gi";
import { Link ,useNavigate } from "react-router-dom";

function Navbar() {
    const [navShow , setNavShow] = useState(false)
    const navigate = useNavigate();
  return (
    <main className='navbar-main'>
      <div className={`${navShow?"navbar-wrapper navbar-list-show":'navbar-wrapper'}`}>
        <section className="logo-main">
          <div className="logo-wrapper" onClick={()=>{navigate('/')}}><span className="home-icon"><GiHouse/></span>DECORTALE</div>
        </section>
        <section className="menu-main">
          <div className="menu-wrapper">
            <GiHamburgerMenu onClick={()=>setNavShow(!navShow)}/>
          </div>
        </section>
        <section className='navbar-list-main'>
        <ul className="navbar-list">
            <li className="list-item"><Link to='/' className="list-link">Home</Link></li>
            <li className="list-item"><Link to='/works' className="list-link">Gallery</Link></li>
            <li className="list-item"><Link to ='/contact' className="list-link">Contact</Link></li>
            <li className="list-item"><Link to = '/about' className="list-link">About</Link></li>
        </ul>
      </section>
      </div>

    </main>
  );
}

export default Navbar;
