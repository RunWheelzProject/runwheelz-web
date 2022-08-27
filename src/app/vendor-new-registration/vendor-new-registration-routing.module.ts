import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { AddNewVendorRequestComponent } from './add-new-vendor-request/add-new-vendor-request.component';
import { EditVendorRequestComponent } from './edit-vendor-request/edit-vendor-request.component';
import { SelectAnExecutiveComponent } from './select-an-executive/select-an-executive.component';
import { VendorRegisterRequestComponent } from './vendor-register-request/vendor-register-request.component';
import { VendorRequestListComponent } from './vendor-request-list/vendor-request-list.component';
import { VerifyNewVendorRequestComponent } from './verify-new-vendor-request/verify-new-vendor-request.component';
import { ViewVendorRequestComponent } from './view-vendor-request/view-vendor-request.component';

const routes: Routes = [
  {
    path: '',
    component: VendorRequestListComponent
  },
 
  {
    path: 'VendorRegistrationRequest',
    component: LayoutComponent,
    children: [
      { path: '', component: VendorRegisterRequestComponent },
    ]
  },
  {
    path: 'verifynewvendorrequest',
    component: LayoutComponent,
    children: [
      { path: '', component: VerifyNewVendorRequestComponent },
    ]
  },
  {
    path: 'addnewvendorrequest',
    component: LayoutComponent,
    children: [
      { path: '', component: AddNewVendorRequestComponent },
    ]
  },
  {
    path: 'viewvendorrequest/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:ViewVendorRequestComponent
      }
    ]
  },
  {
    path: 'editvendorrequest/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:EditVendorRequestComponent
      }
    ]
  },
  {
    path: 'assignvendorrequest/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:SelectAnExecutiveComponent
      }
    ]
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorNewRegistrationRoutingModule { }
