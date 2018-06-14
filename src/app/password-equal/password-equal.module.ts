import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PasswordEqualComponent } from './password-equal.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordEqualComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PasswordEqualComponent]
})
export class PasswordEqualModule { }
