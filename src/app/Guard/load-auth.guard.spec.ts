import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loadAuthGuard } from './load-auth.guard';

describe('loadAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
