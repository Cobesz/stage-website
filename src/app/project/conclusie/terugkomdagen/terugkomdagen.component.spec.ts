import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerugkomdagenComponent } from './terugkomdagen.component';

describe('TerugkomdagenComponent', () => {
  let component: TerugkomdagenComponent;
  let fixture: ComponentFixture<TerugkomdagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerugkomdagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerugkomdagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
