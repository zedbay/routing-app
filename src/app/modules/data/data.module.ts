import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataComponent} from "./data.component";
import {DataRoutingModule} from "./data-routing.module";
import {BusterComponent} from "./components/buster/buster.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [DataComponent, BusterComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    RouterModule
  ]
})
export class DataModule { }
