import {Role} from "./role";

export class User {
  public token: string;

  public id: number;
  public email: string;
  public emailConfirmed: boolean;
  public password: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public role: Role;
  public locale: string;

  public get name(): string {
    return (this.firstName ? this.firstName : '') + ' ' + (this.middleName ? this.middleName : '') + ' ' + (this.lastName ? this.lastName : '')
  }

  constructor(obj: PartialUser = {}) {
    this.token = obj.token;

    this.id = obj.id;
    this.email = obj.email;
    this.emailConfirmed = obj.emailConfirmed;
    this.password = obj.password;
    this.firstName = obj.firstName;
    this.middleName = obj.middleName;
    this.lastName = obj.lastName;
    this.role = obj.role;
    this.locale = obj.locale;
  }
}

type PartialUser = Partial<User>;
