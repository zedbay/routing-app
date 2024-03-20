import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from "./components/form/form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GuardsRoutingModule} from "./guards-routing.module";
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized.component";
import {SecretComponent} from "./components/secret/secret.component";

@NgModule({
  declarations: [FormComponent, UnauthorizedComponent, SecretComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GuardsRoutingModule
  ]
})
export class GuardsModule { }
