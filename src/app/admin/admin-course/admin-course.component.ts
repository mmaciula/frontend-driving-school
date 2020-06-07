import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { CourseService } from 'src/app/service/course.service';
import { ToastrService } from 'ngx-toastr';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.scss']
})
export class AdminCourseComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['name', 'startDate', 'instructorName', 'delete'];
  courses = new MatTableDataSource<any>();
  form: any = {};
  seconds = ':00';
  startDate;

  constructor(private courseService: CourseService, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Liczba elementów';
    this.courses.sort = this.sort;
    this.courses.paginator = this.paginator;
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAvailableCourses().subscribe(
      courses => {
        this.courses.data = courses;
        console.log('Soccessfully load all courses');
      }
    );
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.courses.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    const date = this.form.date;
    const time = this.form.time;
    this.startDate = date + 'T' + time + this.seconds;
    console.log(this.startDate);
    console.log(this.form);

    this.courseService.createCourse(this.form, this.startDate).subscribe(
      () => {
        this.toastr.success('', 'Utworzono nowy kurs', {
          positionClass: 'toast-top-center'
        });
        setTimeout(
          () => {
            window.location.reload();
          }, 1000
        );
      }
    );
  }

  openDialog(id) {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.autoFocus = true;
    config.backdropClass = 'backdropBackground';

    const dialogRef = this.dialog.open(DialogComponent, config);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.courseService.deleteCourse(id).subscribe(
            () => {
              this.toastr.success('', 'Usunięto kurs', {
                positionClass: 'toast-top-center'
              });
              setTimeout(() => {
                window.location.reload();
                console.log('Course deleted successfully');
              }, 1000);
            }
          );
        }
      }
    );
  }

}
