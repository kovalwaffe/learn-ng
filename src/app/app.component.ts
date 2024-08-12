import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UseSingletonComponent } from './design pattrens/singleton/share-for-singleton/use-singleton/use-singleton.component';
import { UseInputComponent } from './basic/@input/use-input/use-input.component';
import { SpecialSelectorsComponent } from './basic/special-selectors/special-selectors.component';
import { LetVariableComponent } from './templates/@let/let-variable/let-variable.component';
import { UserComponent } from './RxJS/Store';
import { BasicComponent } from './TS/ts-pattern/basic/basic.component';
import { CounterComponent } from './Signals/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UseSingletonComponent, UseInputComponent, SpecialSelectorsComponent, LetVariableComponent, UserComponent, BasicComponent, CounterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
