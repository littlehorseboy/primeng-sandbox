import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeTemplatingRoutingModule } from './tree-templating-routing.module';
import { TreeTemplatingComponent } from './tree-templating.component';

@NgModule({
  declarations: [
    TreeTemplatingComponent
  ],
  imports: [
    CommonModule,
    TreeTemplatingRoutingModule,
    TreeModule
  ]
})
export class TreeTemplatingModule { }
