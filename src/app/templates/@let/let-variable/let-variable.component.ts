import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-let-variable',
    imports: [CommonModule, AsyncPipe],
    templateUrl: './let-variable.component.html'
})
export class LetVariableComponent {
  readonly user$ = of('Paweł')
  readonly account: number = 9;
}
