import { SearchLocalStore, SearchLocalStoreType } from '../SearchLocalStore';
import environment from 'environment';
import { initialResponseStatus } from '../../../../models/IResponseStatus';

describe('SearchLocalStore', () => {
  let searchLocalStore: SearchLocalStoreType;

  beforeEach(() => {
    searchLocalStore = SearchLocalStore({ endpoint: environment.api.showsSearch });
  });

  test('should have default state', () => {
    expect(searchLocalStore.endpoint).toEqual(environment.api.showsSearch);
    expect(searchLocalStore.currentSearchTerm).toEqual('');
    expect(searchLocalStore.searchResults).toEqual(initialResponseStatus([]));
    expect(searchLocalStore.resultsText).toEqual('Results: 0');
  });

  test('should start search term request', () => {
    const searchTerm = 'Robert is Cool';

    searchLocalStore.search(searchTerm);

    expect(searchLocalStore.currentSearchTerm).toEqual(searchTerm);
    expect(searchLocalStore.resultsText).toEqual('Searching...');
    expect(searchLocalStore.searchResults).toEqual({
      isRequesting: true,
      data: [],
    });
  });
});
