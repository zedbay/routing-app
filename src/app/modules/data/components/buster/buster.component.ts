import {Component, Input, numberAttribute} from '@angular/core';
import {Buster} from "../../model/buster";

@Component({
  selector: 'app-buster',
  templateUrl: './buster.component.html',
  styleUrl: './buster.component.scss'
})
export class BusterComponent {

  @Input()
  buster?: Buster;

  @Input({ transform: numberAttribute })
  busterId?: number;

  @Input()
  grade?: string;

  @Input()
  state?: string;
}
