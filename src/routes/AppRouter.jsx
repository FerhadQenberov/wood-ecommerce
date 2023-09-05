import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Stores from "../pages/Stores";
import Register from "../components/Login/Register";
import LoginCanvas from "../components/Login/LoginCanvas";
import Promotions from "../pages/Promotions";
import Contacts from "../pages/Contacts";
import Admin from "../components/AdminPanel/Admin";
import AllCategory from "../components/AllCategory";
import DetailsFilter from "../components/Details/DetailsFilter";
import CardDetails from "../components/Details/CardDetails";
import ShopCard from "../components/Card/ShopCard";
import ProductBuy from "../components/ProductBuy";
import WishCard from "../components/WishLists/WishCard";
import Blog from "../components/AdminPanel/Blog";
import Edit from "../components/AdminPanel/Edit";
import { ModeContext } from "../context/ModeContext";
import PrivateRouter from "../Private/PrivateRoutes";


const AppRouter = () => {
  const [mode] = useContext(ModeContext );
  return (
    <>
<main className={mode}>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/login" element={<LoginCanvas />} />
        <Route path="/register" element={<Register />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contacts" element={<Contacts />} />
       
        <Route path="/laptops-tablets-psc" element={<AllCategory />} />
        <Route path="/Details/:subCategory" element={<DetailsFilter />} />
        <Route path="/cardDetails/:url" element={<CardDetails />} />
        <Route path="/shopCard" element={<ShopCard />} />
        <Route path="/productbuy" element={<ProductBuy />} />
        <Route path="/wish" element={<WishCard />} />
        
        <Route path="/edit/:id" element={<Edit/>} />
        <Route element={<PrivateRouter/>}>
        <Route path="/admin" element={<Admin />} />
          <Route path="/blog" element={<Blog/>}/>
        </Route>
      </Routes>
</main>
    </>
  );
};

export default AppRouter;
