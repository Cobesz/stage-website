import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstructuurComponent } from './projectstructuur.component';

describe('ProjectstructuurComponent', () => {
  let component: ProjectstructuurComponent;
  let fixture: ComponentFixture<ProjectstructuurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectstructuurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectstructuurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
