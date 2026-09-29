import React from 'react';
import ctaCSS from "./CTA.module.css";

import ctaImg from "./../../assets/cta_image.png";

function CTA() {
  return (
    <div className={`${ctaCSS.cta_wrapper} section`}>
      <div className={ctaCSS.cta_content}>
        <small className="section_title">(Download Our App)</small>
        <h2>Find <span>Charging Stations</span> <br />Near You with <span> Our App</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.</p>
      </div>
      <div className={ctaCSS.cta_image}>
        <img src={ctaImg} alt="call-to-action-image" />
      </div>
    </div>
  )
}

export default CTA