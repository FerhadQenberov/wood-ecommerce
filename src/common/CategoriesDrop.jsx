import React, { useState } from "react";
import laptops from "../assets/img/Laptops-Tablets-PC.svg";
import computer from "../assets/img/Computer-Office.svg";
import hardaward from "../assets/img/Hardware-Components.svg";
import smart from "../assets/img/Smartphones.svg";
import bars from "../assets/img/bars.png";
import tv from "../assets/img/TV-HIFI.svg";
import photo from "../assets/img/Photo-Video.svg";
import home from "../assets/img/Home-Appliance.svg";
import { Link } from "react-router-dom";

const CategoriesDrop = () => {
  return (
    <>

       <ul className="dropdown_wrapper">
          <div className="all-category-sub" id="category">
             <i class="fa-solid fa-bars"></i>ALL category</div>

        <li className="laptops">
          <img src={laptops} alt="" />
          <Link to="/laptops-tablets-psc"><span > Laptops, Tablets & PCS</span></Link>
        </li>

        <li>
          <img src={computer} alt="" />
          <span>Computer & Office</span>
        </li>
        <li>
          <img src={hardaward} alt="" />
          <span>Hardware Components</span>
        </li>
        <li>
          <img src={smart} alt="" />
          <span>SmartPhones</span>
        </li>
        <li>
          <img src={tv} alt="" />
          <span>Games Entartainment</span>
        </li>
        <li>
          <img src={photo} alt="" />
          <span>TV & HI-FI</span>
        </li>
        <li>
          <img src={home} alt="" />
          <span>Photo Video</span>
        </li>
        <li>
          <img src={home} alt="" />
          <span>Home appliance</span>
        </li>
      </ul> 


    </>
  );
};

export default CategoriesDrop;
