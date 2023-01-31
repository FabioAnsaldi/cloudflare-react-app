import React, { createContext } from "react";
import PropTypes from "prop-types";

const StyleContext = createContext({});

export const StyleProvider = props => {
    const { children, generalContext } = props;

    return (
        <StyleContext.Provider value={generalContext}>
            {children}
        </StyleContext.Provider>
    );
};

StyleProvider.propTypes = {
    children: PropTypes.node.isRequired,
    generalContext: PropTypes.object.isRequired
};

export default StyleContext;
