import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PATH} from "../../shared/constants/path.constant";
import {AuthService} from "../../shared/services/auth.service";
import {IUser} from "../../shared/models/user.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  cancel(): void {
    this.router.navigate([PATH.ROOT]);
  }

  register(registerValues: IUser): void{
    if(this.validateRegisterForm()) {
      this.authService.registerUser(registerValues)
        .subscribe(
          (token) => { localStorage.setItem(AuthService.TOKEN_KEY, token.token) },
          (error: HttpErrorResponse) => console.log(error)
        );
    }
  }

  validateInputField(inputName: string): boolean{
    return this.registerForm.controls[inputName].valid || this.registerForm.controls[inputName].untouched;
  }

  validateRegisterForm(): boolean{
    return this.registerForm.valid;
  }
}
