import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tree-expand-all', loadChildren: () => import('./tree-expand-all/tree-expand-all.module').then(m => m.TreeExpandAllModule) },
  { path: 'tree-sections', loadChildren: () => import('./tree-sections/tree-sections.module').then(m => m.TreeSectionsModule) },
  { path: 'tree-templating', loadChildren: () => import('./tree-templating/tree-templating.module').then(m => m.TreeTemplatingModule) },
  { path: '', redirectTo: '/tree-expand-all', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
