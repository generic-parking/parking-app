import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { ComponentsModule } from '../../components/components.module';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    VehicleRegisterComponent,
    VehicleSearchComponent,
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    NgReduxModule,
    ReactiveFormsModule,
  ],
})
export class VehicleModule { }
