import { Context, createContext, useContext } from 'react';
import environment from 'environment';
import RootStore from '../stores/RootStore';

let _rootStore: RootStore;
export let RootStoreContext: Context<RootStore>;

export const createRootStore = (initialState: Partial<RootStore> = {}) => {
  if (!_rootStore || environment.isServer) {
    _rootStore = new RootStore(initialState);
    RootStoreContext = createContext(_rootStore);
  }

  return _rootStore;
};

export const useRootStoreContext = () => useContext(RootStoreContext);
