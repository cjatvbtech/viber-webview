import {AbstractControl} from '@angular/forms';
export class PinValidator {
  static MatchPin(AC: AbstractControl) {
	const pin = AC.get('pin'); // to get value in input tag
	const repin = AC.get('repin'); // to get value in input tag

	if (pin.value !== repin.value) {
		if (pin.value.length < 4 && (pin.touched && (pin.touched && pin.dirty))) {
			repin.setErrors(null);
		} else repin.setErrors( {MatchPin: true} );
	} else {
	  	return null;
	}
  }
}
