import { configureStore } from "@reduxjs/toolkit";
import CartSystem from "../control/CartSystem";
import localStorageMiddleware from "./localStorageMiddleware";

import  BlogAdd  from "../control/BlogSlice";
const initialCarts = JSON.parse(localStorage.getItem('carts')) || [];
const initialCart = JSON.parse(localStorage.getItem('cart')) || [];


export const store=configureStore({
    reducer:{
        user:CartSystem,
     
       blogForm:BlogAdd,
       

    },
    preloadedState: {
        user: {
          carts: initialCarts,
        },
        blogForm:{
          cart:initialCart
        }
      
      
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})
