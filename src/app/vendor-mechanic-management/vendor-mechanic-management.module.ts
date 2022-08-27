import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorMechanicListComponent } from './vendor-mechanic-list/vendor-mechanic-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { VendorMechanicManagementRoutingModule } from './vendor-mechanic-management-routing.module';
import { ViewVendorMechanicComponent } from './view-vendor-mechanic/view-vendor-mechanic.component';



@NgModule({
  declarations: [
  
    ViewVendorMechanicComponent
  ],
  imports: [
    CommonModule,
    VendorMechanicManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
  ]
})
export class VendorMechanicManagementModule { }
