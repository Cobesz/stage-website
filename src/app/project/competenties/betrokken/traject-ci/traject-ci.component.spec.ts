import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectCiComponent } from './traject-ci.component';

describe('TrajectCiComponent', () => {
  let component: TrajectCiComponent;
  let fixture: ComponentFixture<TrajectCiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectCiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
