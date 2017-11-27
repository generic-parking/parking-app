import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ServicesModule } from './services/services.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpModule,
    BrowserModule,
    NgReduxModule,
    NgbModule.forRoot(),
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
