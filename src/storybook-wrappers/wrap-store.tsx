import { Provider } from 'mobx-react';
import * as React from 'react';
import { createRootStore } from '../utilities/storeUtil';

const stub = () => true;

export const exampleStore = {
  authStore: {
    authenticate: stub,
    isAuthenticated: false,
  },
};

const wrapWithStore = (extendStore = {}, overrideStore?: any) => (story: any) => {
  const rootStore = createRootStore({});

  const cleanStore = {};
  const finalStore = overrideStore ? overrideStore : { ...cleanStore, ...exampleStore, ...extendStore };

  return <Provider {...finalStore}>{story()}</Provider>;
};

export default wrapWithStore;
