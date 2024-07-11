import { Component } from '@angular/core';
import { InputFunctionComponent } from "../input-function/input-function.component";
import { InputDecoratorComponent } from "../input-decorator/input-decorator.component";

@Component({
  selector: 'app-use-input',
  standalone: true,
  imports: [
    InputFunctionComponent,
    InputDecoratorComponent
  ],
  templateUrl: './use-input.component.html',
})
export class UseInputComponent {

}
