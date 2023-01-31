import React, { useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import StyleContext from "contexts/styleContext";

const PreloaderComponent = props => {
    const { children } = props;
    const preloaderElement = useRef();
    const { style } = useContext(StyleContext);

    useEffect(() => {
        setTimeout(() => {
            preloaderElement.current.classList.add("loaded");
        }, style.BODY_FADE_IN);
        setTimeout(() => {
            preloaderElement.current.remove();
        }, style.SECTION_FADE_IN_DELAY + style.SECTION_FADE_IN);
    }, []);

    return (
        <div id="preloader" ref={preloaderElement}>
            <div className="line">
                {children}
            </div>
        </div>
    );
};

PreloaderComponent.propTypes = {
    children: PropTypes.node
};


export default PreloaderComponent;
