import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['date', 'time', 'status'];
  exams = new MatTableDataSource<any>();

  constructor(private exam: ExamService) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Liczba elementów';
    this.exams.sort = this.sort;
    this.exams.paginator = this.paginator;
    this.getExams();
  }

  getExams() {
    this.exam.getAllStudentExams().subscribe(
      data => {
        this.exams.data = data;
      }
    );
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.exams.filter = filterValue.trim().toLowerCase();
  }

}
