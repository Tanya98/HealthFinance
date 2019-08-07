import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidatorService} from "../../core/services/validator.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public form;

  constructor(private formBuilder: FormBuilder, private validatorService: ValidatorService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.validatorService.valid]],
      password: ['', [Validators.required, this.validatorService.valid]]
    });
  }

  ngOnInit() {
  }
}
