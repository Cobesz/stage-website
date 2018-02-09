import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BezoekStagiairesComponent } from './bezoek-stagiaires.component';

describe('BezoekStagiairesComponent', () => {
  let component: BezoekStagiairesComponent;
  let fixture: ComponentFixture<BezoekStagiairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BezoekStagiairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BezoekStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
