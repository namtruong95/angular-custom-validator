import { NgModule } from '@angular/core';
import { PhoneValidatorDirective } from './phone-validator.directive';

@NgModule({
  declarations: [PhoneValidatorDirective],
  exports: [PhoneValidatorDirective]
})
export class PhoneValidatorModule { }
