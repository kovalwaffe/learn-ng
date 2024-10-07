import { Component } from '@angular/core';
import { SelectDirective } from '../select.directive';
import { DataSource } from '../model/data-source';

@Component({
  selector: 'app-use-select',
  standalone: true,
  imports: [
    SelectDirective
  ],
  templateUrl: './use-select.component.html'
})
export class UseSelectComponent {
  readonly source: DataSource = {
    data: ['Pablo', 'Diablo'],
    load(): Promise<string[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.data);
        }, 2000);
      });
    }
  }
}
