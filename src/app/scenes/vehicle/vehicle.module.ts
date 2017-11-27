import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehicleRegisterComponent, VehicleSearchComponent]
})
export class VehicleModule { }
