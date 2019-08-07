import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {GlobalService} from "./global.service";
import {User} from "../models/user";


@Injectable()
export class UserService {

  private httOptions ={
    headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
  };

  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService) {
  }

  login(email, password): Observable<any> {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    body.set('grant_type', password);

    return this.http.post('api/token', body.toString(), this.httOptions).pipe(
      map(response => response),
      catchError(err => err)
    )
  }

  authenticate(token: string, returnUrl: string) {
    this.globalService.currentUser = new User({token: token});
  }


}
