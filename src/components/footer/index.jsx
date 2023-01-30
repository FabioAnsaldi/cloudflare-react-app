import React from "react";
import PropTypes from "prop-types";

const FooterComponent = props => {
    const { children } = props;

    return (
        <footer id="footer" className="footer mt-auto py-3">
            <div className="container">
                <div className="copyright">
                    <p>&copy; Copyright <strong><span>Fabio Ansaldi</span></strong>. All Rights Reserved</p>
                </div>
                <div className="credits">
                    <p>Developed by <a target="_blanck" href="https://github.com/FabioAnsaldi">Fabio Ansaldi</a></p>
                </div>
                {children}
            </div>
        </footer>
    );
};

FooterComponent.propTypes = {
    children: PropTypes.node
};


export default FooterComponent;
