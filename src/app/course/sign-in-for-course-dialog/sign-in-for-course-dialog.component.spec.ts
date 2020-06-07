import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInForCourseDialogComponent } from './sign-in-for-course-dialog.component';

describe('SignInForCourseDialogComponent', () => {
  let component: SignInForCourseDialogComponent;
  let fixture: ComponentFixture<SignInForCourseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInForCourseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInForCourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
