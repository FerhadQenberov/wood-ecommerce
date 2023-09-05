import React, { useState } from "react";
import Form from "../components/Login/Form";

const ProductBuy = () => {
  const [show, setShow] = useState(true);
  

  const formStyles = {
    transform: show ? "translateY(-267px)" : "translateY(0)",
    position: "absolute",
    zIndex: show ? -1000 : 0,
  };

  const formShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="login-help">
          <div className="e-commerce-info">
            Returning customer?
            <a href="#" onClick={formShow}>
              Click here to login
            </a>
          </div>
          <div className="formShow" style={formStyles}>
            <Form />
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-12 col-sm-12 col-md-6 form">
            <div className="checkout-wrapper">
              <div className="linear-container pb-3">Biling Details</div>
              <div className="name">
                <span>
                  <p>First Name</p>
                  <input type="text" />
                </span>
                <span>
                  <p>Last Name</p>
                  <input type="text" />
                </span>
              </div>
              <div className="name">
                <span>
                  <p>Phone</p>
                  <input type="number" />
                </span>
                <span>
                  <p>Email address</p>
                  <input type="email" />
                </span>
              </div>
              <div className="name">
                <span>
                  <p>Country</p>
                  <input type="text" />
                </span>
                <span>
                  <p>Town City</p>
                  <input type="text" />
                </span>
              </div>
              <div className="name">
                <span>
                  <p>Street Adrress</p>
                  <input type="text" />
                </span>
                <span>
                  <p>Postcode/ZIP</p>
                  <input type="text" />
                </span>
              </div>

              <div className="name">
                <textarea name="" id="" cols="70" rows="10"></textarea>
              </div>
              <button>Place Order</button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div  className="accordion accordion-flush"  id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <h4 className="p-3">Delivery & Return</h4>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    My order hasn't arrived yet . Where is it?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    How can you evaluate content without design? No typography,
                    no colors, no layout, no styles, all those things that
                    convey the important signals that go beyond the mere
                    textual, hierarchies of information, weight.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Do you Delivery on public holidays?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {" "}
                    To short sentences, to many headings, images too large for
                    the proposed design, or too small, or they fit in but it
                    looks iffy for reasons the folks in the meeting can’t quite
                    tell right now, but they’re unhappy, somehow..
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Do you Delivery on my postcode?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    How can you evaluate content without design? No typography,
                    no colors, no layout, no styles, all those things that
                    convey the important signals that go beyond the mere
                    textual, hierarchies of information, weight.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Is next delivery available on all orders?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    To short sentences, to many headings, images too large for
                    the proposed design, or too small, or they fit in but it
                    looks iffy for reasons the folks in the meeting can’t quite
                    tell right now, but they’re unhappy, somehow..
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Do i need to be before to sign for delivery?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    How can you evaluate content without design? No typography,
                    no colors, no layout, no styles, all those things that
                    convey the important signals that go beyond the mere
                    textual, hierarchies of information, weight.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductBuy;
