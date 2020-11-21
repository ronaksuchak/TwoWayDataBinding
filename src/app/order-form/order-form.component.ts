import { Component, OnInit } from '@angular/core';
import { Order } from './IOrder';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: Order = new Order();
  result: string = "";
  constructor() { }

  display() {
    this.result = "Name: " + this.order.custName + "\n" + "Billing Date: " + this.order.billingDate + "\n" + "Shipping Date:" +
      this.order.shippingDate + "\n" + "Order Total:" + this.order.amount;
    console.warn(r);

  }
  ngOnInit(): void {
  }

}
