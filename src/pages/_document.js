import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-100">
            <Head>
                <link rel="stylesheet" href="/assets/font-awesome/css/all.css" />
            </Head>
            <body className="h-100">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}