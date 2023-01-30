import React from "react";
import PropTypes from "prop-types";
import LayoutComponent from "components/layout";

const ApplicationComponent = props => {
    const { children } = props;

    return (
        <LayoutComponent>
            {children}
        </LayoutComponent>
    );
};

ApplicationComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default ApplicationComponent;
