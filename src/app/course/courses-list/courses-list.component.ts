import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/service/course.service';
import { CourseDTO } from '../model/course.model';
import { UserService } from 'src/app/service/user.service';
import { UserDTO } from '../model/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  displayedColumns = ['name', 'description', 'startDate', 'members', 'instructorName', 'cost', 'signIn'];
  allCourses = new MatTableDataSource<CourseDTO>();
  userCourses = new MatTableDataSource<CourseDTO>();
  user: UserDTO;
  id: number;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private courseService: CourseService, private userService: UserService, private toastr: ToastrService) {}

  ngOnInit() {
    this.courseInfo();
    this.allCourses.sort = this.sort;
    this.allCourses.paginator = this.paginator;
  }

  courseInfo(): void {
    this.courseService.currentCourseId.subscribe(id =>  this.id = id);

    this.courseService.getAvailableCourses().subscribe(d => this.allCourses.data = d);

    this.userService.getSignedInUser().subscribe(d => {
      this.user = d;
      this.userCourses.data = this.user.courses;
      console.log(this.user.courses);
    });
  }

  registered(id): boolean {
    let registered = false;

    this.userCourses.data.forEach(course => {
      if (course.id === id) {
        registered = true;
      }
    });

    return registered;
  }

  selectCourse(id) {
    this.courseService.setCourseId(id);
    console.log(id);
    this.userService.assignCourseToUser(id).subscribe();
    this.toastr.success('Nie zapomnij dokonać płatności', 'Gratulacje! Zapisałeś się na kurs', {
      positionClass: 'toast-top-center'
    });
    setTimeout(() => {
      window.location.reload();
    },
    5001);
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allCourses.filter = filterValue.trim().toLowerCase();
  }
}
