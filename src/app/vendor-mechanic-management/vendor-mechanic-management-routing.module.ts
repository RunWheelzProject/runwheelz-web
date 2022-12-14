import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { VendorMechanicListComponent } from './vendor-mechanic-list/vendor-mechanic-list.component';
import { ViewVendorMechanicComponent } from './view-vendor-mechanic/view-vendor-mechanic.component';

const routes: Routes = [
  {
    path:'', component:VendorMechanicListComponent
  },
  
  {
    path: 'viewVendorMechanic/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:ViewVendorMechanicComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorMechanicManagementRoutingModule { }
