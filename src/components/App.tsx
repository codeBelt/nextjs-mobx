import './App.scss';

import React from 'react';
import NextApp, { AppProps } from 'next/app';
import { createRootStore, StoreProvider } from '../stores/stores';
import { useStaticRendering } from 'mobx-react';
import environment from 'environment';

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(environment.isServer);

// export let rootStore = new RootStore({});
// export let RootStoreContext: Context<RootStore>;

export class App extends NextApp<AppProps<{}>> {
  render() {
    const { Component, pageProps } = this.props;

    // During SSR, this will create new store instances so having `initialData` is crucial.
    // During the client-side hydration, same applies.
    // From then on, calls to `createRootStore()` return existing instances.
    const stores = createRootStore(pageProps);
    // RootStoreContext = React.createContext(stores);

    return (
      <StoreProvider value={stores}>
        <Component />
      </StoreProvider>
    );
  }
}
