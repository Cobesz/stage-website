import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratiesBbsdeskComponent } from './iteraties-bbsdesk.component';

describe('IteratiesBbsdeskComponent', () => {
  let component: IteratiesBbsdeskComponent;
  let fixture: ComponentFixture<IteratiesBbsdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteratiesBbsdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteratiesBbsdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
