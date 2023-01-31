import React from "react";
import PropTypes from "prop-types";
import { EnvironmentProvider } from "contexts/environmentContext";
import { StyleProvider } from "contexts/styleContext";

export const Contexts = props => {
    const { children, env, stl } = props;

    return (
        <EnvironmentProvider generalContext={{ environment: env }}>
            <StyleProvider generalContext={{ style: stl }}>
                {children}
            </StyleProvider>
        </EnvironmentProvider>
    );
};

Contexts.propTypes = {
    children: PropTypes.node.isRequired,
    env: PropTypes.object.isRequired,
    stl: PropTypes.object.isRequired
};

export default Contexts;
