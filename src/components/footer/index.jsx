import React, { useContext } from "react";
import PropTypes from "prop-types";
import EnvironmentContext from "contexts/environmentContext";

const FooterComponent = props => {
    const { children } = props;
    const { environment } = useContext(EnvironmentContext);

    return (
        <footer id="footer" className="footer mt-auto py-3">
            <div className="container">
                <div className="copyright">
                    <p>&copy; Copyright <strong><span>Fabio Ansaldi</span></strong>. All Rights Reserved</p>
                </div>
                <div className="credits">
                    <p>
                        <span>Developed by</span> <a target="_blanck" href="https://github.com/FabioAnsaldi">Fabio Ansaldi</a>
                        <span>, <small>platform</small> <strong>{environment.PLATFORM}</strong> & <small>version</small> <strong>{environment.VERSION}</strong></span>
                    </p>
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
