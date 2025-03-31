import { Component, effect, input } from '@angular/core';
import { Player } from '../model';


// function currencyTransform(value: number): number {
//   return Math.round(value * 100) / 100
// }

@Component({
    selector: 'app-input-function',
    imports: [],
    templateUrl: './input-function.component.html'
})
export class InputFunctionComponent {
  player = input.required<Player>();
  salary = input<number>(0);
  // salary = input<number>(0, {
  //   transform: (value: number) => Math.round(value * 100) / 100
  // });
  // salary = input.required<number>({transform: currencyTransform});
  teamName = input('unknown');

  constructor() {
    effect(() => console.log('Player as input function: ', this.player()));
  }
}
