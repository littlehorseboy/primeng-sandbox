import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeTemplatingComponent } from './tree-templating.component';

const routes: Routes = [{ path: '', component: TreeTemplatingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeTemplatingRoutingModule { }
