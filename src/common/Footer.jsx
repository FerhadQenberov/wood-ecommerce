import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import logo from '../assets/img/mega-electronics-logo.svg'
import google from '../assets/img/google-play.svg'
import apstore from '../assets/img/app-store.svg'
import payment from '../assets/img/payments (1).png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const Footer = () => {
  const {t}=useTranslation()
  return (
   <footer className='container'>
    <div className="footer-wrapper">
        <div className="footer-top">
            <div className='item'>
                <h4>{t("footer.0")} <i className="fa-solid fa-arrow-right"></i></h4> 
            <p>{t("footer.1")}</p>
            
            </div>
            <div className='item'>
                <h4>{t("footer.0")} <i className="fa-solid fa-arrow-right"></i></h4> 
            <p>{t("footer.1")}</p>
            
            </div>
            <div className='item'>
                <h4>{t("footer.0")} <i className="fa-solid fa-arrow-right"></i></h4> 
            <p>{t("footer.1")}</p>
            
            </div>
            <div className='item'>
                <h4>{t("footer.0")} <i className="fa-solid fa-arrow-right"></i></h4> 
            <p>{t("footer.1")}</p>
            
            </div>
        </div>
        <div className="footer-bottom">
            <ul className='logo '>
                <li><img src={logo} alt="" /></li>
                <li><p>{t("footer.2")}</p></li>
              <h2>{t("footer.3")}</h2>
              <div className="sosial">
                <span><i className="fa-brands fa-facebook"></i></span>
                <span><i className="fa-brands fa-twitter"></i></span>
                <span><i className="fa-brands fa-pinterest"></i></span>
                <span><i className="fa-brands fa-instagram"></i></span>
                <span><i className="fa-brands fa-linkedin"></i></span>
              </div>
            </ul>
            <ul className='category'>
                <h6>{t("footer.4")}</h6>
                <li>{t("footer.5")}</li>
                <li>{t("footer.6")}</li>
                <li>{t("footer.7")}</li>
                <li>{t("footer.8")}</li>
                <li>{t("footer.9")}</li>
                <li>{t("footer.10")}</li>

            </ul>
            <ul className='useful-links'>
               <h6>{t("footer.11")}</h6>
          <Link to="/promotions">      <li>{t("footer.12")}</li></Link>
                <li>{t("footer.13")}</li>
                <li>{t("footer.14")}</li>
                <li>{t("footer.15")}</li>
                <li>{t("footer.16")}</li>
                

            </ul>
            <ul className='blog'>
                <h6>{t("footer.17")}</h6>
                <li>{t("footer.18")}</li>
                <li>{t("footer.19")}</li>
                <li>{t("footer.20")}</li>
                <li>{t("footer.21")}</li>
                <li>{t("footer.22")}</li>
                

            </ul>
            <ul className='logo '>
               <li>{t("footer.23")}</li>
               <p>{t("footer.24")}</p>
               <img src={google} alt="" />
               <img src={apstore} alt="" />
           
            </ul> 



        </div>
      <div className='paymnet'>
      <p><b>{t("footer.25")}</b> {t("footer.26")} <b>{t("footer.27")}</b>{t("footer.28")}</p>
        <img className='float-right' src={payment} alt="" />
      </div>

    </div>

    

   </footer>
  )
}

export default Footer
