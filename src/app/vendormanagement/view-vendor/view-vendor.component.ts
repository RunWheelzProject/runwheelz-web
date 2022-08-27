import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/shared/models/vendor';
import { VendormanagementService } from '../vendormanagement.service';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent implements OnInit {


  vendordata: any;
  id!: number;
  errorMessage:string="";

  constructor(private vendormanagementService: VendormanagementService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.vendormanagementService.getVendorById(this.id).subscribe((data: Vendor) => {
      this.vendordata = data;
    },
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    });
  }


}
