import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { PracticalsService } from 'src/app/service/practicals.service';


@Component({
  selector: 'app-instructor-course-practicals',
  templateUrl: './instructor-course-practicals.component.html',
  styleUrls: ['./instructor-course-practicals.component.scss']
})
export class InstructorCoursePracticalsComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['course', 'date', 'time', 'student', 'rate', 'comment'];
  instructorPractical = new MatTableDataSource<any>();
  practicalId;

  constructor(private practicalService: PracticalsService) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Liczba elementów';
    this.instructorPractical.sort = this.sort;
    this.instructorPractical.paginator = this.paginator;

    this.instructorPracticalsInfo();
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.instructorPractical.filter = filterValue.trim().toLowerCase();
  }

  instructorPracticalsInfo() {
    this.practicalService.getAllInstructorPracticalWithSignInUser().subscribe(
      data => {
        this.instructorPractical.data = data;
        console.log(data);
      }
    );
  }

  selectThisPractical(id) {
    this.practicalService.setCurrentPracticalId(id);
  }

}
