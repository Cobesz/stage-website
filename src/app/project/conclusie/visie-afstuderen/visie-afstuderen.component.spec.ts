import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisieAfstuderenComponent } from './visie-afstuderen.component';

describe('VisieAfstuderenComponent', () => {
  let component: VisieAfstuderenComponent;
  let fixture: ComponentFixture<VisieAfstuderenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisieAfstuderenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisieAfstuderenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
