import React from 'react';

import event from "../assets/img/event.png";
import s1 from '../assets/img/SliderImg/s1.jpg'
import s2 from '../assets/img/SliderImg/s2.jpg'
import { useTranslation } from 'react-i18next';
const Shopping = () => {
  const {t}=useTranslation()
  return (
  <div className="container-fluid ">
      <div className=" row py-5 shopping">
      <div className="event">
        <div className="event-img">
          <img  src={event} alt="" />
        </div>
        <div className="event-clock">
          <h4>{t("categories.0")}</h4>
          <h6>{t("categories.1")}</h6>
          <div className="timer">
                 <span>165</span>
                 <span>21</span>
                 <span>22</span>
                 <span>59</span>
                 



          </div>
      
        
    
        </div>
        
        
      </div>
      
    </div>
  </div>
  );
};

export default Shopping;
