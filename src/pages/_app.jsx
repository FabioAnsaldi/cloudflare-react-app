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
            env: props.env,
            stl: props.stl
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
            duration: this.state.stl.BODY_FADE_IN,
            delay: this.state.stl.BODY_FADE_IN_DELAY,
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
                <Contexts env={this.state.env} stl={this.state.stl}>
                    <Component {...pageProps} />
                </Contexts>
            </>
        );
    }
}

// eslint-disable-next-line no-unused-vars
App.getInitialProps = async context => {
    const VERSION = "1.0";
    const BODY_FADE_IN = 1000;
    const BODY_FADE_IN_DELAY = 0;
    const SECTION_FADE_IN = 1000;
    const SECTION_FADE_IN_DELAY = 1500;
    const WINDOW_SCROLL_Y = 10;
    // eslint-disable-next-line no-unused-vars, no-undef
    const PLATFORM = process.env.PLATFORM || "LOCAL";

    return { env: { VERSION, PLATFORM }, stl: { BODY_FADE_IN, BODY_FADE_IN_DELAY, SECTION_FADE_IN_DELAY, SECTION_FADE_IN, WINDOW_SCROLL_Y } };
};

export default Application;
