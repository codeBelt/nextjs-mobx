import { SearchLocalStore, SearchLocalStoreType } from '../SearchLocalStore';
import environment from 'environment';
import { initialResponseStatus } from '../../../../models/IResponseStatus';
import nock from 'nock';
import ShowModel from '../../../../stores/shows/models/shows/ShowModel';

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

  test('should start search term request', async () => {
    const expectedData = [new ShowModel({})];
    // 'https://api.tvmaze.com/search/shows?q=Friends'

    nock('https://api.tvmaze.com')
      .get('/search/shows?q=Friends')
      .reply(200, {
        data: expectedData,
      });

    const searchTerm = 'Friends';

    const apiPromise = searchLocalStore.search(searchTerm);

    // Before Request finishes
    expect(searchLocalStore.currentSearchTerm).toEqual(searchTerm);
    expect(searchLocalStore.resultsText).toEqual('Searching...');
    expect(searchLocalStore.searchResults).toEqual({
      isRequesting: true,
      data: [],
    });

    await apiPromise;

    // After Request finishes
    expect(searchLocalStore.currentSearchTerm).toEqual(searchTerm);
    expect(searchLocalStore.resultsText).toEqual('Results: 1');
    expect(searchLocalStore.searchResults).toEqual({
      isRequesting: false,
      data: expectedData,
    });
  });
});

// https://dev.to/briwa/my-whoa-i-didn-t-know-that-moments-with-jest-3a3h
// https://benmccormick.org/2017/08/15/jest-matchers-1/
// https://medium.com/@boriscoder/the-hidden-power-of-jest-matchers-f3d86d8101b0
// expect(new Foo('bar')).toBeInstanceOf(Foo)
