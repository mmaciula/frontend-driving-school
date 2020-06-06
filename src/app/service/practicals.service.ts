import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const API = 'http://localhost:8080/api/activity';

@Injectable({
  providedIn: 'root'
})
export class PracticalsService {
  body = null;
  private practicalId = new BehaviorSubject<number>(-1);
  currentPracticalId = this.practicalId.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getPracticalsByCourse(id): Observable<any> {
    return this.httpClient.get(API + '/course/' + id);
  }

  public signUp(id): Observable<any> {
    return this.httpClient.post(API + '/course/' + id + '/signup', this.body);
  }

  public getAllUserPracticals(): Observable<any> {
    return this.httpClient.get(API + '/mine');
  }

  public getAllInstructorPracticalWithSignInUser(): Observable<any> {
    return this.httpClient.get(API + '/occupied');
  }

  public setCurrentPracticalId(id) {
    this.practicalId.next(id);
  }

  public ratePractical(id, rate): Observable<any> {
    return this.httpClient.post(API + '/' + id + '/rate/' + rate, this.body);
  }

  public commentPractical(id, comment): Observable<any> {
    return this.httpClient.post(API + '/' + id + '/comment', comment);
  }

  createNewPractical(id, time): Observable<any> {
    return this.httpClient.post(API + '/add/' + id, { date: time });
  }
}
