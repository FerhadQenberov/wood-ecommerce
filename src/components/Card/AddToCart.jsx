import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "react-use-cart";
const AddToCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  const location = useNavigate();
  const handleControlShop = () => {
    const data = JSON.parse(localStorage.getItem("User"));

    if (data) {
      alert("TƏŞƏKKÜRLƏR");
      location("/laptops-tablets-psc");
      items.forEach((item) => {
        updateItemQuantity(item.id, 0);
      });
    } else {
      location("/register");
    }
  };

  return (
    <>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight2"
        aria-labelledby="offcanvasRightLabel"
        data-bs-scroll="true"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Shoping Cart
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul>
            {items.map((item) => {
              return (
                <li className="shop-item" key={item.id}>
                  <div className="shop-value">
                    <img className="img-shopping" src={item.img[0]} alt="" />
                  </div>
                  <div className="shop-title">
                    <h6>{item.title}</h6>
                    <p>
                      <b>SKU</b>
                      {item.id}
                    </p>
                    <div className="control">
                      <button
                        className="increment"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        className="counter"
                        type="text"
                        value={item.quantity}
                      />
                      <button
                        className="decrement"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p>
                      <span>9</span>
                      {item.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id, item.quantity - 1)}
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </li>
              );
            })}

            <div className="subTotal">
              <p className="total-title">Subtotal:</p>
              <p className="total-price">$ {cartTotal.toFixed(2)}</p>
            </div>
            <div className="btn-group">
              <button className="view">
                <Link to="/shopCard">View Cart</Link>
              </button>
              <button className="check" onClick={handleControlShop}>
                CheckOut
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
