import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable()
export class DataService {

  constructor() { }

  validateFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const fieldName = formGroup.get(field);
      if (fieldName instanceof FormControl) {
        fieldName.markAsTouched({onlySelf: true});
      } else if (fieldName instanceof FormGroup) {
        this.validateFields(fieldName);
      }
    });
  }

  isFormHasValues(form: FormGroup) {
    let hasValue = false;
    if (form.controls != null) {
      for (const i in form.controls) {
        if (form.controls[i].value) {
          hasValue = true;
          break;
        }
      }
    }
    return hasValue;
  }

  private parseArrayOfStrings(jsonData: any) {
    if (jsonData) {
      const array = JSON.parse(jsonData);
      return array.map((item) => {
        return item;
      });
    }
    return null;
  }

}
