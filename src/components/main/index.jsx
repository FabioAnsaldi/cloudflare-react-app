import React from "react";
import PropTypes from "prop-types";

const MainComponent = props => {
    const { children } = props;

    return (
        <main id="main" className="main">
            {children}
        </main>
    );
};

MainComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainComponent;
