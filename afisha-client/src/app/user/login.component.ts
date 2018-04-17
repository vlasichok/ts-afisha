import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PATH} from "../shared/constants/path.constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, @Inject(FormBuilder) formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  cancel(){
    this.router.navigate([PATH.EVENTS]);
  }

  login(loginValues) {
    if(this.validateLoginForm()){
      //call method to login the user
    }
    console.log("form is not valid");
  }

  validateInputField(inputName){
    if(inputName === 'userEmail') {
        return this.loginForm.controls.userEmail.valid || this.loginForm.controls.userEmail.untouched;
    } else {
        return this.loginForm.controls.userPassword.valid || this.loginForm.controls.userPassword.untouched;
    }
  }

  validateLoginForm(){
    return this.loginForm.valid;
  }
}
