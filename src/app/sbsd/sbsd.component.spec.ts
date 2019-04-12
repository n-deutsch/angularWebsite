import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBSDComponent } from './sbsd.component';

describe('SBSDComponent', () => {
  let component: SBSDComponent;
  let fixture: ComponentFixture<SBSDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBSDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
