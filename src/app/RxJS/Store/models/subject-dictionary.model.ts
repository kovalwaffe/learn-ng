import type { Subject } from 'rxjs';

export type SubjectDictionary<T> = {
  [P in keyof T]: Subject<T[P]>;
};
