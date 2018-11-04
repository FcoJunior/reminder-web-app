import { JsonProperty } from 'json-object-mapper';
import { DomainBase } from './base.domain';

export class ResponseDomain<T> extends DomainBase {
  
  @JsonProperty()
  public data: T;

  @JsonProperty()
  public error_message: string;
}