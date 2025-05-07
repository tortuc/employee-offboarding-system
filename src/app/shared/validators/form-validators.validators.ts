import { ValidationErrors } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { PATTERNS } from "../consts/patterns.const";

export class FormValidators {
    static isEmail(c: FormControl): ValidationErrors | null {
        const valid = !c.value
            ? true
            : new RegExp(PATTERNS.EMAIL).test(c.value);
        return valid ? null : {isEmail: true};
    }

    static isPhoneNumber(c: FormControl): ValidationErrors | null {
        const valid = !c.value
            ? true
            : new RegExp(PATTERNS.PHONE).test(c.value);
        return valid ? null : {isPhoneNumber: true};
    }
}
