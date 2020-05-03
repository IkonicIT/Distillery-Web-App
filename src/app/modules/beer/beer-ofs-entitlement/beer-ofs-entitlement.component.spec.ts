import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerOfsEntitlementComponent } from './beer-ofs-entitlement.component';

describe('BeerOfsEntitlementComponent', () => {
  let component: BeerOfsEntitlementComponent;
  let fixture: ComponentFixture<BeerOfsEntitlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerOfsEntitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerOfsEntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
