import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { TableBasicComponent } from './table-basic/table-basic.component';

@NgModule({
  declarations: [
    DataTableComponent,
    TableBasicComponent,
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    ButtonModule,
    TableModule
  ]
})
export class DataTableModule { }
