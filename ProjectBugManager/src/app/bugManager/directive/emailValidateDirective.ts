import { Directive, forwardRef, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validators, Validator, ValidatorFn } from '@angular/forms';

export function validateEmailFactory(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    const name = control.value;
    const no = EMAIL_REGEXP.test(control.value);
    return no ? { 'validateEmail': control.value } : null;
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
      this.validateFunction = validateEmailFactory();
    } else {
      this.validateFunction = Validators.nullValidator;
    }
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this.validateFunction(c);
  }
}