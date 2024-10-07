import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UseSingletonComponent } from './design pattrens/singleton/share-for-singleton/use-singleton/use-singleton.component';
import { UseInputComponent } from './basic/@input/use-input/use-input.component';
import { SpecialSelectorsComponent } from './basic/special-selectors/special-selectors.component';
import { LetVariableComponent } from './templates/@let/let-variable/let-variable.component';
import { UserComponent } from './RxJS/Store';
import { BasicComponent } from './TS/ts-pattern/basic/basic.component';
import { CounterComponent } from './Signals/counter/counter.component';
import { UseSelectComponent } from './structural-directives/ng-template/use-select/use-select.component';

function LogAccessor(target: any, context: ClassAccessorDecoratorContext) {
  let value: any;
  return {
    get(): string {
      console.log(`Accessing value: ${String(context.name)}`);
      return value;
    },
    set(newValue: any) {
      console.log(`Setting value for ${String(context.name)} to ${newValue}`);
      value = newValue;
    },
    init(initialValue: any) {
      console.log(target);
      console.log(`Initializing ${String(context.name)} with ${initialValue}`);
      return initialValue;
    }
  };
}

export class Person {
  @LogAccessor
  accessor name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UseSingletonComponent, UseInputComponent, SpecialSelectorsComponent, LetVariableComponent, UserComponent, BasicComponent, CounterComponent, UseSelectComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const person = new Person('John');
    console.log(person.name); // Log: Accessing value: name
    person.name = 'Jane'; // Log: Setting value for name to Jane
    console.log(person.name); // Log: Accessing value: name
  }

}
