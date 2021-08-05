import App from "next/app";
import React from "react";
import store from "../redux/store";
import withRedux from "next-redux-wrapper";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps: pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
