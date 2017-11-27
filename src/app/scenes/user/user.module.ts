import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [UserRegisterComponent]
})
export class UserModule { }
