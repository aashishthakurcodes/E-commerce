import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = () => {
    return (
        <div className="products-card">
            <div className="thumbnail">
                <img  src={prod} alt="product-img"/>
            </div>
            <div className="prod-details">
            <span className="name">Product name</span>
            <span className="price">&#8377;789</span>

            </div>
        </div>
    );
};

export default Product;
