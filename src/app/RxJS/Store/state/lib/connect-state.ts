import type { DestroyRef } from '@angular/core';
import { ChangeDetectorRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { from, mergeMap, ReplaySubject, tap } from 'rxjs';
import { ObservableDictionary, StateObject } from '../../models';


type RestrictedKeys<T> = ObservableDictionary<T> & { loading?: never; $?: never };

/**
 * Creates an object that is automatically updated whenever the inner Observables emit.
 * Also automatically unsubscribes all Observables when the context is destroyed.
 * Can be used to bind your observables to be used in components HTML template and auto-trigger change detection.
 *
 * @param destroyRef a DestroyRef
 * @param sources a mapping of keys to Observable values
 */
export function connectState<T>(destroyRef: DestroyRef, sources: RestrictedKeys<T>) {
  const cdRef = inject(ChangeDetectorRef);

  const sink = {
    $: {},
    loading: {}
  } as StateObject<T>;

  const sourceKeys = Object.keys(sources) as (keyof T)[];
  for (const key of sourceKeys) {
    sink.$[key] = new ReplaySubject<T[keyof T]>(1);
    sink.loading[key] = true;
  }

  from(sourceKeys).pipe(
    mergeMap((sourceKey: keyof T) => {
      const source$ = (sources as ObservableDictionary<T>)[sourceKey];

      if (!source$?.pipe) {
        throw new Error(`connectState: source of "state.${String(sourceKey)}" is not an Observable.`);
      }

      return source$.pipe(
        tap((sinkValue: T[keyof T]) => {
          sink.loading[sourceKey] = false;
          sink.$[sourceKey].next(sinkValue);
          sink[sourceKey] = sinkValue as StateObject<T>[keyof T];
        })
      );
    })
  ).pipe(takeUntilDestroyed(destroyRef))
    // This will be used in many places so to provide
    // performance over readability:
    .subscribe(() => cdRef.markForCheck());

  return sink;
}
