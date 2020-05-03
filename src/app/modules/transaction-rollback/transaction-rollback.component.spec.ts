import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRollbackComponent } from './transaction-rollback.component';

describe('TransactionRollbackComponent', () => {
  let component: TransactionRollbackComponent;
  let fixture: ComponentFixture<TransactionRollbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionRollbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRollbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
