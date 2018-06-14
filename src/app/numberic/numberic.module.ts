import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NumbericValidatorModule } from 'shared/numberic-validator/numberic-validator.module';
import { NumbericComponent } from './numberic.component';

const routes: Routes = [
  {
    path: '',
    component: NumbericComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NumbericValidatorModule,
  ],
  declarations: [NumbericComponent]
})
export class NumbericModule { }
