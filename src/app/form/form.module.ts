import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { InputNumberBasicComponent } from './input-number-basic/input-number-basic.component';
import { InputNumberDecimalComponent } from './input-number-decimal/input-number-decimal.component';

@NgModule({
  declarations: [
    FormComponent,
    InputNumberBasicComponent,
    InputNumberDecimalComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
  ]
})
export class FormModule { }
