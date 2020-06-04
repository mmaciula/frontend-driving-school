import { Component, OnInit } from '@angular/core';
import { PracticalsService } from 'src/app/service/practicals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practical-add-rate',
  templateUrl: './practical-add-rate.component.html',
  styleUrls: ['./practical-add-rate.component.scss']
})
export class PracticalAddRateComponent implements OnInit {
  form: any = {};
  practicalId;

  constructor(private practicalsService: PracticalsService, private router: Router) { }

  ngOnInit() {
    this.getCurrentPracticalId();
  }

  getCurrentPracticalId() {
    this.practicalsService.currentPracticalId.subscribe(
      id => {
        this.practicalId = id;
      }
    );
  }

  onSubmit() {
    console.log(this.practicalId);
    console.log(this.form.instructorRate);
    this.practicalsService.ratePractical(this.practicalId, this.form.instructorRate).subscribe(
      () => {
        setTimeout(
          () => {
            this.router.navigate(['/mod']);
          }, 500
        );
      }
    );
  }

}
