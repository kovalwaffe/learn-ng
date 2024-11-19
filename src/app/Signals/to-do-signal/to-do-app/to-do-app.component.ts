import { Component, signal } from '@angular/core';
import { Task } from '../model/task';


@Component({
  selector: 'app-to-do-app',
  standalone: true,
  imports: [],
  templateUrl: './to-do-app.component.html',
  styleUrl: './to-do-app.component.scss'
})
export class ToDoAppComponent {
  // TaskType: TaskType = 'NEW';
  tasks = signal<Task[]>([{title: 'Task startowy', taskState: 'NEW'}]);

  protected createNewTask(task: Task): void {
    // wykorzystujac set
    // const tasks = this.tasks();
    // tasks.push(task);
    // this.tasks.set(tasks);
    this.tasks.update(tasks => [...tasks, task]);
  }

  protected markAsDone(task: Task): Task {
    // task.taskState = TaskType.
    task.taskState = 'DONE'
    return task;
  }
}
