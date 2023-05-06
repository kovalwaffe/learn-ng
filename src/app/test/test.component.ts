import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type MyFormGroup = FormGroup<{
  name: FormControl<string>;
  address: FormGroup<{
    streetAddress: FormControl<string>;
    numberOfHome: FormControl<number>;
  }>;
}>;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  protected myFormGroup: MyFormGroup = new FormGroup({
    name: new FormControl('Paweł', { nonNullable: true }),
    address: new FormGroup({
      streetAddress: new FormControl('Sienkiewicza', { nonNullable: true }),
      numberOfHome: new FormControl(5, { nonNullable: true }),
    }),
  });

  ngOnInit(): void {
    console.log('OnInit');

    // this.myFormGroup: MyFormGroup = new FormGroup({
    //   name: new FormControl(''),
    //   address: new FormGroup({
    //     streetAddress: new FormControl(''),
    //     numberOfHome: new FormControl('')
    //   })
    // });
  }

  protected onReset(): void {
    this.myFormGroup.reset();
    this.myFormGroup.controls.name.reset('', { emitEvent: true });
  }

  protected onSubmit(): void {
    if (this.myFormGroup.invalid) {
      this.myFormGroup.markAllAsTouched();
      alert('Popraw formularz!');
      return;
    }

    console.log(this.myFormGroup.value); // typowanie uwzględnia możliwość wystąpienia undefined (gdy kontrolka wyłączona)
    console.log(this.myFormGroup.getRawValue()); // typowanie nie uwzględnia możliwości wystąpienia undefined
  }
}
