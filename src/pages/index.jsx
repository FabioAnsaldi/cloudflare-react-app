import React from "react";
import PropTypes from "prop-types";
import ApplicationComponent from "components";
import GalleryComponent from "components/gallery";
import SwiperComponent from "components/swiper";

const Index = props => {
    const { children } = props;

    const galleryImages = [{
        src: "gallery-1.jpg",
        title: "gallery image 1",
        alt: "Image 1",
        width: 1920,
        height: 1440
    }, {
        src: "gallery-2.jpg",
        title: "gallery image 2",
        alt: "Image 2",
        width: 1920,
        height: 1440
    }, {
        src: "gallery-3.jpg",
        title: "gallery image 3",
        alt: "Image 3",
        width: 1920,
        height: 1440
    }, {
        src: "gallery-4.jpg",
        title: "gallery image 4",
        alt: "Image 4",
        width: 1920,
        height: 1440
    }];

    const swiperImages = [{
        src: "testimonial-1.jpg",
        title: "testimonial image 1",
        alt: "Image 1",
        width: 400,
        height: 400,
        stars: 4
    }, {
        src: "testimonial-2.jpg",
        title: "testimonial image 1",
        alt: "Image 2",
        width: 400,
        height: 400,
        stars: 4
    }, {
        src: "testimonial-3.jpg",
        title: "testimonial image 1",
        alt: "Image 3",
        width: 400,
        height: 400,
        stars: 4
    }];

    const galleryHeader = () => {

        return (
            <div className="section-header">
                <h2>Profucts</h2>
                <p>What we are doing</p>
            </div>
        );
    };

    const swiperHeader = () => {

        return (
            <div className="section-header">
                <h2>Testimonials</h2>
                <p>What they are saying</p>
            </div>
        );
    };

    return (
        <ApplicationComponent>
            <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Welcome to <span>Cloudflare React</span> Application</h2>
                        </div>
                    </div>
                </div>
            </section>
            <GalleryComponent images={galleryImages} header={galleryHeader} />
            <SwiperComponent images={swiperImages} header={swiperHeader} />
            {children}
        </ApplicationComponent>
    );
};


Index.propTypes = {
    children: PropTypes.node
};

export default Index;
