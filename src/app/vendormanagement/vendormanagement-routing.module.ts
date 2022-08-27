import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { AddnewVendorComponent } from './addnew-vendor/addnew-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { VerifyVendorOtpComponent } from './verify-vendor-otp/verify-vendor-otp.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';

const routes: Routes = [
  {
    path:'', component:VendorListComponent
  },
  {
    path: 'vendorregister',
    component: LayoutComponent,
    children: [
      { path: '', component: VendorRegistrationComponent },
    ]
  },
  {
    path: 'verifynewvendor',
    component: LayoutComponent,
    children: [
      { path: '', component: VerifyVendorOtpComponent },
    ]
  },
  {
    path: 'addnewvendor',
    component: LayoutComponent,
    children: [
      { path: '', component: AddnewVendorComponent },
    ]
  },
  {
    path: 'viewvendor/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:ViewVendorComponent
      }
    ]
  },
  {
    path: 'editvendor/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:EditVendorComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendormanagementRoutingModule { }
