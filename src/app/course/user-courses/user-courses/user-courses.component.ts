import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserDTO } from '../../model/user.model';
import { UserService } from 'src/app/service/user.service';
import { CourseService } from 'src/app/service/course.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.scss']
})
export class UserCoursesComponent implements OnInit {
  displayedColumns = ['name', 'startDate', 'instructorName', 'action'];
  courses = new MatTableDataSource<UserDTO>();
  id: number;
  user;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService, private courseService: CourseService) { }

  ngOnInit() {
    this.courses.sort = this.sort;
    this.courses.paginator = this.paginator;
    this.courseInfo();
    this.courseService.currentCourseId.subscribe(id => {
      this.id = id;
    });
  }

  selectCourse(id) {
    this.courseService.setCourseId(id);
  }

  courseInfo() {
    this.userService.getSignedInUser().subscribe(info => {
      this.user = info;
      this.courses.data = this.user.courses;
    });
  }

}
