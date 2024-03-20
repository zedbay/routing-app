import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authenticatedGuard: CanActivateFn = (route) => {
  const userRights = ['secret1'];
  const mandatoryRightsToAccess: string[] = route.data['mandatoryRights'];
  const userCanAccess: boolean = mandatoryRightsToAccess.every(mandatoryRight => userRights.includes(mandatoryRight));
  if (!userCanAccess) {
    const router = inject(Router);
    router.navigate(['/guard/unauthorized']);
  }
  return userCanAccess;
};
