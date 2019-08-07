import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {ClinicUser} from "../models/clinic.user";
import {Role} from "../models/role";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class GlobalService {
  public currentUser: User;

  constructor() {
  }

  public currentClinicUser(): ClinicUser {
    return <ClinicUser>this.currentUser;
  }

  public isAdminRole() {
    return this.currentUser.role && (this.currentUser.role == Role.Admin);
  }

  public isClinicAdminRole() {
    return this.currentUser.role && (this.currentUser.role == Role.ClinicAdmin);
  }

  public isClinicRole() {
    return this.currentUser.role && (this.currentUser.role == Role.Clinic || this.currentUser.role == Role.ClinicAdmin);
  }

  public isInvestorRole() {
    return this.currentUser.role && (this.currentUser.role == Role.Investor);
  }

  public isPatientRole() {
    return this.currentUser.role && (this.currentUser.role == Role.Patient);
  }

  public static httpAuthNoCacheOptions(){
    let httpAuthNoCacheOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + ,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
      })
    };
    // return httpAuthNoCacheOptions;
  }
}
