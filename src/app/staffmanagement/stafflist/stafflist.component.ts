
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Staff } from 'src/app/shared/models/staff';
import { StaffmanagementService } from '../staffmanagement.service';


@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.scss']
})
export class Stafflist implements OnInit {

  staffdata: Staff[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private staffmanagementService: StaffmanagementService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_info') || '{}');
    console.log(loggedInUser);
    this.loggedInUserRole = loggedInUser.runwheelzStaffDTO.role.roleName;
    this.staffmanagementService.getAllStaff().subscribe(data => {
      this.staffdata = data;
    });
  }


  deleteUser(staff: Staff) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.staffdata = this.staffdata.filter(val => val.id !== staff.id);
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
