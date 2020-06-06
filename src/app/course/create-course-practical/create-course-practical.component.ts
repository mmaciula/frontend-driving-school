import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CourseService } from 'src/app/service/course.service';
import { PracticalsService } from 'src/app/service/practicals.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course-practical',
  templateUrl: './create-course-practical.component.html',
  styleUrls: ['./create-course-practical.component.scss']
})
export class CreateCoursePracticalComponent implements OnInit {
  displayedColumns = ['course', 'startDate', 'pick'];
  instructorCourses = new MatTableDataSource<any>();
  courseId;
  form: any = {};
  dateFromForm;
  timeFromForm;
  seconds = ':00';

  constructor(private courseS: CourseService, private practicalS: PracticalsService, private t: ToastrService, private r: Router) { }

  ngOnInit() {
    this.instructorCoursesInfo();
  }

  instructorCoursesInfo() {
    this.courseS.getAllInstructorCourses().subscribe(
      data => {
        this.instructorCourses.data = data;
      }
    );
  }

  pickThisCourse(id) {
    this.courseS.setCourseId(id);
    this.courseS.currentCourseId.subscribe(
      course => {
        this.courseId = course;
      }
    );
  }

  onSubmit() {
    this.dateFromForm = this.form.date;
    this.timeFromForm = this.form.time;
    const result = this.dateFromForm + 'T' + this.timeFromForm + this.seconds;
    console.log(result);

    this.practicalS.createNewPractical(this.courseId, result).subscribe(
      () => {
        this.t.success('', 'Utworzono nowe zajęcia praktyczne', {
          positionClass: 'toast-top-center'
        });
        setTimeout(
          () => {
            this.r.navigate(['/mod']);
          }, 1000
        );
      }, () => {
        this.t.error('Skontaktuj się z administratorem', 'Coś się nie udało', {
          positionClass: 'toast-top-center'
        });
        this.r.navigate(['/']);
      }
    );
  }

}
