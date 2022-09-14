import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomermanagementRoutingModule } from './customermanagement-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


@NgModule({
  declarations: [
    
  
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomermanagementRoutingModule
  ]
})
export class CustomermanagementModule { }
