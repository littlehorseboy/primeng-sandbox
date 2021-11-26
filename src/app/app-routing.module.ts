import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'data-tree', loadChildren: () => import('./data-tree/data-tree.module').then(m => m.DataTreeModule) },
  { path: 'data-table', loadChildren: () => import('./data-table/data-table.module').then(m => m.DataTableModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
