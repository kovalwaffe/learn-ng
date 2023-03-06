import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent<TData> {
  // TData oznacza domyślny typ dla kompooentu
  // uzywajac taga nie mozemy przypisac uzywanego typu jak np const myGrid = new GridComponent<ICar>()
  // <app-grid<ICar> [rowData]="carData" ></app-grid> - to nie zadziała !
  // angular wie jaki typ jest uzywany generycznie na podstawie wywnioskowania:
  // carData: ICar[];
  // <app-grid [rowData]="carData">
  @Input() public rowData?: TData[];
  @Output() public selection: EventEmitter<TData> = new EventEmitter<TData>();

}
