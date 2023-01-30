import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "components/header";
import FooterComponent from "components/footer";
import PreloaderComponent from "components/preloader";

const LayoutComponent = props => {
    const { children } = props;

    return (
        <>
            <HeaderComponent />
            <main id="main" className="main">
                {children}
            </main>
            <FooterComponent />
            <PreloaderComponent />
        </>
    );
};

LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutComponent;
