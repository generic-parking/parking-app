import { Component, EventEmitter, Output } from '@angular/core';
import { Login } from '../../model/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  login:Login = new Login();
  formLogin: FormGroup;

  @Output() public doLoginEvent:EventEmitter<Login> = new EventEmitter<Login>();

  constructor(private formBuilder:FormBuilder) {
    this.formLogin =  formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    })
  }

  doLogin(form) {
    console.log(form);
    // this.doLoginEvent.emit(this.login);
  }
}
