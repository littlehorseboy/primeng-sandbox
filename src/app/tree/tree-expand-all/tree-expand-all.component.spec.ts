import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeExpandAllComponent } from './tree-expand-all.component';

describe('TreeExpandAllComponent', () => {
  let component: TreeExpandAllComponent;
  let fixture: ComponentFixture<TreeExpandAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeExpandAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeExpandAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
