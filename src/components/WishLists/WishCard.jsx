import React from 'react';
import './wish.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, removeCard } from '../../manager/control/CartSystem';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';

const WishCard = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector(state => state.user);


  const { addItem } = useCart();
  const { t } = useTranslation();

  return (
    <div className="wish">
   
      <div className="container">
        <h2>{t("wish.1")}</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">{t("wish.7")}</div>
            <div className="col col-2">{t("wish.1")}</div>
            <div className="col col-1">{t("wish.2")}</div>
            <div className="col col-1">{t("wish.3")}</div>
            <div className="col col-2">{t("wish.4")}</div>  
            <div className="col col-2">{t("wish.5")}</div>

            
        
          </li>
          {carts.length > 0 ? (
            carts.map((item, index) => (
              <li className="table-row d-flex align-item-center" key={index}>
                <div className="col col-1" data-label="Job Id">{item.id}</div>
                <div className="col col-2" data-label="Customer Name">{item.title}</div>
                <div className="col col-1" data-label="Amount">${item.price}.00</div>
                <div className="col col-1" data-label="Payment Status">
                  <img src={item.img[0]} style={{ width: "100px" }} alt="" />
                </div>
                <div className="col col-2" data-label="Actions">
                  <button className='btn btn-danger' onClick={() => dispatch(removeCard(item.id))}>Remove</button>
                </div>
                <div className="col col-2" data-label="Actions">
                  <button className='btn btn-success' onClick={()=>addItem(item)}>AddToCart</button>
                </div>
              </li>
            ))
          ) : (
            <div>Favorim yoxdur</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default WishCard;
