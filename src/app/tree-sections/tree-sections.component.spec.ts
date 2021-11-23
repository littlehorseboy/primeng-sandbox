import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSectionsComponent } from './tree-sections.component';

describe('TreeSectionsComponent', () => {
  let component: TreeSectionsComponent;
  let fixture: ComponentFixture<TreeSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
