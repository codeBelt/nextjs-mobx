import { ToastsStore, ToastsStoreType } from '../ToastsStore';
import RootStore from '../../RootStore';
import { ToastStatus } from '../../../constants/ToastStatus';
import IToast from '../models/IToast';

const mockUuid = '1234';
jest.mock('uuid/v4', () => () => mockUuid);

describe('ToastsStore', () => {
  let toastsStore: ToastsStoreType;
  let rootStore: RootStore;
  const mockToast: IToast = {
    id: mockUuid,
    message: 'Some toast message',
    type: ToastStatus.Error,
  };

  beforeEach(() => {
    rootStore = new RootStore({});
    toastsStore = ToastsStore(rootStore);
  });

  test('should have default state', () => {
    expect(toastsStore.items.length).toEqual(0);
  });

  test('should have initial state', () => {
    const initialState = { items: [mockToast] };
    toastsStore = ToastsStore(rootStore, initialState);

    expect(toastsStore.items[0]).toEqual(mockToast);
  });

  test('should add error toast', () => {
    toastsStore.add(mockToast.message, mockToast.type);

    expect(toastsStore.items[0]).toEqual(mockToast);
  });

  test('should remove error toast by id', () => {
    toastsStore.add(mockToast.message, mockToast.type);
    expect(toastsStore.items.length).toEqual(1);

    toastsStore.remove(mockUuid);
    expect(toastsStore.items.length).toEqual(0);
  });
});
