import React, { useContext, useEffect, useState } from "react";
import CardPop from "./Card/CardPop";
import CardBest from "./Card/CardBest";
import { ProductContext } from "../context/api";
import Item from "antd/es/list/Item";
import { all } from "axios";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const allData = useContext(ProductContext);
  const [dataFilter, setData] = useState([]);

  useEffect(() => {
    const data = allData.filter((data) => data.rating >= 7);
    setData(data);
  }, [allData]);
 const {t}=useTranslation()

  return (
    <>
      <div className="row py-5">
        <div className="p_categories">
          <h4>{t("categories.0")}</h4>

          <div className="owl-storage row">
            {dataFilter.map((item, index) => {
              return <CardPop item={item} key={index}/>;
            })}
          </div>
        </div>
      </div>

      <div className="row py-5">
        <div className="b_categories">
          <h4>{t("categories.0")}</h4>

          <div className="owl-storage-best ">
            {allData.slice(0, 4).map((item, index) => {
              return <CardBest item={item} key={index} />;
            })}
          </div>
        </div>
      </div>

      <div className="row py-5 ">
        <h4>{t("categories.0")}</h4>
        <div className="goods row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-4">
            <div className="banner-nothing">
              <h6>{t("categories.1")}</h6>
              <h2>{t("categories.2")}</h2>
              <button>{t("categories.3")}</button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-8">
            <div className="owl-goods">
              {allData.slice(20, 24).map((item, index) => {
                return <CardBest item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
