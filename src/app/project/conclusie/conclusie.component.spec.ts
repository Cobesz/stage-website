import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusieComponent } from './conclusie.component';

describe('ConclusieComponent', () => {
  let component: ConclusieComponent;
  let fixture: ComponentFixture<ConclusieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
