import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-in-for-course-dialog',
  templateUrl: './sign-in-for-course-dialog.component.html',
  styleUrls: ['./sign-in-for-course-dialog.component.scss']
})
export class SignInForCourseDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SignInForCourseDialogComponent>) { }

  ngOnInit() {
  }

  leave() {
    this.dialogRef.close();
  }

  signIn() {
    this.dialogRef.close(true);
  }

}
