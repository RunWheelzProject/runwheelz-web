import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent
  },
  {
    path: 'viewOrder/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:ViewOrderComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersmanagementRoutingModule { }
