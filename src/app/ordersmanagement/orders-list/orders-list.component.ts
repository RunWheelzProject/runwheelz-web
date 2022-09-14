import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/shared/models/orders';
import { OrdersManagementService } from '../orders-management.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  ordersdata: Orders[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private OrdersManagementService: OrdersManagementService,
     public route: ActivatedRoute) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_info') || '{}');
    this.loggedInUserRole = loggedInUser.roleName;
    this.OrdersManagementService.getAllServiceRequests().subscribe(data => {
      this.ordersdata = data;
    });
  }



}
