import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsRoutingModule } from './fields-routing.module';
import { FieldsComponent } from './fields.component';
import { FieldComponent } from './field/field.component';


@NgModule({
  declarations: [
    FieldsComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    FieldsRoutingModule
  ]
})
export class FieldsModule { }
