import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { OrderFormComponent } from "../order-form/order-form.component";
import { Dictionary } from "../models/dictionary";
import { DictionaryService } from "../dictionary.service";

@Component({
  selector: 'app-sum-forms',
  templateUrl: './sum-forms.component.html',
  styleUrls: ['./sum-forms.component.scss']
})
export class SumFormsComponent implements OnInit, AfterViewInit{
  @ViewChild(OrderFormComponent) orderForm!: OrderFormComponent;

  categories$!: Observable<Dictionary[]>;

  constructor(
    private dictionarService: DictionaryService,
    private cdr: ChangeDetectorRef
  ) { }
  ngAfterViewInit(): void {
    // this.orderForm.setValue({
    //   name: 'Default product name',
    //   firstname: 'Default user name'
    // });
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    // this.categories$ = this.dictionarService.getCategories();
    console.log('OnInit');
  }

  public save(): void {
    // alert(JSON.stringify(this.orderForm.value));
  }

}
