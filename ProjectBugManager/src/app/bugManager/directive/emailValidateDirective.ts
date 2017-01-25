import { Directive, forwardRef, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validators, Validator, ValidatorFn } from '@angular/forms';

export function validateEmailFactory(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let EMAIL_REGEXP = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, 'i');
    const name = control.value;
    const no = EMAIL_REGEXP.test(control.value);
    return no ? { 'validateEmail': { name } } : null;
  };
}

@Directive({
  selector: 'validateEmail',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective implements Validator, OnChanges {
  @Input() validateEmail: string;
  private validateFunction = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes["validateEmail"]
    if (change) {
      const val: string | RegExp = change.currentValue;
      const regExp = val instanceof RegExp ? val : new RegExp(val, 'i');
      this.validateFunction = validateEmailFactory(regExp);
    } else {
      this.validateFunction = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validateFunction(control);
  }
}