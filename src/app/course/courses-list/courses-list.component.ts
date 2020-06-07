import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/service/course.service';
import { CourseDTO } from '../model/course.model';
import { UserService } from 'src/app/service/user.service';
import { UserDTO } from '../model/user.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SignInForCourseDialogComponent } from '../sign-in-for-course-dialog/sign-in-for-course-dialog.component';

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

  constructor(private courseS: CourseService, private userService: UserService, private t: ToastrService, private dialog: MatDialog) {}

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Liczba elementów';
    this.courseInfo();
    this.allCourses.sort = this.sort;
    this.allCourses.paginator = this.paginator;
  }

  courseInfo(): void {
    this.courseS.currentCourseId.subscribe(id =>  this.id = id);

    this.courseS.getAvailableCourses().subscribe(d => this.allCourses.data = d);

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
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.autoFocus = true;
    config.backdropClass = 'backdropBackground';

    const dialogRef = this.dialog.open(SignInForCourseDialogComponent, config);

    dialogRef.afterClosed().subscribe(
      response => {
        if (response) {
          this.courseS.setCourseId(id);
          console.log(id);
          this.userService.assignCourseToUser(id).subscribe();
          this.t.success('Nie zapomnij dokonać płatności', 'Gratulacje! Zapisałeś się na kurs', {
            positionClass: 'toast-top-center'
          });
          setTimeout(() => {
            window.location.reload();
          },
          5001);
        }
      }
    );
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allCourses.filter = filterValue.trim().toLowerCase();
  }
}
