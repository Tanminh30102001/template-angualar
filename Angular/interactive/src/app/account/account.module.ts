import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './login/toasts-container.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { SigninModule } from "./auth/signin/signin.module";
import { SignupModule } from "./auth/signup/signup.module";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ToastsContainer
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
    AccountRoutingModule,
    SigninModule
  ]
})
export class AccountModule { }
