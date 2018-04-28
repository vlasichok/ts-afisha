import {Component, OnInit} from '@angular/core';
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

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  /**
   * This function redirects to the default path /search
   */
  cancel(): void{
    this.router.navigate([PATH.SEARCH]);
  }

  login(loginValues) {
    if(this.validateLoginForm()){
      //@TODO: call method to login a user
    }
  }

  /**
   * This function is called from the login form, and validates the fields
   * @param inputName
   * @returns {boolean}
   */
  validateInputField(inputName): boolean{
      return this.loginForm.controls[inputName].valid || this.loginForm.controls[inputName].untouched;
  }

  validateLoginForm(): boolean{
    return this.loginForm.valid;
  }
}
