import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndernemenComponent } from './ondernemen.component';

describe('OndernemenComponent', () => {
  let component: OndernemenComponent;
  let fixture: ComponentFixture<OndernemenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndernemenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndernemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
