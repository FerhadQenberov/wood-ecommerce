import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authUser } from "../utils/Utils";
const AuthBtn = () => {
  const data = JSON.parse(localStorage.getItem("User"));
  const login = JSON.parse(localStorage.getItem("login"));
  console.log(login);
 
  const display = JSON.parse(localStorage.getItem("display"));
  const logOut = () => {
    localStorage.removeItem("User");
    window.location.reload();
  }
  const auth = () => {  
    if (authUser()) {
      return (
        <div className="dropdown">
        <button className="btn btn-primary p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {display ? data.role:login}
     
         
        </button>
        <ul className="dropdown-menu">
          { display ? <NavLink to="/admin" className="dropdown-item" >Dashboard</NavLink> :  ""
          }
        <NavLink onClick={logOut} style={{paddingLeft:"20px"}} >Log out</NavLink>
        </ul>
      </div>
      );
    } else {
      return (
         <button
                type="button"
                className="user btn btn-light text-dark"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i class="fa-regular fa-user"></i>
              </button>
      );
    }
  };
  return <>{auth()}</>;
};
export default AuthBtn;
