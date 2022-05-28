import { FormUserComponent } from './formUser/form-user/form-user.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PaginationPipe,
    FilterPipe,
    FormComponent,
    FormRegisterComponent,
    FormUserComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    PaginationPipe,
    FilterPipe,
    FormComponent,
    FormRegisterComponent,
    FormUserComponent,
  ],
})
export class SharedModule {}
