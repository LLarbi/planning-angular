import { TestBed } from '@angular/core/testing';

import { PlanningsService } from './plannings.service';

describe('PlanningsService', () => {
  let service: PlanningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
