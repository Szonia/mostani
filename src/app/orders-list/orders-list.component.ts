import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  orders: any[] = [];
  statuses: string[] = ['pending', 'completed', 'canceled'];
  objectKeys = Object.keys;

  constructor(private cart: CartService) {
    this.cart.getOrders().subscribe((data) => {
      if (Array.isArray(data)) {
        this.orders = data;
      } else {
        
        this.orders = Object.entries(data).map(([key, value]: [string, any]) => ({
          key,
          ...value
        }));
      }
    });
  }

  deleteOrder(index: number): void {
    const orderToDelete = this.orders[index];
    this.orders.splice(index, 1);


  }

  updateOrderStatus(index: number, newStatus: string): void {
    this.orders[index].status = newStatus;

    
  }
}







// import { Component } from '@angular/core';
// import { CartService } from '../services/cart/cart.service';

// @Component({
//   selector: 'app-orders-list',
//   templateUrl: './orders-list.component.html',
//   styleUrl: './orders-list.component.css'
// })
// export class OrdersListComponent {

//   orders:any
//   constructor(private cart:CartService){
//     this.cart.getOrders().subscribe(
//       (data)=>this.orders=data
//     )
//   }
// }
