import { Component } from '@angular/core';

export interface CartItem {
  name: string;
}

// export const CartStore = signalStore(
//   withState({
//     cartItems: [] as CartItem[]
//   })
// );

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {

}
