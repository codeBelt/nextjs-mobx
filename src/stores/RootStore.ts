import { ShowsStore } from './shows/ShowsStore';
import { ToastsStore } from './toasts/ToastsStore';
import Router, { SingletonRouter } from 'next/router';
import PostStore from './PostStore';
import UIStore from './UIStore';

export default class RootStore {
  readonly router: SingletonRouter = Router;
  // readonly showsStore: ReturnType<typeof ShowsStore>;
  // readonly toastsStore: ReturnType<typeof ToastsStore>;
  readonly showsStore: any;
  readonly toastsStore: any;

  constructor(initialState: RecursivePartial<RootStore>) {
    // this.showsStore = ShowsStore(this, initialState.showsStore);
    // this.toastsStore = ToastsStore(this, initialState.toastsStore);
    this.showsStore = new PostStore(initialState.showsStore);
    this.toastsStore = new UIStore();
  }
}
