import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatiserenComponent } from './automatiseren.component';

describe('AutomatiserenComponent', () => {
  let component: AutomatiserenComponent;
  let fixture: ComponentFixture<AutomatiserenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatiserenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatiserenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
