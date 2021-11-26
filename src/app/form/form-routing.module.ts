import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { InputNumberBasicComponent } from './input-number-basic/input-number-basic.component';
import { InputNumberDecimalComponent } from './input-number-decimal/input-number-decimal.component';

const routes: Routes = [
  { path: '', redirectTo: 'form-basic', pathMatch: 'full' },
  {
    path: '',
    component: FormComponent,
    children: [
      { path: 'input-number-basic', component: InputNumberBasicComponent },
      { path: 'input-number-decimal', component: InputNumberDecimalComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
