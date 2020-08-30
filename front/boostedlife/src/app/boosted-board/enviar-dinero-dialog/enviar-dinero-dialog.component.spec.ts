import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarDineroDialogComponent } from './enviar-dinero-dialog.component';

describe('EnviarDineroDialogComponent', () => {
  let component: EnviarDineroDialogComponent;
  let fixture: ComponentFixture<EnviarDineroDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarDineroDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarDineroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
