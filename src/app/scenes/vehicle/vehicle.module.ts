import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

@NgModule({
  declarations: [VehicleRegisterComponent, VehicleSearchComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
  ],
})
export class VehicleModule { }
