import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Vendor } from 'src/app/shared/models/vendor';
import { VendormanagementService } from '../vendormanagement.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  vendordata: Vendor[] = [];
  id: any;
  loggedInUserRole:string="";

  constructor(
    private vendormanagementService: VendormanagementService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_info') || '{}');
    this.loggedInUserRole = loggedInUser.roleName;

    this.vendormanagementService.getAllVendors().subscribe(data => {
      this.vendordata = data;
    });
  }


  deleteUser(vendor: Vendor) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vendordata = this.vendordata.filter(val => val.id !== vendor.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Staff Deleted', life: 3000 });
      }
    });
  }


  /*deleteUser(id:number){
    this.staffmanagementService.delete(id).subscribe(res => {
         this.userdata = this.userdata.filter(item => item.id !== id);
         console.log('User deleted successfully!');
    })
  }
  */

}




