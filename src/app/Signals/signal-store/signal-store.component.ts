import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-signal-store',
    imports: [],
    template: `
    <!--to jest kod deklaratywny-->
    <!--aktualizacja w templatce nastepuje zawsze jak sie zmieni wartość-->
    <p>{{ item() }} </p>
    <p>{{ item()?.toUpperCase() }} </p>
    <!--(!) Problem z odczytem wartosci z Signala i wykonaniem na niej metody-->
    @if (item()) {
      <!--  "Qualifier of 'toUpperCase' is possibly undefined"-->
        <!--    Dzieje sie to dlatego ze odczytujemy item() dwa razy-->
        <!--    kompilator nie gwaratuje nam ze za drugim razem nie bedzie wartoscie 'undefined'-->
        <!--  {{ item().toUpperCase() }}-->
    }

    <!--(1) wartosc z Signala przypisujemy do zmiennej lokalnej -->
    <!--Jest to rozwiazanie wydajniejsze bo mamy tylko raz akcje odczyty wartosci z Signala-->
    @if (item(); as item) {
      {{ item.toUpperCase() }}
    }
    <!--(2) Rozwiązanie mniej wydajne bo mechanizm CD wielkrotnie odczytuje gettera-->
    <!--To rozwiązanie może być korzystniejsze gdy przetwarzamy wartość-->
    @if (newItem) {
      {{ newItem.toUpperCase() }}
    }

    <p>last: {{ lastItem().name }}</p>

    <p>filtruje po : {{ nameFilter() }}</p>
    <ul>
      @for (item of visibleItems(); track item.id) {
        <li>{{ item.name }}</li>
      }
    </ul>

    <button (click)="handleClick()">log items</button>
    <button (click)="clearItems()">Clear</button>
    <input type="text" [value]="nameFilter()" (input)="updateNameFilter($event)">
  `
})
export class SignalStoreComponent {
  item = signal<string | undefined>('Pablo');
  items = signal([
    { id: 1, name: 'Pablo' },
    { id: 2, name: 'Ania' },
    { id: 3, name: 'Staś' }
  ]);
  nameFilter = signal('');
  filteredItems = computed(() => {
    // case-sensitive
    // return this.items()
    //            .filter(item => item.name.includes(this.nameFilter()))
    // case-insensitive
    const nameFilter = this.nameFilter().toLowerCase();
    return this.items().filter(item => item.name.toLowerCase().includes(nameFilter));
  });
  lastItem = computed(() => this.items().slice(-1)[0]);

  acsOrder = signal(true);

  visibleItems = computed(() => {
    const order = this.acsOrder() ? 1 : -1;
    return this.filteredItems().sort((a, b) => a.name.localeCompare(b.name) * order);
  });

  get newItem() {
    return this.item();
  }

  clearItems() {
    this.items.set([]);
  }

  updateNameFilter($event: Event) {
    this.nameFilter.set(($event.target as HTMLInputElement).value);
  }

  // to jest kod imperaktywny

  // odczyt nastepuje w momencie gdy User naciśnie button
  handleClick() {
    console.log(this.items());
  }
}
