import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Christmas2019Component } from './christmas2019.component';

describe('Christmas2019Component', () => {
  let component: Christmas2019Component;
  let fixture: ComponentFixture<Christmas2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Christmas2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Christmas2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
