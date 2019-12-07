import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  
  Orders: any = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders(){
    this.orderService.getAll().subscribe(data =>{
      this.Orders = data;
      console.log(data);
    });
    console.log(this.Orders);
  }

}
