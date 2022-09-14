import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersmanagementRoutingModule } from './ordersmanagement-routing.module';
import { ViewOrderComponent } from './view-order/view-order.component';


@NgModule({
  declarations: [
  
       ViewOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersmanagementRoutingModule
  ]
})
export class OrdersmanagementModule { }
