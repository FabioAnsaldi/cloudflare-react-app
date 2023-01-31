import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const GalleryComponent = props => {
    const { children, images } = props;

    const imgLoader = ({ src }) => {
        return `assets/images/gallery/${src}`;
    };

    const GalleryImage = (attr) => {
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

    const renderImage = (image) => {

        return (
            <div className="gallery-item h-100">
                <GalleryImage className="img-fluid" src={image.src} alt={image.title} title={image.title} width={image.width} height={image.height} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
            </div>
        );
    };

    return (
        <section id="gallery" className="gallery">
            <div className="container-fluid">
                <div className="row gy-4 justify-content-center">
                    {images.map((obj, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            {renderImage(obj)}
                        </div>
                    ))}
                </div>
            </div>
            {children}
        </section>
    );
};

GalleryComponent.propTypes = {
    children: PropTypes.node,
    images: PropTypes.array.isRequired
};

export default GalleryComponent;
