import { TestBed } from '@angular/core/testing';

import { StaffmanagementService } from './staffmanagement.service';

describe('StaffmanagementService', () => {
  let service: StaffmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
