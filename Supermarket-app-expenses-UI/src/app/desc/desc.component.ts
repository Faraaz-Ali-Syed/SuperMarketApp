import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.scss']
})
export class DescComponent {

  products = [
    { name: 'Cleaning Material', price: '149', image: 'https://th.bing.com/th/id/OIP.H8CwyMM4YGjsOVguPmhIGAHaHa?pid=ImgDet&rs=1' },
    { name: 'Groceries 10x Pack', price: "999", image: 'https://th.bing.com/th/id/OIP.WO0vZlKeySm-9YHaNezVDAAAAA?pid=ImgDet&rs=1' },
    { name: 'Cereal Grains Pack', price: "1199", image: 'https://media.istockphoto.com/photos/bags-with-cereal-grains-picture-id622800944?k=6&m=622800944&s=612x612&w=0&h=N3_ngfTQizlls4byiJO-Yc3zInePfEcpMxkbfj70dc4=' },
    // Add more products here
  ];

  constructor(private notificationService: NotificationService) {}

  addToCart() {
    // Add the product to the cart logic here

    // Update the notification badge count
    this.notificationService.getNotificationCount().subscribe(count => {
      this.notificationService.updateNotificationCount(count + 1);
    });
  }

}
