import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetrokkenComponent } from './betrokken.component';

describe('BetrokkenComponent', () => {
  let component: BetrokkenComponent;
  let fixture: ComponentFixture<BetrokkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetrokkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetrokkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
