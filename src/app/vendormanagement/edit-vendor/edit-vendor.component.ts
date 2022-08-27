import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/shared/models/vendor';
import { VendormanagementService } from '../vendormanagement.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {


  id: any;
  vendordata!: Vendor;
  form!: FormGroup;
  latitude!: number;
  longitude!: number;

  constructor(private vendormanagementService: VendormanagementService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id']
    this.vendormanagementService.getVendorById(this.id).subscribe((data: Vendor) => {
      this.vendordata = data;
      console.log(this.vendordata.id);

    });
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      vendorPin: new FormControl('', [Validators.required]),
      aadharNumber: new FormControl('', Validators.required),
      ownerName: new FormControl('', [Validators.required]),
      garageName: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', Validators.required),
      zipcode: new FormControl('', [Validators.required]),
      addressLine: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    this.vendormanagementService.putVendorinfo(this.id, this.form.value).subscribe(data => {
      this.vendordata = data;
      this.router.navigate(['/vendormanagement/vendormanagement'])
    })
  }


}

