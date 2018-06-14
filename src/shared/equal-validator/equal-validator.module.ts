import { NgModule } from '@angular/core';
import { EqualValidatorDirective } from './equal-validator.directive';

@NgModule({
  declarations: [EqualValidatorDirective],
  exports: [EqualValidatorDirective]
})
export class EqualValidatorModule { }
