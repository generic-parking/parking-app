import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';


const allComponents = [
  HeaderComponent,
  TitleComponent,
  PaginationComponent
];

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
