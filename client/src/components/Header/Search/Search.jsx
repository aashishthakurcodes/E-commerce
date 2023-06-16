import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-5.webp"
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose className="close-btn" onClick={()=> setShowSearch(false)}/>
      </div>
      <div className="search-results-content">
        <div className="serch-results">
            <div className="search-result-items">
            <div className="img-container">
                <img src={prod} alt=""/>
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product Name</span>
                
                        
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
