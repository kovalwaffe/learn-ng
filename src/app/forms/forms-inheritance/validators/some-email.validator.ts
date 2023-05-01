import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const someEmailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const validEmailRegex = /.+@.+\..+/;
    if (!validEmailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  };
};
