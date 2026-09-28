import React from 'react';
import featuresCSS from "./Features.module.css";

import img1 from "./../../assets/features.jpg";

function Features() {
  return (
    <div className={`${featuresCSS.features_wrapper} section`}>
      <small className="section_title">(Main Features)</small>
      <h2>Elevate Your <span>ECO - Journey</span></h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid perferendis, quibusdam maiores.</p>

      <div className={featuresCSS.features_cards}>
        <div className={featuresCSS.features_card}>
          <img src={img1} alt="features-card-image" />
          <i className="ri-play-line"></i>
        </div>
        <div className={featuresCSS.features_card}>
          <div className={featuresCSS.card_container}>
            <small>Technology</small>
            <h3>Smart Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, architecto?</p>
          </div>
          <div className={featuresCSS.card_container}>
            <small>Connectivity</small>
            <h3>Smart Connectivity</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, architecto?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features