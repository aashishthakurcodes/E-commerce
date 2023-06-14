import "./Banner.scss";
import Bannerimg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="Hero-banner">
        <div className="content">
            <div className="text-content">
            <h1>Sales</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi corporis quo provident, perspiciatis consectetur veritatis deserunt officiis nihil maxime at dolore deleniti sunt quaerat! Atque!</p>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta -v">Shop Now</div>
            </div>
            </div>
                <img className="banner-img" src={Bannerimg}  alt="bg"/>
        </div>
        </div>
    )
};

export default Banner;
