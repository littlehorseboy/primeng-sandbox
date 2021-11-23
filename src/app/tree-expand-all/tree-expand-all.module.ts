import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { TreeExpandAllRoutingModule } from './tree-expand-all-routing.module';
import { TreeExpandAllComponent } from './tree-expand-all.component';

@NgModule({
  declarations: [
    TreeExpandAllComponent
  ],
  imports: [
    CommonModule,
    TreeExpandAllRoutingModule,
    TreeModule,
    ButtonModule,
  ]
})
export class TreeExpandAllModule { }
