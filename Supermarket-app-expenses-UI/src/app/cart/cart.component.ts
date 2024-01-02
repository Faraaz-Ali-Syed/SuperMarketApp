import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  privacyOption: boolean = true; // Default: Show email id
  selectedPaymentMethod: string = 'credit-card'; // Default payment method
  saveSearchHistory: boolean = true; // Default: Save search history
  selectedLanguage: string = 'english'; // Default language
  autoUpdate: boolean = true; // Default: Automatically update app
  enableNotifications: boolean = true; // Default: Enable notifications

}
