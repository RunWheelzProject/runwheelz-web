import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendormanagementRoutingModule } from './vendormanagement-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { VerifyVendorOtpComponent } from './verify-vendor-otp/verify-vendor-otp.component';
import { AddnewVendorComponent } from './addnew-vendor/addnew-vendor.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';


@NgModule({
  declarations: [
  
       VendorRegistrationComponent,
       VerifyVendorOtpComponent,
       AddnewVendorComponent,
       ViewVendorComponent,
       EditVendorComponent
  ],
  imports: [
    CommonModule,
    VendormanagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
  ]
})
export class VendormanagementModule { }
