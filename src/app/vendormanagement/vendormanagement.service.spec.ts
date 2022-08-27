import { TestBed } from '@angular/core/testing';

import { VendormanagementService } from './vendormanagement.service';

describe('VendormanagementService', () => {
  let service: VendormanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendormanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
