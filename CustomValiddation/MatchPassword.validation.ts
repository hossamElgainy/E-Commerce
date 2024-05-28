import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function matchPassword(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {

        let passControl = control.get('password');
        let confirmPassControl = control.get('confirmPassword');

        if (!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
            return null;

        let vallError = { 'UnMatchedPassword': { 'pass': passControl.value, 'confirmPass': confirmPassControl.value } };
        return (passControl.value == confirmPassControl.value) ? null : vallError;
    }

}