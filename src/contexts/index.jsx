import React from "react";
import PropTypes from "prop-types";
import { EnvironmentProvider } from "contexts/environmentContext";
import ApplicationComponent from "components";

export const Contexts = props => {
    const { children, env } = props;

    return (
        <EnvironmentProvider generalContext={{ env }}>
            <ApplicationComponent>
                {children}
            </ApplicationComponent>
        </EnvironmentProvider>
    );
};

Contexts.propTypes = {
    children: PropTypes.node.isRequired,
    env: PropTypes.object.isRequired
};

export default Contexts;
