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
  public readonly person: PersonModel = PersonModel as any;
  public readonly character: CharacterModel = CharacterModel as any;
  public readonly self: boolean = false;
  public readonly voice: boolean = false;

  /*
   * Client-Side properties (Not from API)
   */
  // public noneApiProperties: unknown = null;

  constructor(data: RecursivePartial<CastModel>) {
    super();

    this.update(data);
  }
}
