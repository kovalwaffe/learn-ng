import { Component } from '@angular/core';
import { SignalStoreComponent } from './Signals/signal-store/signal-store.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalStoreComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
