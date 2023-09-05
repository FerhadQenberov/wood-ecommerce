import React from "react";

import stores from "../assets/img/stores.png";
import Article from "../components/AdminPanel/Article";
import { useSelector } from "react-redux";

const Stores = () => {
  const cartBlog=useSelector((store)=>store.blogForm.cart)
  console.log('asas', cartBlog);
  return (
    <div className="stores">
      <section className="container ">
        <div className="visit-store">
          <div className="visit-left">
            <h4>Visit Our Stores</h4>
            <p>
              You can receive an order from us, find many products with unique
              discounts, and also, if necessary, contact the service center.
            </p>

            <div className="visit">
              <span>
                <i class="fa-solid fa-cart-shopping"></i>
                <h2>Convenient store</h2>
              </span>
              <span>
                <i class="fa-solid fa-cart-shopping"></i>
                <h2>Convenient store</h2>
              </span>
              <span>
                <i class="fa-solid fa-cart-shopping"></i>
                <h2>Convenient store</h2>
              </span>
            </div>
          </div>
          <div className="visi-right">
            <img src={stores} alt="" />
          </div>
        </div>

        <div className="visit-blogs">
          <h4>Online Store of Household Appliances and Electronics</h4>
          <p>
            The online store of equipment and electronics is one of the leading
            online stores. The band was released in 25 volumes. During this
            time, our team sent 228 cypemapkets and managed to create a
            powerful, fast-working online store. The range of online supply
            points is huge and covers all company categories available for
            convenience stores. In 2019, we presented a new border policy
            strategy that covers all aspects of the company’s activities –
            corporate style, delivery, and consultant work.
          </p>

          <div className="row">
            {cartBlog.map((item, index)=>{
              return  <Article item={item} key={index}/>
            })}
          
          
          
           
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stores;
