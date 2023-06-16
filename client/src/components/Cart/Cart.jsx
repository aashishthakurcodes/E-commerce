import { MdClose } from "react-icons/md";
import { BaCartX, BsCartX } from "react-icons/bs";
import CartItem from "../Cart/CartItem/CartItem"

import "./Cart.scss";
import { Button } from "@mui/material";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            {" "}
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
                <BsCartX/>
                <span>No products in the cart</span>
                <button className="retuurn-cta">Return to shop</button>
            </div> */}

        <>
        <CartItem/>
        <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">&#8377; 8956</span>
            </div>
            <div className="button">
                <Button className="checkout-cta">Checkout</Button>
            </div>
        </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
