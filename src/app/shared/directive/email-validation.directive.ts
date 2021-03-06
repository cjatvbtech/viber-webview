import { Directive, Attribute  } from '@angular/core';
import { FormControl, Validator,  NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validate-email]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true}]
})

export class EmailValidationDirective implements Validator {
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  validate(c: FormControl): {[key: string]: any} {
    if(c.value == null)
      return null;
   
    if(!this.emailPattern.test(c.value)){
      return {"pattern": true};
    }
    return null;
  }
}
