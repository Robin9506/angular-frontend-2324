import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrl: './customer-order.component.scss'
})
export class CustomerOrderComponent {
  orders: Order[] =[];
  totalPrice: number = 0;

  constructor(private orderService: OrderService) { }
  
  ngOnInit(): void {
    this.getOwnOrders();
  }
  
  getOwnOrders(){
    this.orderService.getOrders().subscribe({
      next: (orders: Order[]) => {
        this.orders = orders;

      },
      complete: () =>{
        console.log(this.orders);
      }
    });
  }

  getTotalPrice(products: Product[]){
    this.totalPrice = 0;
    for (const product of products){
      this.totalPrice += product.price;
    }
    return this.totalPrice;
  }


}
