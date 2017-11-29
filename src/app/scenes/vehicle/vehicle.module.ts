import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

@NgModule({
  declarations: [VehicleRegisterComponent, VehicleSearchComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
  ],
})
export class VehicleModule { }
