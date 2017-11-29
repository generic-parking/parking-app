import { RouterModule } from '@angular/router';
import { AboutModule } from './scenes/about/about.module';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    BrowserModule,
    NgReduxModule,
    ComponentsModule,
    AboutModule,
    RouterModule,
<<<<<<< HEAD
    TextMaskModule,
=======
>>>>>>> cf880df769a23f687310b951d693fad730ef9c83
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
