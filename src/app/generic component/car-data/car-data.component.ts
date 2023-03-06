import { Component } from '@angular/core';

interface Car {
  company: string
}

@Component({
  selector: 'app-car-data',
  template: '<app-grid [rowData]="carData" (selection)="onRowSelected($event)" ) ></app-grid>',
  styleUrls: ['./car-data.component.scss']
})
export class CarDataComponent {
  protected carData: Car[] = [
    {company: 'Audi'},
    {company: 'Toyota'}
  ];


  protected onRowSelected(event: Car): void {
    console.log('on row selected');
  }
  // jezli kompoennt nie jest generyczny to nie ma powiazania miedzy komponentem a tym co przyjmuje poniższa funkcja
  // wiec sa mieszane edwa typy - Car i IPerson. Błąd pojawi sie dopiero przy wywoałnie a nie przy kompilacji
  // function onRowSelected(event: IPerson){
  //   // ERROR: Function definition expects IPerson but it will be called with ICar!
  // }

}
