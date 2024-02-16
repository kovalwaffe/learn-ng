import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course";
import {ActivatedRoute} from "@angular/router";
import {DisplayTableComponent} from "../../shared/display-table/display-table.component";

@Component({
  selector: 'app-home-r',
  standalone: true,
  imports: [
    DisplayTableComponent
  ],
  templateUrl: './home-r.component.html',
})
export class HomeRComponent implements OnInit {

  beginnerCourses!: Course[];
  advancedCourses!: Course[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.beginnerCourses = this.activatedRoute.snapshot.data['home']['beginnerCourses'];
    this.advancedCourses = this.activatedRoute.snapshot.data['home']['advancedCourses']
    console.log(this.beginnerCourses)

  }

}
