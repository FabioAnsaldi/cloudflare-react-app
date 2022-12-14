import React, { createContext } from "react";
import PropTypes from "prop-types";

const EnvironmentContext = createContext({});

export const EnvironmentProvider = props => {
    const { children, generalContext } = props;

    return (
        <EnvironmentContext.Provider value={generalContext}>
            {children}
        </EnvironmentContext.Provider>
    );
};

EnvironmentProvider.propTypes = {
    children: PropTypes.node.isRequired,
    generalContext: PropTypes.object.isRequired
};

export default EnvironmentContext;
