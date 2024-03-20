import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

interface FormType {
  name: FormControl<string | null>;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  formGroup = new FormGroup<FormType>({
    name: new FormControl<string | null>(null)
  });

  canExit = true;

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(() => {
      this.canExit = this.formGroup.pristine;
    });
  }
}
