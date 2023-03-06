import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from "../view-child-child/view-child-child.component";

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewChildParentComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild(ViewChildChildComponent, {static: true}) child!: ViewChildChildComponent;
  @ViewChild('ref', {static: true}) element!: ElementRef<HTMLDivElement>;

  constructor() {
    console.log('constructor');
    console.log(this.child);
  }
  ngOnInit(): void {
    console.log('OnInit');
    // console.log(this.element);
    console.log(this.child);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // console.log(this.element);
    console.log(this.child);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    // console.log(this.element);
    console.log(this.child);
  }

}
