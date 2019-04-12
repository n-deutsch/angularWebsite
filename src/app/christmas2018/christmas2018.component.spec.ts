import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Christmas2018Component } from './christmas2018.component';

describe('Christmas2018Component', () => {
  let component: Christmas2018Component;
  let fixture: ComponentFixture<Christmas2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Christmas2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Christmas2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
