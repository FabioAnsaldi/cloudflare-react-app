import React from "react";
import PropTypes from "prop-types";
import ApplicationComponent from "components";
import GalleryComponent from "components/gallery";

const Index = props => {
    const { children } = props;

    const images = [{
        src: "gallery-1.jpg",
        title: "gallery image 1",
        width: 1920,
        height: 1440
    }, {
        src: "gallery-2.jpg",
        title: "gallery image 2",
        width: 1920,
        height: 1440
    }, {
        src: "gallery-3.jpg",
        title: "gallery image 3",
        width: 1920,
        height: 1440
    }, {
        src: "gallery-4.jpg",
        title: "gallery image 4",
        width: 1920,
        height: 1440
    }];

    return (
        <ApplicationComponent>
            <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Welcome to Cloudflare React Application</h2>
                        </div>
                    </div>
                </div>
            </section>
            <GalleryComponent images={images} />
            {children}
        </ApplicationComponent>
    );
};


Index.propTypes = {
    children: PropTypes.node
};

export default Index;
