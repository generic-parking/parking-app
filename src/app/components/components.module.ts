import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';


const allComponents = [
  HeaderComponent,
  TitleComponent
]

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: allComponents,
  declarations: allComponents
})
export class ComponentsModule { }
