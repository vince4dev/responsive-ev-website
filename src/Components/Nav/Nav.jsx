import React, { useRef } from 'react';
import navCSS from './Nav.module.css';

function Nav() {

    const menu = useRef();

    const MenuHandler = () => {
        menu.current.classList.toggle(navCSS.showMenu);
    }

    return (
        <nav className={navCSS.nav_wrapper}>
            <div className={navCSS.logo}>
                <a href=""><span>Ev</span>Hub</a>
            </div>

            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={navCSS.nav_btns}>
                <button>Get Started <i className="ri-instance-line"></i></button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={MenuHandler}></i>
            </div>
        </nav >
    );
}

export default Nav;