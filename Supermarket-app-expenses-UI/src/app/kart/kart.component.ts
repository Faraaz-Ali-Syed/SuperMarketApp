import { Component } from '@angular/core';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent {
  prices = [20, 25]; // Prices for each item
  quantities = [2, 1]; // Initial quantities for each item
  shipping = 5;
  grandTotal = 70;

  incrementQuantity(index: number) {
    this.quantities[index]++;
    this.updateTotals();
  }

  decrementQuantity(index: number) {
    if (this.quantities[index] > 1) {
      this.quantities[index]--;
      this.updateTotals();
    }
  }

  calculateTotal(index: number) {
    return this.prices[index] * this.quantities[index];
  }

  calculateSubtotal() {
    return this.quantities.reduce((subtotal, quantity, index) => subtotal + this.prices[index] * quantity, 0);
  }

  updateTotals() {
    this.grandTotal = this.calculateSubtotal() + this.shipping;
  }
}
