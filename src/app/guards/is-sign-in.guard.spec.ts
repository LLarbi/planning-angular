import { TestBed } from '@angular/core/testing';

import { IsSignInGuard } from './is-sign-in.guard';

describe('IsSignInGuard', () => {
  let guard: IsSignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
