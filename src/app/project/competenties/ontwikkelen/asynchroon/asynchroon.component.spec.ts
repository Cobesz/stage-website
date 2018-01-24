import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchroonComponent } from './asynchroon.component';

describe('AsynchroonComponent', () => {
  let component: AsynchroonComponent;
  let fixture: ComponentFixture<AsynchroonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynchroonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchroonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
