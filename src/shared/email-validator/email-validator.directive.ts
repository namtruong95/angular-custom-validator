import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[neoEmailValidator][formControlName],[neoEmailValidator][formControl],[neoEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  private emailRegExp = /^[\w.-]+@[\w.-]+\.[\w]{2,4}$/;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    const value = c.value;

    if (!!value && !this.emailRegExp.test(value)) {
      return { neoEmailValidator: true };
    }

    return null;
  }
}
