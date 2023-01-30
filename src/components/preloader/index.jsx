import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const PreloaderComponent = props => {
    const { children } = props;
    const preloaderElement = useRef();

    useEffect(() => {
        preloaderElement.current.classList.add('loaded');
        setTimeout(() => {
            preloaderElement.current.remove();
        }, 2000);
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
