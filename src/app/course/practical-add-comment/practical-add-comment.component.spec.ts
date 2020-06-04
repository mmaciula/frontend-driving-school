import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalAddCommentComponent } from './practical-add-comment.component';

describe('PracticalAddCommentComponent', () => {
  let component: PracticalAddCommentComponent;
  let fixture: ComponentFixture<PracticalAddCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalAddCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
