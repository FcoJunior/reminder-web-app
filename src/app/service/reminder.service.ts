import { ReminderSelector } from './../selector/reminder.selector';
import { Http } from '@angular/http';
import { HttpProvider } from "../provider/http.provider";
import { ReminderDomain } from "../domain/reminder.domain";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ReminderService extends HttpProvider<ReminderDomain> {
  
  constructor(http: Http) {
    super(http);
  }

  public get(selector: ReminderSelector): Observable<ReminderDomain[]> {
    return this._getWithParams('v1/stickynotes', selector)
      .pipe(map(x => ReminderDomain.mapArray(x.data)));
  }

  public checkNotify(minutes: number): Observable<ReminderDomain[]> {
    return this._get('v1/stickynotes/expiresIn/' + minutes)
      .pipe(map(x => ReminderDomain.mapArray(x.data)));
  }

  public create(reminder: ReminderDomain): Observable<ReminderDomain> {
    return this.save('v1/stickynotes', reminder)
      .pipe(map(x => ReminderDomain.map(x.data)));
  }
}