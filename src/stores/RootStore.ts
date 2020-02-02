import { ShowsStore, ShowsStoreType } from './shows/ShowsStore';
import { ToastsStore, ToastsStoreType } from './toasts/ToastsStore';
import Router, { SingletonRouter } from 'next/router';

export default class RootStore {
  readonly router: SingletonRouter = Router;
  readonly showsStore: ShowsStoreType;
  readonly toastsStore: ToastsStoreType;

  constructor(initialState: Partial<RootStore>) {
    this.showsStore = ShowsStore(this, initialState.showsStore);
    this.toastsStore = ToastsStore(this, initialState.toastsStore);
  }
}
