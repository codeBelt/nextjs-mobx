import { Util } from 'sjs-base-model';

/**
 *
 * @param obj
 * @private
 */
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

/**
 * A helper util to remove sjs-base-model properties from models
 * within unit tests. sjs-base-model always creates a unique id and
 * tests will fail because all id's will be different.
 *
 * @param obj
 */
export const removeSjsId = (obj: unknown): unknown => {
  if (obj) {
    _recursivelyRemoveSjsIds(obj);
  }

  return obj;
};
