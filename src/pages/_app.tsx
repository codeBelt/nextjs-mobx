import './_app.scss';

import React, {Suspense} from 'react';
import App from 'next/app';
import { getStores, StoreProvider } from '../stores/stores';
import {configure} from 'mobx';
import RootStore from '../stores/RootStore';

// https://github.com/zeit/next.js/tree/canary/examples
// https://github.com/zeit/next.js/tree/canary/examples/with-external-styled-jsx-sass
// https://github.com/zeit/next.js/tree/canary/examples/with-next-sass

// https://github.com/zeit/next.js/tree/canary/examples/with-mobx
// https://github.com/zeit/next.js/tree/canary/examples/with-mobx-react-lite

// https://github.com/borekb/nextjs-with-mobx

// https://github.com/nghiepit/next-mobx-wrapper

// configure({ enforceActions: 'always' }); // https://mobx.js.org/refguide/api.html#enforceactions

export let rootStore = new RootStore({});

class CustomApp extends App<{ initialData: any }> {
  static async getInitialProps(appContext) {
    // On server-side, this runs once and creates new stores
    // On client-side, this always reuses existing stores
    const mobxStores = getStores();

    // Make stores available to page's `getInitialProps`
    appContext.ctx.mobxStores = mobxStores;

    // Call "super" to run page's `getInitialProps`
    const appProps = await App.getInitialProps(appContext);

    // Gather serialization-friendly data from stores
    const initialData = {
      postStoreInitialData: mobxStores.postStore.__data(),
    };

    // Send it to `render`
    return {
      ...appProps,
      initialData,
    };
  }

  render() {
    const { Component, pageProps, initialData } = this.props;

    // During SSR, this will create new store instances so having `initialData` is crucial.
    // During the client-side hydration, same applies.
    // From then on, calls to `getStores()` return existing instances.
    const stores = getStores(initialData);

    return (
      <StoreProvider value={stores}>
        <Component {...pageProps} />
      </StoreProvider>
    );
  }
}

export default CustomApp;
