import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[neoPhoneValidator][formControlName],[neoPhoneValidator][formControl],[neoPhoneValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneValidatorDirective),
      multi: true
    }
  ]
})
export class PhoneValidatorDirective implements Validator {
  private phoneRegExp = /^0[\d]{8,10}$/;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    const value = c.value;

    if (!!value && !this.phoneRegExp.test(value)) {
      return { neoPhoneValidator: true };
    }

    return null;
  }
}
