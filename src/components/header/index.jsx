import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const HeaderComponent = props => {
    const { children } = props;
    const hamburgerElement = useRef();
    const closerElement = useRef();
    const dropdownElement = useRef();

    const mobileNavToogle = () => {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        hamburgerElement.current.classList.toggle("d-none");
        closerElement.current.classList.toggle("d-none");
    };

    const dropdownNavToogle = (e) => {
        if (document.querySelector(".mobile-nav-active")) {
            e.preventDefault();
            dropdownElement.current.classList.toggle("active");
            dropdownElement.current.nextElementSibling.classList.toggle("dropdown-active");
    
            let dropDownIndicator = dropdownElement.current.querySelector(".dropdown-indicator");
            dropDownIndicator.classList.toggle("bi-chevron-up");
            dropDownIndicator.classList.toggle("bi-chevron-down");
        }
    };

    useEffect(() => {
        hamburgerElement.current.onclick = mobileNavToogle;
        closerElement.current.onclick = mobileNavToogle;
        dropdownElement.current.onclick = dropdownNavToogle;
    }, []);

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <a href="#" className="logo d-flex align-items-center  me-auto me-lg-0">
                    <i className="bi bi-camera"></i>
                    <h1>Fabio Ansaldi</h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li className="dropdown">
                            <a href="#" ref={dropdownElement}>
                                <span>Gallery</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
                            </a>
                            <ul>
                                <li><a href="#">Nature</a></li>
                                <li><a href="#">People</a></li>
                                <li><a href="#">Architecture</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="header-social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list" ref={hamburgerElement}></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" ref={closerElement}></i>
            </div>
            {children}
        </header>
    );
};

HeaderComponent.propTypes = {
    children: PropTypes.node
};


export default HeaderComponent;
