import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/shared/models/orders';
import { OrdersManagementService } from '../orders-management.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  
  ordersdata: any;
  id!: number;
  errorMessage:string="";

  constructor(private OrdersManagementService: OrdersManagementService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.OrdersManagementService.getOrdersById(this.id).subscribe((data: Orders) => {
      this.ordersdata = data;
    },
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    });
  }

}

