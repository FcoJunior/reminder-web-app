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

  public get(): Observable<ReminderDomain[]> {
    return this._getAll('v1/stickynotes')
      .pipe(map(x => ReminderDomain.mapArray(x.data)));
  }
}