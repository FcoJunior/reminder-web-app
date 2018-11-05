import { ObjectMapper, JsonProperty } from 'json-object-mapper';


export abstract class DomainBase {

  @JsonProperty()
  public id: string = '';
  
  public toJSON(): string {
    return <string>ObjectMapper.serialize(this);
  }
}