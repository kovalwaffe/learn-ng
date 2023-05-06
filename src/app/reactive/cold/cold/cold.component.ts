import { Component, OnInit } from '@angular/core';
import { Observable, interval, share, take } from 'rxjs';

@Component({
  selector: 'app-cold',
  templateUrl: './cold.component.html',
  styleUrls: ['./cold.component.scss'],
})
export class ColdComponent implements OnInit {
  // co 1000 ms Observer emituje wartosć 10 razy i jest ona dzielona/zamieniona na hot Observable
  public source$: Observable<number> = interval(1000).pipe(take(10), share());
  public anotherSource$ = new Observable();

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timeStamp = 'time';
    this.source$.subscribe((x) =>
      console.log(`Subscrybent 1: ${x} timestanp: `)
    );
    setTimeout(() => {
      this.source$.subscribe((x) =>
        console.log(`Subscrybent 2: ${x} timestanp: ${x}.timestanp`)
      );
    }, 5000);

    const enum Status {
      RUNNING = 'Running',
      TIMEOUT = 'Timeout',
      DISABLED = 'Disabled',
    }
    const runner = (status: Status) => console.log(`the status is: ${status}`);
    runner(Status.RUNNING); // 'the status is: running'
    // runner(Stoped); // Nie można przypisać argumentu typu Stoped to parametru 'Status'
  }
}
