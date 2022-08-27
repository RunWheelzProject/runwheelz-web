import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendorrequest } from 'src/app/shared/models/vendorrequest';
import { VendorNewRegistrationService } from '../vendor-new-registration.service';

@Component({
  selector: 'app-view-vendor-request',
  templateUrl: './view-vendor-request.component.html',
  styleUrls: ['./view-vendor-request.component.scss']
})
export class ViewVendorRequestComponent implements OnInit {

  vendorrequestdata: any;
  id!: number;
  errorMessage:string="";

  constructor(private vendorNewRegistrationService: VendorNewRegistrationService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.vendorNewRegistrationService.getVendorRequestById(this.id).subscribe((data: Vendorrequest) => {
      this.vendorrequestdata = data;
    },
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    });
  }

}
