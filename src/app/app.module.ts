import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { DashboardModule } from './dashboard/dashboard.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StaffmanagementService } from './staffmanagement/staffmanagement.service';
import { RegistrationService } from './shared/services/registration.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StaffmanagementModule } from './staffmanagement/staffmanagement.module';


import { SidebarModule } from 'primeng/sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MessagesModule } from 'primeng/messages';

import { ToolbarModule } from 'primeng/toolbar';
import { MainscreenModule } from './mainscreen/mainscreen.module';
import { VendormanagementModule } from './vendormanagement/vendormanagement.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { Stafflist } from './staffmanagement/stafflist/stafflist.component';
import { VendorListComponent } from './vendormanagement/vendor-list/vendor-list.component';
import { AgmCoreModule } from '@agm/core';
import { VendorMechanicListComponent } from './vendor-mechanic-management/vendor-mechanic-list/vendor-mechanic-list.component';
import { VendorMechanicManagementModule } from './vendor-mechanic-management/vendor-mechanic-management.module';
import { VendorRequestListComponent } from './vendor-new-registration/vendor-request-list/vendor-request-list.component';
import { VendorNewRegistrationModule } from './vendor-new-registration/vendor-new-registration.module';
import { CustomermanagementModule } from './customermanagement/customermanagement.module';
import { CustomerListComponent } from './customermanagement/customer-list/customer-list.component';
import { OrdersListComponent } from './ordersmanagement/orders-list/orders-list.component';
import { OrdersmanagementModule } from './ordersmanagement/ordersmanagement.module';
import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';
@NgModule({
  declarations: [
    AppComponent,
    StaffLoginComponent,
    OtpComponent,
    Stafflist,
    VendorListComponent,
    VendorMechanicListComponent,
    VendorRequestListComponent,
    CustomerListComponent,
    OrdersListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    NgOtpInputModule,
    BrowserAnimationsModule,
    RouterModule,
    DashboardModule,
    StaffmanagementModule,
    SidebarModule,
    //MatSidenavModule,
    //MatIconModule,
    //MatToolbarModule,
    TableModule,
    ButtonModule,
    DialogModule,
    MessagesModule,
    ToolbarModule,
    ConfirmDialogModule,
    MainscreenModule,
    VendormanagementModule,
    VendorMechanicManagementModule,
    VendorNewRegistrationModule,
    CustomermanagementModule,
    OrdersmanagementModule,
    PrivacyPolicyModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBphyueg6xoPG3upFK_6KUzmR_mvbCdcsA',
      libraries: ['places']
    }),
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: false
    }),


  ],
  providers: [StaffmanagementService, RegistrationService, ConfirmationService, MessageService],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
