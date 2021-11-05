import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeDemoComponent } from './tree-demo.component';
import { TreeModule } from 'primeng/tree';


@NgModule({
  declarations: [
    TreeDemoComponent
  ],
  imports: [
    CommonModule,
    TreeModule
  ],
  exports: [
    TreeDemoComponent
  ]
})
export class TreeDemoModule { }
