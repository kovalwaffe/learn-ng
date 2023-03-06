import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {

  public formatDate(value: string): string {
    return value;
  }
}
