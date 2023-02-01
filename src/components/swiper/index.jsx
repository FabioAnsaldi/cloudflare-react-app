import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const SwiperComponent = props => {
    const { children, header, images } = props;

    const imgLoader = ({ src }) => {
        return `assets/images/swiper/${src}`;
    };

    const SwiperImage = (attr) => {
    
        return (
            <Image
                loader={imgLoader}
                src={attr.src}
                alt={attr.alt}
                title={attr.title}
                width={attr.width}
                height={attr.height}
                priority="true"
            />
        );
    };

    const renderImage = (image, i) => {

        return (
            <div key={i} className="swiper-slide">
                <div className="testimonial-item">
                    {typeof image.stars === "number" ? (<div className="stars">
                        {new Array(image.stars).fill(1).map((s, i) => (<i key={i} className="bi bi-star-fill"></i>))}
                    </div>) : null}
                    <p>{image.title}</p>
                    <div className="profile mt-auto">
                        <SwiperImage className="testimonial-img" src={image.src} alt={image.title} title={image.title} width={image.width} height={image.height} />
                        <h3>{image.title}</h3>
                        <h4>{image.alt}</h4>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="swiper-widget" className="swiper-widget">
            <div className="container">
                {typeof header === "function" ? header() : (header)}
                <div className="slides swiper">
                    <div className="swiper-wrapper">
                        {images.map((obj, i) => (
                            renderImage(obj, i)
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {children}
            </div>
        </section>
    );
};

SwiperComponent.propTypes = {
    children: PropTypes.node,
    header: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    images: PropTypes.array.isRequired
};

export default SwiperComponent;
