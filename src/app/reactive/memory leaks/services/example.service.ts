import {Injectable} from '@angular/core';

import {Observable, of} from "rxjs";
import {Course} from "../model/course";


@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  data: Array<Course> = [
    {id: 1, title: 'Angular', dateCreate: new Date('1-12-2023')},
    {id: 2, title: 'React', dateCreate: new Date('1-01-2024')},
    {id: 3, title: 'JQuery', dateCreate: new Date('31-11-2020')},
  ]

  getData(): Observable<Array<Course>> {
    return of(this.data)
  }
}
