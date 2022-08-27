import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersmanagementComponent } from './ordersmanagement/ordersmanagement.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersmanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersmanagementRoutingModule { }
