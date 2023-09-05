import React from 'react'
import { Link } from 'react-router-dom'

const ReturnShop = () => {
  return (
    <>
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
      
    </>
  )
}

export default ReturnShop
