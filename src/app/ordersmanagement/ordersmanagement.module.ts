import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersmanagementRoutingModule } from './ordersmanagement-routing.module';
import { OrdersmanagementComponent } from './ordersmanagement/ordersmanagement.component';


@NgModule({
  declarations: [
    OrdersmanagementComponent
  ],
  imports: [
    CommonModule,
    OrdersmanagementRoutingModule
  ]
})
export class OrdersmanagementModule { }
