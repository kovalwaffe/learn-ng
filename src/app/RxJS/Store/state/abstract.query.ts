import type { Observable } from 'rxjs';
import { map } from 'rxjs';
import { AbstractState } from '../models';
import { Store } from './abstract.store';

export abstract class Query<T extends AbstractState> {
  protected constructor(private readonly store: Store<T>) {}

  select<K extends keyof T>(key: K): Observable<T[K]> {
    return this.store.state$.pipe(map(state => state[key]));
  }

  get isLoading$(): Observable<boolean> {
    return this.store.state$.pipe(map(({isLoading}) => isLoading));
  }
}
