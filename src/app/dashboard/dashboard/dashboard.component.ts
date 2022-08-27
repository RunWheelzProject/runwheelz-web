import { Component,OnInit} from '@angular/core';
import employees from '../../../assets/employees.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employeeData: any;
  constructor()
   {
     this.employeeData = employees;
   }

  ngOnInit() {}
}
