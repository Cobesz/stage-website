import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnderzoekenComponent } from './onderzoeken.component';

describe('OnderzoekenComponent', () => {
  let component: OnderzoekenComponent;
  let fixture: ComponentFixture<OnderzoekenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnderzoekenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnderzoekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
