import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoursePracticalComponent } from './create-course-practical.component';

describe('CreateCoursePracticalComponent', () => {
  let component: CreateCoursePracticalComponent;
  let fixture: ComponentFixture<CreateCoursePracticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoursePracticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoursePracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
