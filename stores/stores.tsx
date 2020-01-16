import { isServer } from '../utils/isServer';
import PostStore from './PostStore';
import UIStore from './UIStore';
import {Context, createContext, useContext} from 'react';

let clientSideStores;

export function getStores(initialData = { postStoreInitialData: {} }) {
  if (isServer) {
    return {
      postStore: new PostStore(initialData.postStoreInitialData),
      uiStore: new UIStore(),
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      postStore: new PostStore(initialData.postStoreInitialData),
      uiStore: new UIStore(),
    };
  }

  return clientSideStores;
}

const StoreContext: Context<any> = createContext({});

export function StoreProvider(props) {
  return (
      <StoreContext.Provider value={props.value}>
        {props.children}
      </StoreContext.Provider>
  );
}

export function useMobxStores() {
  return useContext(StoreContext);
}
