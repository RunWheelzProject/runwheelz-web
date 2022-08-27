import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';

import { MatMenuModule} from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCommonModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule} from '@angular/material/button';
import { MatBadgeModule} from '@angular/material/badge';
//import { AppUtilityService } from './services/app-utility.service';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCommonModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,   
      ],
  providers: [LoginService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
