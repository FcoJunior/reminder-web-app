import { JsonProperty, JsonIgnore, ObjectMapper } from 'json-object-mapper';
import { DomainBase } from './base.domain';

export class ReminderDomain extends DomainBase {

  @JsonProperty()
  public id: string = '';

  @JsonProperty()
  public title: string = '';

  @JsonProperty()
  public description: string = '';

  @JsonProperty({ type: Date })
  public date: Date = null;

  @JsonProperty()
  public sponsor: string = '';

  @JsonProperty()
  public expired: boolean = false;

  @JsonIgnore()
  public get date_format(): string {

    let day = this.date.getDate() < 10 ? `0${this.date.getDate()}` : this.date.getDate();
    let month = this.date.getMonth() < 9 ? `0${this.date.getMonth() + 1}` : this.date.getMonth() + 1;
    let date = `${day}/${month}/${this.date.getFullYear()}`;

    let hour = this.date.getHours() < 10 ? `0${this.date.getHours()}` : this.date.getHours();
    let minutes = this.date.getMinutes() < 10 ? `0${this.date.getMinutes()}` : this.date.getMinutes();
    let hours = `${hour}:${minutes}`;
    
    return `${date} ${hours}`;
  }

  public static mapArray(object: any): ReminderDomain[] {
    return ObjectMapper.deserializeArray(this, object);
}
}
