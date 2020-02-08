import './App.scss';

import React from 'react';
import NextApp, { AppProps } from 'next/app';
import { getRootStore } from '../utils/storeUtil';
import { useStaticRendering, Provider } from 'mobx-react';
import environment from 'environment';

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(environment.isServer); // Not a react-hook

// Example how to use env secrets
process.env.nextJsSecretKey;
process.env.DOT_ENV_SECRET_KEY;

export class App extends NextApp<AppProps<{}>> {
  render() {
    const { Component, pageProps } = this.props;

    const rootStore = getRootStore(pageProps);

    return (
      <Provider value={rootStore}>
        <Component />
      </Provider>
    );
  }
}
