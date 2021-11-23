import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTemplatingComponent } from './tree-templating.component';

describe('TreeTemplatingComponent', () => {
  let component: TreeTemplatingComponent;
  let fixture: ComponentFixture<TreeTemplatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeTemplatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTemplatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
