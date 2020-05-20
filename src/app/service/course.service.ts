import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDTO } from '../course/model/course.model';

const API = 'http://localhost:8080/api/course';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public getAvailableCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(API + '/courses');
  }
}
