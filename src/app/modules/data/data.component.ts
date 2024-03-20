import { Component } from '@angular/core';
import { ResolveStart, Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent {

  isLoading!: Observable<boolean>;

  constructor(private readonly router: Router) {
    this.isLoading = router.events.pipe(map(event => event instanceof ResolveStart))
  }
}
