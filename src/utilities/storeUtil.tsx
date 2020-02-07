import { Context, createContext, useContext } from 'react';
import environment from 'environment';
import RootStore from '../stores/RootStore';

let _rootStore: RootStore;
let _rootStoreContext: Context<RootStore>;

export const getRootStore = (initialState: Partial<RootStore> = {}) => {
  if (!_rootStore || environment.isServer) {
    _rootStore = new RootStore(initialState);
    _rootStoreContext = createContext(_rootStore);
  }

  return _rootStore;
};

export const useRootStoreContext = () => useContext(_rootStoreContext);
