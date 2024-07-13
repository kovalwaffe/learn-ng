import { SubjectDictionary } from './subject-dictionary.model';
import { LoadingDictionary } from './loading-dictionary.model';

export type StateObject<T = unknown> = Readonly<T> & {
  $: SubjectDictionary<T>;
  loading: LoadingDictionary<T>;
};
