import { ResolveFn } from '@angular/router';

export const testtResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
