import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidatorService } from "../../core/services/validator.service";
import { ActivatedRoute } from "@angular/router";
import { SpinerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { LoadingService } from 'src/app/core/services/loading.services';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public form: FormGroup;
  public returnUrl;
  public loading$: Observable<boolean>;
  // @ViewChild(SpinerComponent, { static: false })
  // private spinner: SpinerComponent;

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private route: ActivatedRoute,
    private loader: LoadingService,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.validatorService.valid]],
      password: ['', [Validators.required, this.validatorService.valid]]
    });
    this.loading$ = this.loader.loading$.asObservable();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(email, password) {
    this.userService.login(email, password).subscribe();
    // console.log(email, password);
    // this.loader.show();
    // this.spinner.loadData();
    // console.log(value.email);
  }
}
