import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Promotions = () => {
 
  const [promotions, setPromotiosn] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const requests = await axios.get("http://localhost:3010/promotions");
      setPromotiosn(requests.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="promotions">
      <div className="container">
        <div className="pro-subTitle">
          <h4>Clothes That You Like</h4>
          <h2>Promotions</h2>
        </div>
        <div className="row promo">
          {promotions.map((item, index) => {
            return (
              <div key={index}
              className="apple-card"
              style={{
                backgroundImage: `url(${item.img})`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="apple-title">
                <h2>{item.title}</h2>

             <Link to={`/blog/${item.id}`} ><button>Read more</button></Link>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
