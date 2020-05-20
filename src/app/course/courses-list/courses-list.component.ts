import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/service/course.service';
import { CourseDTO } from '../model/course.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  displayedColumns = ['name', 'description', 'cost', 'startdate', 'instructorName', 'members'];
  allCourses = new MatTableDataSource<CourseDTO>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private courseService: CourseService, private userService: UserService) {}

  ngOnInit() {
    this.courseInfo();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  courseInfo(): void {
    this.courseService.getAvailableCourses().subscribe(data => {
      this.allCourses.data = data;
   });
  }

}
