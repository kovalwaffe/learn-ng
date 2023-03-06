import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from "../models/user";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { someEmailValidator } from "../validators/some-email.validator";

@Component({
  selector: 'app-user-form',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({});

  @Output() protected formChange = new EventEmitter<{ valid: boolean, pristine: boolean, value: User }>(true);
  @Input() public isReadonly = false;

  private subscription!: Subscription;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.userForm = new FormGroup({
      email: new FormControl({value: '', disabled: this.isReadonly}, [Validators.required, someEmailValidator()]),
      lastname: new FormControl({value: '', disabled: this.isReadonly}, Validators.required),
      name: new FormControl({value: '', disabled: this.isReadonly}, Validators.required),
    });

    this.subscription = this.userForm.valueChanges.subscribe(() => this.emitFormChange());
  }

  private emitFormChange() {
    this.formChange.emit({
      valid: this.userForm.valid,
      pristine: this.userForm.pristine,
      value: this.userForm.value
    });
  }

  public initForm(value: User): void {
    this.userForm.patchValue(value);
  }

}
