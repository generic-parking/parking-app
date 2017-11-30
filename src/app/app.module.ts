import { CelMaskDirective } from './directives/cel-mask.directive';
import { RouterModule } from '@angular/router';
import { AboutModule } from './scenes/about/about.module';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { CelMaskPipe } from './pipes/cel-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    BrowserModule,
    NgReduxModule,
    ComponentsModule,
    AboutModule,
    RouterModule,
    TextMaskModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
