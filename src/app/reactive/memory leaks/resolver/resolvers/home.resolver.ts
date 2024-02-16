import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {ExampleService} from "../../services/example.service";
import {catchError, forkJoin} from "rxjs";

export const homeResolver: ResolveFn<any> = (route, state) => {
  const exampleService = inject(ExampleService);

  return forkJoin({
    beginnnerCourses: exampleService.getData(),
    advancedCourses: exampleService.getData()
  }).pipe(
    catchError(err => {
      console.log(err);
        throw err;
    })
  )
};
