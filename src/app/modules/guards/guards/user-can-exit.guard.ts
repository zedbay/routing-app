import {CanDeactivateFn} from '@angular/router';

export const userCanExitGuard: CanDeactivateFn<{ canExit: boolean }> = (component) => {
  if (!component.canExit) {
    return confirm('Are you sure ?');
  }
  return component.canExit;
};
