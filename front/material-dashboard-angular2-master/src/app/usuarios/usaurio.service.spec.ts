import { TestBed } from '@angular/core/testing';

import { UsaurioService } from './usaurio.service';

describe('UsaurioService', () => {
  let service: UsaurioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaurioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
