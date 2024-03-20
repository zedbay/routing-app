import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./components/form/form.component";
import {userCanExitGuard} from "./guards/user-can-exit.guard";
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized.component";
import {SecretComponent} from "./components/secret/secret.component";
import {authenticatedGuard} from "./guards/authenticated.guard";

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [userCanExitGuard]
  },
  {
    path: 'secret1',
    component: SecretComponent,
    canActivate: [authenticatedGuard],
    data: { mandatoryRights: ['secret1'] }
  },
  {
    path: 'secret2',
    component: SecretComponent,
    canActivate: [authenticatedGuard],
    data: { mandatoryRights: ['secret1', 'secret2'] }
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GuardsRoutingModule { }
