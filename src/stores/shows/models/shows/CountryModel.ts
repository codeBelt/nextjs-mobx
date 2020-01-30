/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
    }
 */
export default class CountryModel extends BaseModel {
  readonly name: string = '';
  readonly code: string = '';
  readonly timezone: string = '';

  /*
   * Client-Side properties (Not from API)
   */
  // noneApiProperties: unknown = null;

  constructor(data: RecursivePartial<CountryModel>) {
    super();

    this.update(data);
  }
}
