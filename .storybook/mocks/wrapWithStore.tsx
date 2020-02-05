import React from 'react';
import { createRootStore } from '../../src/utilities/storeUtil';
import { Provider } from 'mobx-react';
import RootStore from '../../src/stores/RootStore';

export const wrapWithStore = (initialState: Partial<RootStore> = {}) => (story) => {
  const rootStore = createRootStore(initialState);

  return <Provider value={rootStore}>{story()}</Provider>;
};
