import React from "react";
import App from "next/app";
import Head from "next/head";
import Contexts from "contexts";
import "../styles/base.scss";
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
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/manifest.json" />
                <title>Cloudflare React Application</title>
                {this.props.styleTags}
            </Head>
        );
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
App.getInitialProps = async ctx => {
    const VERSION = "1.0";
    // eslint-disable-next-line no-unused-vars, no-undef
    const PLATFORM = process.env.PLATFORM || "LOCALE";

    return { env: { VERSION, PLATFORM } };
};

export default Application;
