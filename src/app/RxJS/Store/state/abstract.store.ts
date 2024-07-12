import { BehaviorSubject } from "rxjs";
import { AbstractState } from "src/app/RxJS/Store/models";

export abstract class Store<T extends AbstractState> {
  protected constructor(private readonly initialState: T) {}

  private readonly state$$ = new BehaviorSubject<T>(this.initialState);
  readonly state$ = this.state$$.asObservable();

  update<K extends keyof T>(key: K, value: T[K]): void {
    const currentState = this.state$$.getValue();
    const newState = {...currentState, [key]: value};
    this.state$$.next(newState);
  }

  getState(): T {
    return this.state$$.getValue();
  }

  clear(): void {
    this.state$$.next(this.initialState);
  }

  setIsLoading(isLoading: boolean): void {
    this.state$$.next({...this.state$$.value, isLoading});
  }
}
