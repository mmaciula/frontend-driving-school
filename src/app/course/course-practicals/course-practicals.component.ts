import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { PracticalsService } from 'src/app/service/practicals.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-practicals',
  templateUrl: './course-practicals.component.html',
  styleUrls: ['./course-practicals.component.scss']
})
export class CoursePracticalsComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['date', 'time', 'action'];
  practicals = new MatTableDataSource<any>();
  courseId;

  constructor(private courseService: CourseService, private practicalsSerivce: PracticalsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.practicals.sort = this.sort;
    this.practicals.paginator = this.paginator;
  }

  getCoursePracticals() {
    this.courseService.currentCourseId.subscribe(
      id => {
        this.courseId = id;
      }
    );
    this.practicalsSerivce.getPracticalsByCourse(this.courseId).subscribe(
      p => {
        this.practicals.data = p;
      }
    );
  }

  signUp(id) {
    this.practicalsSerivce.signUp(id).subscribe(
      () => {
        this.toastr.success('', 'Zapisano na zajęcia praktyczne', {
          positionClass: 'toast-top-center'
        });
      }
    );
  }

}
