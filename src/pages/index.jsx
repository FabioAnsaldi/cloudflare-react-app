import React, { useContext } from "react";
import ApplicationComponent from "components";
import StyleContext from "contexts/styleContext";

// eslint-disable-next-line no-unused-vars
const Index = props => {
    
    const { style } = useContext(StyleContext);

    return (
        <ApplicationComponent>
            <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-duration={style.SECTION_FADE_IN} data-aos-delay={style.SECTION_FADE_IN_DELAY}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Welcome to Cloudflare React Application</h2>
                        </div>
                    </div>
                </div>
            </section>
        </ApplicationComponent>
    );
};

export default Index;
