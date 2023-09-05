import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/img/mega-electronics-logo.svg";
import sup from "../assets/img/Screenshot 2023-07-12 161930.png";
import world from "../assets/img/Screenshot 2023-07-12 162003.png";
import { FiSearch } from "react-icons/fi";
import { Link, json } from "react-router-dom";
import burger from "../assets/img/burger-bar.png";

import LoginCanvas from "../components/Login/LoginCanvas";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/api";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import { store } from "../manager/store/store";
import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../context/ThemeContext";
import { ModeContext } from "../context/ModeContext";
import AuthBtn from "./AuthBtn";

const Header = () => {
  const cartsQuantity = JSON.parse(localStorage.getItem("carts"));
  const allData = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const { darkMode, toggle } = useContext(GlobalContext);

  const  {carts} = useSelector((store) => store.user);
 

 


  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchResults(search);
  };
  const [mode, setMode] = useContext(ModeContext);

  const { totalUniqueItems } = useCart();
  const { t } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header>
        <div className="header_top  container">
          <div className="logo">
            <Link to="/">
              <img className="logo_img" src={logo} alt="Logo_header" />
            </Link>
          </div>
          <form onSubmit={handleSearchSubmit}>
            <div className="search">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search for products"
                onChange={(e) => setSearch(e.target.value)}
              />
              <ul className="list-group list-search">
                {searchResults.length == 0
                  ? ""
                  : allData
                      .filter((value) =>
                        value.title.toLocaleLowerCase().includes(searchResults)
                      )
                      .map((item, index) => {
                        return (
                          <Link to={`/cardDetails/${item.id}`}>
                            {" "}
                            <li
                              className="list-group-item d-flex justify-content-between"
                              key={index}
                            >
                              <p>{item.title}</p>
                              <img src={item.img[0]} alt="" />
                            </li>
                          </Link>
                        );
                      })}
              </ul>

              <button className="search_submit" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>

          <div className="info_icon">
            <span className="support">
              <i class="fa-regular fa-message"></i>
              <div className="support_info">
                <h6>24 Support</h6>
                <p>0552470430</p>
              </div>
            </span>
            <span className="support">
              <button
                className="btn btn-outline-primary ms-3"
                onClick={() => {
                  mode === "light" ? setMode("dark") : setMode("light");
                  mode === "light"
                    ? localStorage.setItem("mode", "dark")
                    : localStorage.setItem("mode", "light");
                }}
              >
                {mode === "light" ? "🌙" : "☀️"}
              </button>

              <div className="support_info">
                <h6>24 Support</h6>
                <p>0552470430</p>
              </div>
            </span>
          </div>
        </div>

        <div className="header_bottom">
          <div className="head_boottom_con container">
            <div className="left">
              <div className="category">
                <p
                  className="icon"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  &#9776;
                </p>
                <p style={{fontWeight:"600"}}>{t("header.0")}</p>
              </div>
              <ul className="menu">
                <li>
                  <Link className="link" to="/promotions">
                    {t("header.1")}
                  </Link>
                </li>
                <li>
                  <Link to="/stores">{t("header.2")}</Link>
                </li>
                <li>
                  <Link to="/contacts">{t("header.3")}</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="usa">
                <li onClick={() => handleClick("az")}>AZ</li>
                <li onClick={() => handleClick("en")}>EN</li>
              </ul>
              <AuthBtn />

              <Link to="wish" className="position-relative">
                <span className="position-absolute badge start-10">{carts.length}</span>
                <button type="button" className="user btn btn-light text-dark">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </Link>

              <Link
                to="/shopCard"
                type="button"
                className="user btn btn-primary position-relative"
              >
                <i class="fa-solid fa-basket-shopping"></i>

                <span className="position-absolute badge ">
                  ({totalUniqueItems})
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mob_header_top">
          <div className="mob_header">
            <div className="left">
              <button
                className="button-burger-menu"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <button
                  className="btn btn-outline-primary ms-3"
                  onClick={() => {
                    mode === "light" ? setMode("dark") : setMode("light");
                    mode === "light"
                      ? localStorage.setItem("mode", "dark")
                      : localStorage.setItem("mode", "light");
                  }}
                >
                  {mode === "light" ? "🌙" : "☀️"}
                </button>
                <img src={burger} alt="" />
              </button>
            </div>

            <div className="center">
              <Link to="/">
                <img className="logo_img" src={logo} alt="Logo_header" />
              </Link>
            </div>
            <div className="right" style={{ zIndex: "111" }}>
              <AuthBtn />
            </div>
          </div>
        </div>

        <div className="mob_header_bottom ">
          <form className="search " onSubmit={handleSearchSubmit}>
          <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for products"
              onChange={(e) => setSearch(e.target.value)}
            />
              <ul className="mob-search ">
                {searchResults.length == 0
                  ? ""
                  : allData
                      .filter((value) =>
                        value.title.toLocaleLowerCase().includes(searchResults)
                      )
                      .map((item, index) => {
                        return (
                          <Link to={`/cardDetails/${item.id}`}>
                            {" "}
                            <li className="d-flex justify-content-between"
                             
                              key={index}
                            >
                              <p>{item.title}</p>
                              <img style={{width:"30px"}} src={item.img[0]} alt="" />
                            </li>
                          </Link>
                        );
                      })}
              </ul>
            <button className="button-search">
              <FiSearch />
            </button>
          </form>
        </div>
      </header>
      <LoginCanvas />
    </>
  );
};

export default Header;
