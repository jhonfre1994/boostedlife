import { TestBed } from '@angular/core/testing';

import { BoostedBoardService } from './boosted-board.service';

describe('BoostedBoardService', () => {
  let service: BoostedBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoostedBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
