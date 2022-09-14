import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VendorMechanic } from 'src/app/shared/models/vendor-mechanic';
import { VendorMechanicService } from '../vendor-mechanic.service';

@Component({
  selector: 'app-vendor-mechanic-list',
  templateUrl: './vendor-mechanic-list.component.html',
  styleUrls: ['./vendor-mechanic-list.component.scss']
})
export class VendorMechanicListComponent implements OnInit {

  vendorMechanicdata: VendorMechanic[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private vendorMechanicService: VendorMechanicService,
    
    private confirmationService: ConfirmationService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_info') || '{}');
    this.loggedInUserRole = loggedInUser.roleName;
    this.vendorMechanicService.getAllVendorMechanic().subscribe(data => {
      this.vendorMechanicdata = data;
    });
  }



}
