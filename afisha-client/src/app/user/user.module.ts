import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from "./register.component";
import {MaterialModule} from "../shared/material.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule {

}
