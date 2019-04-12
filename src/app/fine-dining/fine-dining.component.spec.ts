import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineDiningComponent } from './fine-dining.component';

describe('FineDiningComponent', () => {
  let component: FineDiningComponent;
  let fixture: ComponentFixture<FineDiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineDiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
