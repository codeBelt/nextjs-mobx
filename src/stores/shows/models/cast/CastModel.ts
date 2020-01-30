/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseModel } from 'sjs-base-model';
import PersonModel from './PersonModel';
import CharacterModel from './CharacterModel';

/*
    // Returned Api Data Sample
    {
      "person": {},
      "character": {},
      "self": false,
      "voice": false
    }
 */
export default class CastModel extends BaseModel {
  readonly person: PersonModel = PersonModel as any;
  readonly character: CharacterModel = CharacterModel as any;
  readonly self: boolean = false;
  readonly voice: boolean = false;

  /*
   * Client-Side properties (Not from API)
   */
  // noneApiProperties: unknown = null;

  constructor(data: RecursivePartial<CastModel>) {
    super();

    this.update(data);
  }
}
