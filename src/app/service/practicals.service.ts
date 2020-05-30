import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/activity';

@Injectable({
  providedIn: 'root'
})
export class PracticalsService {
  body = null;

  constructor(private httpClient: HttpClient) { }

  public getPracticalsByCourse(id): Observable<any> {
    return this.httpClient.get(API + '/course/' + id);
  }

  public signUp(id): Observable<any> {
    return this.httpClient.post(API + '/course/' + id + '/signup', this.body);
  }
}
