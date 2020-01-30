/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
      "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/526.jpg",
      "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/526.jpg"
    }
 */
export default class ImageModel extends BaseModel {
  readonly medium: string = '';
  readonly original: string = '';

  /*
   * Client-Side properties (Not from API)
   */
  // noneApiProperties: unknown = null;

  constructor(data: RecursivePartial<ImageModel>) {
    super();

    this.update(data);
  }
}
