import { initialResponseStatus } from '../../../models/IResponseStatus';
import { requestAction } from '../../../utilities/mobxUtil';
import { toastResponseError, responseToModels } from '../../../utilities/apiUtil';
import http from '../../../utilities/http';
import PersonModel from '../../../stores/shows/models/cast/PersonModel';
import environment from 'environment';

export const PersonLocalStore = () => ({
  person: initialResponseStatus<PersonModel>(null),

  async getPerson(personId: string) {
    const endpoint = 'https://api.tvmaze.com/people/10709/anson-mount';

    await requestAction(
      (status) => {
        this.person = status;
      },
      http.get<PersonModel>(endpoint),
      responseToModels(PersonModel),
      toastResponseError
    );
  },
});

export type PersonLocalStore = ReturnType<typeof PersonLocalStore>;
