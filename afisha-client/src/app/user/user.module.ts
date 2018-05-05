import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule {

}
