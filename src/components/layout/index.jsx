import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "components/header";
import FooterComponent from "components/footer";
import MainComponent from "components/main";
import PreloaderComponent from "components/preloader";

const LayoutComponent = props => {
    const { children } = props;

    return (
        <>
            <HeaderComponent />
            <MainComponent>
                {children}
            </MainComponent>
            <FooterComponent />
            <PreloaderComponent />
        </>
    );
};

LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutComponent;
