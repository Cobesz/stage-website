import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntwikkelenComponent } from './ontwikkelen.component';

describe('OntwikkelenComponent', () => {
  let component: OntwikkelenComponent;
  let fixture: ComponentFixture<OntwikkelenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntwikkelenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntwikkelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
