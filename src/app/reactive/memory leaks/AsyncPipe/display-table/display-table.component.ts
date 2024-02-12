import {Component, Input} from '@angular/core';
import {Course} from "../../model/course";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-display-table',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './display-table.component.html'
})
export class DisplayTableComponent {

  @Input() data!: Course[] | null;

}
