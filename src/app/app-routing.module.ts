import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {FirstAComponent} from "./components/first/first-a/first-a.component";
import {FirstBComponent} from "./components/first/first-b/first-b.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    children: [
      {
        path: 'first-component',
        component: FirstComponent,
        title: () => `Component created in ${new Date().getFullYear()}`,
        children: [
          { path: 'a', component: FirstAComponent },
          { path: 'b', component: FirstBComponent }
        ]
      },
      {
        path: 'second-component',
        component: SecondComponent,
      }
    ]
  },
  { path: 'not-found', component: NotFoundComponent, title: 'Are you lost ?' },
  {
    path: 'lazy-loading',
    loadChildren: () => import('./modules/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule),
  },
  {
    path: 'data',
    loadChildren: () => import('./modules/data/data.module').then(m => m.DataModule),
  },
  {
    path: 'guard',
    loadChildren: () => import('./modules/guards/guards.module').then(m => m.GuardsModule)
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { bindToComponentInputs: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
