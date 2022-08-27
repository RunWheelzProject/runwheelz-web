import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainscreenRoutingModule } from './mainscreen-routing.module';
import { MainscreenComponent } from './component/mainscreen/mainscreen.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MainscreenComponent,
    
  ],
  imports: [
    CommonModule,
    MainscreenRoutingModule,
    NgImageSliderModule,
    MatIconModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainscreenModule { }
