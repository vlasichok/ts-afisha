import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PATH} from "../../shared/constants/path.constant";
import {AuthService} from "../../shared/services/auth.service";
import {IUser} from "../../shared/models/user.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  /**
   * This function redirects to the default path /search
   */
  cancel(): void{
    this.router.navigate([PATH.ROOT]);
  }

  login(loginValues: IUser): void{
    if(this.validateLoginForm()){
      this.authService.loginUser(loginValues)
        .subscribe(
          (token) => { localStorage.setItem(AuthService.TOKEN_KEY, token.token) },
          (error: HttpErrorResponse) => console.log(error)
        );
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
