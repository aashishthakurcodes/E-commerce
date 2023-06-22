import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../Utilis/context";
import Category from "../Category/Category";

import "./Header.scss";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showcart, setShowCart] = useState(false);
  const {cartCount}=useContext(Context)
  const [showSearch, setShowSearch] = useState(false);
  const navigate=useNavigate();
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scroll ? "sticky-header" : " "}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>navigate("/about")}>About</li>
            <li >Categories</li>
          </ul>
          <div className="center" onClick={()=>navigate("/")}>Logo</div>
          <div className="right">
            <TbSearch  onClick={()=>setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=>setShowCart(true)}>
              <CgShoppingCart />
            {!!cartCount &&
              <span>{cartCount}</span>}
            </span>
          </div>
          
        </div>
      </header>
      {showcart && <Cart  setShowCart={setShowCart} />}
      {showSearch && <Search  setShowSearch={setShowSearch} />}
      
    </>
  );
};

export default Header;
