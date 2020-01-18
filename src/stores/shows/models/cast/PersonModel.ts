import { BaseModel } from 'sjs-base-model';
import ImageModel from '../ImageModel';

/*
    // Returned Api Data Sample
    {
      "id": 10709,
      "url": "http://www.tvmaze.com/people/10709/anson-mount",
      "name": "Anson Mount",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      },
      "birthday": "1973-02-25",
      "deathday": null,
      "gender": "Male",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/2326.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/2326.jpg"
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/people/10709"
        }
      }
    }
 */
export default class PersonModel extends BaseModel {
  public readonly id: number = 0;
  public readonly name: string = '';
  public readonly birthday: string = '';
  public readonly image: ImageModel | null = ImageModel as any;

  /*
   * Client-Side properties (Not from API)
   */
  // public noneApiProperties: unknown = null;

  constructor(data: RecursivePartial<PersonModel>) {
    super();

    this.update(data);
  }
}
