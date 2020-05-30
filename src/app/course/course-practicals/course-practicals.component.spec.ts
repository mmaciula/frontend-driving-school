import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePracticalsComponent } from './course-practicals.component';

describe('CoursePracticalsComponent', () => {
  let component: CoursePracticalsComponent;
  let fixture: ComponentFixture<CoursePracticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePracticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePracticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
