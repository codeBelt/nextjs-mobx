/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseModel } from 'sjs-base-model';
import CountryModel from './CountryModel';

/*
    // Returned Api Data Sample
    {
      "id": 20,
      "name": "AMC",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      }
    }
 */
export default class NetworkModel extends BaseModel {
  readonly id: number = 0;
  readonly name: string = '';
  readonly country: CountryModel = CountryModel as any;

  /*
   * Client-Side properties (Not from API)
   */
  // noneApiProperties: unknown = null;

  constructor(data: RecursivePartial<NetworkModel>) {
    super();

    this.update(data);
  }
}
