import { ShowsStore } from './shows/ShowsStore';
import { ToastsStore } from './toasts/ToastsStore';
import Router, { SingletonRouter } from 'next/router';

export default class RootStore {
  readonly router: SingletonRouter = Router;
  readonly showsStore: ReturnType<typeof ShowsStore>;
  readonly toastsStore: ReturnType<typeof ToastsStore>;

  constructor(initialState: Partial<RootStore>) {
    this.showsStore = ShowsStore(this, initialState.showsStore);
    this.toastsStore = ToastsStore(this, initialState.toastsStore);
  }
}
