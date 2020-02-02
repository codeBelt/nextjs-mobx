import { SearchLocalStore, SearchLocalStoreType } from '../SearchLocalStore';
import environment from 'environment';
import { initialResponseStatus } from '../../../../models/IResponseStatus';
import nock from 'nock';

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
    // 'https://api.tvmaze.com/search/shows?q=Friends'

    nock('https://api.tvmaze.com')
      .get('/search/shows?q=Friends')
      .reply(200, {
        results: 'any thing so that I can see this fail at least',
      });

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
