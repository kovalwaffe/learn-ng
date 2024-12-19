import { Component } from '@angular/core';
import { BasicTestComponent } from "./Jest/basic-test/basic-test.component";

@Component({
    selector: 'app-root',
  imports: [BasicTestComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {}
