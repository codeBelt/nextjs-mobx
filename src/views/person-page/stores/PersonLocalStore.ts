import environment from 'environment';
import { initialResponseStatus } from '../../../models/IResponseStatus';
import PersonModel from '../../../stores/shows/models/cast/PersonModel';
import { requestAction } from '../../../utils/mobxUtil';
import { responseToModels, toastResponseError } from '../../../utils/apiUtil';
import http from '../../../utils/http';

export const PersonLocalStore = () => ({
  person: initialResponseStatus<PersonModel>(null),

  async getPerson(personId: string) {
    const endpoint = environment.api.person.replace(':personId', personId);

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
