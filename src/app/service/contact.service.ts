import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  sendMessage(form): Observable<any> {
    return this.httpClient.post(API, {
      name: form.name,
      email: form.email,
      content: form.content
    });
  }
}
