import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSectionsComponent } from './table-sections.component';

describe('TableSectionsComponent', () => {
  let component: TableSectionsComponent;
  let fixture: ComponentFixture<TableSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
