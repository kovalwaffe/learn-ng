import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { ItemsService } from "./service/items.service";
import { FormsModule } from "@angular/forms";
import { ChildComponent } from "./child.component";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { Subject } from "rxjs";
import { AsyncPipe, NgClass } from "@angular/common";

@Component({
  selector: 'app-signal-store',
  imports: [
    FormsModule,
    ChildComponent,
    AsyncPipe,
    NgClass
  ],
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
    = <!--To rozwiązanie może być korzystniejsze gdy przetwarzamy wartość-->
    @if (newItem) {
      {{ newItem.toUpperCase() }}
    }

    <button (click)="handleClick()">console log items</button>

    <p>last: {{ lastItem()?.name }}</p>

    <p>filtruje po : {{ nameFilter() }}</p>
    <input type="text" [value]="nameFilter()" (input)="updateNameFilter($event)">
    <ul>
      @for (item of visibleItems(); track item.id) {
        <li [ngClass]="{ bold: (choseItem$ | async) === item.id }" (click)="chooseItem(item.id)"
            (keyup)="chooseItem(item.id)" tabindex="0">
          {{ item.name }}
        </li>
      }
    </ul>
    chosen ID: {{ choseItem$ | async }} chosen ID (signal): {{ chosenItem() }}

    <button (click)="itemsService.clearItems()">Clear all</button>
    <div>
      <input type="text" [value]="newItemsName()" (input)="updateNewItemName($event)">
      <button (click)="itemsService.append(newItemsName())">Add wew Item Name</button>
    </div>
    tu
    <input type="checkbox" [(ngModel)]="showChild"/> show child components
    @if (showChild) {
      <app-child/>
    }

  `
})
export class SignalStoreComponent {
  readonly itemsService = inject(ItemsService);

  consoleLofEffect = effect(() => {
    const q = untracked(() => this.nameFilter());
    console.log(this.itemsService.items(), q);
  });

  showChild = false;

  item = signal<string | undefined>('Pablo');

  nameFilter = signal('');
  newItemsName = signal('');
  acsOrder = signal(true);
  filteredItems = computed(() => {
    // case-sensitive
    // return this.items()
    //            .filter(item => item.name.includes(this.nameFilter()))
    // case-insensitive
    const nameFilter = this.nameFilter().toLowerCase();
    return this.itemsService.items().filter(item => item.name.toLowerCase().includes(nameFilter));
  });
  lastItem = computed(() => this.itemsService.items().slice(-1)[0]);

  choseItem$ = new Subject<number>();
  chosenItem = toSignal(this.choseItem$, { initialValue: 1 });
  // chosenItem = toSignal(this.choseItem$, { requireSync: true }); // error bo Subject nie ma wartości inaczej np BehaviorSubject
  nameFilter$ = toObservable(this.nameFilter);

  constructor() {
    this.nameFilter$.subscribe(console.log);
  }

  chooseItem(id: number) {
    this.choseItem$.next(id);
  }


  visibleItems = computed(() => {
    const order = this.acsOrder() ? 1 : -1;
    return this.filteredItems().sort((a, b) => a.name.localeCompare(b.name) * order);
  });

  get newItem() {
    return this.item();
  }


  // to jest kod imperaktywny

  // odczyt nastepuje w momencie gdy User naciśnie button
  handleClick() {
    console.log(this.itemsService.items());
  }

  updateNewItemName($event: Event) {
    this.newItemsName.set(($event.target as HTMLInputElement).value);
  }

  updateNameFilter($event: Event) {
    this.nameFilter.set(($event.target as HTMLInputElement).value);
  }
}
