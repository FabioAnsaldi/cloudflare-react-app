import React, { useContext } from "react";
import ApplicationComponent from "components";
import EnvironmentContext from "contexts/environmentContext";

// eslint-disable-next-line no-unused-vars
const Index = props => {
    
    const { environment } = useContext(EnvironmentContext);

    return (
        <ApplicationComponent>
            <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Welcome to Cloudflare React Application</h2>
                        </div>
                    </div>
                </div>
            </section>
            <p>
                <small>PLATFORM</small>: <strong>{environment.PLATFORM}</strong>
            </p>
        </ApplicationComponent>
    );
};

export default Index;
