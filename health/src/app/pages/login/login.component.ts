import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../core/services/validator.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public form: FormGroup;
  public returnUrl;

  constructor(private formBuilder: FormBuilder, private validatorService: ValidatorService, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.validatorService.valid]],
      password: ['', [Validators.required, this.validatorService.valid]]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(value) {
    console.log(value.email);
  }
}
