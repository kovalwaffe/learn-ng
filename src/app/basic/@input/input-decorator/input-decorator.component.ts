import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Player } from '../model';
import { CurrencyPipe } from '@angular/common';

function currencyTransform(value: number): number {
  return Math.round(value * 100) / 100
}

const imports = [CurrencyPipe];

@Component({
  selector: 'app-input-decorator',
  standalone: true,
  imports,
  templateUrl: './input-decorator.component.html',
})
export class InputDecoratorComponent implements OnChanges {
  @Input({required: true}) player!: Player;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({alias: 'pseudonim'}) nickname!: string;
  // @Input({transform: (value: number) => Math.round(value * 100) / 100}) salary!: number;
  @Input({ transform: (value: number) => currencyTransform(value) }) salary!: number;
  @Input() teamName = 'unknown';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['player']) {
      console.log('Player as input decorator: ', changes['player'].currentValue);
    }
  }


}
