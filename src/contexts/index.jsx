import React from "react";
import PropTypes from "prop-types";
import { EnvironmentProvider } from "contexts/environmentContext";

export const Contexts = props => {
    const { children, env } = props;

    return (
        <EnvironmentProvider generalContext={{ environment: env }}>
            {children}
        </EnvironmentProvider>
    );
};

Contexts.propTypes = {
    children: PropTypes.node.isRequired,
    env: PropTypes.object.isRequired
};

export default Contexts;
