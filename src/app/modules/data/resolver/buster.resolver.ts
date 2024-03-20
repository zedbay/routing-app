import {ResolveFn, Router} from '@angular/router';
import {delay, of} from "rxjs";
import {Buster} from "../model/buster";

export const busterResolver: ResolveFn<Buster> = (route, state) => {
  return of({ name: "John doe" }).pipe(delay(2000 ));
};
