import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnExecutiveComponent } from './select-an-executive.component';

describe('SelectAnExecutiveComponent', () => {
  let component: SelectAnExecutiveComponent;
  let fixture: ComponentFixture<SelectAnExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAnExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAnExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
