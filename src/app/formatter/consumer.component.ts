import { Component } from '@angular/core';
import { FormatterService } from "./formatter.service";
import { createFormatterFn } from "./data-picker.component";

@Component({
  selector: 'app-consumer',
  template: `<app-data-picker [formatter]="formatter"></app-data-picker>`
})
export class ConsumerComponent {
  constructor(private formatterService: FormatterService) {
  }
  formatter = createFormatterFn(value => {
    return this.formatterService.formatDate(value);
  });

}
