import React, { useState } from "react";


import CategoriesDrop from "./CategoriesDrop";
import MenuDropdown from "./MenuDropdown";
import MobDroprdown from "./MobDroprdown";

const DropDown = () => {
  const [show, setShow]=useState(true)
  const [isActive, setActive]=useState(false)
  const handleButton=()=>{
    setShow(true)
    setActive(true)
    
  }
  const handleMenuButton=()=>{
    setActive(false)
    setShow(false)
  }
  
  return (
    <>
      <div className="drop_down">
        <CategoriesDrop/>
       </div>



      <div className="mob_dropddown">
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <div className="btn_group">
              <a id="btn_burger" onClick={handleButton}  className={`button_categories ${isActive? 'active' : ""}`}>
                Categories
              </a>
              <a id="btn_burger" onClick={handleMenuButton} className={`button_menu ${isActive ? 'active' : ""}`}>
                Menu
              </a>
            </div>
          </div>
          <div class="offcanvas-body">
            {show ? (
          <MenuDropdown/>
            ):(
            <MobDroprdown/>
            )}



          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
