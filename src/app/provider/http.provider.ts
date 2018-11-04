import { ResponseDomain } from './../domain/response.domain';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DomainBase } from '../domain/base.domain';

export abstract class HttpProvider<T extends DomainBase> {
  
  private _baseUrl: string;

  constructor(private _httpService: Http) {
    this._baseUrl = environment.api_url;
  }

  protected _get(path: string): Observable<ResponseDomain<T>> {
    return new Observable<ResponseDomain<T>>(observer => {
      this._httpService.get(this._baseUrl + path)
        .subscribe(response => {
          observer.next(response.json() as ResponseDomain<T>);
          observer.complete();
        });;
    });
  }

  protected _getAll(path: string): Observable<ResponseDomain<T[]>> {
    return new Observable<ResponseDomain<T[]>>(observer => {
      this._httpService.get(this._baseUrl + path)
        .subscribe(response => {
          observer.next(response.json() as ResponseDomain<T[]>);
          observer.complete();
        });;
    });
  }
}