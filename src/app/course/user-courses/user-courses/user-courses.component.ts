import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserDTO } from '../../model/user.model';
import { UserService } from 'src/app/service/user.service';
import { CourseService } from 'src/app/service/course.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PracticalsService } from 'src/app/service/practicals.service';


@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.scss']
})
export class UserCoursesComponent implements OnInit {
  displayedColumns = ['name', 'startDate', 'instructorName', 'action', 'exam'];
  displayedColumnsPracticals = ['date', 'time', 'instructorName', 'instructorRate', 'comment'];
  courses = new MatTableDataSource<UserDTO>();
  practicals = new MatTableDataSource<any>();
  id: number;
  user;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatSort, {static: true}) sortPracticals: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private userService: UserService, private courseService: CourseService, private practicalsService: PracticalsService) { }

  ngOnInit() {
    this.courses.sort = this.sort;
    this.practicals.sort = this.sortPracticals;
    this.courses.paginator = this.paginator;
    this.courseInfo();
    this.allUserPracticalsInfo();
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

  filterCourses(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.courses.filter = filterValue.trim().toLowerCase();
  }

  allUserPracticalsInfo() {
    this.practicalsService.getAllUserPracticals().subscribe(
      data => {
        this.practicals.data = data;
      }
    );
  }

  filterPracticals(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.practicals.filter = filterValue.trim().toLowerCase();
  }

}
