import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class LoginModule { }
