import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/models/staff';
import { StaffmanagementService } from '../staffmanagement.service';

@Component({
  selector: 'app-viewstaff',
  templateUrl: './viewstaff.component.html',
  styleUrls: ['./viewstaff.component.scss']
})
export class ViewstaffComponent implements OnInit {

  staffdata: any;
  id!: number;
  errorMessage:string="";

  constructor(private staffmanagementService: StaffmanagementService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.staffmanagementService.getStaffById(this.id).subscribe((data: Staff) => {
      this.staffdata = data;
    },
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    });
  }

}