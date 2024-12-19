import { Component, effect, inject } from '@angular/core';
import { ItemsService } from "./service/items.service";

@Component({
  selector: 'app-child',
  imports: [],
  template: `<p>works</p>
  <button (click)="cleanUp()">Manual cleanup</button>`
})
export class ChildComponent {
  readonly itemsService = inject(ItemsService);

  intervalEffect = effect((onCleanup) => {
      const timerId = setInterval(() => {
        console.log(this.itemsService.items().length);
      }, 1000);

      onCleanup(() => {
        console.log('effect cleanup');
        clearInterval(timerId);
      });
    },
    {
      manualCleanup: true
    });

  cleanUp(): void {
    this.intervalEffect.destroy();
  }
}
