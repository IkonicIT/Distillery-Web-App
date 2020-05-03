import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistFooterComponent } from './dist-footer.component';

describe('DistFooterComponent', () => {
  let component: DistFooterComponent;
  let fixture: ComponentFixture<DistFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
