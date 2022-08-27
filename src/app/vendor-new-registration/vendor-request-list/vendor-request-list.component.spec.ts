import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRequestListComponent } from './vendor-request-list.component';

describe('VendorRequestListComponent', () => {
  let component: VendorRequestListComponent;
  let fixture: ComponentFixture<VendorRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
