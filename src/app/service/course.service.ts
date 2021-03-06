import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CourseDTO } from '../course/model/course.model';

const API = 'http://localhost:8080/api/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private idSource = new BehaviorSubject<number>(-1);
  currentCourseId = this.idSource.asObservable();

  constructor(private http: HttpClient) { }

  public getAvailableCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(API + '/courses');
  }

  public getCourseById(id: number): Observable<CourseDTO> {
    return this.http.get<CourseDTO>(API + '/courses/' + id);
  }

  public setCourseId(id: number) {
    this.idSource.next(id);
  }

  public getAllInstructorCourses(): Observable<any> {
    return this.http.get(API + '/instructor');
  }

  public createCourse(data, courseDate): Observable<any> {
    return this.http.post(API + '/add',
    {
      name: data.type,
      description: data.description,
      cost: data.cost,
      startDate: courseDate,
      instructorUsername: data.instructor,
      members: data.members
    });
  }

  public deleteCourse(id): Observable<any> {
    return this.http.delete(API + '/delete/' + id);
  }
}
