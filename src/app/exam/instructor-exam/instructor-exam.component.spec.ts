import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorExamComponent } from './instructor-exam.component';

describe('InstructorExamComponent', () => {
  let component: InstructorExamComponent;
  let fixture: ComponentFixture<InstructorExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
