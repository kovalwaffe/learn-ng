import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Player } from "../model";
import { CurrencyPipe } from '@angular/common';

function currencyTransform(value: number): number {
  return Math.round(value * 100) / 100
}

@Component({
  selector: 'app-input-decorator',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './input-decorator.component.html',
})
export class InputDecoratorComponent implements OnChanges {
  @Input({required: true}) player!: Player;
  @Input({alias: 'pseudonim'}) nickname!: string;
  // @Input({transform: (value: number) => Math.round(value * 100) / 100}) salary!: number;
  @Input({ transform: (value: number) => currencyTransform(value) }) salary!: number;
  @Input() teamName: string = 'unknown';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['player']) {
      console.log('Player as input decorator: ', changes['player'].currentValue);
    }
  }


}
