import React from 'react'
import laptops from "../assets/img/Laptops-Tablets-PC.svg";
import computer from "../assets/img/Computer-Office.svg";
import hardaward from "../assets/img/Hardware-Components.svg";
import smart from "../assets/img/Smartphones.svg";
import bars from "../assets/img/bars.png";
import tv from "../assets/img/TV-HIFI.svg";
import photo from "../assets/img/Photo-Video.svg";
import home from "../assets/img/Home-Appliance.svg";
import { Link } from 'react-router-dom';

const MobDroprdown = () => {
  return (
    <>
  <div className='sub-menu'>

<ul className="sub-menu-mob">
<div className='sub-menu-title'>
   <i class="fa-solid fa-bars"></i>ALL category</div>



<li>

<Link><img src={computer} alt="" /><span>Demos</span></Link>
</li>

<li>

<Link to="/promotions" ><img src={hardaward} alt="" /><span>Promotions</span></Link>
</li>
<li>

<Link to="/stores"><i class="fa-solid fa-store"></i><span>Blogs</span></Link>
</li>
<li>

<Link to="/contacts"><i class="fa-solid fa-address-book"></i><span>Our Contacts</span></Link>
</li>
<li>

<Link to="/wish"><i class="fa-regular fa-heart"></i> <span>WishList</span></Link>
</li>
<li>

<Link to="/shopCard"><i class="fa-solid fa-cart-shopping"></i><span>ShopCart</span></Link>
</li>
<li>

<Link><img src={home} alt="" /><span>Home appliance</span></Link>
</li>
</ul> 


</div>
    </>
  )
}

export default MobDroprdown
