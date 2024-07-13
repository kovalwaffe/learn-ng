import type { Observable } from 'rxjs';

export type ObservableDictionary<T> = {
  [P in keyof T]: Observable<T[P]>;
};
