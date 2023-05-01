import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { UserFormShowComponent } from "../user-form/user-form-show/user-form-show.component";
import { User } from "../models/user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements AfterViewInit {
  @ViewChild(UserFormShowComponent) public previewForm!: UserFormShowComponent;
  protected form!: { valid: boolean, pristine: boolean, value: User };

  ngAfterViewInit(): void {
    this.previewForm.initForm({
      name: 'John',
      surname: 'Green',
      email: 'john@example.com'
    });
  }
  formChange(value: { valid: boolean, pristine: boolean, value: User }) {
    this.form = value;
  }
  register() {
    alert(JSON.stringify(this.form.value));
  }
}
