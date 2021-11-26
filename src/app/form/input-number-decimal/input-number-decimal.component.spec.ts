import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberDecimalComponent } from './input-number-decimal.component';

describe('InputNumberDecimalComponent', () => {
  let component: InputNumberDecimalComponent;
  let fixture: ComponentFixture<InputNumberDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberDecimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
