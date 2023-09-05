import React, { useEffect, useState } from "react";
import img from "../../assets/img/asus-geforce-gtx-1660-ti-tuf-1-430x491.jpg";
import { useCart } from "react-use-cart";
import CardBest from "./CardBest";
import ProductBuy from "../ProductBuy";
import { Link, useNavigate } from "react-router-dom";



const ShopCard = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    
    updateItemQuantity,
    cartTotal,
    removeItem,
  } = useCart();
  const [show, setShow] = useState(true);
  const [total, setTotal] = useState();  
  const location = useNavigate();
  

useEffect(()=>{
 
setTotal(cartTotal)

}, [cartTotal, show])

  if (isEmpty)
    return (
      <div className="retrun">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 return-shop">
              <h1>Your cart is currently empty.</h1>
              <p>
                Before proceed to checkout you must add some products to your
                shopping cart. You will find a lot of interesting products on
                our "Shop" page..
                <Link to="/laptops-tablets-psc">
                  <button>Retrun To Shop</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  const handleCheap = (x) => {
    setTotal(cartTotal - x);
  };

  const handleCheck=()=>{
    const data = JSON.parse(localStorage.getItem("User"));

    if (data) {
      alert("Tesekkurler")
     
      location("/laptops-tablets-psc"); 
    
      items.forEach((item) => {
        updateItemQuantity(item.id, 0);
      });
    }else{ location("/register");

    }

  }
  const handleControlShop=()=>{
    const data = JSON.parse(localStorage.getItem("User"));
  
 

    if (data) {
      console.log("tesekkurler");
      location("/shopCard"); 
      
    }else{
      location("/register");

    }

  }



  return (
    <>
      <div className="shopCard">
        <div className="container">
          <div className="breadcrumbShop">
            <ul>
              <li onClick={() => setShow(true)}>SHOPPING CART &#8594; </li>
              <li onClick={() => setShow(false)}>CHECKOUT &#8594;</li>
              <li onClick={handleControlShop}>ORDER COMPLETE</li>
            </ul>
          </div>

          {show ? (
            <div className="row">
              <table className="col-12 col-md-9">
                <thead>
                  <tr>
                    <th className="product-remove ">Remove</th>
                    <th className="product-thumbnail">İMG</th>
                    <th className="product-name">Product-NAME</th>
                    <th className="product-price">PRICE</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    
                    return (
                      
                      <tr className="e-commerce-cart-form " key={item.id}>
                        <td className="product-remove " onClick={() => removeItem(item.id, item.quantity - 1)} >
                          X
                        </td>
                        <td className="product-thumbnail">
                          <img src={item.img[0]} alt="" />
                        </td>
                        <td className="product-name">{item.title}</td>
                        <td className="product-price"> $ {item.price}.00</td>
                        <td className="product-quantity ">
                          <div className="control">
                            <div className="control my-0">
                              <button className="increment" onClick={() =>  updateItemQuantity(item.id, item.quantity - 1)  }>-
                              </button>
                              <input className="counter" type="text" value={item.quantity} />
                              <button className="decrement"
                              onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1) }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                         $ {item.price * item.quantity}.00
                        </td>
                      
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="col-12 col-md-3">
                <div className="totals">
                  <h2>Cart Totals</h2>

                  <div className="shipping">
                    <div>
                      <p>Shipping</p>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <tr>
                            Flat rate:
                            <span onClick={() => handleCheap(100)}>
                              $100,00
                            </span>
                          </tr>

                          <tr>
                            Local pickup:
                            <span onClick={() => handleCheap(300)}>
                              $300,00
                            </span>
                          </tr>
                          <tr>
                            Shopping to Baku
                            <input type="radio" name="a" />
                          </tr>
                          <tr>Change address</tr>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between sub">
                    <p className="sub-totals">Total</p>
                    <p className="price-totals">${total}.00</p>
                  </div>
                  <button className="btn btn-primary w-100" onClick={handleCheck}>
                    
                 
                    Proceed to CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <ProductBuy />
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCard;
