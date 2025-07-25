import React from 'react';
import '../Styles/Footer.css';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logowithname from '../images/Logowithoutbg.png';



const Footer = () => {
  return (
    <footer className="salon_footer_root">
      <div className="salon_footer_top">
        <div className="salon_footer_column1">
          <img className="salon_footer_logo" src={logowithname} alt="Blink_Salon_logo" />
        </div>

        <div className="salon_footer_column">
          <h4 className="salon_footer_heading">SALON SERVICES</h4>
          <ul>
            <li>Haircuts & Styling</li>
            <li>Bridal Makeovers</li>
            <li>Skin Treatments</li>
            <li>Men’s Grooming</li>
          </ul>
        </div>

        <div className="salon_footer_column">
          <h4 className="salon_footer_heading">QUICK LINKS</h4>
          <ul>
            <li><Link to="/" className="salon_footer_link">Home</Link></li>
            <li><Link to="/Services" className="salon_footer_link">Services</Link></li>
            <li><Link to="/Gallery" className="salon_footer_link">Gallery</Link></li>
            <li><Link to="/Contact" className="salon_footer_link">Contact Us</Link></li>
            <li><Link to="/FAQ" className="salon_footer_link">FAQ</Link></li>
          </ul>
        </div>

        <div className="salon_footer_column">
          <h4 className="salon_footer_heading">VISIT US</h4>
          <p>
  <FaMapMarkerAlt className="salon_footer_icon" />
  <a
    href="https://www.google.com/maps/place/Blink+Family+Salon/@17.5047957,78.333607,949m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb92871e9231eb:0x7ccd7e026ff45cff!8m2!3d17.5047957!4d78.3361819!16s%2Fg%2F11c5_xj4xq"
    target="_blank"
    rel="noopener noreferrer"
    className="salon_footer_address"
  >
    near Street number 3, NN Nilayam, Aparna Hillpark Rd, PJR Enclave Rd, Chanda Nagar, Hyderabad, Telangana 500050
  </a>
</p>

          <p>
            <a href="mailto:blink.salon@example.com" className="salon_footer_email">
              <FaEnvelope className="salon_footer_icon" />
              blink.salon@example.com
            </a>
          </p>
        </div>
      </div>

      <div className="salon_footer_social">
        <p>Follow us for style tips & updates:</p>
        <div className="salon_footer_icons">
          <a href="https://www.instagram.com/blink_familysalon/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/BlinkFamilySalon/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://in.pinterest.com/blinkfamilysalon/" target="_blank" rel="noopener noreferrer">
            <FaPinterest />
          </a>
        </div>
      </div>

      <div className="salon_footer_bottom">
        <p>© 2025 Blink Family Salon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;