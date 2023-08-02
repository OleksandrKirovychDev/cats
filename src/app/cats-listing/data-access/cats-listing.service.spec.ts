import { TestBed } from '@angular/core/testing';

import { CatsListingService } from './cats-listing.service';

describe('CatsListingService', () => {
  let service: CatsListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
