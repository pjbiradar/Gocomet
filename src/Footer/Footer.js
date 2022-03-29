import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider New</p>
        </div>
        <div className="footer--row">
          <h3>USEFUL LINKS</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Whitehat</p>
          <p>Site Map</p>
        </div>
        <div className="footer--row">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <h3 className="social">KEEP IN TOUCH</h3>
          <div>
            <FacebookIcon className="social1"></FacebookIcon>
            <TwitterIcon className="social1"></TwitterIcon>
            <InstagramIcon className="social1"></InstagramIcon>
          </div>
        </div>
        <div className="footer--row">
          {/* <div className="que">
            <p className="quality">
              <b>100% ORIGINAL</b> <br />
              guarantee for all products at myntra.com
            </p>
          </div> */}
          {/* <div className="que">
            <p className="quality">
              <b> Return within 30days</b> of receiving your order
            </p>
          </div> */}
        </div>
      </div>
      <div className="footer2">
        <hr className="break" />
        <p className="cateagry">
          Makeup | Dresses For Girls | T-Shirts | Sandals Headphones | Babydolls
          | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
          Reebok Shoes | Puma Shoes | Boxers | Wallets |Tops | Earrings |
          Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
          Designer |Blouse | Gowns | Rings | Cricket Shoes | Forever 21 Eye
          Makeup | Photo | Frames | Punjabi Suits | Bikini Myntra Fashion Show
          Lipstick Saree Watches | Dresses | Lehenga | Nike Shoes | Goggles Bras
          | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery |
          Designers Sarees
        </p>
        <hr />
        <center className="que2">
          © 2022 www.myntra.com All rights reserved.
        </center>
        <hr />
      </div>
    </>
  );
};
export default Footer;