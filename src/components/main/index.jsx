import React, { useContext } from "react";
import PropTypes from "prop-types";
import StyleContext from "contexts/styleContext";

const MainComponent = props => {
    const { children } = props;
    const { style } = useContext(StyleContext);

    return (
        <main id="main" className="main" data-aos="fade" data-aos-duration={style.SECTION_FADE_IN} data-aos-delay={style.SECTION_FADE_IN_DELAY}>
            {children}
        </main>
    );
};

MainComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainComponent;
