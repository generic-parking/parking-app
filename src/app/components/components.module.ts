import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const allComponents = [
  HeaderComponent
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
