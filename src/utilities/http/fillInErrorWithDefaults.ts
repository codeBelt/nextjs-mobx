import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import { isDefined } from '../miscUtil';

export const fillInErrorWithDefaults = (error: Partial<HttpErrorResponseModel>, request: Partial<Request>): HttpErrorResponseModel => {
  const errors = error.errors.length ? error.errors : ['Error requesting data'];

  return new HttpErrorResponseModel({
    status: error.status || 0,
    message: error.message || 'Error requesting data',
    url: error.url || request.url,
    // Remove anything with undefined or empty strings.
    errors: errors.filter(isDefined),
    // TODO: figure out what to pass for raw because a circular-structure was happening on errors
    //  because I held onto the same error object that next.js gave me.
    // raw: error.raw,
  });
};
