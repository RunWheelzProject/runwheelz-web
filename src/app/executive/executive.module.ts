import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutiveRoutingModule } from './executive-routing.module';
import { ExecutiveListComponent } from './executive-list/executive-list.component';
import { AddNewVendorComponent } from './add-new-vendor/add-new-vendor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    ExecutiveListComponent,
    AddNewVendorComponent
  ],
  imports: [
    CommonModule,
    ExecutiveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule
  ]
})
export class ExecutiveModule { }
