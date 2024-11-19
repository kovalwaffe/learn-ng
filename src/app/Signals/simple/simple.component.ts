import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [],
  templateUrl: './simple.component.html'
})
export class SimpleComponent implements OnInit {
  // Podstawowy sygnał
  count = signal(0);
  signalProperty = signal(0);
  observable$ = toObservable(this.signalProperty);

  // "Pochodny" sygnał (computed)
  doubleCount = computed(() => this.count() * 2);

  // "Pochodny" sygnał (computed)
  qCount = computed(() => this.doubleCount() * 2);

  constructor() {
    // Efekt uboczny (side effect)
    effect(() => {
      console.log(`Aktualna wartość licznika: ${this.count()}`);
    });
  }

  ngOnInit(): void {
    this.observable$.subscribe((e) => console.log(e));
    this.signalProperty.set(1);
    this.signalProperty.set(2);
    this.signalProperty.set(3);

  }

  // Metody do aktualizacji sygnału
  increment() {
    this.count.update(value => value + 1);
    this.signalProperty.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }
}
