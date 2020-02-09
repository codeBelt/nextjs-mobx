import { Constructor } from '../typings/Constructor';
import { FlattenIfArray } from '../typings/FlattenIfArray';

export const createModels = <T>(Model: Constructor<FlattenIfArray<T>>, data: T) => {
  return !Array.isArray(data) ? new Model(data) : data.map((json) => new Model(json));
};
