import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            harum quam reprehenderit voluptate repellendus praesentium, commodi
            nihil sequi consectetur eaque.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-items">
            <FaLocationArrow />
            <div className="text">
              Shiv Nagar, Helli Mandi, Pataudi , Haryana 123456
            </div>
          </div>

          <div className="c-items">
            <FaMobileAlt />
            <div className="text">Phone no :- 9887543210</div>
          </div>

          <div className="c-items">
            <FaEnvelope />
            <div className="text">E-mail :- rahul@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                Projects 2023 created by Aashish E-COMMERCE SOLUTIONS6V
            </div>
            <img src={Payment} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
