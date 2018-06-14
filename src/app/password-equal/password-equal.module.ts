import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PasswordEqualComponent } from './password-equal.component';
import { EqualValidatorModule } from 'shared/equal-validator/equal-validator.module';

const routes: Routes = [
  {
    path: '',
    component: PasswordEqualComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EqualValidatorModule,
  ],
  declarations: [PasswordEqualComponent]
})
export class PasswordEqualModule { }
