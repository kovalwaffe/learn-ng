import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Dictionary } from "../models/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  public getCategories(): Observable<Array<Dictionary>> {
    return of([
      { key: 'Clothes', value: 1 },
      { key: 'Books', value: 2 },
      { key: 'Food', value: 3 },
      { key: 'Tools', value: 4 },
    ]);
  }
}
