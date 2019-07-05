import React from "react";
import App, { Container } from "next/app";
import { Provider } from "./api/Context";

if (typeof window === "undefined") {
  global.fetch = require("node-fetch");
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default MyApp;
