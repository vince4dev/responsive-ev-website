import React from 'react';
import footerCSS from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${footerCSS.footer_wrapper} section`}>
      <div className={footerCSS.footer_links}>
        <h2><span>Ev</span>HUB</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={footerCSS.footer_links}>
        <h3>Useful Links</h3>
        <p><a href="#">Services</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Pricing</a></p>
      </div>
      <div className={footerCSS.footer_links}>
        <h3>Services</h3>
        <p><a href="#">Charging Stations</a></p>
        <p><a href="#">Charging Points</a></p>
        <p><a href="#">AC Charging Stations</a></p>
        <p><a href="#">DC Charging Stations</a></p>
      </div>
      <div className={footerCSS.footer_links}>
        <h3>Direct Links</h3>
        <p><a href="#">Contact Us</a></p>
        <p><a href="#">Privacy Policy</a></p>
        <p><a href="#">Term and Conditions</a></p>
        <p><a href="#">Support</a></p>
      </div>
    </div>
  )
}

export default Footer