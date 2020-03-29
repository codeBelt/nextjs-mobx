import { removeSjsId } from '../../../../utils/sjsBaseModelHelper';

import { SearchLocalStore } from '../SearchLocalStore';
import environment from 'environment';
import { initialResponseStatus } from '../../../../models/IResponseStatus';
import nock from 'nock';
import ShowModel from '../../../../stores/shows/models/shows/ShowModel';
import { splitBySeparator } from '../../../../utils/stringUtil';
import { SearchLocalStoreMockData } from '../__mocks__/SearchLocalStore.mockData';

describe('SearchLocalStore', () => {
  let searchLocalStore: SearchLocalStore;

  beforeEach(() => {
    searchLocalStore = SearchLocalStore({ endpoint: environment.api.showsSearch });
  });

  test('should have default state', () => {
    expect(searchLocalStore.endpoint).toEqual(environment.api.showsSearch);
    expect(searchLocalStore.currentSearchTerm).toEqual('');
    expect(searchLocalStore.searchResults).toEqual(initialResponseStatus([]));
    expect(searchLocalStore.resultsText).toEqual('Results: 0');
  });

  test('should have successful search term request', async () => {
    const searchTerm = 'Friends';
    const endpoint = environment.api.showsSearch.replace(':searchTerm', searchTerm);
    const [baseUrl, sourceUrl] = splitBySeparator(endpoint, '.com');

    nock(baseUrl).get(sourceUrl).reply(200, SearchLocalStoreMockData);

    const apiPromise = searchLocalStore.search(searchTerm);

    // Before Request Finishes
    expect(searchLocalStore.currentSearchTerm).toEqual(searchTerm);
    expect(searchLocalStore.resultsText).toEqual('Searching...');
    expect(searchLocalStore.searchResults).toEqual({
      isRequesting: true,
      data: [],
    });

    await apiPromise;

    const expectedData = [new ShowModel(SearchLocalStoreMockData[0].show)];

    removeSjsId(expectedData);
    removeSjsId(searchLocalStore.searchResults);

    // After Request Finishes
    expect(searchLocalStore.currentSearchTerm).toEqual(searchTerm);
    expect(searchLocalStore.resultsText).toEqual('Results: 1');
    expect(searchLocalStore.searchResults).toEqual({
      isRequesting: false,
      data: expectedData,
    });
    expect(searchLocalStore.searchResults.data[0]).toBeInstanceOf(ShowModel);
  });
});
