import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../course/model/user.model';

const API = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getSignedInUser(): Observable<UserDTO> {
    return this.httpClient.get<UserDTO>(API + '/me');
  }
}
