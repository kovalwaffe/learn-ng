import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html'
})
export class ErrorsComponent {
  constructor() {
    of('First', '', 'Third')
      .pipe(
        tap((text) => {
          if (text === '') {
            throw new Error('Empty text');
          }
        }),
        catchError((error) => of('Second'))
      )
      .subscribe({
        next: (text) => console.log(`message: ${text}`),
        error: (error) => console.error(`error: ${error.message}`),
        complete: () => console.log('completed'),
      });
  }
  this.
}
