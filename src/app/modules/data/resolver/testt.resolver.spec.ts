import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { testtResolver } from './testt.resolver';

describe('testtResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => testtResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
