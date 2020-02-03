import { removeSjsId } from '../../../../utilities/sjsBaseModelHelper';

const mockData = [
  {
    score: 18.638334,
    show: {
      id: 431,
      url: 'http://www.tvmaze.com/shows/431/friends',
      name: 'Friends',
      type: 'Scripted',
      language: 'English',
      genres: ['Comedy', 'Romance'],
      status: 'Ended',
      runtime: 30,
      premiered: '1994-09-22',
      officialSite: null,
      schedule: { time: '20:00', days: ['Thursday'] },
      rating: { average: 8.8 },
      weight: 93,
      network: { id: 1, name: 'NBC', country: { name: 'United States', code: 'US', timezone: 'America/New_York' } },
      webChannel: null,
      externals: { tvrage: 3616, thetvdb: 79168, imdb: 'tt0108778' },
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/41/104550.jpg',
      },
      summary:
        '<p>Six young (20-something) people from New York City (Manhattan), on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.</p><p>This average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.</p>',
      updated: 1577896622,
      _links: { self: { href: 'http://api.tvmaze.com/shows/431' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/40881' } },
    },
  },
];

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
    // 'https://api.tvmaze.com/search/shows?q=Friends'

    nock('https://api.tvmaze.com')
      .get('/search/shows?q=Friends')
      .reply(200, mockData);

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

    const expectedData = [new ShowModel(mockData[0].show)];

    removeSjsId(expectedData);
    removeSjsId(searchLocalStore.searchResults);

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
