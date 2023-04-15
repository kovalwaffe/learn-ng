import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandComponent } from "./stand/stand.component";
import { InjectionTokenExampleComponent } from './injectionToken/injection-token-example/injection-token-example.component';
import { FILE_UPLOADER_GLOBAL_CONFIG } from "./injectionToken/file-uploader-global-config.token";
import { GridComponent } from './generic component/grid/grid.component';
import { CarDataComponent } from './generic component/car-data/car-data.component';
import { FormComponent } from './forms-inheritance/form/form.component';
import { UserFormComponent } from './forms-inheritance/user-form/user-form.component';
import { UserFormShowComponent } from './forms-inheritance/user-form/user-form-show/user-form-show.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UserFormCreateComponent } from './forms-inheritance/user-form/user-form-create/user-form-create.component';
import { ViewChildParentComponent } from './flow-data/view-child/view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './flow-data/view-child/view-child-child/view-child-child.component';
import { SumFormsComponent } from './form-view-child/sum-forms/sum-forms.component';
import { OrderFormComponent } from './form-view-child/order-form/order-form.component';
import { DataPickerComponent } from './formatter/data-picker.component';
import { ConsumerComponent } from './formatter/consumer.component';
import { ColdComponent } from './reactive/cold/cold/cold.component';

@NgModule({
  declarations: [
    AppComponent,
    InjectionTokenExampleComponent,
    GridComponent,
    CarDataComponent,
    FormComponent,
    UserFormComponent,
    UserFormShowComponent,
    UserFormCreateComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    SumFormsComponent,
    OrderFormComponent,
    DataPickerComponent,
    ConsumerComponent,
    ColdComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StandComponent,
        ReactiveFormsModule
    ],
  providers: [
    {provide: FILE_UPLOADER_GLOBAL_CONFIG, useValue: { url: 'my injected global url' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
