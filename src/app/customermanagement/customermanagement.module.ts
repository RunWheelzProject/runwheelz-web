import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomermanagementRoutingModule } from './customermanagement-routing.module';
import { CustomermanagementComponent } from './customermanagement/customermanagement.component';


@NgModule({
  declarations: [
    CustomermanagementComponent
  ],
  imports: [
    CommonModule,
    CustomermanagementRoutingModule
  ]
})
export class CustomermanagementModule { }
