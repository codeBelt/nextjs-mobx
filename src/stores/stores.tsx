import { Context, createContext, useContext } from 'react';
import environment from 'environment';
import RootStore from './RootStore';

let clientSideStores: RootStore;

export const createRootStore = (initialState: Partial<RootStore> = {}) => {
  if (environment.isServer || !clientSideStores) {
    clientSideStores = new RootStore(initialState);
  }

  return clientSideStores;
};

const StoreContext: Context<any> = createContext({});

export const StoreProvider = (props) => {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
};

export const useMobxStores = () => {
  return useContext(StoreContext);
};
