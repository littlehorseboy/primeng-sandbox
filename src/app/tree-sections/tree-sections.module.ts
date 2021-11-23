import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeSectionsRoutingModule } from './tree-sections-routing.module';
import { TreeSectionsComponent } from './tree-sections.component';



@NgModule({
  declarations: [
    TreeSectionsComponent
  ],
  imports: [
    CommonModule,
    TreeSectionsRoutingModule,
    TreeModule
  ]
})
export class TreeSectionsModule { }
