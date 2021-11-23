import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeExpandAllComponent } from './tree-expand-all.component';

const routes: Routes = [{ path: '', component: TreeExpandAllComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeExpandAllRoutingModule { }
