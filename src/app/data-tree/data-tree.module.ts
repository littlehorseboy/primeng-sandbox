import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataTreeRoutingModule } from './data-tree-routing.module';
import { DataTreeComponent } from './data-tree.component';

@NgModule({
  declarations: [
    DataTreeComponent
  ],
  imports: [
    CommonModule,
    DataTreeRoutingModule,
    ButtonModule
  ]
})
export class DataTreeModule { }
