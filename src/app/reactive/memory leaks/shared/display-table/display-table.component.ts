import {Component, Input} from '@angular/core';
import {Course} from "../../model/course";
import {DatePipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-display-table',
  standalone: true,
  imports: [
    DatePipe,
    JsonPipe
  ],
  templateUrl: './display-table.component.html'
})
export class DisplayTableComponent {

  @Input() data!: Course[] | null;

}
