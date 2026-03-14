
import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Signup Section */}
        <div className="footer-signup">
          <h4>
            Get special offers, exclusive product news, and event info straight
            to your inbox.
          </h4>
          <div className="signup-box">
            <input type="email" placeholder="Email Address" />
            <button>Sign Up</button>
          </div>

          {/* Social Icons */}
          <div className="footer-socials">
            <FaTiktok />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaDiscord />
            <FaFacebookF />
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h5>SHOP</h5>
            <ul>
              <li>New Products</li>
              <li>Where to Buy</li>
              <li>Certified Refurbished</li>
            </ul>
          </div>

          <div>
            <h5>EXPLORE</h5>
            <ul>
              <li>PC Builder</li>
              <li>CORSAIR Innovation</li>
              <li>Design Your Loop</li>
              <li>Ambassadors</li>
              <li>Wallpaper</li>
            </ul>
          </div>

          <div>
            <h5>CORSAIR</h5>
            <ul>
              <li>About</li>
              <li>Investor Relations</li>
              <li>Supply Chain Disclosure</li>
              <li>Careers</li>
              <li>Social Impact</li>
              <li>Press Room</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h5>SUPPORT</h5>
            <ul>
              <li>Downloads</li>
              <li>Corsair Web Hub</li>
              <li>Firmware Update Utility</li>
              <li>Customer Support</li>
              <li>Warranty</li>
              <li>Shipping/RMA/Returns</li>
              <li>Terms of Sale</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 1996 - 2025 CORSAIR. All rights reserved.</p>
        <div className="pic">
            <img src="https://cdn.originpc.com/img/logos/corsair-logo.png" alt="" />
        </div>
        <div className="footer-bottom-links">
          <span>Sitemap</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Cookie Settings</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
