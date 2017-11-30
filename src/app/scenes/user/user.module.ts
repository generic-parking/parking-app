import { ModalGravatarComponent } from './user-form/modal-gravatar/modal-gravatar.component';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentsModule } from './../../components/components.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from '../../rest/user.service';
import { CelMaskPipe } from '../../pipes/cel-mask.pipe';
import { CelMaskDirective } from '../../directives/cel-mask.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [
    UserRegisterComponent,
    ModalGravatarComponent,
    UserFormComponent,
    CelMaskPipe,
    CelMaskDirective,
  ], 
  entryComponents: [
    ModalGravatarComponent,
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
