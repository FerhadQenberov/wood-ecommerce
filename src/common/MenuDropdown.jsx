import React from 'react'

import laptops from "../assets/img/Laptops-Tablets-PC.svg";
import computer from "../assets/img/Computer-Office.svg";
import hardaward from "../assets/img/Hardware-Components.svg";
import smart from "../assets/img/Smartphones.svg";
import bars from "../assets/img/bars.png";
import tv from "../assets/img/TV-HIFI.svg";
import photo from "../assets/img/Photo-Video.svg";
import home from "../assets/img/Home-Appliance.svg";
import { Link } from 'react-router-dom';
const MenuDropdown = () => {
  return (
    <div className='sub-menu'>

<ul className="sub-menu-mob">
  <div className="sub-menu-title">
    <i className="fa-solid fa-bars"></i>ALL category
  </div>

  <li>
    <Link to="/laptops-tablets-psc">
      <img src={laptops} alt="" />
      Laptops, Tablets & PCS
    </Link>
  </li>

  <li>
    <Link to="/computer-office">
      <img src={computer} alt="" />
      Computer & Office
    </Link>
  </li>

  <li>
    <Link to="/hardware-components">
      <img src={hardaward} alt="" />
      Hardware Components
    </Link>
  </li>

  <li>
    <Link to="/smartphones">
      <img src={smart} alt="" />
      SmartPhones
    </Link>
  </li>

  <li>
    <Link to="/games-entertainment">
      <img src={tv} alt="" />
      Games Entartainment
    </Link>
  </li>

  <li>
    <Link to="/tv-hi-fi">
      <img src={photo} alt="" />
      TV & HI-FI
    </Link>
  </li>

  <li>
    <Link to="/photo-video">
      <img src={home} alt="" />
      Photo Video
    </Link>
  </li>

  <li>
    <Link to="/home-appliance">
      <img src={home} alt="" />
      Home appliance
    </Link>
  </li>
</ul>

    
      
    </div>
  )
}

export default MenuDropdown
