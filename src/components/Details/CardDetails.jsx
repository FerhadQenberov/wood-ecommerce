import React, { useContext } from "react";
import accer from "../../assets/img/acer-conceptd-7-ezel-1.jpg";
import Promotions from "../../assets/img/promotions.svg";
import store from "../../assets/img/store.svg";
import delivery from "../../assets/img/delivery-car.svg";
import del from "../../assets/img/dhl-logo.svg";
import warranty from "../../assets/img/warranty.svg";
import returnimg from "../../assets/img/return.svg";
import payments from "../../assets/img/payments.png";
import rtx from "../../assets/img/rtx-4090-1.jpg";
import over from "../../assets/img/overview.svg";
import processor from '../../assets/img/processor.svg'
import ram from '../../assets/img/ram.svg'
import storage from '../../assets/img/storage.svg'

import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/api";
import { useCart } from "react-use-cart";
import AddToCart from "../Card/AddToCart";

const CardDetails = () => {
  const { addItem } = useCart();
  const { url } = useParams();
  const data = useContext(ProductContext);

  const detailItem = data.find((item) => item.id.toString() === url);

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
      {!detailItem ? (
        <p>Loading</p>
      ) : (
        <div className="card-details">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                 <Link to="/"> Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to="/laptops-tablets-psc">laptops-tablets-psc</Link>
                </li>
                <li class="breadcrumb-item">
                <Link to="cardDetails/2">cardDetails/2</Link>
                </li>
               
              </ol>
            </nav>

            <div className="main-details row">
              <div className="col-12 col-sm-12  col-md-6">
                <div className="details-img">
                  <img src={detailItem.img[0]} alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <div className="details-info">
                  <div className="title">
                    <h1>{detailItem.title}</h1>
                  </div>
                  <div className="rate">
                    <p>
                      <i class="fa-solid fa-star"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-star"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-star"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-star"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-star"></i>
                    </p>
                  </div>
                  <div className="coupen">
                    <div className="coup-wrapper">
                      <img src={detailItem.img} alt="" />
                      <div className="promo-info">
                        <h4>{detailItem.title}</h4>
                        <p>
                          Hurry and get discounts on all Apple devices up to 20%
                        </p>
                      </div>
                      <button className="btn btn-primary">Sale_coupen</button>
                    </div>
                  </div>
                  <div className="price">
                    <span className="old"> ${detailItem.price}.00</span>
                    <span className="new">${detailItem.price}.00</span>
                  </div>
                  <div className="control"><button onClick={() => addItem(detailItem)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" className="add-card"  >    Add to cart  </button>  <AddToCart/>
                  <button className="buy-now" onClick={handleControlShop}>Buy now</button>
                  </div>
                  <div className="selected">
                    <div>
                      <span className="compar"> &#9825;Compare</span>
                      <span className="wish">Browser wishlist</span>
                    </div>
                    <p></p>
                    <div className="selected-sosial">
                      <ul>
                        <span>Share :</span>
                        <li>
                          <i class="fa-brands fa-facebook"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-people">
                    <span>
                      <i class="fa-regular fa-eye"></i>
                    </span>
                    <span>10</span>
                    <span>People watching this product now!</span>
                  </div>
                  <div className="delivery">
                    <ul>
                      <li>
                        <img src={store} alt="" />
                        <span>Pick up from the Woodmart Store</span>
                        <p>To pick up today</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img src={delivery} alt="" />
                        <span>Pick up from the Woodmart Store</span>
                        <p>To pick up today</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img src={del} alt="" />
                        <span>Pick up from the Woodmart Store</span>
                        <p>To pick up today</p>
                      </li>
                    </ul>
                  </div>
                  <div className="more-delivery">
                    <div className="d-flex justify-content-between">
                      <div>
                        <img src={warranty} alt="" className="mx-2" />
                        <span className="mx-2 w">Warranty 1 year</span>
                      </div>
                      <p className="more">More Details</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <img className="mx-2 w" src={returnimg} alt="" />
                        <span className="mx-2 w">Warranty 1 year</span>
                      </div>
                      <p className="more">More Details</p>
                    </div>
                  </div>
                  <div className="payments">
                    <span>Payment Methods:</span>
                    <img src={payments} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row main-details-desc">
              <div className="col-12 col-md-7 mt-2">
                <div className="main-details-desc-img">
                  <img src={detailItem.img[2]} alt="" />
                  <img src={detailItem.img[1]} alt="" />
                  <img src={detailItem.img[0]} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-5 mt-2">
                <div className="description">
                  <div className="desc-wrapper">
                    <div className="title-desc">
                      <h6>Specification</h6>
                    </div>
                    <div className="overview">
                      <img src={over} alt="" />
                      <span className="over-title">Overivew</span>
                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Brand</p>
                      <p  className="product-atribute-sub-title"> {detailItem.brand}</p>
                       </div>
                   
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Model</p>
                      <p  className="product-atribute-sub-title"> {detailItem.model}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Operating system</p>
                      <p  className="product-atribute-sub-title"> {detailItem.OperatingSystem}</p>

                    </div>
                    <div className="processor">
                      <img src={processor} alt="" />
                      <span className="pro-title">Processor</span>
                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Prosssor</p>
                      <p  className="product-atribute-sub-title"> {detailItem.processor}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">NumberofProcessorCores</p>
                      <p  className="product-atribute-sub-title"> {detailItem.NumberofProcessorCores}</p>

                    </div>
                    <div className="rams">
                      <img src={ram} alt="" />
                      <span className="ram-title">Ram</span>
                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Ram</p>
                      <p  className="product-atribute-sub-title"> {detailItem.ram}</p>

                    </div>
                    <div className="storage">
                      <img src={storage} alt="" />
                      <span className="ram-title">Storage</span>
                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Storage</p>
                      <p  className="product-atribute-sub-title"> {detailItem.storage[0]}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Color</p>
                      <p  className="product-atribute-sub-title"> {detailItem.color}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Diagonal</p>
                      <p  className="product-atribute-sub-title"> {detailItem.diagonal}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">ScreenType</p>
                      <p  className="product-atribute-sub-title"> {detailItem.screenType}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">ScreenRefreshRate</p>
                      <p  className="product-atribute-sub-title"> {detailItem.ScreenRefreshRate}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">WiFi</p>
                      <p  className="product-atribute-sub-title"> {detailItem.WiFi}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Keyboard</p>
                      <p  className="product-atribute-sub-title"> {detailItem.Keyboard}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Mousetrackpad</p>
                      <p  className="product-atribute-sub-title"> {detailItem.Mousetrackpad}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">Camera</p>
                      <p  className="product-atribute-sub-title"> {detailItem.Camera}</p>

                    </div> <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">SecurityFeatures</p>
                      <p  className="product-atribute-sub-title"> {detailItem.SecurityFeatures}</p>

                    </div> <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">AudioSoftware</p>
                      <p  className="product-atribute-sub-title"> {detailItem.AudioSoftware}</p>

                    </div> <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">BatteryCapacity</p>
                      <p  className="product-atribute-sub-title"> {detailItem.BatteryCapacity}</p>

                    </div> <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">HoursBatterLife</p>
                      <p  className="product-atribute-sub-title"> {detailItem.HoursBatterLife}</p>

                    </div>
                    <div className="product-atribute d-flex justify-content-between">
                      <p  className="product-atribute-title">ReleaseYears</p>
                      <p  className="product-atribute-sub-title"> {detailItem.ReleaseYears}</p>

                    </div>
                    

                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;
