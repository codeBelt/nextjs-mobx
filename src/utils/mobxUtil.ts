import { UnknownResponseStatus } from '../models/IResponseStatus';
import { APIResponse } from '../models/api';
import { runInAction } from 'mobx';
import pWaterfall from 'p-waterfall';

type APITransformer<T> = (response: APIResponse<T>) => APIResponse<T>;

export const requestAction = async <T>(
  callback: (status: UnknownResponseStatus<T>) => void,
  effect: Promise<APIResponse<T>>,
  ...transformers: any // eslint-disable-line @typescript-eslint/no-explicit-any
): Promise<UnknownResponseStatus<T>> => {
  let statusData: UnknownResponseStatus<T> = {
    isRequesting: true,
  };

  runInAction(() => callback(statusData));

  const { data, error } = await pWaterfall(transformers, effect);

  statusData = {
    isRequesting: false,
  };

  if (error) {
    statusData.error = error;
  } else {
    statusData.data = data;
  }

  runInAction(() => callback(statusData));

  return statusData;
};
