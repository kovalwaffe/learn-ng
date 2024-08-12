import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './custom-form.component.html'
})
export class CustomFormComponent {
  form!: FormGroup;
  @Input({required: true}) controlName!: string

  constructor(private _rootFormGroup: FormGroupDirective) {
    this.form = this._rootFormGroup.control as FormGroup;
  }
}
