import { JsonProperty, JsonIgnore, ObjectMapper } from 'json-object-mapper';
import { DomainBase } from './base.domain';

export class ReminderDomain extends DomainBase {

  @JsonProperty()
  public title: string = '';

  @JsonProperty()
  public description: string = '';

  @JsonProperty({name: 'date'})
  public dateString: string = new Date().toISOString();
  
  @JsonProperty()
  public sponsor: string = '';
  
  @JsonProperty()
  public expired: boolean = false;
  
  private _day: Date = new Date();
  private _time: Date = new Date();

  @JsonIgnore()
  public day: Date = new Date(this.dateString);

  @JsonIgnore()
  public time: Date = new Date(this.dateString);

  @JsonIgnore()
  public get date_format(): string {

    let datetime = new Date(this.dateString);
    let day = datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate();
    let month = datetime.getMonth() < 9 ? `0${datetime.getMonth() + 1}` : datetime.getMonth() + 1;
    let date = `${day}/${month}/${datetime.getFullYear()}`;

    let hour = datetime.getHours() < 10 ? `0${datetime.getHours()}` : datetime.getHours();
    let minutes = datetime.getMinutes() < 10 ? `0${datetime.getMinutes()}` : datetime.getMinutes();
    let hours = `${hour}:${minutes}`;
    
    return `${date} ${hours}`;
  }

  public static mapArray(object: any): ReminderDomain[] {
    return ObjectMapper.deserializeArray(this, object);
  }

  public static map(object: any): ReminderDomain {
    return ObjectMapper.deserialize(this, object);
  }

  public prepareDateString() {
    let date = new Date(this.day.getFullYear(), this.day.getMonth(), this.day.getDate(), this.time.getHours(), this.time.getMinutes());
    this.dateString =  date.toISOString();
  }

  public toJSON(): string {
    this.prepareDateString()
    return <string>ObjectMapper.serialize(this);
  }

}
