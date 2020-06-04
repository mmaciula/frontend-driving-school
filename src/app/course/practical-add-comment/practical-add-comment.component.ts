import { Component, OnInit } from '@angular/core';
import { PracticalsService } from 'src/app/service/practicals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practical-add-comment',
  templateUrl: './practical-add-comment.component.html',
  styleUrls: ['./practical-add-comment.component.scss']
})
export class PracticalAddCommentComponent implements OnInit {
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
    console.log(this.form.comment)
    this.practicalsService.commentPractical(this.practicalId, this.form.comment).subscribe(
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
