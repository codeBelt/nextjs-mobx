import { observable, action } from 'mobx';

class UIStore {
  @observable searchOverlayOpen = false;
  @observable items = [];

  @action setSearchOverlayOpen(value) {
    this.searchOverlayOpen = value;
  }
}

export default UIStore;
