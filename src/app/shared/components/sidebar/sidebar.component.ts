import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteInfo, ROUTES } from '../../utilities/sidebar-all-menuitems';

 declare let $:any;
 
 @Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[] = [];
  storeId: any;
  isOpen: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const userInfo = JSON.parse(sessionStorage.getItem('staff_info')|| '{}');
    const role = userInfo.runwheelzStaffDTO.role.roleName;
    this.menuItems = ROUTES.filter((menuItem) => menuItem.roles.includes(role));
   
    this.activatedRoute.url.subscribe((res) => {
      this.menuItems.map((item) => {
        item.title.toLowerCase() === res[0].path.replace('-', ' ')
          ? (item.class = 'open')
          : (item.class = '');

        return item;
      });
    });
  }

  submenulistToggle(i:any, menuItem:any): void {
    let el = $('ul.child-menu-' + i);

    if (el.hasClass('d-none')) {
      el.removeClass('d-none');
    } else {
      el.addClass('d-none');
    }

    if(menuItem != '/vendormanagement/vendormanagement'){
    this.router.navigateByUrl(menuItem)
    }

  }
}



