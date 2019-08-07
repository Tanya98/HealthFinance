import {Injectable} from '@angular/core';
import {FormControl, ValidationErrors} from "@angular/forms";

@Injectable()
export class ValidatorService {

  constructor() {
  }

  valid(email, password): ValidationErrors | null {
    const validEmail = /(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(email);
    if (!validEmail || password.length < 6) {
      return {message: 'Email or Password is Incorrect'}
    }
    return null;
  }
}
