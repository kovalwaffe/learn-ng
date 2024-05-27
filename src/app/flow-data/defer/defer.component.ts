import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [],
  templateUrl: './defer.component.html'
})
export class DeferComponent {
  dataLoaded = false;
  data: string = '';

  loadData() {
    // Symulacja ładowania danych z opóźnieniem
    setTimeout(() => {
      this.data = 'Oto załadowane dane!';
      this.dataLoaded = true;
    }, 2000); // 2 sekundy opóźnienia
  }
}
