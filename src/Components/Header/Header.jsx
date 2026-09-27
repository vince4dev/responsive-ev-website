import React from "react";
import headerCSS from "./Header.module.css";
import client1 from "./../../assets/user-01.jpg";
import client2 from "./../../assets/user-02.jpg";
import client3 from "./../../assets/user-03.jpg";


function Header() {
  return (
    <div className={`${headerCSS.header_wrapper} section`}>
      <div className={headerCSS.content}>
        <small>for Everyone, every Business, Every Vehicle</small>
        <h1>Unique Solution for <span>Charging Stations</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, dolorem. Ullam, nisi. Corporis libero quia velit ad, cum praesentium deleniti impedit sapiente eveniet amet ullam.</p>
        <div className={headerCSS.header_btns}>
          <button>Test Drive <i className="ri-roadster-line"></i></button>
          <div className={headerCSS.clients_wrapper}>
            <img src={client1} alt="client-image" />
            <img src={client2} alt="client-image" />
            <img src={client3} alt="client-image" />

            <span>Let's Join Us.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header