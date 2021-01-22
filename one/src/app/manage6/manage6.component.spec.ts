import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manage6Component } from './manage6.component';

describe('Manage6Component', () => {
  let component: Manage6Component;
  let fixture: ComponentFixture<Manage6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manage6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
