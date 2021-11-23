import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicColumnsComponent } from './table-dynamic-columns.component';

describe('TableDynamicColumnsComponent', () => {
  let component: TableDynamicColumnsComponent;
  let fixture: ComponentFixture<TableDynamicColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDynamicColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDynamicColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
