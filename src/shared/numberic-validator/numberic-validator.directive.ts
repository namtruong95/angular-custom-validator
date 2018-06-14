import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[neoNumbericValidator][formControlName],[neoNumbericValidator][formControl],[neoNumbericValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumbericValidatorDirective),
      multi: true
    }
  ]
})
export class NumbericValidatorDirective implements Validator {

  constructor(
    @Attribute('min') private min: string,
    @Attribute('max') private max: string
  ) { }

  validate(c: AbstractControl): { [key: string]: any } {
    const value = c.value;

    if (!!value
      && (isNaN(value)
      || (this.min && value < this.min)
      || (this.max && value > this.max))) {
      return { neoNumbericValidator: true };
    }

    return null;
  }


}
