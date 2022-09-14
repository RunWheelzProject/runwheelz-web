
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

//import { UserInfo } from '../../../shared/models/auth';
//import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() toggleSideBarForMe: EventEmitter<Boolean> = new EventEmitter();

  constructor(private readonly router: Router) { }
  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/staff']);
  }

}
