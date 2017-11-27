import { NgModule } from '@angular/core';
import { RestLoginService } from './rest-login.service';
import { Http } from '@angular/http';

const SERVICES = [
  RestLoginService,
]

@NgModule({
  imports: [
    RestLoginService,
    Http
  ],
  exports: [RestLoginService]
})
export class ServicesModule { }
