import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostedBoardComponent } from './boosted-board.component';

describe('BoostedBoardComponent', () => {
  let component: BoostedBoardComponent;
  let fixture: ComponentFixture<BoostedBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostedBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostedBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
