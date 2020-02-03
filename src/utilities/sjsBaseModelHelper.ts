import { Util } from 'sjs-base-model';

const _recursivelyRemoveSjsIds = (obj: unknown | unknown[]): unknown => {
  if (Array.isArray(obj)) {
    obj.map((item: unknown) => _recursivelyRemoveSjsIds(item));
  }

  if (Util.isObject(obj)) {
    Util.deletePropertyFromObject(obj, ['sjsId', 'sjsOptions']);

    Object.values(obj).forEach((propertyValue: unknown) => {
      if (obj instanceof Array || Util.isObject(propertyValue)) {
        _recursivelyRemoveSjsIds(propertyValue);
      }
    });
  }

  return obj;
};

export const removeSjsId = (obj: unknown): unknown => {
  if (obj) {
    _recursivelyRemoveSjsIds(obj);
  }

  return obj;
};
