import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.httpClient.get(API + 'all', { responseType: 'text' });
  }

  getUserContent(): Observable<any> {
    return this.httpClient.get(API + 'user', { responseType: 'text' });
  }

  getModContent(): Observable<any> {
    return this.httpClient.get(API + 'mod', { responseType: 'text' });
  }

  getAdminContent(): Observable<any> {
    return this.httpClient.get(API + 'admin', { responseType: 'text' });
  }
}
