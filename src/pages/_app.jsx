import React from "react";
import App from "next/app";
import AOS from "aos";
import Swiper from "swiper/bundle";
import Head from "next/head";
import Contexts from "contexts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css/bundle";
import "../styles/base.scss";

class Application extends App {
    constructor (props) {
        super(props);

        this.state = {
            env: props.env
        };
    }

    renderHead () {
        return (
            <Head>
                {/* <!-- Favicons --> */}
                <link rel="shortcut icon" href="/favicon.png" />
                <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta content="Cloudflare React Application web site" name="description" />
                <meta content="Cloudflare,React,Application" name="keywords" />
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/manifest.json" />
                <title>Cloudflare React Application</title>
                {this.props.styleTags}
            </Head>
        );
    }

    aosInit () {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }

    glightboxInit (factory) {
        window.GLightbox = factory({
            selector: ".glightbox"
        });
    }

    swiperInit () {
        new Swiper(".slides-one", {});
    }

    componentDidMount () {
        import("bootstrap/dist/js/bootstrap");
        // eslint-disable-next-line no-undef
        const factory = require("glightbox/dist/js/glightbox");

        this.aosInit();
        this.glightboxInit(factory);
        this.swiperInit();
    }

    render () {
        const { Component, pageProps } = this.props;

        return (
            <>
                {this.renderHead()}
                <Contexts env={this.state.env}>
                    <Component {...pageProps} />
                </Contexts>
            </>
        );
    }
}

// eslint-disable-next-line no-unused-vars
App.getInitialProps = async context => {
    const VERSION = "1.0";
    // eslint-disable-next-line no-unused-vars, no-undef
    const PLATFORM = process.env.PLATFORM || "LOCAL";

    return { env: { VERSION, PLATFORM } };
};

export default Application;
