import "./Product.scss";
import {useNavigate} from 'react-router-dom'
// import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = ({id ,data}) => {
    console.log("data",data)
    const navigate =useNavigate();
    return (
        <div className="products-card">
            <div className="thumbnail"
            onClick={() => navigate("/product/" + id)}>
               <img
                    src={
                        process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
                    }
                alt="bg" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>

            </div>
        </div>
    );
};

export default Product;
