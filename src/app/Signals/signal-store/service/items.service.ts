import { effect, EffectRef, Injectable, signal } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

function syncEffect<T>(key: string, valueGetter: () => T): EffectRef {
  return effect(() => {
    localStorage.setItem(key, JSON.stringify(valueGetter()));
  });
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // #items = signal<Item[]>([
  //   { id: 1, name: 'Pablo' },
  //   { id: 2, name: 'Ania' },
  //   { id: 3, name: 'Staś' }
  // ], { equal: (previous, next) => Object.is(previous, next) });

  #items = signal<Item[]>(
    JSON.parse(localStorage.getItem('items')!)
    , { equal: (previous, next) => Object.is(previous, next) });

  items = this.#items.asReadonly();
  example = signal(123);

  synchronizeItemsEffect = syncEffect<Item[]>('items', () => this.#items());

  append(name: string): void {
    this.#items.update(prev => [...prev, { id: prev.length + 1, name }]);
  }

  clearItems(): void {
    this.#items.set([]);
  }

}
