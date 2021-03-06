import { Constructor } from '../typings/Constructor';
import { FlattenIfArray } from '../typings/FlattenIfArray';
import { APIResponse } from '../models/api';
import { createModels } from './modelUtil';
import { ToastStatus } from '../constants/ToastStatus';
import { getRootStore } from './storeUtil';

export const responseToModels = <T>(Model: Constructor<FlattenIfArray<T>>) => {
  return (response: APIResponse<T>): APIResponse<T> => {
    const { data, error } = response;

    return error ? response : { data: createModels(Model, data) as T };
  };
};

export const toastResponseError = <T>(response: APIResponse<T>): APIResponse<T> => {
  const { error } = response;

  if (error) {
    getRootStore().toastsStore.add(error.message, ToastStatus.Error);
  }

  return response;
};
