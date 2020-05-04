import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signIn(credentials): Observable<any> {
    return this.httpClient.post(API + 'signin', { username: credentials.username, password: credentials.password });
  }

  register(user): Observable<any> {
    return this.httpClient.post(API + 'signup',
      {
        username: user.username,
        email: user.email,
        password: user.password,
        name: user.name,
        surname: user.surname
      }
    );
  }

}
