import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritIndentFormComponent } from './spirit-indent-form.component';

describe('SpiritIndentFormComponent', () => {
  let component: SpiritIndentFormComponent;
  let fixture: ComponentFixture<SpiritIndentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritIndentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritIndentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
