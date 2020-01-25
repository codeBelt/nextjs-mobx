import { observable, action, computed } from 'mobx';

import environment from 'environment';
import { requestAction } from '../utilities/mobxUtil';
import http from '../utilities/http';
import EpisodeModel from './shows/models/episodes/EpisodeModel';
import { initialResponseStatus } from '../models/IResponseStatus';
import IEpisodeTableRow from './shows/computed/IEpisodeTableRow';
import dayjs from 'dayjs';
import IEpisodeTable from './shows/computed/IEpisodeTable';

import groupBy from 'lodash.groupby';

class PostStore {
  @observable currentShowId = '74';
  @observable post = '';
  @observable postId = '';
  @observable episodes = initialResponseStatus<EpisodeModel[]>([]);

  constructor(initialData: any = {}) {
    this.episodes = initialResponseStatus<EpisodeModel[]>(initialData.episodes?.data || []);
  }

  @action
  async requestEpisodes() {
    const endpoint = environment.api.episodes.replace(':showId', this.currentShowId);

    const finalStatus = await requestAction((status) => {
      this.episodes = { ...this.episodes, ...status };
    }, http.get<EpisodeModel[]>(endpoint));

    return finalStatus;
  }

  @computed
  get selectEpisodes() {
    const seasons: { [season: string]: EpisodeModel[] } = groupBy(this.episodes.data, 'season');

    return Object.entries(seasons).map(
      ([season, models]): IEpisodeTable => {
        return {
          title: `Season ${season}`,
          rows: this._createTableRows(models),
        };
      }
    );
  }

  _createTableRows(models: EpisodeModel[]) {
    return models.map(
      (model): IEpisodeTableRow => ({
        episode: model.number,
        name: model.name,
        date: dayjs(model.airdate).format('MMM D, YYYY'),
        image: model.image?.medium ?? '',
      })
    );
  }
}

export default PostStore;
