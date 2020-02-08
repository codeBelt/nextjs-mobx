import React from 'react';
import { getRootStore } from '../../src/utils/storeUtil';
import { Provider } from 'mobx-react';
import RootStore from '../../src/stores/RootStore';

export const wrapWithStore = (initialState: Partial<RootStore> = {}) => (story) => {
  const rootStore = getRootStore(initialState);

  return <Provider value={rootStore}>{story()}</Provider>;
};
