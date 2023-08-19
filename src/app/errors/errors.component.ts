import { Component } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent {
  constructor() {
    of('First', '', 'Third')
      .pipe(
        tap((text) => {
          if (text === '') {
            throw new Error('Empty text');
          }
        })
        // catchError((error) => of('Second'))
      )
      .subscribe(
        (text) => console.log(`message: ${text}`),
        (error) => console.error(`error: ${error.message}`),
        () => console.log('completed')
      );
  }
}
