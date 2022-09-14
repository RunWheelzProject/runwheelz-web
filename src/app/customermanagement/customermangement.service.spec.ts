import { TestBed } from '@angular/core/testing';

import { CustomermangementService } from './customermangement.service';

describe('CustomermangementService', () => {
  let service: CustomermangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomermangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
