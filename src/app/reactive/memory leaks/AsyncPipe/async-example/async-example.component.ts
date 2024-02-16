import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../model/course';
import { ExampleService } from '../../services/example.service';
import { AsyncPipe } from '@angular/common';
import { DisplayTableComponent } from '../../shared/display-table/display-table.component';

@Component({
  selector: 'app-async-example',
  standalone: true,
  imports: [AsyncPipe, DisplayTableComponent],
  templateUrl: './async-example.component.html',
})
export class AsyncExampleComponent implements OnInit {
  // Sposob na unikanie memery leaks
  // Subsrypcja za pomoca AsynPipe zintegfrowany w 'components cycle' - autoamtycznie zostanie unsubscripbe
  // nie emusimy miec hooka 'Destoy'

  courses$!: Observable<Course[]>;
  otherCourses$!: Observable<Course[]>;

  constructor(private readonly exampleService: ExampleService) {}

  ngOnInit(): void {
    this.courses$ = this.exampleService.getData();
    this.otherCourses$ = this.exampleService.getData();
  }
}
