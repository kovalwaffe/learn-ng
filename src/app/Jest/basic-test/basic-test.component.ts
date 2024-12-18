import { Component, OnInit, signal } from '@angular/core';

interface Student {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-basic-test',
  imports: [],
  templateUrl: './basic-test.component.html',
  styleUrl: './basic-test.component.scss'
})
export class BasicTestComponent implements OnInit {
  name = 'Staś';
  private readonly state = {
    $students: signal<Student[]>(this.getStudent()),
    $loadingStudents: signal<boolean>(false)
  } as const;

  readonly $students = this.state.$students.asReadonly();
  readonly $loadingStudents = this.state.$loadingStudents.asReadonly();

  ngOnInit(): void {
    this.name = 'Paweł';
    this.getStudent();
  }

  public getStudent(): Student[] {
    return [
      { id: 1, name: 'John', age: 10 },
      { id: 2, name: 'Paul', age: 45 },
      { id: 3, name: 'Bole', age: 78 }
    ];
  }
}
