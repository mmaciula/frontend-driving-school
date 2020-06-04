import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalAddRateComponent } from './practical-add-rate.component';

describe('PracticalAddRateComponent', () => {
  let component: PracticalAddRateComponent;
  let fixture: ComponentFixture<PracticalAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
