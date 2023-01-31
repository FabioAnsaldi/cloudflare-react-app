import React, { useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import StyleContext from "contexts/styleContext";

const ScrolltopComponent = props => {
    const { children } = props;
    const scrollElement = useRef();
    const { style } = useContext(StyleContext);

    useEffect(() => {
        window.document.addEventListener("scroll", toggleScrollTop);
        scrollElement.current.addEventListener("click", scrollTop);

        return () => {
            window.document.removeEventListener("scroll", toggleScrollTop);
            scrollElement.current.removeEventListener("click", scrollTop);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const toggleScrollTop = () => {
        window.scrollY > style.WINDOW_SCROLL_Y ?
            scrollElement.current.classList.add("active") :
            scrollElement.current.classList.remove("active");
    };

    return (
        <>
            <a href="#" ref={scrollElement} className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
            {children}
        </>
    );
};

ScrolltopComponent.propTypes = {
    children: PropTypes.node
};

export default ScrolltopComponent;
