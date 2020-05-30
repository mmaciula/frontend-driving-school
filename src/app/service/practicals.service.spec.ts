import { TestBed } from '@angular/core/testing';

import { PracticalsService } from './practicals.service';

describe('PracticalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticalsService = TestBed.get(PracticalsService);
    expect(service).toBeTruthy();
  });
});
