import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Vendorrequest } from 'src/app/shared/models/vendorrequest';
import { VendorNewRegistrationService } from '../vendor-new-registration.service';

@Component({
  selector: 'app-vendor-request-list',
  templateUrl: './vendor-request-list.component.html',
  styleUrls: ['./vendor-request-list.component.scss']
})
export class VendorRequestListComponent implements OnInit {

  vendorrequestdata: Vendorrequest[] = [];
  id: any;
  loggedInUserRole:string="";

  constructor(
    private vendornewregistrationrequest: VendorNewRegistrationService,
    private confirmationService: ConfirmationService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_info') || '{}');
    this.loggedInUserRole = loggedInUser.runwheelzStaffDTO.role.roleName

    this.vendornewregistrationrequest.getallvendorregistrationrequests().subscribe(data => {
      this.vendorrequestdata = data;
    });
  }


  // deleteUser(vendor: Vendorrequest) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.vendordata = this.vendordata.filter(val => val.id !== vendor.id);
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Staff Deleted', life: 3000 });
  //     }
  //   });
  // }


}
