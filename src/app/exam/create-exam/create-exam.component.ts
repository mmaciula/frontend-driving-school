import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { ExamService } from 'src/app/service/exam.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {
  form: any = {};
  dateFromForm;
  timeFromForm;
  seconds = ':00';
  courseId;
  success = false;
  failed = false;

  constructor(private courseService: CourseService, public examService: ExamService, private tostr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.courseInfo();
  }

  onSubmit() {
    this.dateFromForm = this.form.date;
    this.timeFromForm = this.form.time;
    const result = this.dateFromForm + 'T' + this.timeFromForm + this.seconds;
    console.log(result);
    console.log(this.courseId);

    this.examService.arrangeAnExam(this.courseId, result).subscribe(
      () => {
        this.success = true;
        this.tostr.success('Data: ' + this.dateFromForm + ' Godzina: ' + this.timeFromForm, 'Zapisano na egzamin!', {
          positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          this.router.navigate(['/user']);
        }, 2000);
      },
      () => {
        this.failed = true;
        this.tostr.error('Spróbuj ponownie za kilka minut lub skontaktuj się z nami', 'Coś poszło nie tak!', {
          positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      }
    );
  }

  courseInfo() {
    this.courseService.currentCourseId.subscribe(
      id => {
        this.courseId = id;
      }
    );
  }

}
