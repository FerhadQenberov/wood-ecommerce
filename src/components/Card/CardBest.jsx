import React, { useContext, useState } from "react";
import apple from "../../assets/img/apple-macbook-pro-16-silver-2.jpg";
import apple3 from "../../assets/img/apple-macbook-pro-16-silver-3.jpg";
import apple4 from "../../assets/img/apple-macbook-pro-16-silver-4.jpg";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { Autoplay } from "swiper/modules";
import AddToCart from "./AddToCart";
import { ProductContext } from "../../context/api";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCard } from "../../manager/control/CartSystem";


const CardBest = ({ item }) => {
  const { addItem } = useCart();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dispatch=useDispatch()


  const noatify=()=>{
    toast('ADD wishlist', {
      position: "top-right",
      autoClose:3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
  }
 




  if (
    !item ||
    typeof item !== "object" ||
    !item.title ||
    !item.description ||
    !item.price
  ) {
    return <div>Item </div>;
  }
 
  


  return (
    <>
   
      <div className="card-best">
   

      <Link  to={`/cardDetails/${item.id}`} >
        <div className="card-top-slider">
      
          <Swiper 
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="swiper-container"
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop={true}
            onSlideChange={(swiper) => setHoveredIndex(swiper.activeIndex)}
          >
            {item.img.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={hoveredIndex === index ? item.img[hoveredIndex] : image}
                  alt=""
                  className="swiper-slide-image"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
      
          <div className="wishlist-block">
            <Link onClick={()=>dispatch(addCard(item))}>
            <AiOutlineHeart onClick={noatify} />
            <ToastContainer
             position="top-right"
             autoClose={5000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="light"
             />
            
              
            </Link>
            <Link>
            
              <IoIosSearch
                    />
   

            
            </Link>
          
          </div>
        </div>
        </Link>
        <div className="card-body">
          <h6>{item.description}</h6>
          <h4>{item.title}</h4>
          <span className="icon">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <p className="stock">{item.stock ? <i className="fa-solid fa-check"></i>:<i className="fa-solid fa-xmark"></i>} In stock</p>
          <p> ${item.price}.00</p>
        
          <button
                onClick={() => addItem(item)}
                className="cart-button" aria-label="Close"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight2"
                aria-controls="offcanvasRight"
              >
                Select Options
              </button>
          <AddToCart />
          
        </div>
        <div className="card-bottom">
          <ul className="sku">
            <li>SKU{item.id}</li>
            
          </ul>
          <ul>
            <li><span>BRAND:</span> {item.brand}</li>
            <li><span>MODEL:</span>{item.model}</li>
            <li><span>COLOR:</span>{item.color[0]}</li>
          </ul>

        </div>
        </div>
       
    </>
  
  
  );
};

export default CardBest;
