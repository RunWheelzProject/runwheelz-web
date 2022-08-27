import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorNewRegistrationRoutingModule } from './vendor-new-registration-routing.module';
import { VerifyNewVendorRequestComponent } from './verify-new-vendor-request/verify-new-vendor-request.component';
import { VendorRequestListComponent } from './vendor-request-list/vendor-request-list.component';
import { VendorRegisterRequestComponent } from './vendor-register-request/vendor-register-request.component';
import { AddNewVendorRequestComponent } from './add-new-vendor-request/add-new-vendor-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ViewVendorRequestComponent } from './view-vendor-request/view-vendor-request.component';
import { EditVendorRequestComponent } from './edit-vendor-request/edit-vendor-request.component';
import { SelectAnExecutiveComponent } from './select-an-executive/select-an-executive.component';


@NgModule({
  declarations: [
    VerifyNewVendorRequestComponent,
    VendorRegisterRequestComponent,
    AddNewVendorRequestComponent,
    ViewVendorRequestComponent,
    EditVendorRequestComponent,
    SelectAnExecutiveComponent

  ],
  imports: [
   
    CommonModule,
    VendorNewRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
  ]
})
export class VendorNewRegistrationModule { }
