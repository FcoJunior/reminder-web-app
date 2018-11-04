import { ObjectMapper } from 'json-object-mapper';


export abstract class DomainBase {

  public toJSON(): string {
    return <string>ObjectMapper.serialize(this);
  }
}