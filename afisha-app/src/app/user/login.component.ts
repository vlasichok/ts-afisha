import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private userEmail;
  private userPassword;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.userEmail = new FormControl('',[Validators.required, Validators.email]);
    this.userPassword = new FormControl('',[Validators.required]);
    this.loginForm = new FormGroup({
      userEmail: this.userEmail,
      userPassword: this.userPassword
    });
  }

  cancel(){
    this.router.navigate(['events']);
  }

  login(loginValues) {
    if(this.validateLoginForm()){
      console.log(loginValues);
    }
    console.log("form is not valid");
  }

  validateUserEmail(){
    return this.userEmail.valid || this.userEmail.untouched;
  }

  validateUserPassword(){
    return this.userPassword.valid || this.userPassword.untouched;
  }

  validateLoginForm(){
    return this.loginForm.valid;
  }
}
