import { TestBed } from '@angular/core/testing';

import { ViewdetailsGetAPIService } from './viewdetails-get-api.service';

describe('ViewdetailsGetAPIService', () => {
  let service: ViewdetailsGetAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewdetailsGetAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
