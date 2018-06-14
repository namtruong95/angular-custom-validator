import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[neoEqualValidator][formControlName],[neoEqualValidator][formControl],[neoEqualValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EqualValidatorDirective),
      multi: true
    }
  ]
})
export class EqualValidatorDirective implements Validator {

  constructor(
    @Attribute('neoEqualValidator') public neoEqualValidator: string,
    @Attribute('reverse') public reverse: string
  ) { }

  private get isReverse(): boolean {
    if (!this.reverse) {
      return false;
    }

    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    const v = c.value;

    // control vlaue
    const e = c.root.get(this.neoEqualValidator);

    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return { neoEqualValidator: true };
    }

    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
        delete e.errors['neoEqualValidator'];

        if (!Object.keys(e.errors).length) {
          e.setErrors(null);
        }
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
        e.setErrors({ neoEqualValidator: true });
    }

    return null;
  }

}
