import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersmanagementComponent } from './ordersmanagement.component';

describe('OrdersmanagementComponent', () => {
  let component: OrdersmanagementComponent;
  let fixture: ComponentFixture<OrdersmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
