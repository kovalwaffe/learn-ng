import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-picker',
  template: ``
})
export class DataPickerComponent {
  @Input() public formatter!: (value: string) => string;

}// Jakie są zalety takie funcji tożsamościowej ?
// - nie potrzeba typowania dla componentu który uzywa `createFormatterFn`
// - komponent nie musi sie martwic o `this`
export function createFormatterFn(cb: (value: string) => string) {
  return (value: string) => cb(value);
}
