import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCoursePracticalsComponent } from './instructor-course-practicals.component';

describe('InstructorCoursePracticalsComponent', () => {
  let component: InstructorCoursePracticalsComponent;
  let fixture: ComponentFixture<InstructorCoursePracticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorCoursePracticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorCoursePracticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
