import { Context, createContext, useContext } from 'react';
import environment from 'environment';
import RootStore from './RootStore';

export let rootStore: RootStore;

export const createRootStore = (initialState: Partial<RootStore> = {}) => {
  if (environment.isServer || !rootStore) {
    rootStore = new RootStore(initialState);
  }

  return rootStore;
};

const StoreContext: Context<any> = createContext({});

export const StoreProvider = (props) => {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
};

export const useMobxStores = () => {
  return useContext(StoreContext);
};
