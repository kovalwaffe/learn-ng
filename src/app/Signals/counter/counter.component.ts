import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  counter = signal(0);
  isEven = computed(() => (this.counter() & 1) == 0);

  ngOnInit(): void {
    console.log(this.counter());

    console.log(this.isEven());

    setTimeout(() => {
      this.counter.set(5);
    }, 3000)
    console.log(this.isEven());
  }

}
