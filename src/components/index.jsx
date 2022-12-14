import React from "react";
import PropTypes from "prop-types";

const ApplicationComponent = props => {
    const { children } = props;

    return (
        <>{children}</>
    );
};

ApplicationComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default ApplicationComponent;
