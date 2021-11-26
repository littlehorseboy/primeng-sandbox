import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberBasicComponent } from './input-number-basic.component';

describe('InputNumberBasicComponent', () => {
  let component: InputNumberBasicComponent;
  let fixture: ComponentFixture<InputNumberBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
