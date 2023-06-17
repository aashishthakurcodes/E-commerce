import "./Home.scss";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect  , useContext} from "react";
import { fetchdataApi } from "../../Utilis/api";
import { Context} from "../../Utilis/context";


const Home = () => {
    const {categories,setCategories ,products, setProducts} =useContext(Context)
   useEffect(()=>{
    getProducts();
     getCategories();
   },[]);

const getCategories=()=>{
    fetchdataApi("/api/categories?populate=*").then((res)=>{
        setCategories(res);
        console.log(res);
    })
}


const getProducts=()=>{
    fetchdataApi("/api/products?populate=*").then((res)=>{
        setProducts(res);
        console.log(res);
    })
}

    return (
        <div className="home"><Banner/>
    <div className="main-content">
        <div className="layout">
        <Category categories={categories}/>
        <Products products={products } headingtext="Popular Products"/>
        </div>
    </div>
   
    </div>
    )
};

export default Home;
