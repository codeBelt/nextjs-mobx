import './App.scss';

import React from 'react';
import NextApp, { AppProps } from 'next/app';
import { createRootStore } from '../stores/stores';
import { useStaticRendering, Provider } from 'mobx-react';
import environment from 'environment';

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(environment.isServer);

export class App extends NextApp<AppProps<{}>> {
  render() {
    const { Component, pageProps } = this.props;

    // During SSR, this will create new store instances so having `initialData` is crucial.
    // During the client-side hydration, same applies.
    // From then on, calls to `createRootStore()` return existing instances.
    const rootStore = createRootStore(pageProps);

    return (
      <Provider value={rootStore}>
        <Component />
      </Provider>
    );
  }
}
