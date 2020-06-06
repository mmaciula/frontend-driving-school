import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-instructor-exam',
  templateUrl: './instructor-exam.component.html',
  styleUrls: ['./instructor-exam.component.scss']
})
export class InstructorExamComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns = ['date', 'student'];
  exams = new MatTableDataSource<any>();

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.exams.sort = this.sort;
    this.getInstructorExams();
  }

  getInstructorExams() {
    this.examService.getAllInstructroExams().subscribe(
      data => {
        this.exams.data = data;
        console.log('Successfully get instructors exam list');
      }
    );
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.exams.filter = filterValue.trim().toLowerCase();
  }


}
