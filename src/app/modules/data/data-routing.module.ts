import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {DataComponent} from "./data.component";
import {BusterComponent} from "./components/buster/buster.component";
import {busterResolver} from "./resolver/buster.resolver";

const routes: Routes = [
  {
    path: '',
    component: DataComponent,
    children: [
      {
        path: 'buster/query-params', component: BusterComponent
      },
      {
        path: 'buster/with-data', component: BusterComponent, data: { state: 'CDI' }
      },
      {
        path: 'buster/:busterId', component: BusterComponent
      },
      {
        path: 'buster', component: BusterComponent, resolve: { buster: busterResolver }
      }
    ]
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
export class DataRoutingModule { }
