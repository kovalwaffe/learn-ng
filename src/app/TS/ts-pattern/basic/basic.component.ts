import { Component } from '@angular/core';
import { UserDPO } from '../../../../../api/models/userDTO';


@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [],
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  readonly UserDPO: typeof UserDPO = UserDPO;


  // example(): void {
  //   const value = 10;
  //
  //   const result = match(value)
  //     .with(1, () => 'jeden')
  //     .with(2, () => 'dwa')
  //     .with(P.string, (str) => `ciąg znaków: ${str}`)
  //     .otherwise(() => 'coś innego');
  // }

  // ngOnInit(): void {
  // this.example();
  // }
}
