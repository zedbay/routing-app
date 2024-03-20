import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userCanExitGuard } from './user-can-exit.guard';

describe('userCanExitGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userCanExitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
