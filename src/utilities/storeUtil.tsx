import { Context, createContext, useContext } from 'react';
import environment from 'environment';
import RootStore from '../stores/RootStore';

export let rootStore: RootStore;
export let RootStoreContext: Context<RootStore>;

export const createRootStore = (initialState: Partial<RootStore> = {}) => {
  if (!rootStore || environment.isServer) {
    rootStore = new RootStore(initialState);
    RootStoreContext = createContext(rootStore);
  }

  return rootStore;
};

export const useRootStoreContext = () => useContext(RootStoreContext);
