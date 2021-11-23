import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';

@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    TreeRoutingModule,
    ButtonModule
  ]
})
export class TreeModule { }
