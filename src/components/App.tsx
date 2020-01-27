import './App.scss';

import React from 'react';
import NextApp, { AppProps } from 'next/app';
import { createRootStore } from '../utilities/storeUtil';
import { useStaticRendering, Provider } from 'mobx-react';
import environment from 'environment';

useStaticRendering(environment.isServer);

export class App extends NextApp<AppProps<{}>> {
  render() {
    const { Component, pageProps } = this.props;

    const rootStore = createRootStore(pageProps);

    return (
      <Provider value={rootStore}>
        <Component />
      </Provider>
    );
  }
}
