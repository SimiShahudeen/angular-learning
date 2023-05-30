import { TestBed } from '@angular/core/testing';

import { ServiceAppDataService } from './service-app-data.service';

describe('ServiceAppDataService', () => {
  let service: ServiceAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
