import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PATH} from "../shared/constants/path.constant";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  cancel(): void {
    this.router.navigate([PATH.EVENTS]);
  }

  register(registerValues){
    if(this.validateRegisterForm()) {
      console.log(registerValues);
    }
  }

  validateInputField(inputName): boolean{
    return this.registerForm.controls[inputName].valid || this.registerForm.controls[inputName].untouched;
  }

  validateRegisterForm(): boolean{
    return this.registerForm.valid;
  }
}
