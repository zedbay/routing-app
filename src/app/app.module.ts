import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {FirstAComponent} from "./components/first/first-a/first-a.component";
import {FirstBComponent} from "./components/first/first-b/first-b.component";



@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, NotFoundComponent, FirstAComponent, FirstBComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
