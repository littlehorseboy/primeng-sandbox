import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { TableDynamicColumnsComponent } from './table-dynamic-columns/table-dynamic-columns.component';
import { TableSectionsComponent } from './table-sections/table-sections.component';

const routes: Routes = [
  { path: '', redirectTo: 'table-basic', pathMatch: 'full' },
  {
    path: '',
    component: DataTableComponent,
    children: [
      { path: 'table-basic', component: TableBasicComponent },
      { path: 'table-dynamic-columns', component: TableDynamicColumnsComponent },
      { path: 'table-sections', component: TableSectionsComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
