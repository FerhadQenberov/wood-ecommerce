import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import s1 from "../assets/img/apple-shopping-event.jpg";
import s2 from "../assets/img/pre-order-g-pixel-7 (1).jpg";
import s3 from "../assets/img/discount-on-all-smart-appliances (1).jpg";
import content from "../assets/img/Content (1).jpg";
import aurora from '../assets/img/logitech-aurora-headset.jpg'
import dual from '../assets/img/new-dualsense (1).jpg'
import cammeras from '../assets/img/instant-cameras (1).jpg'

import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


const Slider = () => {
 


 
 
  const {t}=useTranslation()
  return (
    <div className="slider_page">
      <div className="row">
        <div className="col-12 col-md-12  col-lg-6 slider-con">
          <div className="slider">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
        
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay,Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slider">
                <img src={s1} alt="" />
                <div className="s1">
                  <h4>{t("slider.0")}</h4>
                  <p>{t("slider.1")}</p>
                  <button>{t("slider.2")}</button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <img src={s2} alt="" />
                <div className="s2">
                  <h4>{t("slider.3")}</h4>
                  <p>{t("slider.4")}</p>
                  <button>{t("slider.5")}</button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <img src={s3} alt="" />
                <div className="s3 w-75 ">
                  <h4>{t("slider.6")}</h4>
                  <p>{t("slider.7")}</p>
                  <button>{t("slider.5")}</button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-6 overflow-hidden">
          <div className="auro">
           
          <div className="auro-clock">

          <div className="aurora-banner"> <h4>{t("slider.8")}</h4></div>
          <div className="wd-timer">
           
            <div className="count-days"><h6>29</h6><p>Days</p></div>
            <div className="count-hours"><h6>8</h6><p>Hours</p></div>
            <div className="count-min"><h6>51</h6><p>Min</p></div>
            <div className="count-sc"><h6>37</h6><p>Sec</p></div>
          </div>
          <button className="btn btn-primary mt-3">{t("slider.9")}</button>

          </div>

          </div>
          <div className="row ">
            <div className="col-12 col-sm-12 col-lg-6 g-2 overflow-hidden">
              <div className="dual">
                <img src={dual} alt="" />
             
                <div className="dual-text">
                  <h6>{t("slider.10")}</h6>
                  <p>{t("slider.11")}</p>
                  <button >{t("slider.12")}</button>
                </div>



              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 g-2 overflow-hidden">
              <div className="cameras">
                <img src={cammeras} alt="" />
              <div className="cameras-text">
                  <h6>{t("slider.13")}</h6>
                  <p>{t("slider.11")}</p>
                  <button >{t("slider.12")}</button>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Slider;
