import { TestBed } from '@angular/core/testing';

import { OffersService } from './offers.service';

describe('CommentsService', () => {
  let service: OffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
