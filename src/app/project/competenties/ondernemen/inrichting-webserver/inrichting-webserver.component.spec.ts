import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InrichtingWebserverComponent } from './inrichting-webserver.component';

describe('InrichtingWebserverComponent', () => {
  let component: InrichtingWebserverComponent;
  let fixture: ComponentFixture<InrichtingWebserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InrichtingWebserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InrichtingWebserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
