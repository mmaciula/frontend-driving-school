import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) { }

  arrangeAnExam(id, time): Observable<any> {
    return this.httpClient.post(API + '/add/' + id, { date: time });
  }

  getAllStudentExams(): Observable<any> {
    return this.httpClient.get(API + '/student');
  }

  getAllInstructroExams(): Observable<any> {
    return this.httpClient.get(API + '/instructor');
  }
}
