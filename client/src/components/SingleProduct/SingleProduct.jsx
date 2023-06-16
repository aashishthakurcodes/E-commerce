import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-5.webp"
const SingleProduct = () => {
    return <div className="single-producr-main-cont">
        <div className="layout">

            <div className="single-product-pg">
                <div className="left">
                    <img src={prod} alt="img"/>
                </div>
                <div className="right ">
                    <span className="name">product Name</span>
                    <span className="price">Price</span>
                    <span className="desc">Description</span>
                    <div className="cart-button">
                        <div className="quantity-btn">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-btn">
                            <FaCartPlus size={20}/>
                            Add to Cart</button>
                    </div>
                    <span className="divider"/>

                    <div className="info-items">
                        <span className="text-bold">Category: 
                        <span >Headphones</span>
                        </span>
                        <span className="text-bold">Share :
                        <span className="social-icon">
                            <FaFacebookF size={16}/>
                            <FaTwitter size={16}/>
                            <FaInstagram size={16}/>
                            <FaLinkedinIn size={16}/>
                            <FaPinterest size={16}/>
                        </span>
                        </span>
                    </div>

                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
