import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMechanicListComponent } from './vendor-mechanic-list.component';

describe('VendorMechanicListComponent', () => {
  let component: VendorMechanicListComponent;
  let fixture: ComponentFixture<VendorMechanicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorMechanicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMechanicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
