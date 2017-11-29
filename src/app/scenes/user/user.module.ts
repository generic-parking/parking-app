import { TextMaskModule } from 'angular2-text-mask';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalGravatarComponent } from './user-register/modal-gravatar/modal-gravatar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [
    UserRegisterComponent, 
    ModalGravatarComponent
  ],entryComponents:[
    ModalGravatarComponent
  ]
})
export class UserModule { }
